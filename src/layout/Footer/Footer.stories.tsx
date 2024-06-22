import { Meta, StoryObj } from '@storybook/react';
import { Footer } from '@layout/Footer';

type Story = StoryObj<typeof Footer>;

const meta: Meta<typeof Footer> = {
    title: 'LAYOUT/Footer',
    component: Footer,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
};

export const Default: Story = {
    render: () => {
        return (
            <div style={{ width: '1300px' }}>
                <Footer />
            </div>
        );
    }
};

export default meta;
