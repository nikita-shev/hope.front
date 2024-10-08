import { ButtonHTMLAttributes, ForwardedRef, forwardRef, ReactElement, ReactNode } from 'react';
import { Variant } from '@components/inputs/Button/Button.types.ts';
import { useBtnClasses } from '@components/inputs/Button/hooks/useBtnClasses.ts';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: Variant;
    children?: ReactNode;
    title?: string;
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
