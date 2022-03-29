// assets
import { IconKey, IconNotebook, IconUsers, IconApps } from '@tabler/icons';

// constant
const icons = {
    IconKey,
    IconNotebook,
    IconUsers,
    IconApps
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Zarządzanie procesami',
    type: 'group',
    children: [
        {
            id: 'process-book',
            title: 'Księga procesów',
            type: 'item',
            url: '/process-book',
            icon: icons.IconNotebook,
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

export default pages;
