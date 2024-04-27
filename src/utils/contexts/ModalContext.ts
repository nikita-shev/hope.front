import { Context, createContext } from 'react';
import { IModalObj } from '@components/Modal';

export const ModalContext: Context<IModalObj> = createContext<IModalObj>({
    modal: {
        title: '',
        isOpen: false,
        component: null
    },
    openModal() {},
    closeModal() {}
});
