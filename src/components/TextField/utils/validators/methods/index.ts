import { IError, ISettings } from '@components/TextField/utils/validators';
import { validateTextField } from '@components/TextField/utils/validators/methods/validateTextField/validateTextField.ts';
import { validateEmailField } from '@components/TextField/utils/validators/methods/validateEmailField/validateEmailField.ts';

interface IValidators {
    [key: string]: (value: string, settings?: ISettings) => IError;
}

export const validators: IValidators = {
    text: validateTextField,
    email: validateEmailField
};
