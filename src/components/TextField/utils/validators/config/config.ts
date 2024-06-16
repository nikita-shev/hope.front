import { ISettings } from '@components/TextField/utils/validators/config/config.types.ts';

export const settings: { [key: string]: ISettings } = {
    text: {
        minLength: 5,
        maxLength: 10
    }
};
