import { Meta, StoryObj } from '@storybook/react';
import { Header } from '@layout/Header';

type Story = StoryObj<typeof Header>;

const meta: Meta<typeof Header> = {
    title: 'LAYOUT/Header',
    component: Header,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
};

export const Default: Story = {};

export default meta;
