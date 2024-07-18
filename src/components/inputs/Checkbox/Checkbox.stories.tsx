import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Checkbox } from '@components/inputs/Checkbox';

type Story = StoryObj<typeof Checkbox>;

const meta: Meta<typeof Checkbox> = {
    title: 'INPUTS/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    args: {
        label: 'Remember me',
        onChange: action('onChange')
    }
};

export const Checked: Story = {
    args: {
        checked: true
    }
};

export const Unchecked: Story = {
    args: {
        checked: false
    }
};

export const DisabledAndChecked: Story = {
    args: {
        checked: true,
        disabled: true
    }
};

export const DisabledAndUnchecked: Story = {
    args: {
        checked: false,
        disabled: true
    }
};

export default meta;
