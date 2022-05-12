import { ref, type Ref } from 'vue'
import { type ColumnSrcItem, createColumns } from './creator'

export function useTable(data: Ref<any[]>, columnSrc: ColumnSrcItem[], editable?: boolean) {
  const columns = createColumns(columnSrc, data, editable)
  return ref(columns)
}
