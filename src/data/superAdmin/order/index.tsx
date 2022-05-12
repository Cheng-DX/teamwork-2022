import { ref } from 'vue';
import { useTable } from '@/data/utils/useTable'
import { createDate } from './utils/functions';
import { names, orderStatus } from './utils/data';
import { columnSrc } from './utils/columns';

function createOrders() {
  const data = [];
  const time = new Date().getTime()
  for (let i = 0; i < 40; i++) {
    data.push({
      index: i + 1,
      id: `ONO${time + i * 2433494}`,
      name: `产品${i}`,
      number: (i + 1) * Math.round(Math.random() * 5 + 5),
      deliveryDate: createDate(i + Math.random() * 5 + 10),
      bidDeadline: createDate(i),
      receiver: names[i % names.length],
      receiverPhone: '131111111' + (i).toString().padStart(2, '0'),
      address: `地址${i}`,
      status: orderStatus[i % orderStatus.length].value,
    })
  }
  return data
}

export function useOrders() {
  const data = ref(createOrders())
  const columns = useTable(data, columnSrc)
  return { data, columns, columnSrc }
}
