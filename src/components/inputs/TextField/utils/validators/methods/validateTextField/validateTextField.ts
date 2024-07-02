import { IError, ISettings } from '@components/inputs/TextField/utils/validators';

export const validateTextField = (
    value: string,
    { minLength, maxLength }: ISettings = { minLength: 5, maxLength: 10 }
): IError => {
    const message: string =
        minLength && value.length < minLength
            ? `Минимальное количество символов: ${minLength}`
            : `Максимальное количество символов: ${maxLength}`;

    return (minLength && value.length < minLength) || (maxLength && value.length > maxLength)
        ? { isError: true, message }
        : { isError: false, message: '' };
};
