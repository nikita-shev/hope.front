import React, { ReactNode } from 'react';
import { Variant } from '@components/Button/Button.types.ts';

interface Props {
    variant: Variant;
    children?: ReactNode;
    title?: string;
    className?: string;
    onClick: () => void;
}

export function Button({
    children,
    title,
    className,
    onClick,
    ...props
}: Props): React.ReactElement {
    const content: ReactNode | string = children ? children : title;

    return (
        <button className={className} {...props} onClick={onClick}>
            {content}
        </button>
    );
}
