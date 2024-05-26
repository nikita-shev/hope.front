import { Meta, StoryObj } from '@storybook/react';
import { PreviewCard } from '@components/cards/PreviewCard/PreviewCard.tsx';
import { product } from '@components/cards/shared/stories/product.ts';

type Story = StoryObj<typeof PreviewCard>;

const meta: Meta<typeof PreviewCard> = {
    title: 'Components/PreviewCard',
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
