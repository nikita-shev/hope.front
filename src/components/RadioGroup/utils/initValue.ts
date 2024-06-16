import { IRadio } from '@components/Radio';
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
