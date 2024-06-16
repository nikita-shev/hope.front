import { Meta, StoryObj } from '@storybook/react';
import { PreviewCard } from '@components/cards/PreviewCard/PreviewCard.tsx';
import { product } from '@components/cards/shared/data/product.ts';

type Story = StoryObj<typeof PreviewCard>;

const meta: Meta<typeof PreviewCard> = {
    title: 'COMPONENTS/Preview Card',
    component: PreviewCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    args: {
        product,
        style: { minWidth: '270px' }
    }
};

export const Default: Story = {};

export default meta;
