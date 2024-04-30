export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: NavigationItem[];
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'navigation',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: 'analytics',
        icon: 'feather icon-home'
      }
    ]
  },
  {
    id: 'ui-component',
    title: 'Ui Component',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'basic',
        title: 'Component',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'button',
            title: 'Button',
            type: 'item',
            url: 'component/button'
          },
          {
            id: 'badges',
            title: 'Badges',
            type: 'item',
            url: 'component/badges'
          },
          {
            id: 'breadcrumb-pagination',
            title: 'Breadcrumb & Pagination',
            type: 'item',
            url: 'component/breadcrumb-paging'
          },
          {
            id: 'collapse',
            title: 'Collapse',
            type: 'item',
            url: 'component/collapse'
          },
          {
            id: 'tabs-pills',
            title: 'Tabs & Pills',
            type: 'item',
            url: 'component/tabs-pills'
          },
          {
            id: 'typography',
            title: 'Typography',
            type: 'item',
            url: 'component/typography'
          }
        ]
      }
    ]
  },



  // AI logs menu
  //Sales Report menu
  {
    id: 'AIlogs',
    title: 'AI',
    type: 'group',
    icon: 'icon-group',
    children: [

      {
        id: 'AIlogs',
        title: 'AI',
        type: 'collapse',
        icon: 'feather icon-menu',
        children: [
          {
            id: 'AIlogs',
            title: 'AI Logs',
            type: 'item',
            icon: 'feather icon-box',
            url: 'ai/view_AI_Logs',

          },
          // {
          //   id: 'ByTransactionLite',
          //   title: 'By Transaction(Lite)',
          //   type: 'item',
          //   icon: 'feather icon-box',
          //   url: 'salesReport/ByTransactionLite',


          // },


        ]
      }
    ]
  },
  //

   // Devices menu
  {
    id: 'devices',
    title: 'Devices',
    type: 'group',
    icon: 'icon-group',
    children: [

      {
        id: 'devices',
        title: 'Devices',
        type: 'collapse',
        icon: 'feather icon-menu',
        children: [
          {
            id: 'ezyCart',
            title: 'ezyCart',
            type: 'item',
            icon: 'feather icon-box',
            url: 'devices/view_ezyCart',

          },
          {
            id: 'ezyCart_lite',
            title: 'ezyCart Lite',
            type: 'item',
            icon: 'feather icon-box',
            url: 'devices/view_ezyCart_lite',

          },
          // {
          //   id: 'ByTransactionLite',
          //   title: 'By Transaction(Lite)',
          //   type: 'item',
          //   icon: 'feather icon-box',
          //   url: 'salesReport/ByTransactionLite',


          // },


        ]
      }
    ]
  },
    // Logs menu
    {
      id: 'logs',
      title: 'Logs',
      type: 'group',
      icon: 'icon-group',
      children: [

        {
          id: 'logs',
          title: 'Logs',
          type: 'collapse',
          icon: 'feather icon-menu',
          children: [
            {
              id: 'abandoned-cart-ezycart',
              title: 'Abandoned Cart(ezycart)',
              type: 'item',
              icon: 'feather icon-box',
              url: 'logs/view_abandoned_cart_ezycart',

            },
            {
              id: 'abandoned-cart-ezycart-lite',
              title: 'Abandoned Cart(Lite)',
              type: 'item',
              icon: 'feather icon-box',
              url: 'logs/view_abandoned_cart_ezycart_lite',

            },
            // {
            //   id: 'ezyCart_lite',
            //   title: 'ezyCart Lite',
            //   type: 'item',
            //   icon: 'feather icon-box',
            //   url: 'devices/view_ezyCart_lite',

            // },
            // {
            //   id: 'ByTransactionLite',
            //   title: 'By Transaction(Lite)',
            //   type: 'item',
            //   icon: 'feather icon-box',
            //   url: 'salesReport/ByTransactionLite',


            // },


          ]
        }
      ]
    },
  //

// settings menu
  {
    id: 'settings',
    title: 'Settings',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'settings',
        title: 'Settings',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'settings',
            title: 'Banner',
            type: 'item',
            url: 'settings/view_settings'
          },
          {
            id: 'settings',
            title: 'Top Promotions',
            type: 'item',

            url: 'settings/view_top_promotions'
          },
          {
            id: 'Payment',
            title: 'Payment',
            type: 'collapse',
            children: [
              {
                id: 'payment_options',
                title: 'Payment Options',
                type: 'item',
                url: 'settings/view_payment_options',

              },
              {
                id: 'payment_methods',
                title: 'Payment Methods',
                type: 'item',
                url: 'settings/view_payment_methods',

              },
              {
                id: 'merchant_payment',
                title: 'Merchant Payment',
                type: 'item',
                url: 'settings/view_merchant_payments',

              },
              // {
              //   id: 'menu-level-2.2.2',
              //   title: 'Menu Level 2.2.2',
              //   type: 'item',
              //   url: '',
              //   external: true
              // }
            ]
          }
        ]
      },

    ]
  },
  //Employees menu

  {
    id: 'employee',
    title: 'Employee',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'employee',
        title: 'Employee',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'view',
            title: 'view',
            type: 'item',
            url: 'employee/view_employee'
          },
        ]
      }
    ]
  },
  //

  //Zones and Beacons menu

  {
    id: 'zones-beacons',
    title: 'Zones and Beacons',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'zones-beacons',
        title: 'Zones and Beacons',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'view',
            title: 'view',
            type: 'item',
            url: 'zones-beacons/view_zones'
          },
        ]
      }
    ]
  },
  //
  //Feedback menu

  {
    id: 'feedback',
    title: 'Feedback',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'feedback',
        title: 'Feedback',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'view_feedback',
            title: 'View Feedback',
            type: 'item',
            url: 'feedback/view_feedback'
          },
        ]
      }
    ]
  },
  //
  //Advertisement menu

  {
    id: 'advertisement',
    title: 'Advertisement',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'advertisement',
        title: 'Advertisement',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'view_advertisement',
            title: 'View Advertisement',
            type: 'item',
            url: 'advertisement/view_advertisement'
          },
        ]
      }
    ]
  },
  //

  //User Management menu
  {
    id: 'userManagement',
    title: 'User Management',
    type: 'group',
    icon: 'icon-group',
    children: [

      {
        id: 'userManagement',
        title: 'User Management',
        type: 'collapse',
        icon: 'feather icon-menu',
        children: [
          {
            id: 'Module',
            title: 'Module',
            type: 'item',
            icon: 'feather icon-box',
            url: 'userManagement/view_module',
            // icon: 'feather icon-at-sign',

          },
          {
            id: 'Feature',
            title: 'Feature',
            type: 'item',
            icon: 'feather icon-box',
            url: 'userManagement/view_feature',
            // icon: 'feather icon-at-sign',

          },
          {
            id: 'Role',
            title: 'Role',
            type: 'item',
            icon: 'feather icon-box',
            url: 'userManagement/view_role',
            // icon: 'feather icon-at-sign',

          },

        ]
      }
    ]
  },

  //
  //Sales Report menu
  {
    id: 'salesReport',
    title: 'Sales Report',
    type: 'group',
    icon: 'icon-group',
    children: [

      {
        id: 'salesReport',
        title: 'Sales Report',
        type: 'collapse',
        icon: 'feather icon-menu',
        children: [
          {
            id: 'byTransactionsEzycart',
            title: 'By Transactions(Ezycart)',
            type: 'item',
            icon: 'feather icon-box',
            url: 'salesReport/ByTransactionEzycart',
            // icon: 'feather icon-at-sign',

          },
          {
            id: 'ByTransactionLite',
            title: 'By Transaction(Lite)',
            type: 'item',
            icon: 'feather icon-box',
            url: 'salesReport/ByTransactionLite',
            // icon: 'feather icon-at-sign',

          },
          {
            id: 'Role',
            title: 'Role',
            type: 'item',
            icon: 'feather icon-box',
            url: 'userManagement/view_role',
            // icon: 'feather icon-at-sign',

          },

        ]
      }
    ]
  },

  //
  //

  //

  // NEW MENU ENDS

  {
    id: 'Authentication',
    title: 'Authentication',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'signup',
        title: 'Sign up',
        type: 'item',
        url: '/auth/signup',
        icon: 'feather icon-at-sign',
        target: true,
        breadcrumbs: false
      },
      {
        id: 'signin',
        title: 'Sign in',
        type: 'item',
        url: 'auth/signin',
        icon: 'feather icon-log-in',
        target: true,
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'chart',
    title: 'Chart',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'apexchart',
        title: 'ApexChart',
        type: 'item',
        url: 'chart',
        classes: 'nav-item',
        icon: 'feather icon-pie-chart'
      }
    ]
  },
  {
    id: 'forms & tables',
    title: 'Forms & Tables',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'forms',
        title: 'Basic Elements',
        type: 'item',
        url: 'forms',
        classes: 'nav-item',
        icon: 'feather icon-file-text'
      },
      {
        id: 'tables',
        title: 'tables',
        type: 'item',
        url: 'tables',
        classes: 'nav-item',
        icon: 'feather icon-server'
      }
    ]
  },
  {
    id: 'other',
    title: 'Other',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: 'sample-page',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
      {
        id: 'menu-level',
        title: 'Menu Levels',
        type: 'collapse',
        icon: 'feather icon-menu',
        children: [
          {
            id: 'menu-level-2.1',
            title: 'Menu Level 2.1',
            type: 'item',
            url: 'javascript:',
            external: true
          },
          {
            id: 'menu-level-2.2',
            title: 'Menu Level 2.2',
            type: 'collapse',
            children: [
              {
                id: 'menu-level-2.2.1',
                title: 'Menu Level 2.2.1',
                type: 'item',
                url: 'javascript:',
                external: true
              },
              {
                id: 'menu-level-2.2.2',
                title: 'Menu Level 2.2.2',
                type: 'item',
                url: 'javascript:',
                external: true
              }
            ]
          }
        ]
      }
    ]
  }
];
