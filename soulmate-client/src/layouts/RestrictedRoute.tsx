import { Navigate, Outlet, useLoaderData } from 'react-router-dom'

type IRestrictedRoute =
    | {
          redirect: true
          redirectUrl: string
      }
    | {
          redirect?: false
      }

const RestrictedRoute = (route: IRestrictedRoute) => {
    const data = useLoaderData()
    const toUrl = route.redirect ? route.redirectUrl : '/'

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    if (!data.user) return <Outlet />
    else return <Navigate to={toUrl as string} replace={true} />
}

export default RestrictedRoute
