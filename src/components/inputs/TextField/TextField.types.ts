import { HTMLInputTypeAttribute } from 'react';
import { IControlInlineStyles } from '@/types/InlineStyles.ts';

export type Validation = 'text' | 'email' | 'phone' | 'password' | 'passwordConfirmation';

export interface ITextField {
    type: HTMLInputTypeAttribute;
    name: string;
    value: string;
    id?: string;
    validation?: Validation;
    className?: string;
    style?: IControlInlineStyles;
    placeholder?: string;
}
