import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { appReducer, productsSectionReducer } from '@store/reducers';

export const store = configureStore({
    reducer: {
        app: appReducer,
        productsSection: productsSectionReducer
    }
});

// Types
export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// useSelector & useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
