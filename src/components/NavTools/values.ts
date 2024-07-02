import { INavTool } from '@components/NavTools/NavTools.types.ts';

export const navTools: INavTool[] = [
    {
        id: 'log-in',
        className: 'log-in',
        icon: 'log-in',
        alt: 'Вход в личный кабинет',
        text: 'Вход',
        modal: '',
        content: ''
    },
    {
        id: 'favorites',
        className: 'favourites',
        icon: 'favorites',
        alt: 'Избранное',
        text: 'Избранное',
        modal: '',
        content: ''
    },
    {
        id: 'cart',
        className: 'cart',
        icon: 'cart',
        alt: 'Корзина товаров',
        text: 'Корзина',
        modal: '',
        content: null
    }
];
