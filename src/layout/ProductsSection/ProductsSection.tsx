import { ReactElement, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@store/store.ts';
import { productsSectionThunks } from '@store/reducers';
import { IProduct, Statuses } from '@/types/Product.ts';
import { SectionalGrid } from '@components/SectionalGrid';
import s from '@layout/ProductsSection/ProductsSection.module.sass';

interface Props {
    title: string;
    status: Statuses;
    isDisplayed?: boolean;
}

export function ProductsSection({ title, status, isDisplayed = true }: Props): ReactElement {
    const products: IProduct[] = useAppSelector((state) => state.productsSection.products);
    const [page, setPage] = useState(0);
    const dispatch = useAppDispatch();

    const isDisplayedBtn: boolean = isDisplayed && page < 3;
    const filteredProducts: IProduct[] = products.filter((el) => el.status === status);

    useEffect(() => getProducts(), []);

    const getProducts = (): void => {
        const newPage: number = page + 1;
        const limit: number = 4;

        dispatch(
            productsSectionThunks.fetchProducts({ page: `${newPage}`, limit: `${limit}`, status })
        );
        setPage(newPage);
    };

    return (
        <section className={s['products-section']}>
            <div className="container">
                <h2 className={`${s['products-section__section-title']} section-title`}>{title}</h2>

                <SectionalGrid
                    products={filteredProducts}
                    isDisplayedBtn={isDisplayedBtn}
                    showItems={getProducts}
                />
            </div>
        </section>
    );
}
