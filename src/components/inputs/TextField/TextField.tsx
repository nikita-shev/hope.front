import { ChangeEvent, ReactElement } from 'react';
import { ITextField } from '@components/inputs/TextField/TextField.types.ts';
import { validateField } from '@components/inputs/TextField/utils/validateField/validateField.ts';
import { formatPhoneNumber } from '@components/inputs/TextField/utils/formatPhoneNumber/formatPhoneNumber.ts';
import s from '@components/inputs/TextField/TextField.module.sass';

interface Props extends ITextField {
    onChange: (value: string, id?: string, isValid?: boolean) => void;
    isSubmit?: boolean;
}

export function TextField({
    type,
    name,
    value,
    id,
    validation,
    className = '',
    style,
    placeholder,
    isSubmit,
    onChange
}: Props): ReactElement {
    const { isError, message } = validateField(validation, value);
    const isShowError: boolean = Boolean(validation) && Boolean(isSubmit) && isError;
    const combinedClassNames: string = `${className} ${s.input}`.trim();

    const changeValue = (e: ChangeEvent<HTMLInputElement>): void => {
        const currentValue: string = e.currentTarget.value;
        const newValue: string = type === 'tel' ? formatPhoneNumber(currentValue) : currentValue;
        const { isError } = validateField(validation, newValue);

        onChange(newValue, id, !isError);
    };

    const onFocusHandler = (e: ChangeEvent<HTMLInputElement>): void => changeValue(e);

    const onBlurHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        const currentValue: string = e.currentTarget.value;
        const newValue: string = type === 'tel' && currentValue.length < 5 ? '' : currentValue;

        onChange(newValue, id, !isError);
    };

    return (
        <div className={s['text-field']} style={style?.wrap}>
            <input
                className={combinedClassNames}
                style={style?.input}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={changeValue}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
            />

            {isShowError && (
                <p className={s.error} style={style?.text}>
                    {message}
                </p>
            )}
        </div>
    );
}
