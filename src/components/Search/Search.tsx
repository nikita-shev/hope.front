import { ChangeEvent, ReactElement, useState } from 'react';
import { Button } from '@components/inputs/Button';

import s2 from '@components/inputs/TextField/TextField.module.sass'; // fix
import s from '@components/Search/Search.module.sass';

interface Props {
    className?: string;
}

export function Search({ className }: Props): ReactElement {
    const [search, setSearch] = useState('');
    const isEmptyField: boolean = !search.length;

    const products = ['text1', 'text2']; // fix

    const changeSearch = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.currentTarget.value);
    const removeSearch = () => setSearch('');

    const RemoveBtn: boolean | ReactElement = !isEmptyField && (
        <Button
            className={`${s['search__remove-btn']} remove-icon`}
            variant={'text'}
            onClick={removeSearch}
        />
    );

    return (
        <article className={`${className} ${s.search}`}>
            <h2 className={s['search__title']}>Поиск товаров</h2>

            <div className={s['search__wrap']}>
                <input
                    className={`${s['search__input']} ${s2.input}`}
                    type="search"
                    value={search.trim()}
                    placeholder="Что Вы хотите найти?"
                    onChange={changeSearch}
                />

                {RemoveBtn}

                <Button
                    className={s['search__btn']}
                    variant={'text'}
                    disabled={isEmptyField}
                    onClick={() => {}}
                >
                    <img src="src/assets/images/icons/icons.svg#search" alt="Поиск товаров" />
                </Button>
            </div>

            {isEmptyField && (
                <ul className={`${s['search__search-result']} ${s['search-result']}`}>
                    {products.map((el, idx) => {
                        return (
                            <li key={idx} className={s['search-result__item']}>
                                <Button
                                    className={s['search-result__btn']}
                                    variant={'text'}
                                    title={el}
                                    onClick={() => {}}
                                />
                            </li>
                        );
                    })}
                </ul>
            )}
        </article>
    );
}
