import { Meta, StoryObj } from '@storybook/react';
import { Radio } from '@components/inputs/Radio';

type Story = StoryObj<typeof Radio>;

const meta: Meta<typeof Radio> = {
    title: 'INPUTS/Radio',
    component: Radio,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    args: {
        name: 'radio',
        label: 'Radio button'
    },
    argTypes: {
        isChecked: {
            control: { type: 'boolean' }
        }
    }
};

export const Default: Story = {
    args: {
        isChecked: true,
        style: {
            text: {
                fontWeight: 'bold'
            }
        }
    }
};

export default meta;
