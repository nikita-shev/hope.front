import { Meta, StoryObj } from '@storybook/react';
import { Rating } from '@components/cards/ProductCard/components/Rating/Rating.tsx';

type Story = StoryObj<typeof Rating>;

const meta: Meta<typeof Rating> = {
    title: 'COMPONENTS/Rating',
    component: Rating,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    args: {
        value: 4
    }
};

export const Default: Story = {};

export default meta;
