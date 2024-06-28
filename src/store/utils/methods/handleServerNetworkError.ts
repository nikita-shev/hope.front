import axios from 'axios';
import { AppDispatch } from '@store/store.ts';
import { appActions } from '@store/reducers';

export const handleServerNetworkError = (error: unknown, dispatch: AppDispatch): void => {
    let errorMessage: string = 'Some error occurred.';

    if (axios.isAxiosError(error)) {
        errorMessage = error?.message || errorMessage;
    } else if (error instanceof Error) {
        errorMessage = `Native error: ${error.message}.`;
    } else {
        errorMessage = JSON.stringify(error);
    }

    dispatch(appActions.setAppError({ error: errorMessage }));
};
