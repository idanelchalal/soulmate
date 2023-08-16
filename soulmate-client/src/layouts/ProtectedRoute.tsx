import UnauthorizedPage from '../pages/UnauthorizedPage'

import { Navigate, Outlet, useLoaderData } from 'react-router-dom'

import { createContext, useCallback, useState } from 'react'

import axios from 'axios'

interface IProtectedContext {
    user?: object | null
    logOut?: () => void | null
}

type IProtectedRoute =
    | {
          redirect: true
          redirectUrl: string
      }
    | {
          redirect?: false
      }

export const ProtectedContext = createContext<IProtectedContext>({})

const ProtectedRoute = (route: IProtectedRoute) => {
    const data = useLoaderData() as IProtectedContext

    const [user, setUser] = useState(data && data.user)

    const logOut = useCallback(() => {
        axios
            .get(import.meta.env.VITE_SERVER_URI + '/auth/logout', {
                withCredentials: true,
            })
            .then(() => setUser(null))
            .catch((err) => {
                setUser(null)
                console.error(err)
            })
    }, [setUser])

    if (!user && !route.redirect) return <UnauthorizedPage />
    if (!user && route.redirect)
        return <Navigate to={route.redirectUrl as string} />

    return (
        <ProtectedContext.Provider value={{ user, logOut }}>
            <Outlet />
        </ProtectedContext.Provider>
    )
}

export default ProtectedRoute
