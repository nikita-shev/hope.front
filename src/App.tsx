import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { ModalContext } from '@utils/contexts/ModalContext.ts';
import { IModalObj, useModal } from '@components/Modal';
import { Header } from '@layout/Header';
import { Navbar } from '@layout/Navbar';
import { Footer } from '@layout/Footer';

export function App(): ReactElement {
    const ModalObj: IModalObj = useModal();

    return (
        <ModalContext.Provider value={ModalObj}>
            <Header />
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </ModalContext.Provider>
    );
}
