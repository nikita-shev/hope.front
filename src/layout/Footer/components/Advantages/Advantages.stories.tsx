import { Meta, StoryObj } from '@storybook/react';
import { Advantages } from '@layout/Footer/components/Advantages/Advantages.tsx';

type Story = StoryObj<typeof Advantages>;

const meta: Meta<typeof Advantages> = {
    title: 'LAYOUT/Advantages',
    component: Advantages,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
};

export const Default: Story = {
    render: () => (
        <div style={{ width: '1300px' }}>
            <Advantages />
        </div>
    )
};

export default meta;
