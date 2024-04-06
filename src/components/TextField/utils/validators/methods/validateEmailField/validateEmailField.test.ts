import { validateEmailField } from '@components/TextField/utils/validators/methods/validateEmailField/validateEmailField.ts';

describe('Method validateEmailField()', () => {
    test('should run with the error "Invalid input"', () => {
        const { isError, message } = validateEmailField('_test~email@q.onlyok');

        expect(isError).toBeTruthy();
        expect(message).toBe('Неверный ввод!');
    });

    test('should run with the error "Empty field"', () => {
        const { isError, message } = validateEmailField('');

        expect(isError).toBeTruthy();
        expect(message).toBe('Пустое поле!');
    });

    test('should run without errors', () => {
        const { isError, message } = validateEmailField('good.email@email.com');

        expect(isError).toBeFalsy();
        expect(message).toBe('');
    });
});
