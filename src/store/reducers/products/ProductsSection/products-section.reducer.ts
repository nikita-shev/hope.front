import { createSlice } from '@reduxjs/toolkit';
import { handleServerAppError, handleServerNetworkError } from '@store/utils/methods';
import { createAppAsyncThunk } from '@store/utils/createAppAsyncThunk.ts';
import { convertQueryParams, IQuery, productsAPI, ResponseStatuses } from '@/api';
import { IProduct } from '@/types/Product.ts';
import { IProducts } from '@/types/Products.ts';

const slice = createSlice({
    name: 'products-section',
    initialState: {
        products: [] as IProduct[]
    },
    reducers: {},
    extraReducers: (builder): void => {
        builder.addCase(fetchProducts.fulfilled, (state, action): void => {
            action.payload.products.forEach((el) => {
                const product = state.products.find((p) => p.id === el.id);

                if (!product) {
                    state.products.push(el);
                }
            });
        });
    }
});

// Thunks
const fetchProducts = createAppAsyncThunk<IProducts, { query: IQuery }>(
    `${slice.name}/fetchProducts`,
    async (payload, { dispatch, rejectWithValue }) => {
        try {
            const response = await productsAPI.getProducts(convertQueryParams(payload.query));
            const { data, status, errors } = response.data;

            handleServerAppError(errors, dispatch);

            return status === ResponseStatuses.OK ? data : rejectWithValue(null);
        } catch (error) {
            handleServerNetworkError(error, dispatch);

            return rejectWithValue(null);
        }
    }
);

export const productsSectionReducer = slice.reducer;
export const productsSectionActions = slice.actions;
export const productsSectionThunks = { fetchProducts };
