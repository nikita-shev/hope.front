import { createSlice } from '@reduxjs/toolkit';
import { createAppAsyncThunk } from '@store/utils';
import { handleServerAppError, handleServerNetworkError } from '@store/utils/methods';
import { convertQueryParams, filtersAPI, ResponseStatuses } from '@/api';
import { FilterType, IFilter } from '@layout/Filters';

interface IFilterValues {
    type: FilterType;
    data: string[];
}

interface IInitialState {
    [key: string]: IFilterValues;
}

const initialState: IInitialState = {
    isInStock: { type: 'isInStock', data: ['В наличии', 'Под заказ'] },
    price: { type: 'price', data: [] },
    status: { type: 'status', data: ['Распродажа', 'Новые товары'] },
    category: { type: 'category', data: [] },
    brand: { type: 'brand', data: [] },
    colors: { type: 'colors', data: [] },
    sizes: { type: 'sizes', data: [] }
};

const slice = createSlice({
    name: 'filters',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFilterValues.fulfilled, (state, action) => {
            const { type, data } = action.payload;

            if (!state[type].data.length) {
                state[type].data = data;
            }
        });
    }
});

const fetchFilterValues = createAppAsyncThunk<IFilterValues, IFilter>(
    `${slice.name}/fetchFilterValues`,
    async (payload, { dispatch, rejectWithValue }) => {
        try {
            const response = await filtersAPI.getFilterValues(convertQueryParams(payload));
            const { status, data, errors } = response.data;

            handleServerAppError(errors, dispatch);

            return status === ResponseStatuses.OK
                ? { type: payload.type, data }
                : rejectWithValue(null);
        } catch (error) {
            handleServerNetworkError(error, dispatch);

            return rejectWithValue(null);
        }
    }
);

export const filtersReducer = slice.reducer;
export const filtersActions = slice.actions;
export const filtersThunks = { fetchFilterValues };
