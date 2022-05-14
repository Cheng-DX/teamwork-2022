import { Ref, ref } from 'vue';
import { useTable } from '@/data/utils/useTable'
import { type InternalRowData } from 'naive-ui/lib/data-table/src/interface';
import { type ColumnSrcItem } from '@/data/utils/creator';
import { NButton, NTag } from 'naive-ui';

export enum EquipmentStatus {
  /** 闲置 */
  Opened = '闲置中',
  /** 关机 */
  Closed = '已关机',
  /** 故障 */
  Fault = '故障中',
  /** 生产中 */
  Producing = '生产中',
}

export enum RentStatus {
  /** 租用设备 */
  Rent = '租用设备',
  /** 自有设备 */
  Own = '自有设备',
}

function getType(status: string) {
  switch (status) {
    case EquipmentStatus.Opened:
      return 'success';
    case EquipmentStatus.Closed:
      return 'default';
    case EquipmentStatus.Fault:
      return 'error';
    case EquipmentStatus.Producing:
      return 'info';
    default:
      return 'info';
  }
}

export const allStatus = [
  { value: 'opened', label: '闲置中' },
  { value: 'closed', label: '已关机' },
  { value: 'fault', label: '故障中' },
  { value: 'producing', label: '生产中' }
];

export const allRentStatus = [
  { value: 'rent', label: '租用设备' },
  { value: 'own', label: '自有设备' }
];

function createColumns(data: Ref<any[]>) {
  const columnSrc: ColumnSrcItem[] = [
    {
      title: '序号',
      key: 'index',
      form: {
        break: true,
      }
    },
    {
      title: '设备编号',
      key: 'id',
      renderer: (row: InternalRowData) => {
        return (<span>{row.id}</span>)
      },
      disabled: true,
      form: {
        disabled: true
      }
    },
    {
      title: '设备名称',
      key: 'name',
    },
    {
      title: '设备类别',
      key: 'type',
      renderer: (row: InternalRowData) => {
        return (<span >{row.type}</span>)
      },
      form: {
        type: 'select',
        options: (() => {
          const types = []
          for (let i = 0; i < 40; i++) {
            types.push({
              label: `类别${i}`,
              value: `类别${i}`,
            })
          }
          return types
        })()
      }
    },
    {
      title: '设备规格',
      key: 'spec',
    },
    {
      title: '设备描述',
      key: 'description',
      form: {
        type: 'textarea',
      }
    },
    {
      title: '设备状态',
      key: 'status',
      renderer: (row: InternalRowData) => {
        return (<NTag strong type={getType(row.status as string)} >{row.status}</NTag>)
      },
      form: {
        type: 'select',
        options: allStatus
      }
    },
    {
      title: '所属工厂',
      key: 'factory',
    },
    {
      title: '租用状态',
      key: 'rentStatus',
      form: {
        type: 'select',
        options: allRentStatus
      }
    },
    {
      title: '开关机',
      key: 'power',
      renderer: (row: InternalRowData) => {
        return (<NButton tertiary strong type={row.status === EquipmentStatus.Closed ? 'success' : 'error'} onClick={() => switchStatus(row.id as string, data)}>{row.status === EquipmentStatus.Closed ? '远程开机' : '远程关机'}</NButton>)
      },
      form: {
        break: true
      }
    }
  ]
  return columnSrc
}

function switchStatus(id: string, data: Ref<any[]>) {
  const target = data.value.find((item) => item.id === id)
  if (target) {
    target.status = target.status === EquipmentStatus.Closed ? EquipmentStatus.Opened : EquipmentStatus.Closed
  }
}

function createEquipments() {
  const data = [];
  const time = new Date().getTime()
  for (let i = 0; i < 40; i++) {
    data.push({
      index: i + 1,
      id: `DNO${time + i * 2387478}`,
      name: `设备${i}`,
      type: `类别${i}`,
      spec: `规格${i}`,
      description: `描述${i}`,
      status: allStatus[i % 4].label,
      factory: `云工厂${i}`,
      rentStatus: allRentStatus[i % 2].label,
    })
  }
  return data
}

export function useEquipments() {
  const data = ref(createEquipments())
  const columnSrcs = createColumns(data)
  const columns = useTable(data, columnSrcs, true)
  return { data, columns, columnSrcs }
}
