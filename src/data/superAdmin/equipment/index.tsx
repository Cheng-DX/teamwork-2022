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

function createColumns(data: Ref<any[]>) {
  const columnSrc: ColumnSrcItem[] = [
    {
      title: '序号',
      key: 'index',
    },
    {
      title: '设备编号',
      key: 'id',
      renderer: (row: InternalRowData) => {
        return (<span>{row.id}</span>)
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
      }
    },
    {
      title: '设备规格',
      key: 'spec',
    },
    {
      title: '设备描述',
      key: 'description',
    },
    {
      title: '设备状态',
      key: 'status',
      renderer: (row: InternalRowData) => {
        return (<NTag strong type={getType(row.status as string)} >{row.status}</NTag>)
      }
    },
    {
      title: '所属工厂',
      key: 'factory',
    },
    {
      title: '租用状态',
      key: 'rentStatus',
    },
    {
      title: '开关机',
      key: 'power',
      renderer: (row: InternalRowData) => {
        return (<NButton tertiary strong type={row.status === EquipmentStatus.Closed ? 'success' : 'error'} onClick={() => switchStatus(row.id as string, data)}>{row.status === EquipmentStatus.Closed ? '远程开机' : '远程关机'}</NButton>)
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
      status: EquipmentStatus.Opened,
      factory: `云工厂${i}`,
      rentStatus: RentStatus.Own,
    })
  }
  return data
}

export function useEquipments() {
  const data = ref(createEquipments())
  const columns = useTable(data, createColumns(data))
  return { data, columns }
}
