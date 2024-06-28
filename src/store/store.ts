import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { appReducer } from '@store/app/app.reducer.ts';

export const store = configureStore({
    reducer: {
        app: appReducer
    }
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
