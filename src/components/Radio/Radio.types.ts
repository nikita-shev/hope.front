import { IControlInlineStyles } from '@/types/InlineStyles.ts';

export interface IRadio {
    id: string;
    name: string;
    label: string;
    isChecked: boolean;
    style?: IControlInlineStyles;
}
