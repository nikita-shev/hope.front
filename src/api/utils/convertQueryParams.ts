import { IQuery } from '@/api';
import { IFilter } from '@layout/Filters';

export const convertQueryParams = (query: string | IQuery | IFilter): string => {
    return typeof query === 'string'
        ? query
        : new URLSearchParams(Object.entries(query)).toString();
};
