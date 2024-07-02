import { ReactElement } from 'react';
import { navTools } from '@components/NavTools/values.ts';
import { Button } from '@components/inputs/Button';
import s from '@components/NavTools/NavTools.module.sass';

interface Props {
    className?: string;
}

export function NavTools({ className }: Props): ReactElement {
    return (
        <div className={`${className} ${s['nav-tools']}`}>
            {navTools.map((el) => {
                return (
                    <Button
                        key={el.id}
                        className={s[el.className]}
                        variant={'text'}
                        data-content={el.content ?? 0}
                        onClick={() => {}}
                    >
                        <img
                            className={`${s[`${el.className}__img`]}`}
                            src={`src/assets/images/icons/icons.svg#${el.icon}`}
                            alt={el.alt}
                        />

                        <span className={`${s[`${el.className}__text`]}`}>{el.text}</span>
                    </Button>
                );
            })}
        </div>
    );
}
