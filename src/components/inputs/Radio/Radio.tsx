import { IControlInlineStyles } from '@/types/InlineStyles.ts';
import s from '@components/inputs/Radio/Radio.module.sass';

interface Props {
    id: string;
    name: string;
    label: string;
    isChecked: boolean;
    style?: IControlInlineStyles;
    onChange: (id: string) => void;
}

export function Radio({ id, name, label, isChecked, style, onChange, ...props }: Props) {
    const handleRadioChange = (): void => onChange(id);

    return (
        <label className={s.radio} style={style?.wrap}>
            <input
                style={style?.input}
                type="radio"
                name={name}
                checked={isChecked}
                data-custom-radio="true"
                {...props}
                onChange={handleRadioChange}
            />
            <span className={s.radio__text} style={style?.text}>
                {label}
            </span>
        </label>
    );
}
