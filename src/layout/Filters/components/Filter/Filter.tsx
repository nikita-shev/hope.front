import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@store/store.ts';
import { filtersThunks } from '@store/reducers';
import { FilterType } from '@layout/Filters/Filters.types.ts';
import { Checkbox, IReturnValue } from '@components/inputs/Checkbox';
import { TextField } from '@components/inputs/TextField';
import { Button } from '@components/inputs/Button';
import s from '@layout/Filters/components/Filter/Filter.module.sass';

interface Props {
    type: FilterType;
    title: string;
    isSearchField?: boolean;
    isDisplayedFilter?: boolean;
    children?: ReactNode;
    addFilter: (value: string, replaceAll?: (f: string[]) => string[]) => void;
    removeFilter: (value: string) => void;
}

export function Filter({
    type,
    title,
    isSearchField = true,
    isDisplayedFilter = true,
    children,
    addFilter,
    removeFilter
}: Props): ReactElement {
    const [searchParams] = useSearchParams();
    const filters: string[] = useAppSelector((state) => state.filters[type].data);
    const dispatch = useAppDispatch();

    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [isDisplayed, setIsDisplayed] = useState(isDisplayedFilter);
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        setSelectedFilters(searchParams.getAll(type));
        searchParams.has(type) && setIsDisplayed(true);
    }, [searchParams]);

    useEffect(() => {
        dispatch(filtersThunks.fetchFilterValues({ type }));
    }, []);

    const filteredValues: string[] = filters.filter(
        (el) => el.toLowerCase().includes(searchField.toLowerCase()) || selectedFilters.includes(el)
    );

    const changeFilter = ({ isChecked, value }: IReturnValue): void => {
        const query: string = new URLSearchParams([[type, value]]).toString();

        if (isChecked) {
            addFilter(query);
            setSelectedFilters([...selectedFilters, value]);
        } else {
            removeFilter(query);
            setSelectedFilters(selectedFilters.filter((el) => el !== value));
        }
    };

    const changeSearchField = (value: string): void => setSearchField(value);

    const removeSearchField = (): void => setSearchField('');

    const resetFilters = (): void => {
        setSelectedFilters([]);
        addFilter('', (f) => f.filter((el) => !el.includes(type)));
    };

    return (
        <section className={s.filter}>
            <Button
                className={s['filter__header-btn']}
                variant={'text'}
                title={title}
                data-displayed={isDisplayed}
                onClick={() => setIsDisplayed(!isDisplayed)}
            />

            <div className={`${s['filter__wrap']} ${isDisplayed ? s['is-displayed'] : ''}`.trim()}>
                {children ?? (
                    <>
                        {isSearchField && (
                            <div className={s['filter__field-wrap']}>
                                <TextField
                                    className={s['filter__input']}
                                    type={'text'}
                                    name={'search'}
                                    value={searchField}
                                    placeholder={'Поиск'}
                                    onChange={(value) => {
                                        changeSearchField(value);
                                    }}
                                />

                                {searchField && (
                                    <Button
                                        className={`${s['filter__remove-btn']} remove-icon`}
                                        variant={'text'}
                                        onClick={removeSearchField}
                                    />
                                )}
                            </div>
                        )}

                        <ul className={s['filter__list']}>
                            {filteredValues.map((el) => (
                                <li key={el} className={s['filter__item']}>
                                    <Checkbox
                                        name={type}
                                        label={el}
                                        checked={selectedFilters.includes(el)}
                                        onChange={changeFilter}
                                    />
                                </li>
                            ))}
                        </ul>

                        <Button
                            className={s['filter__reset-btn']}
                            variant={'text'}
                            title={'Сбросить'}
                            onClick={resetFilters}
                        />
                    </>
                )}
            </div>
        </section>
    );
}
