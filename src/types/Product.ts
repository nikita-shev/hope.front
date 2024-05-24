import { CSSProperties } from 'react';

type Statuses = 'sale' | 'new' | null;
type Sizes = '3XL' | '4XL' | '5XL' | 'L' | 'M' | 'S' | 'XL' | 'XS' | 'XXL';

interface IColor {
    name: string;
    value: CSSProperties | string;
}

interface IPrice {
    current: number;
    new?: number;
}

interface IParam {
    name: string;
    description: string;
}

interface IImages {
    preview: string;
    links?: string[];
}

export interface IProduct {
    id: string;
    name: string;
    description: string;
    category: string;
    brand: string;
    vendorCode: string;
    price: IPrice;
    isInStock: boolean;
    quantity: number;
    rating: number;
    status: Statuses;
    colors: IColor[];
    sizes: Sizes[];
    options: IParam[][] | null;
    images: IImages;
}
