import { Variant } from '@components/Button/Button.types.ts';
import s from '@components/Button/Button.module.sass';

export const useBtnClasses = (type: Variant, customClass: string = ''): string => {
    const mainClass: string = s.btn;
    const universalClass: string = type !== 'text' ? s[`btn--${type}`] : '';

    const classes: string =
        `${customClass} ${mainClass} ${type === 'text' ? '' : `${universalClass}`}`.trim();

    const buttons: { [key: string]: string } = {
        contained: classes,
        outlined: classes,
        text: classes
    };

    return buttons[type];
};
