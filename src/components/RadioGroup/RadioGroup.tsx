import { useEffect, useState } from 'react';
import { IRadioGroup } from '@components/RadioGroup/RadioGroup.types.ts';
import { IRadio, Radio } from '@components/Radio';
import { initValue } from '@components/RadioGroup/utils/initValue.ts';

interface Props {
    values: IRadioGroup[];
    getData?: (value: IRadio) => void;
}

export function RadioGroup({ values, getData }: Props) {
    const [radioGroup, setRadioGroup] = useState<IRadio[]>(() => initValue(values));

    useEffect(() => {
        if (getData) {
            const { id, name, label, isChecked } = radioGroup.find((el) => el.isChecked) as IRadio;

            getData({ id, name, label, isChecked });
        }
    }, [radioGroup, getData]);

    const changeRadioGroup = (id: string): void => {
        setRadioGroup(radioGroup.map((el) => ({ ...el, isChecked: el.id === id })));
    };

    return radioGroup.map((el) => {
        return (
            <Radio
                key={el.id}
                id={el.id}
                name={el.name}
                label={el.label}
                isChecked={el.isChecked}
                style={el.style}
                onChange={changeRadioGroup}
            />
        );
    });
}
