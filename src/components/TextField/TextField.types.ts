import { HTMLInputTypeAttribute, InputHTMLAttributes, ReactElement } from 'react';
import { IControlInlineStyles } from '@/types/ChoiceControls.ts';

export type Validation = 'text' | 'email' | 'phone' | 'password' | 'passwordConfirmation';
export type HTMLElements = HTMLInputElement | HTMLTextAreaElement;
export type Control = (props: IControl) => ReactElement;

export interface IControl extends InputHTMLAttributes<HTMLElements> {}

export interface ITextField {
    id: string;
    variant: 'standard' | 'multiline';
    value: string;
    validation: Validation;
    type?: HTMLInputTypeAttribute;
    name?: string;
    className?: string;
    style?: IControlInlineStyles;
    placeholder?: string;
}
