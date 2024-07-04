import { ReactElement } from 'react';
import { Preview } from '@layout/Preview';
import { ProductsSection } from '@layout/ProductsSection';
import { Subscription } from '@layout/Subscription';

export function Home(): ReactElement {
    return (
        <>
            <Preview />
            <ProductsSection title={'Новинки'} status={'new'} />
            <Subscription />
            <ProductsSection title={'Распродажа'} status={'sale'} />
        </>
    );
}
