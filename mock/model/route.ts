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
        icon: 'carbon:analytics',
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
        icon: 'carbon:user-profile',
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
            icon: 'carbon:result'
          }
        },
        {
          name: 'product-management_product-type',
          path: '/product-management/product-type',
          component: 'self',
          meta: {
            title: '产品类别',
            requiresAuth: true,
            icon: 'carbon:carbon-for-ibm-product'
          }
        }
      ],
      meta: {
        title: '产品管理',
        icon: 'carbon:product',
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
            icon: 'carbon:machine-learning-model'
          }
        },
        {
          name: 'equipment-management_equipment-type',
          path: '/equipment-management/equipment-type',
          component: 'self',
          meta: {
            title: '设备类别',
            requiresAuth: true,
            icon: 'carbon:operations-field'
          }
        }
      ],
      meta: {
        title: '设备管理',
        icon: 'carbon:machine-learning',
        order: 1
      }
    },
    {
      name: 'order-management',
      path: '/order-management',
      component: 'self',
      meta: {
        title: '订单管理',
        requiresAuth: true,
        singleLayout: 'basic',
        icon: 'carbon:user-profile',
        order: 1
      }
    },
    {
      name: 'dealer-order',
      path: '/dealer-order',
      component: 'self',
      meta: {
        title: '经销商订单',
        requiresAuth: true,
        singleLayout: 'basic',
        icon: 'carbon:user-profile',
        order: 1
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
