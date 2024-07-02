import { IRadioGroup } from '@components/inputs/RadioGroup';
import { initValue } from '@components/inputs/RadioGroup/utils/initValue.ts';

describe('init value for Radio', () => {
    test('should return new data', () => {
        const data: IRadioGroup[] = [
            {
                id: '1',
                name: 'radio',
                label: 'Test',
                defaultChecked: true
            }
        ];

        const result = initValue(data);

        expect(result.length).toBe(data.length);
        expect(result[0]).toEqual({
            id: '1',
            name: 'radio',
            label: 'Test',
            isChecked: true
        });
    });
});
