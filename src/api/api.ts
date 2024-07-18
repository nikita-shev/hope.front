import axios from 'axios';
import { IProduct } from '@/types/Product.ts';
import { IResponse } from '@/api/api.types.ts';

const instance = axios.create({
    baseURL: 'http://localhost:4000/api/'
});

export const productsAPI = {
    getProducts(query: string) {
        return instance.get<IResponse<IProduct[]>>(`products?${query}`);
    }
};
