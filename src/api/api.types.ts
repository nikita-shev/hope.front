import { Statuses } from '@/types/Product.ts';

enum ResponseStatuses {
    OK = 0,
    FAILED = 1
}

export interface IResponse<T = {}> {
    status: ResponseStatuses.OK | ResponseStatuses.FAILED;
    data: T;
    errors: string[];
}

export interface IQuery {
    page: string;
    limit: string;
    status?: Statuses;
}
