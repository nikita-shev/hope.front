import { ReactElement, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@store/store.ts';
import { productCatalogThunks } from '@store/reducers';
import { IProduct } from '@/types/Product.ts';
import { Button } from '@components/inputs/Button';
import { Select } from '@components/inputs/Select';
import { Filters } from '@layout/Filters/Filters.tsx';
import { ProductCard } from '@components/cards/ProductCard';
import { FiltersIcon } from '@components/icons';
import s from '@layout/ProductCatalog/ProductCatalog.module.sass';

export function ProductCatalog(): ReactElement {
    const [searchParams] = useSearchParams();
    const [isDisplayedFilters, setIsDisplayedFilters] = useState(true);
    const products: IProduct[] = useAppSelector((state) => state.productCatalog.products);
    const dispatch = useAppDispatch();
    const page = useRef<number>(1);
    const loader = useRef<HTMLDivElement | null>(null);

    const options: { title: string }[] = [
        { title: 'Сначала недорогие' },
        { title: 'Сначала дорогие' },
        { title: 'По наименованию' }
    ];

    useEffect(() => {
        page.current = 1;

        dispatch(productCatalogThunks.fetchFilteredProducts({ query: searchParams.toString() }));
    }, [searchParams]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                const query: URLSearchParams = new URLSearchParams(searchParams.toString());
                query.set('page', `${++page.current}`);

                dispatch(productCatalogThunks.fetchProducts({ query: query.toString() }));
            }
        });

        loader.current && observer.observe(loader.current);

        return () => observer.disconnect();
    }, [products]);

    const changeDisplayOfFilters = () => setIsDisplayedFilters(!isDisplayedFilters);

    return (
        <section className={s['product-catalog']}>
            <div className={'container'}>
                <header className={s['product-catalog__header']}>
                    <h2 className={`${s['product-catalog__section-title']} section-title`}>
                        Найдено {products.length} товаров
                    </h2>

                    <div className={s['product-catalog__inner']}>
                        <Button
                            className={s['product-catalog__filter-btn']}
                            variant={'text'}
                            onClick={changeDisplayOfFilters}
                        >
                            <FiltersIcon />
                            <span>Фильтры</span>
                        </Button>

                        <Select className={s['product-catalog__sorting']} options={options} />
                    </div>
                </header>

                <div className={s['product-catalog__wrap']}>
                    <Filters
                        className={s['product-catalog__filters']}
                        isDisplayed={isDisplayedFilters}
                    />

                    <div className={s.products}>
                        <div className={s['products__wrap']}>
                            {products.length ? (
                                products.map((el) => <ProductCard key={el.id} product={el} />)
                            ) : (
                                <span className={s['products__not-found']}>Товары не найдены</span>
                            )}
                        </div>

                        <div ref={loader} className={s['products__loading']}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
