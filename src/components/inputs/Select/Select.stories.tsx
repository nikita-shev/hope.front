import { Meta, StoryObj } from '@storybook/react';
import { Select } from '@components/inputs/Select';

type Story = StoryObj<typeof Select>;

const meta: Meta<typeof Select> = {
    title: 'INPUTS/Select',
    component: Select,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    args: {
        options: [
            { title: 'Красный' },
            { title: 'Чёрный' },
            { title: 'Зелёный' },
            { title: 'Синий' },
            { title: 'Серый' }
        ]
    }
};

export const Default: Story = {};

export const SelectWithColor: Story = {
    args: {
        options: [
            { title: 'Красный', param: { type: 'color', value: '#ff0000' } },
            { title: 'Чёрный', param: { type: 'color', value: '#000000' } },
            { title: 'Зелёный', param: { type: 'color', value: '#008000' } },
            { title: 'Синий', param: { type: 'color', value: '#0000ff' } },
            { title: 'Серый', param: { type: 'color', value: '#808080' } }
        ]
    }
};

export default meta;
