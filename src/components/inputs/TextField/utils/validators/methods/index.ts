import { IError, ISettings } from '@components/inputs/TextField/utils/validators';
import { validateTextField } from '@components/inputs/TextField/utils/validators/methods/validateTextField/validateTextField.ts';
import { validateEmailField } from '@components/inputs/TextField/utils/validators/methods/validateEmailField/validateEmailField.ts';
import { validatePhoneField } from '@components/inputs/TextField/utils/validators/methods/validatePhoneField/validatePhoneField.ts';
import { validatePasswordField } from '@components/inputs/TextField/utils/validators/methods/validatePasswordField/validatePasswordField.ts';
import { confirmPassword } from '@components/inputs/TextField/utils/validators/methods/confirmPassword/confirmPassword.ts';

interface IValidators {
    [key: string]: (value: string, settings?: ISettings) => IError;
}

export const validators: IValidators = {
    text: validateTextField,
    email: validateEmailField,
    phone: validatePhoneField,
    password: validatePasswordField,
    passwordConfirmation: confirmPassword
};
