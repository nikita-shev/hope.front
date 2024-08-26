import { ChangeEvent, ReactElement } from 'react';
import { IControlInlineStyles } from '@/types/InlineStyles.ts';
import { IReturnValue } from '@components/inputs/Checkbox/Checkbox.types.ts';
import s from '@components/inputs/Checkbox/Checkbox.module.sass';

interface Props {
    name: string;
    label: string;
    checked: boolean;
    disabled?: boolean;
    className?: string;
    style?: IControlInlineStyles;
    onChange: (value: IReturnValue) => void;
}

export function Checkbox({
    name,
    label,
    checked,
    disabled,
    className = '',
    style,
    onChange,
    ...props
}: Props): ReactElement {
    const labelClassName: string = `${className} ${s.checkbox}`.trim();

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>): void => {
        onChange({ isChecked: e.currentTarget.checked, value: label });
    };

    return (
        <label className={labelClassName} style={style?.wrap} data-disabled={disabled}>
            <input
                style={style?.input}
                type="checkbox"
                name={name}
                checked={checked}
                disabled={disabled}
                data-custom-checkbox="true"
                {...props}
                onChange={handleCheckboxChange}
            />
            <span className={s.checkbox__text} style={style?.text}>
                {label}
            </span>
        </label>
    );
}
