import { IControlInlineStyles } from '@/types/InlineStyles.ts';

export interface IRadioGroup {
    id: string;
    name: string;
    label: string;
    defaultChecked?: boolean;
    style?: IControlInlineStyles;
}
