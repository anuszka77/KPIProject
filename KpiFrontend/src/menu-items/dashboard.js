// assets
import { IconDashboard, IconKey, IconNotebook, IconUsers, IconApps, IconBookmark, IconBook, IconChartArrowsVertical  } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconKey, IconNotebook, IconUsers, IconApps, IconBookmark, IconBook, IconChartArrowsVertical  };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Menu',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'process-book',
            title: 'Księga procesów',
            type: 'item',
            url: '/process-book',
            icon: icons.IconNotebook,
            breadcrumbs: false
        },
        {
            id: 'dictionary',
            title: 'Słowniki',
            type: 'item',
            url: '/dictionary',
            icon: icons.IconBook,
            breadcrumbs: false
        },
        {
            id: 'objects',
            title: 'Obiekty/Produkty',
            type: 'item',
            url: '/objects',
            icon: icons.IconApps,
            breadcrumbs: false
        },
        {
            id: 'resources',
            title: 'Zasoby',
            type: 'item',
            url: '/resources',
            icon: icons.IconUsers,
            breadcrumbs: false
        },
        {
            id: 'authentication',
            title: 'Authentication',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'login3',
                    title: 'Login',
                    type: 'item',
                    url: '/pages/login/login3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Register',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                }
            ]
        }
    
    ]
};

export default dashboard;
