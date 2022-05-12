import { ref } from 'vue';
import { useTable } from '@/data/utils/useTable'
import { type InternalRowData } from 'naive-ui/lib/data-table/src/interface';
import { type ColumnSrcItem } from '@/data/utils/creator';
import { NButton, NDatePicker, NInput, NInputNumber, NSpace, NTag } from 'naive-ui';

export const orderStatus = [
  {
    label: '正在投标',
    value: 'biding',
  },
  {
    label: '投标结束',
    value: 'bided',
  },
  {
    label: '已完成',
    value: 'finished',
  },
  {
    label: '生产中',
    value: 'producing',
  },
  {
    label: '未发布',
    value: 'unpublished',
  },
  {
    label: '已发布',
    value: 'published',
  }
]

const columnSrc: ColumnSrcItem[] = [
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
      return <NInputNumber v-model:value={row.number} validator={(v) => v > 0} />
    },
    width: '130px',
    form: {
      type: 'number',
    }
  }, {
    title: '投标截止日期',
    key: 'bidDeadline',
    renderer: (row: InternalRowData) => {
      return <NDatePicker v-model:value={row.bidDeadline} ></NDatePicker>
    },
    width: '150px',
    form: {
      type: 'date',
    }
  },
  {
    title: '交付日期',
    key: 'deliveryDate',
    renderer: (row: InternalRowData) => {
      return <NDatePicker v-model:value={row.deliveryDate} ></NDatePicker>
    },
    width: '150px',
    form: {
      type: 'date',
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
      return <NInput v-model:value={row.address} type="textarea" />
    },
    width: '200px',
    align: 'left',
    form: {
      type: 'textarea',
    }
  },
  {
    title: '订单状态',
    key: 'status',
    defaultValue: 'unpublished',
    renderer: (row: InternalRowData) => {
      return (<NTag type={switchType(row.status as string)}>{
        orderStatus.find(item => item.value === row.status)?.label
      }
      </NTag>)
    },
    form: {
      type: 'select',
      options: orderStatus,
      renderer: value => {
        return (
          <div class="w-full">
            <NSpace vertical={true} size={18} >
              <NButton disabled strong type={switchType(value as string)} round size="large" block={true}>{
                orderStatus.find(item => item.value === value)?.label
              }</NButton>
            </NSpace>

          </div>
        )

      }
    }
  }
]
function switchType(type: string) {
  switch (type) {
    case 'biding':
      return 'warning'
    case 'bided':
      return 'default'
    case 'finished':
      return 'success'
    case 'producing':
      return 'info'
    default:
      return 'error'
  }
}

function createDate(seed: number) {
  const date = new Date().getTime() + seed * 24 * 60 * 60 * 1000
  return date
}

const names = [
  '张三',
  '李四',
  '王五',
  '李子豪',
  '赵六',
]
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
