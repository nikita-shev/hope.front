import { Meta, StoryObj } from '@storybook/react';
import { IProduct } from '@/types/Product.ts';
import { product } from '@components/cards/shared/data/product.ts';
import { SectionalGrid } from '@components/SectionalGrid';

type Story = StoryObj<typeof SectionalGrid>;

const meta: Meta<typeof SectionalGrid> = {
    title: 'COMPONENTS/SectionalGrid',
    component: SectionalGrid,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
};

export const Default: Story = {
    render: () => {
        const products: IProduct[] = [...new Array(4)].map(() => ({
            ...product,
            id: `${Math.random()}`
        }));

        return <SectionalGrid products={products} isDisplayedBtn={true} showItems={() => {}} />;
    }
};

export default meta;
