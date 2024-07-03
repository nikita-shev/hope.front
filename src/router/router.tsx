import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/App.tsx';
import { Home } from '@pages/Home';
import { Catalog } from '@pages/Catalog';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'catalog',
                element: <Catalog />
            }
        ]
    }
]);
