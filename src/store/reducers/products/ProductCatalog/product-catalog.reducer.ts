import { createSlice } from '@reduxjs/toolkit';
import { createAppAsyncThunk } from '@store/utils';
import { handleServerAppError, handleServerNetworkError } from '@store/utils/methods';
import { convertQueryParams, IQuery, productsAPI, ResponseStatuses } from '@/api';
import { IProduct } from '@/types/Product.ts';
import { IProducts } from '@/types/Products.ts';

const slice = createSlice({
    name: 'product-catalog',
    initialState: {
        products: [] as IProduct[],
        productsCount: 0
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilteredProducts.fulfilled, (state, action) => {
                const { products, productsCount } = action.payload;

                state.products = products;
                state.productsCount = productsCount;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                const { products, productsCount } = action.payload;

                products.forEach((el) => {
                    const product = state.products.find((item) => item.id === el.id);

                    !product && state.products.push(el);
                });

                state.productsCount = productsCount;
            });
    }
});

// Thunks
const fetchFilteredProducts = createAppAsyncThunk<IProducts, { query: string | IQuery }>(
    `${slice.name}/fetchFilteredProducts`,
    async (payload, { dispatch, rejectWithValue }) => {
        try {
            const response = await productsAPI.getProducts(convertQueryParams(payload.query));
            const { status, data, errors } = response.data;

            handleServerAppError(errors, dispatch);

            return status === ResponseStatuses.OK ? data : rejectWithValue(null);
        } catch (error) {
            handleServerNetworkError(error, dispatch);

            return rejectWithValue(null);
        }
    }
);

const fetchProducts = createAppAsyncThunk<IProducts, { query: string | IQuery }>(
    `${slice.name}/fetchProducts`,
    async (payload, { dispatch, rejectWithValue }) => {
        try {
            const response = await productsAPI.getProducts(convertQueryParams(payload.query));
            const { status, data, errors } = response.data;

            handleServerAppError(errors, dispatch);

            return status === ResponseStatuses.OK ? data : rejectWithValue(null);
        } catch (error) {
            handleServerNetworkError(error, dispatch);

            return rejectWithValue(null);
        }
    }
);

export const productCatalogReducer = slice.reducer;
export const productCatalogActions = slice.actions;
export const productCatalogThunks = { fetchFilteredProducts, fetchProducts };
