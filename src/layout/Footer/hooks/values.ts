export interface IListItem {
    name: string;
}

const pages: IListItem[] = [{ name: 'Новости' }, { name: 'Блог' }, { name: 'Отзывы' }];

const customerAssistance: IListItem[] = [
    { name: 'Условия доставки' },
    { name: 'Условия оплаты' },
    { name: 'Условия возврата' },
    { name: 'Гарантия' },
    { name: 'Как применить промокод' },
    { name: 'Вернуть товар. Инструкция' },
    { name: 'Отследить посылку' }
];

const profile: IListItem[] = [
    { name: 'Личный Кабинет' },
    { name: 'История заказов' },
    { name: 'Избранное' }
];

export { pages, customerAssistance, profile };
