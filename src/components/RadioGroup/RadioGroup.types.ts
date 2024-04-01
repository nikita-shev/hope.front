import { IChoiceControlsStyles } from '@/types/ChoiceControls.ts';

export interface IRadioGroup {
    id: string;
    name: string;
    label: string;
    defaultChecked?: boolean;
    style?: IChoiceControlsStyles;
}
