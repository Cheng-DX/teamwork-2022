import { ColumnSrcItem } from "@/data/utils/creator"
import { NInputNumber, NDatePicker, NInput, NTag, NSpace, NButton } from "naive-ui"
import { InternalRowData } from "naive-ui/lib/data-table/src/interface"
import { orderStatus } from "./data"
import { switchType } from "./functions"

export function createColumnSrcs(): ColumnSrcItem[] {
  return [
    {
      title: '序号',
      key: 'index',
      form: {
        type: 'input',
        break: true,
        disabled: true
      }
    },
    {
      title: '订单编号',
      key: 'id',
      form: {
        type: 'input',
        disabled: true,
        creator: () => `ONO${new Date().getTime() + Math.round(Math.random() * 10 + 200) * 2433494}`
      }
    },
    {
      title: '产品名称',
      key: 'name',
    },
    {
      title: '订购数量',
      key: 'number',
      renderer: (row: InternalRowData) => {
        return <NInputNumber disabled v-model:value={row.number} validator={(v) => v > 0} />
      },
      width: '120px',
      form: {
        type: 'number',
      }
    }, {
      title: '投标截止时间 - 送货时间',
      key: 'timeRange',
      renderer: (row: InternalRowData) => {
        return <NDatePicker disabled v-model:value={row.timeRange} type="daterange" startPlaceholder="投标截止时间" endPlaceholder="送货时间" ></NDatePicker>
      },
      width: '280px',
      form: {
        type: 'daterange',
        timerange: {
          startPlaceholder: '投标截止时间',
          endPlaceholder: '送货时间',
        }
      }
    },
    {
      title: '收货人',
      key: 'receiver',
    },
    {
      title: '收货人联系方式',
      key: 'receiverPhone',
      width: '120px',
    },
    {
      title: '收货地址',
      key: 'address',
      renderer: (row: InternalRowData) => {
        return <NInput disabled v-model:value={row.address} type="textarea" />
      },
      width: '100px',
      align: 'left',
      form: {
        type: 'textarea',
      }
    },
    {
      title: '订单状态',
      key: 'status',
      renderer: (row: InternalRowData) => {
        return (<NTag type={switchType(row.status as string)}>{
          orderStatus.find(item => item.value === row.status)?.label
        }
        </NTag>)
      },
      form: {
        type: 'select',
        defaultValue: 'unpublished',
        options: orderStatus,
        renderer: value => {
          return (
            <div class="w-full">
              <NSpace vertical={true} size={18} >
                <NButton secondary strong type={switchType(value as string)} round size="large" block={true}>{
                  orderStatus.find(item => item.value === value)?.label
                }</NButton>
              </NSpace>
            </div>
          )
        }
      }
    }
  ]
}