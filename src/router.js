import { createBrowserRouter, Outlet } from 'react-router-dom';

// Utilities routes
import Layout from './Layout';

// Routes
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Rent from './pages/Rent/Rent';
import ErrorPage from './pages/NotFound/NotFound';

export default createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout>
                <Outlet />
            </Layout>
        ),
        errorElement: (
            <Layout>        
                <ErrorPage />
            </Layout>
        ),
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: 'rents/:id',
                element: <Rent />
            },
            {
                path: '/not-found',
                element: <ErrorPage />
            }
        ]
    }
]);

export const NAVIGATION = [
    ['/', 'Accueil'],
    ['/about', 'À propos']
]