import { DataTableColumn, NTag } from 'naive-ui/lib/components';
import './user.css'

import { EnumUserRole } from '@/enum/business'
import { NButton } from 'naive-ui';
import { h, Ref, ref } from 'vue';
import { InternalRowData } from 'naive-ui/lib/data-table/src/interface';
import ShowOrEdit from '@/data/utils/ShowOrEdit';

function actionRender() {
  return (
    <div class="flex justify-evenly" >
      <NButton secondary strong type="error">删除</NButton>
    </div>
  )
}

function switchColor(role: string) {
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
    email: "chengdx0925@126.com",
    createTime: '2019-01-01',
    role: EnumUserRole.super,
  })

  for (let i = 0; i < 10; i++) {
    const username = `user${i}`;
    const email = `${username}@cloudFac.com`;
    const phone = `13${i.toString().repeat(9)}`;
    users.push({
      username,
      phone,
      email,
      createTime: '2019-01-01',
      role: i % 2 === 0 ? EnumUserRole.admin : EnumUserRole.dealer,
    })
  }
  return ref(users)
}


function createRenderFn(columnLabel: string, data: Ref<any>, valueRenderer?: Function) {
  return function render(row: InternalRowData, index: number) {
    return h(ShowOrEdit, {
      value: valueRenderer ? valueRenderer : row[columnLabel],
      onUpdateValue(v: any) {
        data.value[index][columnLabel] = v
      }
    })
  }
}

export function useUsers() {
  const data = createUsers()
  const columns = ref<DataTableColumn[]>([
    {
      title: '用户名',
      key: 'username',
      align: 'center',
      render: createRenderFn('username', data)
    },
    {
      title: '电话号码',
      key: 'phone',
      align: 'center',
      render: createRenderFn('phone', data)
    },
    {
      title: '邮箱',
      key: 'email',
      align: 'center',
      render: createRenderFn('email', data)
    },
    {
      title: '注册时间',
      key: 'createTime',
      align: 'center',
      render: createRenderFn('createTime', data)
    },
    {
      title: '角色',
      key: 'role',
      align: 'center',
      render: (row: InternalRowData) => {
        return (<NTag type={switchColor(row.role as string)}>{row.role}</NTag>)
      }
    },
    {
      title: '操作',
      key: 'action',
      align: 'center',
      render: actionRender
    }
  ]);

  return { data, columns }
}
