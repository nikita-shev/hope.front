import { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from '@components/Breadcrumbs/Breadcrumbs.tsx';

type Story = StoryObj<typeof Breadcrumbs>;

const meta: Meta<typeof Breadcrumbs> = {
    title: 'Navigation/Breadcrumbs',
    component: Breadcrumbs,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    args: {
        list: [
            { title: 'Главная', link: '#' },
            { title: 'Каталог товаров', link: '#' },
            { title: 'Джинсы', link: '#' },
            { title: 'Джинсы Jeans', link: '#' }
        ]
    }
};

export const Default: Story = {};

export default meta;
