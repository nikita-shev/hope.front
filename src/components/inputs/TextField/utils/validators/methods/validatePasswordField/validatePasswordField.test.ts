import { validatePasswordField } from '@components/inputs/TextField/utils/validators/methods/validatePasswordField/validatePasswordField.ts';
import { ISettings } from '@components/inputs/TextField/utils/validators';

describe('Method validatePasswordField()', () => {
    const settings: ISettings = {
        minLength: 5,
        maxLength: 10
    };

    test('should return error for a string whose length is less than "minLength"', () => {
        const { isError, message } = validatePasswordField('1234', settings);

        expect(isError).toBeTruthy();
        expect(message).toBe(`Минимальное количество символов: ${settings.minLength}`);
    });
    test('should return error for string whose length is greater than "maxLength"', () => {
        const { isError, message } = validatePasswordField('1A2d3q3L4p5', settings);

        expect(isError).toBeTruthy();
        expect(message).toBe(`Максимальное количество символов: ${settings.maxLength}`);
    });

    test('should run with the error "Invalid input"', () => {
        const { isError, message } = validatePasswordField('12_%34', settings);

        expect(isError).toBeTruthy();
        expect(message).toBe('Неверный ввод');
    });

    test('should run without errors', () => {
        const { isError, message } = validatePasswordField('1234qU3-', settings);

        expect(isError).toBeFalsy();
        expect(message).toBe('');
    });

    test('should run correctly without specifying settings', () => {
        const { isError, message } = validatePasswordField('1234qU3-');

        expect(isError).toBeFalsy();
        expect(message).toBe('');
    });
});
