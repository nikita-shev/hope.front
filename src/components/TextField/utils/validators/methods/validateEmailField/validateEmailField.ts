import { IError, ISettings } from '@components/TextField/utils/validators';

export const validateEmailField = (
    value: string,
    { template }: ISettings = {
        template: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
    }
): IError => {
    const message: string = value === '' ? 'Пустое поле' : 'Неверный ввод';

    return !value || !template?.test(value)
        ? { isError: true, message }
        : { isError: false, message: '' };
};
