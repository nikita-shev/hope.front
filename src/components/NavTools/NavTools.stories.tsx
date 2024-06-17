import { Meta, StoryObj } from '@storybook/react';
import { NavTools } from '@components/NavTools';

type Story = StoryObj<typeof NavTools>;

const meta: Meta<typeof NavTools> = {
    title: 'COMPONENTS/Nav Tools',
    component: NavTools,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
};

export const Default: Story = {};

export default meta;
