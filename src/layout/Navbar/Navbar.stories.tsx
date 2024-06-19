import { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '@layout/Navbar';

type Story = StoryObj<typeof Navbar>;

const meta: Meta<typeof Navbar> = {
    title: 'LAYOUT/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
};

export const Default: Story = {
    render: () => {
        return (
            <div style={{ width: '1300px' }}>
                <Navbar />
            </div>
        );
    }
};

export default meta;
