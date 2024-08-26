import { FormEvent, ReactElement, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productSpecFilters } from '@layout/Filters/data/data.ts';
import { Button } from '@components/inputs/Button';
import { Paper } from '@components/Paper';
import { Filter } from '@layout/Filters/components/Filter/Filter.tsx';
import { Price } from '@layout/Filters/components/Price/Price.tsx';
import s from '@layout/Filters/Filters.module.sass';

interface Props {
    isDisplayed?: boolean;
    className?: string;
}

export function Filters({ className = '', isDisplayed = true }: Props): ReactElement {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filters, setFilters] = useState<string[]>([]);

    useEffect(() => {
        addFilter('', () => searchParams.toString().split('&'));
    }, [searchParams]);

    const addFilter = (value: string, replaceAll?: (f: string[]) => string[]): void => {
        const cb = replaceAll ? replaceAll : (f: string[]) => [...new Set([...f, value])];

        setFilters(cb);
    };

    const removeFilter = (value: string): void => setFilters(filters.filter((el) => el !== value));

    const applyFilters = (): void => setSearchParams(filters.join('&'));

    const resetFilters = (): void => {
        addFilter('', () => ['']);
        setSearchParams('');
    };

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => e.preventDefault();

    return (
        <Paper className={className}>
            <section className={s.filters}>
                <form
                    className={`${s['filters__form']} ${isDisplayed ? s['is-displayed'] : ''}`.trim()}
                    onSubmit={onSubmitHandler}
                >
                    <Filter
                        type={'isInStock'}
                        title={'Наличие'}
                        isSearchField={false}
                        addFilter={addFilter}
                        removeFilter={removeFilter}
                    />

                    <Filter
                        type={'price'}
                        title={'Цена'}
                        isSearchField={false}
                        addFilter={addFilter}
                        removeFilter={removeFilter}
                    >
                        <Price />
                    </Filter>

                    <Filter
                        type={'status'}
                        title={'Акция'}
                        isSearchField={false}
                        addFilter={addFilter}
                        removeFilter={removeFilter}
                    />

                    {productSpecFilters.map((el) => {
                        return (
                            <Filter
                                key={el.type}
                                type={el.type}
                                title={el.title}
                                isDisplayedFilter={el.isDisplayedFilter}
                                addFilter={addFilter}
                                removeFilter={removeFilter}
                            />
                        );
                    })}

                    <div className={s['filters__wrap']}>
                        <Button
                            className={s['filters__apply-btn']}
                            variant={'contained'}
                            title={'Применить'}
                            onClick={applyFilters}
                        />

                        <Button
                            className={s['filters__reset-btn']}
                            variant={'text'}
                            title={'Сбросить'}
                            onClick={resetFilters}
                        />
                    </div>
                </form>
            </section>
        </Paper>
    );
}
