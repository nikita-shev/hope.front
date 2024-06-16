import { IProduct } from '@/types/Product.ts';

export const product: IProduct = {
    id: '1',
    name: 'Product Name',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aspernatur atque autem beatae corporis delectus ducimus laudantium nam nisi obcaecati quibusdam, quod ratione recusandae saepe velit veritatis voluptas voluptate?',
    category: '',
    brand: '',
    vendorCode: '99 999',
    price: { current: 2000, new: 1000 },
    isInStock: true,
    quantity: 10,
    rating: 4,
    status: 'sale',
    colors: [
        { name: 'Хаки', value: '#806B2A' },
        { name: 'Розовый', value: '#FFC0CB' }
    ],
    sizes: ['S'],
    options: null,
    images: {
        preview: 'https://i.pinimg.com/originals/c2/15/8d/c2158d1b6ecf3f4493aac61e46b9dd4c.png'
    }
};
