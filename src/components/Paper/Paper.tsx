import { ReactElement, ReactNode } from 'react';
import s from '@components/Paper/Paper.module.sass';

interface Props {
    content?: ReactElement;
    children?: ReactNode;
    settings?: {
        isHover?: boolean;
    };
}

export function Paper({ content, children, settings = { isHover: false } }: Props): ReactElement {
    const { isHover } = settings;

    return (
        <article className={s.paper} data-hover={isHover || null}>
            {content || children}
        </article>
    );
}
