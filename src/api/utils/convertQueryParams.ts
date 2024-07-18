import { IQuery } from '@/api';

export const convertQueryParams = (query: string | IQuery): string => {
    return typeof query === 'string'
        ? query
        : new URLSearchParams(Object.entries(query)).toString();
};
