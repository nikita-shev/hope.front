import { ReactElement } from 'react';
import { Button } from '@components/inputs/Button';
import { SocialNetworks } from '@components/SocialNetworks';
import { Advantages } from '@layout/Footer/components/Advantages/Advantages.tsx';
import { ScrollTop } from '@layout/Footer/components/ScrollTop/ScrollTop.tsx';
import { useFooter } from '@layout/Footer/hooks/useFooter.tsx';
import s from '@layout/Footer/Footer.module.sass';

export function Footer(): ReactElement {
    const { pages, customerAssistance, profile } = useFooter();

    return (
        <>
            <Advantages />

            <footer className={s.footer}>
                <div className="container">
                    <h2 className={s['footer__title']}>Дополнительная навигация</h2>

                    <div className={s['footer__wrap']}>
                        <div className={`${s['nav-section']} ${s['nav-section--contacts']}`}>
                            <h3 className={s['nav-section__title']}>Свяжитесь с нами</h3>

                            <ul className={s['nav-section__list']}>
                                <li className={s['nav-section__item']}>
                                    <a className={s['nav-section__link']} href="tel:89871880808">
                                        8 (987) 188 08 08
                                    </a>
                                </li>
                                <li className={s['nav-section__item']}>
                                    <Button
                                        className={s['nav-section__btn']}
                                        variant={'contained'}
                                        title="Перезвоните мне"
                                        onClick={() => {}}
                                    />
                                </li>

                                {pages}
                            </ul>
                        </div>

                        <div className={`${s['nav-section']} ${s['nav-section--help']}`}>
                            <h3 className={s['nav-section__title']}>Помощь</h3>

                            <ul className={s['nav-section__list']}>{customerAssistance}</ul>
                        </div>

                        <div className={s['nav-section']}>
                            <h3 className={s['nav-section__title']}>Мой кабинет</h3>

                            <ul className={s['nav-section__list']}>{profile}</ul>
                        </div>

                        <div className={`${s['footer__delivery']} ${s['delivery']}`}>
                            <h3 className={s['delivery__title']}>Быстрая доставка</h3>

                            <a className={s['delivery__link']} href="#">
                                <img
                                    className={s['delivery__logo']}
                                    src="src/assets/images/mail.webp"
                                    alt="Доставка 'Почта России'"
                                />
                            </a>
                        </div>

                        <SocialNetworks
                            className={s['footer__social-networks']}
                            title="Добавляйся к нам"
                        />
                    </div>

                    <small className={s['footer__copyright']}>
                        &copy;&nbsp;www.hope.ru 2024. Все&nbsp;права&nbsp;защищены.
                    </small>

                    <ScrollTop />
                </div>
            </footer>
        </>
    );
}
