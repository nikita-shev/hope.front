import { ReactElement } from 'react';
import s from '@components/Paper/Paper.module.sass';

interface Props {
    content: ReactElement;
    settings?: {
        isHover?: boolean;
    };
}

export function Paper({ content, settings = { isHover: false } }: Props): ReactElement {
    const { isHover } = settings;

    return (
        <article className={s.paper} data-hover={isHover || null}>
            <div className={s['paper__wrap']}>{content}</div>
        </article>
    );
}
