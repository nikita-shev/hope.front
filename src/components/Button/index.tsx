import { CSSProperties, ReactElement, ReactNode } from 'react';
import { Variant } from '@components/Button/Button.types.ts';
import { useBtnClasses } from '@components/Button/hooks/useBtnClasses.ts';

interface Props {
    variant: Variant;
    children?: ReactNode;
    title?: string;
    className?: string;
    style?: CSSProperties;
    onClick: () => void;
}

export function Button({
    variant,
    children,
    title,
    className,
    onClick,
    ...props
}: Props): ReactElement {
    const classes: string = useBtnClasses(variant, className);
    const content: ReactNode | string = children ? children : title;

    return (
        <button className={classes} {...props} onClick={onClick}>
            {content}
        </button>
    );
}
