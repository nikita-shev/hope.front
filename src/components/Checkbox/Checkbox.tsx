import { useState, ChangeEvent, ReactElement } from 'react';
import { IChoiceControlsStyles } from '@/types/ChoiceControls.ts';
import s from '@components/Checkbox/Checkbox.module.sass';

interface Props {
    label: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    className?: string;
    style?: IChoiceControlsStyles;
    onChange: (value: boolean) => void;
}

export function Checkbox({
    label,
    defaultChecked,
    disabled,
    className = '',
    style,
    onChange,
    ...props
}: Props): ReactElement {
    const [isChecked, setIsChecked] = useState<boolean>(Boolean(defaultChecked));
    const labelClassName: string = `${className} ${s.checkbox}`.trim();

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const newValue: boolean = e.currentTarget.checked;

        setIsChecked(newValue);
        onChange(newValue);
    };

    return (
        <label className={labelClassName} style={style?.wrap} data-disabled={disabled}>
            <input
                style={style?.input}
                type="checkbox"
                checked={isChecked}
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
