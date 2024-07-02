import { Meta, StoryObj } from '@storybook/react';
import { Search } from '@components/Search';

type Story = StoryObj<typeof Search>;

const meta: Meta<typeof Search> = {
    title: 'COMPONENTS/Search',
    component: Search,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
};

export const Default: Story = {};

export default meta;
