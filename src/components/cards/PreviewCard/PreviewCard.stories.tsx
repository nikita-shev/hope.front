import { Meta, StoryObj } from '@storybook/react';
import { PreviewCard } from '@components/cards/PreviewCard/PreviewCard.tsx';

type Story = StoryObj<typeof PreviewCard>;

const meta: Meta<typeof PreviewCard> = {
    title: 'Components/PreviewCard',
    component: PreviewCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    args: {
        product: {
            id: '1',
            name: 'Product Name',
            description: 'Description',
            category: '',
            brand: '',
            vendorCode: '99 999',
            price: { current: 200 },
            isInStock: true,
            quantity: 10,
            rating: 5,
            status: 'sale',
            colors: [{ name: '', value: '' }],
            sizes: ['S'],
            options: null,
            images: {
                preview:
                    'https://i.pinimg.com/originals/c2/15/8d/c2158d1b6ecf3f4493aac61e46b9dd4c.png'
            }
        },
        style: { minWidth: '270px' }
    }
};

export const Default: Story = {};

export default meta;
