import { IError, ISettings } from '@components/inputs/TextField/utils/validators';
import { validateTextField } from '@components/inputs/TextField/utils/validators/methods/validateTextField/validateTextField.ts';

export const validatePasswordField = (
    value: string,
    { minLength, maxLength, template = /^[A-Za-z0-9-$_#]+$/g }: ISettings = {
        minLength: 5,
        maxLength: 10,
        template: /^[A-Za-z0-9-$_#]+$/g
    }
): IError => {
    return !template?.test(value)
        ? { isError: true, message: 'Неверный ввод' }
        : validateTextField(value, { minLength, maxLength });
};
