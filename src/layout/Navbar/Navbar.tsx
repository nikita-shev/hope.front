import { ReactElement } from 'react';
import { Button } from '@components/inputs/Button';
import { Search } from '@components/Search';
import s from '@layout/Navbar/Navbar.module.sass';

export function Navbar(): ReactElement {
    const menu: { name: string; category: string }[] = [
        { name: 'Футболки', category: 'Футболки' },
        { name: 'Шорты', category: 'Шорты' },
        { name: 'Шапки', category: 'Шапки' }
    ];

    return (
        <nav className={s.navbar}>
            <div className={`${s['navbar__container']} container`}>
                <Button className={s['navbar__btn']} variant={'text'} onClick={() => {}} />

                <ul className={s['navbar__list']}>
                    {menu.map((el) => {
                        return (
                            <li key={el.name}>
                                <a className={s['navbar__link']} href="#">
                                    {el.name}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <Search />
            </div>
        </nav>
    );
}
