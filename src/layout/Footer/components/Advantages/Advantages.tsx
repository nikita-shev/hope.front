import { ReactElement } from 'react';
import s from '@layout/Footer/components/Advantages/Advantages.module.sass';

export function Advantages(): ReactElement {
    return (
        <section className={s.advantages}>
            <div className={`${s['advantages__container']} container`}>
                <h2 className={s['advantages__title']}>Преимущества</h2>

                <ul className={s['advantages__list']}>
                    <li
                        className={`${s['advantages__item']} ${s['advantages__item--img_experience']}`}
                    >
                        15&nbsp;лет в&nbsp;оффлайне и&nbsp;5&nbsp;лет в&nbsp;интернете
                    </li>
                    <li className={`${s['advantages__item']} ${s['advantages__item--img_refund']}`}>
                        2&nbsp;недели на&nbsp;обмен и&nbsp;возврат товара
                    </li>
                    <li className={`${s['advantages__item']} ${s['advantages__item--img_check']}`}>
                        Товар проверяем перед отправкой
                    </li>
                    <li
                        className={`${s['advantages__item']} ${s['advantages__item--img_discount']}`}
                    >
                        Накопительные скидки, подарки и&nbsp;акции!
                    </li>
                    <li
                        className={`${s['advantages__item']} ${s['advantages__item--img_delivery']}`}
                    >
                        Бесплатная доставка от&nbsp;5000&nbsp;руб.&nbsp;по&nbsp;России
                    </li>
                </ul>
            </div>
        </section>
    );
}
