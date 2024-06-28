import { AppDispatch } from '@store/store.ts';
import { appActions } from '@store/reducers';

export const handleServerAppError = (errors: string[], dispatch: AppDispatch): void => {
    const errorMessage: string = errors.length ? errors[0] : '';

    dispatch(appActions.setAppError({ error: errorMessage }));
};
