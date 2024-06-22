import { Meta, StoryObj } from '@storybook/react';
import { Subscription } from '@layout/Subscription';

type Story = StoryObj<typeof Subscription>;

const meta: Meta<typeof Subscription> = {
    title: 'LAYOUT/Subscription',
    component: Subscription,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
};

export const Default: Story = {
    render: () => {
        return (
            <div style={{ width: '1300px' }}>
                <Subscription />
            </div>
        );
    }
};

export default meta;
