import { ColumnSrcItem } from "@/data/utils/creator"
import { NButton, NTag } from "naive-ui"
import { InternalRowData } from "naive-ui/lib/data-table/src/interface"

export function createBidColumnSrcs(): ColumnSrcItem[] {
  return [
    {
      title: '序号',
      key: 'index',
      disabled: true,
      form: {
        type: 'input',
        break: true,
        disabled: true
      }
    },
    {
      title: '投标工厂',
      key: 'factory',
    },
    {
      title: '工厂负责人',
      key: 'name',
    },
    {
      title: '联系方式',
      key: 'phone',
    },
    {
      title: '投标价格',
      key: 'price',
    },
    {
      title: '是否中标',
      key: 'isBided',
      renderer: (row: InternalRowData) => {
        return <NButton strong secondary type="primary" disabled={!row.isBided} >{row.isBided ? '是' : '否'}</NButton>
      }
    },
  ]
}