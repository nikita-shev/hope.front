import { ReactElement } from 'react';
import { Breadcrumbs, IBreadcrumb } from '@components/Breadcrumbs';
import { ProductCatalog } from '@layout/ProductCatalog';

export function Catalog(): ReactElement {
    const breadcrumbs: IBreadcrumb[] = [
        { title: 'Главная', path: '/' },
        { title: 'Каталог товаров', path: '/catalog' }
    ];

    return (
        <>
            <Breadcrumbs list={breadcrumbs} />

            <ProductCatalog />
        </>
    );
}
