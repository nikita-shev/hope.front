import { ReactElement, ReactNode } from 'react';
import s from '@components/Paper/Paper.module.sass';

interface Props {
    content?: ReactElement;
    children?: ReactNode;
    settings?: {
        isHover?: boolean;
    };
    className?: string;
}

export function Paper({
    content,
    children,
    settings = { isHover: false },
    className = ''
}: Props): ReactElement {
    const { isHover } = settings;

    return (
        <article className={`${className} ${s.paper}`.trim()} data-hover={isHover || null}>
            {content || children}
        </article>
    );
}
