import { CSSProperties, ReactElement, useEffect, useState } from 'react';
import { IOption, IReturnValue } from '@components/inputs/Select/Select.types.ts';
import { useListVisibility } from '@components/inputs/Select/hooks/useListVisibility.ts';
import { Button } from '@components/inputs/Button';
import s from '@components/inputs/Select/Select.module.sass';

interface Props {
    options: IOption[];
    selected?: number; // rename
    children?: ReactElement;
    className?: string;
    style?: CSSProperties;
    onChange: (value: IReturnValue) => void;
}

export function Select({
    options,
    selected,
    children,
    className = '',
    style,
    onChange
}: Props): ReactElement {
    const [selectedOption, setSelectedOption] = useState<IOption>(options[0]);
    const [isShowList, setIsShowList] = useState<boolean>(false);
    const [headerRef, listBtnRef] = useListVisibility(isShowList, () => setIsShowList(!isShowList));

    useEffect(() => {
        const option = options.find((el) => el.order === selected);
        option && setSelectedOption(option);
    }, [selected]);

    const toggleDisplay = (): void => setIsShowList(!isShowList);

    const selectOption = (option: IOption): void => {
        setSelectedOption(option);
        toggleDisplay();

        onChange({ value: option.order ?? 0 });
    };

    const list: ReactElement[] = options
        .filter((el) => el.title !== selectedOption.title)
        .map((el) => {
            return (
                <li
                    key={el.title}
                    className={s['select__item']}
                    style={{ '--product-color': el.param?.value }}
                >
                    <Button
                        className={`${s['select__btn--list']} ${s['select__btn']}`}
                        ref={listBtnRef}
                        variant={'text'}
                        title={el.title}
                        data-param={el.param?.type}
                        onClick={() => selectOption(el)}
                    />
                </li>
            );
        });

    return (
        <article className={s.select}>
            {children}

            <div className={`${className} ${s['select__wrap']}`.trim()} style={style}>
                <Button
                    className={`${s['select__btn']} ${s['select__btn--header']}`}
                    style={{ '--product-color': selectedOption.param?.value }}
                    ref={headerRef}
                    variant={'text'}
                    title={selectedOption.title}
                    data-param={selectedOption.param?.type}
                    onClick={toggleDisplay}
                />

                {isShowList && <ul className={s['select__list']}>{list}</ul>}
            </div>
        </article>
    );
}
