import { Validation } from '@components/TextField/TextField.types.ts';
import { IError, settings, validators } from '@components/TextField/utils/validators';

export const validateField = (type: Validation, value: string): IError => {
    return validators[type](value, settings[type]);
};
