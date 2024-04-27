import { ReactElement, useEffect, useState } from 'react';
import { IModal, IModalObj } from '@components/Modal/Modal.types.ts';
import { removeBodyStyles, setBodyStyles } from '@components/Modal/utils';

export const useModal = (): IModalObj => {
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
