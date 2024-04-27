import { ReactElement } from 'react';

export interface IModal {
    title: string;
    isOpen: boolean;
    component: ReactElement | null;
}
