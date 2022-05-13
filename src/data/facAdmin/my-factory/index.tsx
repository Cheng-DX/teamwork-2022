import { Ref, ref } from 'vue';
import { useTable } from '@/data/utils/useTable'
import { type InternalRowData } from 'naive-ui/lib/data-table/src/interface';
import { type ColumnSrcItem } from '@/data/utils/creator';
import { NButton, NSpace, NTag } from 'naive-ui';

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
      disabled: true,
      form: {
        disabled: true,
        break: true,
      }
    },
    {
      title: '设备编号',
      key: 'id',
      renderer: (row: InternalRowData) => {
        return (<span>{row.id}</span>)
      },
      form: {
        type: 'input',
        disabled: true,
        creator: () => `DNO${new Date().getTime() + 2387478}`
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
        options: [
          { label: '设备类别1', value: 'type1' },
          { label: '设备类别2', value: 'type2' },
          { label: '设备类别3', value: 'type3' },
        ]
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
        type: 'textarea'
      }
    },
    {
      title: '设备来源',
      key: 'source',
      form: {
        type: 'select',
        options: [
          { label: '自有设备', value: 'source1' },
          { label: '租用设备', value: 'source2' },
        ]
      }
    },
    {
      title: '所属工厂',
      key: 'factory',
      form: {
        type: 'input',
        defaultValue: 'Mine',
        renderer: value => {
          return (
            <div class="w-full">
              <NSpace vertical={true} size={18} >
                <NButton secondary strong type="success" round size="large" block={true}>
                  所属工厂：我的工厂
                </NButton>
              </NSpace>
            </div>
          )
        }
      }
    },
    {
      title: '设备状态',
      key: 'status',
      renderer: (row: InternalRowData) => {
        return (<NTag strong type={getType(row.status as string)} >{row.status}</NTag>)
      },
      form: {
        type: 'input',
        defaultValue: 'opend',
        renderer: value => {
          return (
            <div class="w-full">
              <NSpace vertical={true} size={18} >
                <NButton secondary strong type="warning" round size="large" block={true}>
                  已关机
                </NButton>
              </NSpace>
            </div>
          )
        }
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
    },
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
      factory: '我的工厂',
      description: `描述${i}`,
      status: EquipmentStatus.Opened,
      source: i % 2 === 0 ? '租用设备' : '自有设备',
    })
  }
  return data
}

export function useMyFactory(editable?: boolean) {
  const data = ref(createEquipments())
  const columnSrcs = createColumns(data)
  const columns = useTable(data, columnSrcs, editable)
  return { data, columns, columnSrcs }
}
