import { confirmPassword } from '@components/inputs/TextField/utils/validators/methods/confirmPassword/confirmPassword.ts';
import { ISettings } from '@components/inputs/TextField/utils/validators';

describe('Method confirmPassword()', () => {
    const settings: ISettings = {
        verifiableData: 'password'
    };

    test('should run with the error "Empty field"', () => {
        const { isError, message } = confirmPassword('');

        expect(isError).toBeTruthy();
        expect(message).toBe('Пустое поле');
    });

    test('should run with the error "Password mismatch"', () => {
        const { isError, message } = confirmPassword('pass', settings);

        expect(isError).toBeTruthy();
        expect(message).toBe('Введенные пароли не совпадают');
    });

    test('should run without errors', () => {
        const { isError, message } = confirmPassword('password', settings);

        expect(isError).toBeFalsy();
        expect(message).toBe('');
    });
});
