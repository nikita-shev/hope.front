import React, { useState, ChangeEvent } from 'react';
import s from '@components/Checkbox/Checkbox.module.sass';

interface Props {
    label: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    style?: React.CSSProperties;
    onChange: (value: boolean) => void;
}

export function Checkbox({
    label,
    defaultChecked,
    disabled,
    style,
    onChange,
    ...props
}: Props): React.ReactElement {
    const [isChecked, setIsChecked] = useState<boolean>(Boolean(defaultChecked));

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const newValue: boolean = e.currentTarget.checked;

        setIsChecked(newValue);
        onChange(newValue);
    };

    return (
        <label className={s.checkbox} style={style} data-disabled={disabled}>
            <input
                type="checkbox"
                checked={isChecked}
                disabled={disabled}
                data-custom-checkbox="true"
                {...props}
                onChange={handleCheckboxChange}
            />
            <span className={s.checkboxText}>{label}</span>
        </label>
    );
}
