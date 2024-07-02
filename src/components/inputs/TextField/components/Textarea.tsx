import { ReactElement } from 'react';
import { IControl } from '@components/inputs/TextField/TextField.types.ts';
import s from '@components/inputs/TextField/TextField.module.sass';

interface Props extends IControl {}

export function Textarea({
    value,
    name,
    className,
    style,
    placeholder,
    onChange,
    ...props
}: Props): ReactElement {
    const newClassName: string = `${className} ${s.textarea}`.trim();

    return (
        <textarea
            className={newClassName}
            style={style}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            {...props}></textarea>
    );
}
