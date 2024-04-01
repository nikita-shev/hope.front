import { IChoiceControlsStyles } from '@/types/ChoiceControls.ts';

export interface IRadio {
    id: string;
    name: string;
    label: string;
    isChecked: boolean;
    style?: IChoiceControlsStyles;
}
