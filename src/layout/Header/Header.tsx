import { ReactElement } from 'react';
import { Button } from '@components/Button';
import { NavTools } from '@components/NavTools';
import s from '@layout/Header/Header.module.sass';

export function Header(): ReactElement {
    return (
        <header className={s.header}>
            <div className={`${s['header__container']} container`}>
                <address className={`${s['header__contacts']} ${s.contacts}`}>
                    <a className={s['contacts__link']} href="tel:89871880808">
                        8 (987) 188 08 08
                    </a>
                    <a className={s['contacts__link']} href="tel:89683550505">
                        8 (968) 355 05 05
                    </a>
                </address>

                <Button
                    className={s['header__modal']}
                    variant={'outlined'}
                    title="Перезвоните мне"
                    onClick={() => {}}
                />

                <a className={`${s['header__logo']} ${s.logo}`} href="#">
                    <img
                        className={s['logo__img']}
                        src="src/assets/images/logo.webp"
                        alt="Логотип Hope"
                    />
                </a>
                <h1 className={s['logo__title']}>Интернет-магазин Hope</h1>

                <NavTools className={s['header__nav-tools']} />
            </div>
        </header>
    );
}
