import { ReactElement } from 'react';
import { ModalContext } from '@utils/contexts/ModalContext.ts';
import { IModalObj, useModal } from '@components/Modal';
import { Header } from '@layout/Header';
import { Navbar } from '@layout/Navbar';
import { Footer } from '@layout/Footer';

function App(): ReactElement {
    const ModalObj: IModalObj = useModal();

    return (
        <ModalContext.Provider value={ModalObj}>
            <Header />
            <Navbar />

            <main style={{height: '1500px'}}></main>

            <Footer />
        </ModalContext.Provider>
    );
}

export default App;
