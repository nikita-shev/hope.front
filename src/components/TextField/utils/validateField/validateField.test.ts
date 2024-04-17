import { validateField } from '@components/TextField/utils/validateField/validateField.ts';

describe('Method validateField()', () => {
    test('should run without errors if validation type is not defined', () => {
        const { isError, message } = validateField(undefined, 'Hello World!');

        expect(isError).toBeFalsy();
        expect(message).toBe('');
    });

    test('should run without errors', () => {
        const { isError, message } = validateField('text', 'Hello');

        expect(isError).toBeFalsy();
        expect(message).toBe('');
    });
});
