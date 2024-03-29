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
        order: 1,
        permissions: ['super']
      }
    },
    {
      name: 'factory-management',
      path: '/factory-management',
      component: 'self',
      meta: {
        title: '工厂管理',
        requiresAuth: true,
        singleLayout: 'basic',
        icon: 'carbon:datastore',
        order: 1,
        permissions: ['super']
      }
    },
    {
      name: 'product-management',
      path: '/product-management',
      component: 'basic',
      children: [
        {
          name: 'product-management_product-type',
          path: '/product-management/product-type',
          component: 'self',
          meta: {
            title: '产品类别',
            requiresAuth: true,
            icon: 'carbon:carbon-for-ibm-product'
          }
        },
        {
          name: 'product-management_product',
          path: '/product-management/product',
          component: 'self',
          meta: {
            title: '产品',
            requiresAuth: true,
            icon: 'carbon:result'
          }
        }
      ],
      meta: {
        title: '产品管理',
        icon: 'carbon:product',
        order: 1,
        permissions: ['super']
      }
    },
    {
      name: 'equipment-management',
      path: '/equipment-management',
      component: 'basic',
      children: [
        {
          name: 'equipment-management_equipment-type',
          path: '/equipment-management/equipment-type',
          component: 'self',
          meta: {
            title: '设备类别',
            requiresAuth: true,
            icon: 'carbon:operations-field'
          }
        },
        {
          name: 'equipment-management_equipment',
          path: '/equipment-management/equipment',
          component: 'self',
          meta: {
            title: '设备',
            requiresAuth: true,
            icon: 'carbon:machine-learning-model'
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
        icon: 'carbon:border-full',
        order: 1,
        permissions: ['super']
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
      name: 'factory-mine',
      path: '/factory-mine',
      component: 'self',
      meta: {
        title: '我的工厂',
        requiresAuth: true,
        singleLayout: 'basic',
        icon: 'carbon:datastore'
      }
    },
    {
      name: 'factory-order',
      path: '/factory-order',
      component: 'basic',
      children: [
        {
          name: 'factory-order_accept',
          path: '/factory-order/accept',
          component: 'self',
          meta: {
            title: '订单接单',
            requiresAuth: true,
            icon: 'carbon:accumulation-ice'
          }
        },
        {
          name: 'factory-order_produce',
          path: '/factory-order/produce',
          component: 'self',
          meta: {
            title: '订单排产',
            requiresAuth: true,
            icon: 'carbon:carbon-for-ibm-product'
          }
        }
      ],
      meta: {
        title: '订单',
        icon: 'carbon:border-full',
        order: 1
      }
    }
  ],
  dealer: [
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
      name: 'dealer-order',
      path: '/dealer-order',
      component: 'self',
      meta: {
        title: '我的订单',
        requiresAuth: true,
        singleLayout: 'basic',
        icon: 'carbon:order-details',
        order: 1,
        permissions: ['dealer']
      }
    }
  ]
};
