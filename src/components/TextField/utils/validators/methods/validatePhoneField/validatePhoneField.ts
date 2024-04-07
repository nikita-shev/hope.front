import { IError, ISettings } from '@components/TextField/utils/validators';

export const validatePhoneField = (
    value: string,
    { length }: ISettings = { length: 11 }
): IError => {
    const message: string = value === '' ? 'Пустое поле!' : 'Неверный ввод!';

    return !value || value.replace(/\D/g, '').length < length!
        ? { isError: true, message }
        : { isError: false, message: '' };
};
