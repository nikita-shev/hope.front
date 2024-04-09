import { ReactElement } from 'react';
import { IControl } from '@components/TextField/TextField.types.ts';
import s from '@components/TextField/TextField.module.sass';

interface Props extends IControl {}

export function Input({
    type,
    name,
    value,
    className,
    style,
    placeholder,
    onChange,
    ...props
}: Props): ReactElement {
    const newClassName: string = `${s.input} ${className}`.trim();

    return (
        <input
            className={newClassName}
            style={style}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            {...props}
        />
    );
}
