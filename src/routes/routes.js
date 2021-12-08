import MainLayout from "../components/Layout/MainLayout"
import Marketplace from "../pages/Marketplace/Marketplace";

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
                // { path: '/messenges/t/:id', element: <Messenges /> },
                { path: '/marketplace', element: <Marketplace /> }
            ]
        }
    ]
}

export default routes;