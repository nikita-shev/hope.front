import { IError, ISettings } from '@components/TextField/utils/validators';

export const validateTextField = (
    value: string,
    { minLength, maxLength }: ISettings = {}
): IError => {
    const message: string =
        minLength && value.length < minLength
            ? `Минимальное количество символов: ${minLength}`
            : `Максимальное количество символов: ${maxLength}`;

    return (minLength && value.length < minLength) || (maxLength && value.length > maxLength)
        ? { isError: true, message }
        : { isError: false, message: '' };
};
