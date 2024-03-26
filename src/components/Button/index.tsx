import React, { ReactNode } from 'react';
import { Variant } from '@components/Button/Button.types.ts';
import { useBtnClasses } from '@components/Button/hooks/useBtnClasses.ts';

interface Props {
    variant: Variant;
    children?: ReactNode;
    title?: string;
    className?: string;
    onClick: () => void;
}

export function Button({
    variant,
    children,
    title,
    className,
    onClick,
    ...props
}: Props): React.ReactElement {
    const classes: string = useBtnClasses(variant, className);
    const content: ReactNode | string = children ? children : title;

    return (
        <button className={classes} {...props} onClick={onClick}>
            {content}
        </button>
    );
}
