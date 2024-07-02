import { ReactElement } from 'react';
import { Button } from '@components/inputs/Button';
import { SocialNetworks } from '@components/SocialNetworks';

import s from '@layout/Subscription/Subscription.module.sass';
import s2 from '@components/TextField/TextField.module.sass';

export function Subscription(): ReactElement {
    return (
        <article className={s.subscription}>
            <div className={`${s['subscription__container']} container`}>
                <h2 className={`${s['subscription__section-title']} section-title`}>
                    Подписывайтесь на&nbsp;наши новости
                </h2>

                <p className={s['subscription__subtitle']}>
                    и&nbsp;получите промокод на&nbsp;скидку
                </p>

                <form
                    className={`${s['subscription__subscription-form']} ${s['subscription-form']}`}
                    noValidate
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <input
                        className={`${s['input']} ${s2['input']}`}
                        type="email"
                        placeholder="Введите Ваш e-mail"
                    />

                    <Button
                        className={s['subscription-form__btn']}
                        variant={'contained'}
                        title="Отправить"
                        onClick={() => {}}
                    />
                </form>

                <SocialNetworks
                    className={s['subscription__social-networks']}
                    title="Следите за нами"
                />
            </div>
        </article>
    );
}
