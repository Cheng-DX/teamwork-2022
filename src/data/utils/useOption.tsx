import { DataTableColumn, NButton, NIcon } from "naive-ui"
import { InternalRowData } from "naive-ui/lib/data-table/src/interface"
import { Trash } from '@vicons/ionicons5'

export interface Filter {
  handler: (row: InternalRowData) => boolean
  rejectAction?: Function
  acceptAction?: Function
  returnImdiately?: boolean
}

type DeleteFn = (row: InternalRowData) => void

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