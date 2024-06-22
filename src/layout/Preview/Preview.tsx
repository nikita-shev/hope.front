import { ReactElement } from 'react';
import s from '@layout/Preview/Preview.module.sass';

export function Preview(): ReactElement {
    return (
        <section className={s.preview}>
            <div className="container">
                <h2 className={s['preview__section-title']}>Популярные категории товаров</h2>

                <div className={s['preview__wrap']}>
                    <a
                        className={`${s['preview__content']} ${s['preview__content--primary']}`}
                        href="#"
                    >
                        <img
                            className={s['preview__img']}
                            src="src/assets/images/preview/clothes.webp"
                            alt="Детская одежда"
                        />
                        <span className={s['preview__description']}>Детская одежда</span>
                    </a>

                    <a className={s['preview__content']} href="#">
                        <img
                            className={s['preview__img']}
                            src="src/assets/images/preview/linen.webp"
                            alt="Постельное белье"
                        />
                        <span className={s['preview__description']}>Постельное белье</span>
                    </a>

                    <a className={s['preview__content']} href="#">
                        <img
                            className={s['preview__img']}
                            src="src/assets/images/preview/dishes.webp"
                            alt="Детская посуда"
                        />
                        <span className={s['preview__description']}>Детская посуда</span>
                    </a>

                    <a
                        className={`${s['preview__content']} ${s['preview__content--aside']}`}
                        href="#"
                    >
                        <img
                            className={s['preview__img']}
                            src="src/assets/images/preview/toys.webp"
                            alt="Корзины для игрушек"
                        />
                        <span className={s['preview__description']}>Корзины для игрушек</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
