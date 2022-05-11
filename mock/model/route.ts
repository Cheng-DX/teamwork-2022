export const routeModel: Record<Auth.RoleType, AuthRoute.Route[]> = {
  super: [
    {
      name: 'dashboard',
      path: '/dashboard',
      component: 'basic',
      children: [
        {
          name: 'dashboard_analysis',
          path: '/dashboard/analysis',
          component: 'self',
          meta: {
            title: '流量分析',
            requiresAuth: true,
            icon: 'icon-park-outline:analysis'
          }
        }
      ],
      meta: {
        title: '数据总览',
        icon: 'carbon:dashboard',
        order: 1
      }
    },
    {
      name: 'user-management',
      path: '/user-management',
      component: 'self',
      meta: {
        title: '用户管理',
        requiresAuth: true,
        singleLayout: 'basic',
        icon: 'carbon:dashboard',
        order: 1
      }
    },
    {
      name: 'product-management',
      path: '/product-management',
      component: 'basic',
      children: [
        {
          name: 'product-management_product',
          path: '/product-management/product',
          component: 'self',
          meta: {
            title: '产品',
            requiresAuth: true,
            icon: 'icon-park-outline:analysis'
          }
        },
        {
          name: 'product-management_product-type',
          path: '/product-management/product-type',
          component: 'self',
          meta: {
            title: '产品类别',
            requiresAuth: true,
            icon: 'icon-park-outline:analysis'
          }
        }
      ],
      meta: {
        title: '产品管理',
        icon: 'carbon:dashboard',
        order: 1
      }
    },
    {
      name: 'equipment-management',
      path: '/equipment-management',
      component: 'basic',
      children: [
        {
          name: 'equipment-management_equipment',
          path: '/equipment-management/equipment',
          component: 'self',
          meta: {
            title: '设备',
            requiresAuth: true,
            icon: 'icon-park-outline:analysis'
          }
        },
        {
          name: 'equipment-management_equipment-type',
          path: '/equipment-management/equipment-type',
          component: 'self',
          meta: {
            title: '设备类别',
            requiresAuth: true,
            icon: 'icon-park-outline:analysis'
          }
        }
      ],
      meta: {
        title: '设备管理',
        icon: 'carbon:dashboard',
        order: 1
      }
    },
    {
      name: 'multi-menu',
      path: '/multi-menu',
      component: 'basic',
      children: [
        {
          name: 'multi-menu_first',
          path: '/multi-menu/first',
          component: 'multi',
          children: [
            {
              name: 'multi-menu_first_second',
              path: '/multi-menu/first/second',
              component: 'self',
              meta: {
                title: '二级菜单',
                requiresAuth: true,
                icon: 'ic:outline-menu'
              }
            },
            {
              name: 'multi-menu_first_second-new',
              path: '/multi-menu/first/second-new',
              component: 'multi',
              children: [
                {
                  name: 'multi-menu_first_second-new_third',
                  path: '/multi-menu/first/second-new/third',
                  component: 'self',
                  meta: {
                    title: '三级菜单',
                    requiresAuth: true,
                    icon: 'ic:outline-menu'
                  }
                }
              ],
              meta: {
                title: '二级菜单(有子菜单)',
                icon: 'ic:outline-menu'
              }
            }
          ],
          meta: {
            title: '一级菜单',
            icon: 'ic:outline-menu'
          }
        }
      ],
      meta: {
        title: '多级菜单',
        icon: 'carbon:menu',
        order: 7
      }
    }
  ],
  admin: [
    {
      name: 'dashboard',
      path: '/dashboard',
      component: 'basic',
      children: [
        {
          name: 'dashboard_analysis',
          path: '/dashboard/analysis',
          component: 'self',
          meta: {
            title: '分析页',
            requiresAuth: true,
            icon: 'icon-park-outline:analysis'
          }
        },
        {
          name: 'dashboard_workbench',
          path: '/dashboard/workbench',
          component: 'self',
          meta: {
            title: '工作台',
            requiresAuth: true,
            icon: 'icon-park-outline:workbench'
          }
        }
      ],
      meta: {
        title: '仪表盘',
        icon: 'carbon:dashboard',
        order: 1
      }
    }
  ],
  dealer: []
};
