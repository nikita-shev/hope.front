import { IError, ISettings } from '@components/inputs/TextField/utils/validators';

export const confirmPassword = (
    value: string,
    { verifiableData }: ISettings = { verifiableData: '' }
): IError => {
    const message: string = value === '' ? 'Пустое поле' : 'Введенные пароли не совпадают';

    return value === '' || value !== verifiableData
        ? { isError: true, message }
        : { isError: false, message: '' };
};
