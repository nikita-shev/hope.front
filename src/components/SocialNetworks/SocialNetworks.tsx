import { ReactElement } from 'react';
import { socialNetworks } from '@components/SocialNetworks/config/config.ts';
import s from '@components/SocialNetworks/SocialNetworks.module.sass';

interface Props {
    title?: string;
    size?: 'small' | 'medium' | 'large';
}

export function SocialNetworks({ title, size = 'medium' }: Props): ReactElement {
    const list: ReactElement[] = socialNetworks.map((el) => {
        const Icon = el.component;

        return (
            <li
                key={el.name}
                className={`${s['social-networks__item']} ${s[`social-networks__item--size_${size}`]}`}>
                <a className={s['social-networks__link']} href={el.link}>
                    <Icon className={s['social-networks__img']} />
                </a>
            </li>
        );
    });

    return (
        <article className={s['social-networks']}>
            <h3 className={s['social-networks__title']}>{title}</h3>

            <ul className={s['social-networks__list']}>{list}</ul>
        </article>
    );
}
