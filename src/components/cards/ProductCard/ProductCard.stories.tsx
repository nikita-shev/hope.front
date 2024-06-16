import { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from '@components/cards/ProductCard/ProductCard.tsx';
import { product } from '@components/cards/shared/stories/product.ts';

type Story = StoryObj<typeof ProductCard>;

const meta: Meta<typeof ProductCard> = {
    title: 'COMPONENTS/Product Card',
    component: ProductCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    args: {
        product,
        style: { maxWidth: '840px' }
    }
};

export const Default: Story = {};

export default meta;
