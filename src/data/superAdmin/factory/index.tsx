import { Ref, ref } from 'vue';
import { useTable } from '@/data/utils/useTable'
import { type InternalRowData } from 'naive-ui/lib/data-table/src/interface';
import { type ColumnSrcItem } from '@/data/utils/creator';
import { NButton, NSpace, NTag } from 'naive-ui';
import { factoryStatus, statusMap } from './utils/data';

function createColumns(data: Ref<any[]>) {
  const columnSrc: ColumnSrcItem[] = [
    {
      title: '序号',
      key: 'index',
      disabled: true,
      form: {
        disabled: true,
        break: true
      }
    },
    {
      title: '工厂名称',
      key: 'factoryName',
    },
    {
      title: '工厂简介',
      key: 'factoryIntro',
      form: {
        type: 'textarea',
      }
    },
    {
      title: '负责人',
      key: 'factoryLeader',
    },
    {
      title: '联系方式',
      key: 'phone',
    },
    {
      title: '登录账号',
      key: 'loginName',
    },
    {
      title: '工厂状态',
      key: 'factoryStatus',
      renderer: (row: InternalRowData) => {
        return <NTag type={_switchColor(row.factoryStatus as string)}>{statusMap.get(row.factoryStatus as string)}
        </NTag>
      },
      form: {
        type: 'input',
        disabled: true,
        defaultValue: 'normal',
        renderer: value => {
          return (
            <div class="w-full">
              <NSpace vertical={true} size={18} >
                <NButton secondary strong type={value === 'normal' ? 'success' : 'error'} round size="large" block={true}>
                  {value === 'normal' ? '正常' : '关停'}
                </NButton>
              </NSpace>
            </div>
          )
        }
      }
    },
    {
      title: '操作',
      key: 'action',
      renderer: (row: InternalRowData) => {
        return <NButton secondary strong type={row.factoryStatus === 'closed' ? 'success' : 'error'} onClick={() => swicthStatus(row.factoryName as string, data)} >{row.factoryStatus === 'closed' ? '开启' : '关闭'}</NButton>
      },
      form: {
        type: 'input',
        break: true
      }
    }
  ]
  return columnSrc
}
function swicthStatus(factoryName: string, data: Ref<any[]>) {
  const target = data.value.find((item) => item.factoryName === factoryName)
  if (target) {
    target.factoryStatus = target.factoryStatus === 'closed' ? 'normal' : 'closed'
  }
}


function _switchColor(status: string) {
  switch (status) {
    case 'closed':
      return 'error'
    case 'normal':
      return 'success'
    default:
      return 'error'
  }
}

function createFactories() {
  const data = [];

  for (let i = 0; i < 40; i++) {
    data.push({
      index: i + 1,
      factoryName: `工厂${i}`,
      factoryIntro: `工厂${i}的简介`,
      factoryLeader: `工厂${i}的负责人`,
      phone: `138999988${i}`,
      loginName: `工厂${i}的登录账号`,
      factoryStatus: factoryStatus[Math.floor(Math.random() * factoryStatus.length)].value,
    })
  }
  return data
}

export function useFactories() {
  const data = ref(createFactories())
  const columnSrcs = createColumns(data)
  const columns = useTable(data, columnSrcs, true)
  return { data, columns, columnSrcs }
}
