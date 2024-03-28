import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Checkbox } from '@components/Checkbox';

type Story = StoryObj<typeof Checkbox>;

const meta: Meta<typeof Checkbox> = {
    title: 'UI/Checkbox',
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
        defaultChecked: true
    }
};

export const Unchecked: Story = {
    args: {
        defaultChecked: false
    }
};

export const DisabledAndChecked: Story = {
    args: {
        defaultChecked: true,
        disabled: true
    }
};

export const DisabledAndUnchecked: Story = {
    args: {
        defaultChecked: false,
        disabled: true
    }
};

export default meta;
