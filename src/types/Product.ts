import { CSSProperties } from 'react';

export type Statuses = 'sale' | 'new' | 'all';
type Sizes = '3XL' | '4XL' | '5XL' | 'L' | 'M' | 'S' | 'XL' | 'XS' | 'XXL';

interface IColor {
    name: string;
    value: CSSProperties | string;
}

export interface IPrice {
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

export type TRating = 0 | 1 | 2 | 3 | 4 | 5;

export interface IProduct {
    id: string;
    name: string;
    description: string;
    category: string;
    brand: string;
    vendorCode: number;
    price: IPrice;
    isInStock: boolean;
    quantity: number;
    rating: TRating;
    status: Statuses;
    colors: IColor[];
    sizes: Sizes[];
    options: IParam[][] | null;
    images: IImages;
}
