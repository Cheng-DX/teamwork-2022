import { ref } from 'vue';
import { useTable } from '@/data/utils/useTable'
import { type ColumnSrcItem } from '@/data/utils/creator';

const columnSrcs: ColumnSrcItem[] = [
  {
    title: '序号',
    key: 'index',
    form: {
      break: true,
    }
  },
  {
    title: '类别名称',
    key: 'name',

  }
]

function createTypes(prefix: string) {
  const productTypes = [];
  for (let i = 0; i < 40; i++) {
    productTypes.push({
      index: i + 1,
      name: `${prefix}类别${i}`,
    })
  }
  return productTypes
}

export function useTypeManagement(prefix: string) {
  const data = ref(createTypes(prefix))
  const columns = useTable(data, columnSrcs, true)
  return { data, columns, columnSrcs }
}
