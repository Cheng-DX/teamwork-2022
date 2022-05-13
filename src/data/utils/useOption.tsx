import { DataTableColumn, NButton, NIcon } from "naive-ui"
import { InternalRowData } from "naive-ui/lib/data-table/src/interface"
import { Add, Trash, Pencil } from '@vicons/ionicons5'
import AddForm from "./AddForm"
import { ColumnSrcItem } from "./creator"

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

export function useDelete(deleteFn: DeleteFn, filter?: Filter): DataTableColumn {
  function handle(row: InternalRowData) {
    if (!filter?.handler(row)) {
      if (filter?.rejectAction) {
        filter.rejectAction()
      }
      if (filter?.returnImdiately) {
        return
      }
    } else {
      if (filter?.acceptAction) {
        filter.acceptAction()
      }
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

export function useEdit(columnSrcs: ColumnSrcItem[]): DataTableColumn {

  function handleEdit(row: InternalRowData) {
    console.log('before', columnSrcs)
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
        <NIcon>
          <Pencil />
        </NIcon>
        编辑
      </NButton>
    </div>)
  }
}