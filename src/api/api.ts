import axios from 'axios';
import { IProduct } from '@/types/Product.ts';
import { IQuery, IResponse } from '@/api/api.types.ts';

const instance = axios.create({
    baseURL: 'http://localhost:4000/api/'
});

const createQueryParams = (query: IQuery): string => new URLSearchParams({ ...query }).toString();

export const productsAPI = {
    getProducts: (query: IQuery) => {
        return instance.get<IResponse<IProduct[]>>(`products?${createQueryParams(query)}`);
    }
};
