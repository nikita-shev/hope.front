import { Statuses } from '@/types/Product.ts';

export enum ResponseStatuses {
    OK = 0,
    FAILED = 1
}

export interface IResponse<T = {}> {
    status: ResponseStatuses;
    data: T;
    errors: string[];
}

export interface IQuery {
    page: number;
    limit?: number;
    status?: Statuses;
    category?: string;
    brand?: string;
    colors?: string;
    sizes?: string;
}
