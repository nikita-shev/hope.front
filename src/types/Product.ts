import { CSSProperties } from 'react';

type Status = 'sale' | 'new' | null;
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
    availability: boolean;
    count: number;
    rating: number;
    status: Status;
    colors: IColor[];
    sizes: Sizes[];
    parameters: IParam[][] | null;
    images: IImages;
}
