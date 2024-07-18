import { IQuery } from '@/api';

export const convertQueryParams = (query: IQuery): string =>
    new URLSearchParams(Object.entries(query)).toString();
