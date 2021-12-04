import { Children } from "react"
import MainLayout from "../components/Layout/MainLayout"

const routes = () => {
    return [
        // {
        //     path:'/login',
        //     element: <Login/>
        // },
        // {
        //     path:'/register',
        //     element: <Register/>
        // },
        {
            path: '/',
            element: <MainLayout />,
            children: [
                // { path: '/', element: <Homepage/>},
                // { path: '/profile', element: <Profile /> },
                // { path: '/messenges', element: <Messenges /> },
                // { path: '/marketplace', element: <Marketplace /> }
            ]
        }
    ]
}

export default routes;