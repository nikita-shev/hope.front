import { Validation } from '@components/inputs/TextField/TextField.types.ts';
import { IError, settings, validators } from '@components/inputs/TextField/utils/validators';

export const validateField = (type: Validation | undefined, value: string): IError => {
    if (!type) return { isError: false, message: '' };

    return validators[type](value, settings[type]);
};
