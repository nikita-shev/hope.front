import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, AppRootState } from '@store/store.ts';

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: AppRootState;
    dispatch: AppDispatch;
    rejectValue: null;
}>();
