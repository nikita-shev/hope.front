import { formatPhoneNumber } from '@components/inputs/TextField/utils/formatPhoneNumber/formatPhoneNumber.ts';

describe('Method formatPhoneNumber()', () => {
    test('should return the formatted phone number for an empty string', () => {
        expect(formatPhoneNumber('')).toBe('+7 (');
    });

    test('should return formatted phone number for random value', () => {
        expect(formatPhoneNumber('(p7ho9ne_-+@')).toBe('+7 (9');
    });

    test('should return the formatted phone number for the string', () => {
        expect(formatPhoneNumber('phone')).toBe('+7 (');
    });

    test('should run without errors', () => {
        const phone: string = '+7 (999) 999-99-99';

        expect(formatPhoneNumber(phone)).toBe(phone);
    });
});
