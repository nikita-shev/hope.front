import { validatePhoneField } from '@components/TextField/utils/validators/methods/validatePhoneField/validatePhoneField.ts';

describe('Method validatePhoneField()', () => {
    test('should run with the error "Empty field"', () => {
        const { isError, message } = validatePhoneField('');

        expect(isError).toBeTruthy();
        expect(message).toBe('Пустое поле!');
    });

    test('should run with the error "Invalid input"', () => {
        const { isError, message } = validatePhoneField('+7 (999) 99n - 99 - 9N');

        expect(isError).toBeTruthy();
        expect(message).toBe('Неверный ввод!');
    });

    test('should run without errors', () => {
        const { isError, message } = validatePhoneField('+7 (999) 999 - 99 - 99');

        expect(isError).toBeFalsy();
        expect(message).toBe('');
    });
});
