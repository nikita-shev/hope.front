import { createBrowserRouter, Navigate } from 'react-router-dom';
import { App } from '@/App.tsx';
import { Home } from '@pages/Home';
import { Catalog } from '@pages/Catalog';
import { NotFound } from '@pages/NotFound';

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
            },
            {
                path: '404',
                element: <NotFound />
            },
            {
                path: '*',
                element: <Navigate to="404" replace={true} />
            }
        ]
    }
]);
