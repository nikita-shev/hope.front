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
    page: string;
    limit: string;
    status?: Statuses;
}
