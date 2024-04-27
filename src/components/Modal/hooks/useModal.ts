import { ReactElement, useEffect, useState } from 'react';
import { IModal } from '@components/Modal/Modal.types.ts';
import { removeBodyStyles, setBodyStyles } from '@components/Modal/utils';

interface IReturnValues {
    modal: IModal;
    openModal: (title: string, modal: ReactElement) => void;
    closeModal: () => void;
}

export const useModal = (): IReturnValues => {
    const [modal, setModal] = useState<IModal>({
        title: '',
        isOpen: false,
        component: null
    });

    useEffect(() => {
        modal.isOpen ? setBodyStyles() : removeBodyStyles();
    }, [modal.isOpen]);

    const openModal = (title: string, component: ReactElement): void => {
        setModal({ title, isOpen: true, component });
    };

    const closeModal = (): void => setModal({ ...modal, isOpen: false });

    return { modal, openModal, closeModal };
};
