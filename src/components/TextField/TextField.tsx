import { ChangeEvent, ReactElement } from 'react';
import { Control, HTMLElements, ITextField } from '@components/TextField/TextField.types.ts';
import { Input } from '@components/TextField/components/Input.tsx';
import { Textarea } from '@components/TextField/components/Textarea.tsx';
import { validateField } from '@components/TextField/utils/validateField/validateField.ts';
import { formatPhoneNumber } from '@components/TextField/utils/formatPhoneNumber/formatPhoneNumber.ts';
import s from '@components/TextField/TextField.module.sass';

interface IControls {
    [key: string]: Control;
}

interface Props extends ITextField {
    isSubmit?: boolean;
    onChange: (id: string, value: string, isValid: boolean) => void;
}

export function TextField({
    id,
    variant,
    value,
    validation,
    type,
    name,
    className,
    style,
    placeholder,
    isSubmit,
    onChange,
    ...props
}: Props): ReactElement {
    const { isError, message } = validateField(validation, value);
    const isShowError: boolean = Boolean(isSubmit) && isError;

    const controls: IControls = {
        standard: Input,
        multiline: Textarea
    };
    const Control: Control = controls[variant];

    const changeValue = (e: ChangeEvent<HTMLElements>): void => {
        const currentValue: string = e.currentTarget.value;
        const newValue: string = type === 'tel' ? formatPhoneNumber(currentValue) : currentValue;
        const { isError } = validateField(validation, newValue);

        onChange(id, newValue, !isError);
    };

    const onFocusHandler = (e: ChangeEvent<HTMLElements>): void => changeValue(e);

    const onBlurHandler = (e: ChangeEvent<HTMLElements>): void => {
        const currentValue: string = e.currentTarget.value;
        const newValue: string = type === 'tel' && currentValue.length < 5 ? '' : currentValue;

        onChange(id, newValue, !isError);
    };

    return (
        <div className={s['text-field']} style={style?.wrap}>
            <Control
                className={className}
                style={style?.input}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={changeValue}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                {...props}
            />

            {isShowError && (
                <p className={s.error} style={style?.text}>
                    {message}
                </p>
            )}
        </div>
    );
}
