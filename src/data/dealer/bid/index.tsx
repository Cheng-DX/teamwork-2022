import { ref } from 'vue';
import { useTable } from '@/data/utils/useTable';
import { createBidColumnSrcs } from './core/columnSrc';

function createBids() {
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      index: i + 1,
      factory: '工厂' + i,
      name: '负责人' + i,
      phone: '13000000000' + i,
      price: i * 100,
      isBided: i % 2 === 0,
    })
  }
  return data
}

export function useBids(editable?: boolean) {
  const data = ref(createBids())
  const columnSrcs = createBidColumnSrcs()
  const columns = useTable(data, columnSrcs, editable)
  return { data, columns, columnSrcs }
}
