import { IRadioStyles } from 'components/Radio';

export interface IRadioGroup {
    id: string;
    name: string;
    label: string;
    defaultChecked?: boolean;
    style?: IRadioStyles;
}
