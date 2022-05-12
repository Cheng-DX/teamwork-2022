import { ref, type Ref } from 'vue'
import { type ColumnSrcItem, createColumns } from './creator'

export function useTable(data: Ref<any[]>, columnSrc: ColumnSrcItem[]) {
  const columns = createColumns(columnSrc, data)
  return ref(columns)
}
