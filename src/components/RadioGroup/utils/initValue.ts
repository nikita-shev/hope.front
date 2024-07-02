import { IRadio } from '@components/inputs/Radio';
import { IRadioGroup } from '@components/RadioGroup';

export const initValue = (value: IRadioGroup[]): IRadio[] =>
    value.map(
        ({ id, name, label, defaultChecked, style }): IRadio => ({
            id,
            name,
            label,
            isChecked: Boolean(defaultChecked),
            style
        })
    );
