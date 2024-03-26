import { Variant } from '@components/Button/Button.types.ts';
import { useBtnClasses } from '@components/Button/hooks/useBtnClasses.ts';

type InitFn = () => Variant;

const initValue: InitFn = (function (): InitFn {
    let idx: number = 0;

    return function (): Variant {
        const values: Variant[] = ['text', 'contained', 'outlined'];
        const variant: Variant = values[idx];

        idx += 1;

        return variant;
    };
})();

describe('Hook useBtnClasses()', () => {
    let mainClass: string;
    let customClass: string | undefined;
    let type: Variant;

    beforeEach(() => {
        mainClass = 'btn';
        customClass = 'active';
        type = initValue();
    });

    test('should create a class based on variant=text', () => {
        expect(useBtnClasses(type, customClass)).toBe(`${mainClass} ${customClass}`);
    });

    test('should create a class based on variant=contained', () => {
        expect(useBtnClasses(type, customClass)).toBe(`${mainClass} btn_${type} ${customClass}`);
    });

    test('should create a class based on variant=outlined', () => {
        expect(useBtnClasses(type, undefined)).toBe(`${mainClass} btn_${type}`);
    });
});
