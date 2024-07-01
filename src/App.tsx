import { ReactElement } from 'react';
import { ModalContext } from '@utils/contexts/ModalContext.ts';
import { IModalObj, useModal } from '@components/Modal';
import { Header } from '@layout/Header';
import { Navbar } from '@layout/Navbar';
import { ProductsSection } from '@layout/ProductsSection';
import { Footer } from '@layout/Footer';

import { Preview } from '@layout/Preview';
import { Subscription } from '@layout/Subscription';

function App(): ReactElement {
    const ModalObj: IModalObj = useModal();

    return (
        <ModalContext.Provider value={ModalObj}>
            <Header />
            <Navbar />

            <main>
                <Preview />
                <ProductsSection title={'Новинки'} status={'new'} />
                <Subscription />
                <ProductsSection title={'Распродажа'} status={'sale'} />
            </main>

            <Footer />
        </ModalContext.Provider>
    );
}

export default App;
