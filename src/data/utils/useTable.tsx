import { NButton } from 'naive-ui'
import { InternalRowData } from 'naive-ui/lib/data-table/src/interface'
import { ref, type Ref } from 'vue'
import { type ColumnSrcItem, createColumns } from './creator'

export interface Filter {
  handler: (row: InternalRowData) => boolean
  rejectAction?: Function
  acceptAction?: Function
  returnImdiately?: boolean
}

export function useTable(data: Ref<any[]>, columnSrc: ColumnSrcItem[], deleteBy: string, filter?: Filter) {
  if (!columnSrc.find(item => item.key === 'delete')) {
    columnSrc.push(
      {
        title: '删除',
        key: 'delete',
        renderer: (row: InternalRowData) => (<div class="flex justify-evenly" >
          <NButton secondary strong onClick={() => deleteOne(row)} type="error">删除</NButton>
        </div>)
      }
    )
  }


  function deleteOne(row: InternalRowData) {
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
        data.value = data.value.filter(item => item[deleteBy] !== row[deleteBy])
      },
      negativeText: '取消',
    })
  }

  const columns = createColumns(columnSrc, data)
  return ref(columns)
}
