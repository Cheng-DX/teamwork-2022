import { DataTableColumn, NButton, NIcon, NInput, NInputNumber, NSpace } from "naive-ui"
import { InternalRowData } from "naive-ui/lib/data-table/src/interface"
import { Add, Trash, Pencil } from '@vicons/ionicons5'
import AddForm from "./AddForm"
import { ColumnSrcItem } from "./creator"
import { orderStatus } from "../superAdmin/order/core"
import { ref } from "vue"
import SchedulePanel from "@/views/factory-order/produce/components/SchedulePanel.vue"

export interface Filter {
  handler: (row: InternalRowData) => boolean
  rejectAction?: Function
  acceptAction?: Function
  returnImdiately?: boolean
}

type DeleteFn = (row: InternalRowData) => void

export function useRent(deleteFn: DeleteFn): DataTableColumn {
  function handle(row: InternalRowData) {
    window.$dialog?.warning({
      title: '提示',
      content: `确定租用该设备吗?`,
      positiveText: '确定',
      onPositiveClick() {
        deleteFn(row)
        window.$message?.success('租用成功')
      },
      negativeText: '取消',
    })
  }

  return {
    title: '租用',
    key: 'delete',
    align: 'center',
    render: (row: InternalRowData) => (<div class="flex justify-evenly" >
      <NButton secondary strong onClick={() => handle(row)} type="primary">
        <NIcon>
          <Add />
        </NIcon>
        租用
      </NButton>
    </div>)
  }
}

/**
 * @param filter - 过滤器
 * @param row 行数据
 * @return 是否立即返回
 */
function handleFilter(filter: Filter, row: InternalRowData): boolean {
  if (!filter?.handler(row)) {
    if (filter?.rejectAction) {
      filter.rejectAction()
    }
    if (filter?.returnImdiately) {
      return true
    }
  } else {
    if (filter?.acceptAction) {
      filter.acceptAction()
    }
  }
  return false
}

export function useDelete(deleteFn: DeleteFn, filter?: Filter): DataTableColumn {
  function handle(row: InternalRowData) {
    if (filter) {
      // 返回值为true代表立即返回
      if (handleFilter(filter, row))
        return
    }
    window.$dialog?.warning({
      title: 'Warning',
      content: `确定要删除吗?`,
      positiveText: '确定',
      onPositiveClick() {
        deleteFn(row)
      },
      negativeText: '取消',
    })
  }

  return {
    title: '删除',
    key: 'delete',
    align: 'center',
    render: (row: InternalRowData) => (<div class="flex justify-evenly" >
      <NButton secondary strong onClick={() => handle(row)} type="error">
        <NIcon>
          <Trash />
        </NIcon>
        删除
      </NButton>
    </div>)
  }
}

export function useEdit(columnSrcs: ColumnSrcItem[], filter?: Filter, disableIcon?: boolean): DataTableColumn {
  function handleEdit(row: InternalRowData) {
    if (filter) {
      if (handleFilter(filter, row))
        return
    }
    columnSrcs.forEach(item => {
      const key = item.key
      if (item.form) {
        if (!item.form?.type) {
          item.form.type = 'input'
        }
        item.form.defaultValue = row[key] as (string | number)
      } else {
        item.form = {
          type: 'input',
          defaultValue: row[key] as (string | number),
        }
      }
    })
    window.$dialog?.info({
      title: '编辑',
      content: () => (
        <AddForm columnSrcs={columnSrcs} />
      ),
    })
  }
  return {
    title: '编辑',
    key: 'edit',
    align: 'center',
    render: (row: InternalRowData) => (<div class="flex justify-evenly" >
      <NButton secondary strong onClick={() => handleEdit(row)} type="primary">
        {
          disableIcon ? null : (
            <NIcon>
              <Pencil />
            </NIcon>)
        }
        编辑
      </NButton>
    </div>)
  }
}

function createBidDetail(row: InternalRowData) {
  function handleDetail(row: InternalRowData) {
    window.$dialog?.info({
      title: '投标详情',
      content: () => (<div>投标详情</div>)
    })
  }
  return (<div class="flex justify-evenly" >
    <NButton secondary strong onClick={() => handleDetail(row)} type="info">
      投标详情
    </NButton>
  </div>)
}

function change(row: InternalRowData, changeStatus: Function, target: string) {
  window.$dialog?.warning({
    title: () => (
      <div>
        即将更改订单状态至
        <NButton strong secondary type="primary" size="small" style={{ marginLeft: '10px' }} >
          {orderStatus.find(item => item.value === target)?.label}
        </NButton>
      </div>
    ),
    content: '确定吗?',
    positiveText: '确定',
    onPositiveClick() {
      changeStatus(row, target)
      window.$message?.success('操作成功')
    },
    negativeText: '取消',
  })
}

function bid(row: InternalRowData, changeStatus: Function) {
  const value = ref(0)

  window.$dialog?.info({
    title: '请输入您的出价',
    content: () => (
      <NInputNumber v-model:value={value} validator={v => /^[1-9]\d*$/.test(v.toString()) && v.toString().trim() !== ''} />
    ),
    positiveText: '确定',
    onPositiveClick() {
      if (/^[1-9]\d*$/.test(value.toString()) || value.toString().trim() !== '') {
        window.$message?.success('出价成功！订单若中标您将会收到通知')
        changeStatus(row, 'bided')
      } else {
        window.$message?.error('请输入正确的出价')
      }
    },
    negativeText: '取消',
  })
}

function schedule(row: InternalRowData, changeStatus: Function) {
  window.$dialog?.info({
    title: '排产',
    positiveText: '保存',
    onPositiveClick() {
      window.$message?.success('已保存')
      changeStatus(row, 'producing')
    },
    negativeText: '取消',
    content: () => (<SchedulePanel />),
    style: {
      width: '70vw'
    }
  })
}
export function useHandleOrder(columnSrcs: ColumnSrcItem[], changeStatus: Function, filter?: Filter, isFac?: boolean, isBided?: boolean): DataTableColumn {
  return {
    title: '操作',
    key: 'option',
    align: 'center',
    render: (row: InternalRowData) => {
      switch (row.status) {
        case 'unpublished':
          return (
            <NSpace vertical={true}>
              {useEdit(columnSrcs, filter, true)?.render(row)}
              <div class="flex justify-evenly" >
                <NButton secondary strong onClick={() => change(row, changeStatus, 'biding')} type="success">
                  发布
                </NButton>
              </div>
            </NSpace>
          )
        case 'biding':
          return isFac ? (
            <div class="flex justify-evenly" >
              <NButton secondary strong type="success" onClick={() => bid(row, changeStatus)} >投标</NButton>
            </div>
          ) : (
            <NSpace>
              {createBidDetail(row)}
              <div class="flex justify-evenly" >
                <NButton secondary strong onClick={() => change(row, changeStatus, 'bided')} type="success">
                  结束投标
                </NButton>
              </div>
            </NSpace>
          )
        case 'bided':
          return isFac ? (
            isBided ? (<div>
              <NButton secondary strong onClick={() => schedule(row, changeStatus)} type="info">
                排产
              </NButton>
            </div>) : (
              <div class="flex justify-evenly" >
                <NButton secondary strong type="success" disabled onClick={() => bid(row, changeStatus)} >已投标</NButton>
              </div>
            )) : createBidDetail(row)
        case 'scheduled':
          return isFac ? (
            <div class="flex justify-evenly" >
              <NButton secondary strong type="success" disabled onClick={() => bid(row, changeStatus)} >已投标</NButton>
            </div>
          ) : createBidDetail(row)
        case 'producing':
          return isFac ? (
            <div class="flex justify-evenly" >
              <NButton secondary strong color="gold" onClick={() => change(row, changeStatus, 'produced')} >完工</NButton>
            </div>
          ) : (
            <div class="flex justify-evenly" >
              <NButton secondary strong disabled type="tertiary" >等待生产结束</NButton>
            </div>
          )
        case 'produced':
          return isFac ? (
            <div class="flex justify-evenly" >
              <NButton secondary strong type="warning" onClick={() => change(row, changeStatus, 'shipped')} >发货</NButton>
            </div>
          ) : (
            <div class="flex justify-evenly" >
              <NButton secondary strong disabled type="tertiary" >等待工厂发货</NButton>
            </div>
          )
        case 'shipped':
          return (
            isFac ? (
              <div class="flex justify-evenly" >
                <NButton secondary strong type="info" disabled >等待收货</NButton>
              </div>
            ) : (
              <div class="flex justify-evenly" >
                <NButton secondary strong type="success" onClick={() => change(row, changeStatus, 'finished')} >确认收货</NButton>
              </div>)
          )
        case 'finished':
          return (<div class="flex justify-evenly" >
            <NButton secondary strong disabled type="success" >订单已完成</NButton>
          </div>)
        default:
          return (<div>{row.status}</div>)
      }
    }
  }
}

export function useConfig(action: Function) {
  return {
    title: '配置产品',
    key: 'config',
    align: 'center',
    render: (row: InternalRowData) => (<div class="flex justify-evenly" >
      <NButton secondary strong onClick={() => action(row)} type="success">
        配置产品
      </NButton>
    </div>)
  }
}