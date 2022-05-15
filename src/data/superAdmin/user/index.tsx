import { EnumUserRole } from '@/enum/business'
import { ref } from 'vue';
import { useTable } from '@/data/utils/useTable'
import { type InternalRowData } from 'naive-ui/lib/data-table/src/interface';
import { type ColumnSrcItem } from '@/data/utils/creator';
import { NInput, NTag } from 'naive-ui';

const columnSrc: ColumnSrcItem[] = [
  {
    title: '用户名',
    key: 'username',
  },
  {
    title: '电话号码',
    key: 'phone',
    form: {
      type: 'input'
    }
  },
  {
    title: '密码',
    key: 'password',
    renderer: (row: { password: any; }) => {
      return <NInput type='password' show-password-on="mousedown" value={row.password} />
    },
    form: {
      renderer: (value) => {
        return <NInput type='password' show-password-on="click" v-model:value={value} />
      },
    }
  },
  {
    title: '工厂名/经销商代号',
    key: 'name',
  },
  {
    title: '角色',
    key: 'role',
    renderer: (row: InternalRowData) => {
      return (<NTag type={_switchColor(row.role as string)}>{row.role}</NTag>)
    },
    form: {
      type: 'select',
      options: [
        {
          label: '云工厂管理员',
          value: EnumUserRole.admin
        }, {
          label: '经销商',
          value: EnumUserRole.dealer
        }
      ],
    }
  },
]

function _switchColor(role: string) {
  switch (role) {
    case EnumUserRole.super:
      return 'success'
    case EnumUserRole.admin:
      return 'info'
    default:
      return 'warning'
  }
}

function createUsers() {
  const users = [];
  users.push({
    username: 'admin',
    phone: '16666666666',
    password: "chengdx0925@126.com",
    name: 'super admin',
    role: EnumUserRole.super,
  })

  for (let i = 0; i < 10; i++) {
    const username = `user${i}`;
    const password = `${username}@cloudFac.com`;
    const phone = `13${i.toString().repeat(9)}`;
    users.push({
      username,
      phone,
      password,
      name: `${username}的${i % 2 == 0 ? '工厂' : '店铺'}`,
      role: i % 2 == 0 ? EnumUserRole.admin : EnumUserRole.dealer,
    })
  }
  return users
}

export function useUsers() {
  const data = ref(createUsers())
  const columns = useTable(data, columnSrc, false)
  return { data, columns, columnSrcs: columnSrc }
}
