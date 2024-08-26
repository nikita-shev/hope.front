import { ReactElement, useState } from 'react';
import { ITextField, TextField } from '@components/inputs/TextField';
import { Button } from '@components/inputs/Button';
import s from '@layout/Filters/components/Price/Price.module.sass';

// interface Props {
//     addFilter: (value: string, replaceAll?: (f: string[]) => string[]) => void;
// }

export function Price(): ReactElement {
    const [fields, setFields] = useState<ITextField[]>([
        { id: '0', name: 'price', type: 'number', value: '', placeholder: '0' },
        { id: '1', name: 'price', type: 'number', value: '', placeholder: '9 999' }
    ]);

    const removeValue = (id: string): void =>
        setFields(fields.map((el) => (el.id === id ? { ...el, value: '' } : el)));

    return (
        <section className={s.price}>
            {fields.map((el) => {
                return (
                    <div key={el.id} className={s['price__wrap']}>
                        <TextField
                            className={s['price__input']}
                            onChange={(value, id) => {
                                setFields(
                                    fields.map((el) => (el.id === id ? { ...el, value } : el))
                                );
                            }}
                            {...el}
                        />

                        {el.value && (
                            <Button
                                className={`${s['price__remove-btn']} remove-icon`}
                                variant={'text'}
                                onClick={() => removeValue(el.id as string)}
                            ></Button>
                        )}
                    </div>
                );
            })}
        </section>
    );
}
