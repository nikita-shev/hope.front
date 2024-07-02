import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TextField } from '@components/inputs/TextField/TextField.tsx';

type Story = StoryObj<typeof TextField>;

const meta: Meta<typeof TextField> = {
    title: 'INPUTS/Text Field',
    component: TextField,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    args: {
        id: '1',
        variant: 'standard',
        value: '',
        validation: 'text',
        name: 'text-field',
        className: 't-text-field'
    }
};

const useTextField = (data: { id: string; value: string }) => {
    const [field, setField] = useState({ ...data, isValid: false });

    const changeField = (id: string, value: string, isValid: boolean): void => {
        setField({ id, value, isValid });
    };

    return [field, changeField] as const;
};

export const Standard: Story = {
    args: {
        type: 'text',
        placeholder: 'Standard'
    },
    render: (args) => {
        const [field, changeField] = useTextField({ id: args.id, value: args.value });

        return <TextField {...args} value={field.value} onChange={changeField} />;
    }
};

export const Multiline: Story = {
    args: {
        variant: 'multiline',
        style: {
            input: {
                height: '150px'
            }
        },
        placeholder: 'Multiline'
    },
    render: (args) => {
        const [field, changeField] = useTextField({ id: args.id, value: args.value });

        return <TextField {...args} value={field.value} onChange={changeField} />;
    }
};

export default meta;
