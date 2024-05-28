import { CSSProperties, ReactElement } from 'react';
import s from '@components/icons/components/NotFoundIcon/NotFoundIcon.module.sass';

interface Props {
    className?: string;
    style?: CSSProperties;
}

export function NotFoundIcon({ className = '', style }: Props): ReactElement {
    const iconClassName: string = `${className} ${s['not-found']}`.trim();

    return (
        <article className={iconClassName} style={style}>
            <img
                className={s['not-found__img']}
                src="src/assets/images/not-found.gif"
                alt="Товар не найден"
            />

            <span className={s['not-found__text']}>Странно, но ничего нет</span>
        </article>
    );
}
