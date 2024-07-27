import axios from 'axios';
import { IResponse } from '@/api/api.types.ts';
import { IProducts } from '@/types/Products.ts';

const instance = axios.create({
    baseURL: 'http://localhost:4000/api/'
});

export const productsAPI = {
    getProducts(query: string) {
        return instance.get<IResponse<IProducts>>(`products?${query}`);
    }
};

export const filtersAPI = {
    getFilterValues(query: string) {
        return instance.get<IResponse<string[]>>(`filter?${query}`);
    }
};
