import { ref } from 'vue';
import { useTable } from '@/data/utils/useTable'
import { type InternalRowData } from 'naive-ui/lib/data-table/src/interface';
import { type ColumnSrcItem } from '@/data/utils/creator';
import { NTag } from 'naive-ui';

const columnSrc: ColumnSrcItem[] = [
  {
    title: '序号',
    key: 'index',
  },
  {
    title: '产品编号',
    key: 'id',
  },
  {
    title: '产品名称',
    key: 'name',
  },
  {
    title: '产品类别',
    key: 'type',
    renderer: (row: InternalRowData) => {
      return (<NTag >{row.type}</NTag>)
    }
  },
  {
    title: '产品规格',
    key: 'spec',
  },
  {
    title: '产品描述',
    key: 'description',
  },
]


function createProducts() {
  const data = [];
  const time = new Date().getTime()
  for (let i = 0; i < 40; i++) {
    data.push({
      index: i + 1,
      id: `PNO${time + i * 294}`,
      name: `产品${i}`,
      type: `类别${i}`,
      spec: `规格${i}`,
      description: `描述${i}`,
    })
  }
  return data
}

export function useProducts() {
  const data = ref(createProducts())
  const columns = useTable(data, columnSrc, true)
  return { data, columns }
}
