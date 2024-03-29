import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { RadioGroup } from '@components/RadioGroup';

type Story = StoryObj<typeof RadioGroup>;

const meta: Meta<typeof RadioGroup> = {
    title: 'UI/RadioGroup',
    component: RadioGroup,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    args: {
        values: [
            {
                id: '1',
                name: 'radio',
                label: 'Radio button 1',
                defaultChecked: true,
                style: { wrap: { marginRight: '10px' } }
            },
            { id: '2', name: 'radio', label: 'Radio button 2' }
        ],
        getData: action('getData')
    }
};

export const Default: Story = {};

export default meta;
