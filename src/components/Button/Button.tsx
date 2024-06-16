import { CSSProperties, ForwardedRef, forwardRef, ReactElement, ReactNode } from 'react';
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

export const Button = forwardRef(function (
    { variant, children, title, className, onClick, ...props }: Props,
    ref: ForwardedRef<HTMLButtonElement | null>
): ReactElement {
    const classes: string = useBtnClasses(variant, className);
    const content: ReactNode | string = children ? children : title;

    return (
        <button className={classes} ref={ref} {...props} onClick={onClick}>
            {content}
        </button>
    );
});

Button.displayName = 'Button';
