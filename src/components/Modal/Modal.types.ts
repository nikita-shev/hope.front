import { ReactElement } from 'react';

export interface IModal {
    title: string;
    isOpen: boolean;
    component: ReactElement | null;
}

export interface IModalObj {
    modal: IModal;
    openModal: (title: string, modal: ReactElement) => void;
    closeModal: () => void;
}
