import { createBrowserRouter } from 'react-router-dom';
import App from '@/App.tsx';
import { Home } from '@pages/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />
            }
        ]
    }
]);
