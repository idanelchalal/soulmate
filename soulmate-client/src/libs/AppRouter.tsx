// Router deps
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Loaders
import { authLoader } from '../utils/loaders'

// Pages
import HomePage from '../pages/HomePage'
import AuthPage from '../pages/AuthPage'
import ProtectedRoute from '../layouts/ProtectedRoute'
import DashboardPage from '../pages/DashboardPage'
import Error404Page from '../pages/Error404Page'
import RestrictedRoute from '../layouts/RestrictedRoute'

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            index: true,
            element: <HomePage />,
            errorElement: <Error404Page />,
        },

        {
            path: 'auth',
            element: (
                <RestrictedRoute redirect={true} redirectUrl="/dashboard" />
            ),

            loader: authLoader,
            children: [{ index: true, element: <AuthPage /> }],
        },

        {
            loader: authLoader,
            element: <ProtectedRoute redirect redirectUrl={'/auth'} />,
            errorElement: <Error404Page />,
            children: [
                {
                    index: true,
                    element: <DashboardPage />,
                    path: 'dashboard',
                },
            ],
        },
    ])
    return <RouterProvider router={router} />
}

export default AppRouter
