import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '@/types/Product.ts';
import { IQuery, productsAPI, ResponseStatuses } from '@/api';
import { createAppAsyncThunk } from '@store/utils/createAppAsyncThunk.ts';
import { handleServerAppError, handleServerNetworkError } from '@store/utils/methods';

const slice = createSlice({
    name: 'products',
    initialState: {
        products: [] as IProduct[]
    },
    reducers: {},
    extraReducers: (builder): void => {
        builder.addCase(fetchProducts.fulfilled, (state, action): void => {
            state.products = action.payload;
        });
    }
});

// Thunks
const fetchProducts = createAppAsyncThunk<IProduct[], IQuery>(
    `${slice.name}/fetchProducts`,
    async (payload, { dispatch, rejectWithValue }) => {
        try {
            const response = await productsAPI.getProducts(payload);
            const { data, status, errors } = response.data;

            handleServerAppError(errors, dispatch);

            return status === ResponseStatuses.OK ? data : rejectWithValue(null);
        } catch (error) {
            handleServerNetworkError(error, dispatch);

            return rejectWithValue(null);
        }
    }
);

export const productsReducer = slice.reducer;
export const productsActions = slice.actions;
export const productsThunks = { fetchProducts };
