import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'app',
    initialState: {
        error: ''
    },
    reducers: {
        setAppError(state, action: PayloadAction<{ error: string }>): void {
            state.error = action.payload.error;
        }
    }
});

export const appReducer = slice.reducer;
export const appActions = slice.actions;
