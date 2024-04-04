import { validateTextField } from '@components/TextField/utils/validators/methods/validateTextField/validateTextField.ts';

describe('Method validateTextField()', () => {
    const settings: { minLength: number; maxLength: number } = {
        minLength: 5,
        maxLength: 12
    };

    test('should validate for empty line with error', () => {
        const { isError, message } = validateTextField('', settings);

        expect(isError).toBeTruthy();
        expect(message).toBe(`Минимальное количество символов: ${settings.minLength}`);
    });

    test('should return error for string length less than the minimum', () => {
        const { isError, message } = validateTextField('Hi', settings);

        expect(isError).toBeTruthy();
        expect(message).toBe(`Минимальное количество символов: ${settings.minLength}`);
    });

    test('should run without errors for a string of length "minLength"', () => {
        const { isError, message } = validateTextField('Hello', settings);

        expect(isError).toBeFalsy();
        expect(message).toBe('');
    });

    test('should run without errors for the specified range', () => {
        const { isError, message } = validateTextField('Hello World', settings);

        expect(isError).toBeFalsy();
        expect(message).toBe('');
    });

    test('should run without errors for a string of length "maxLength"', () => {
        const { isError, message } = validateTextField('Hello World!', settings);

        expect(isError).toBeFalsy();
        expect(message).toBe('');
    });

    test('should return error for string whose length is greater than "maxLength"', () => {
        const { isError, message } = validateTextField('Hello. My name is ...', settings);

        expect(isError).toBeTruthy();
        expect(message).toBe(`Максимальное количество символов: ${settings.maxLength}`);
    });

    test('should work correctly without specifying settings', () => {
        const { isError, message } = validateTextField('Hello', undefined);

        expect(isError).toBeFalsy();
        expect(message).toBe('');
    });
});
