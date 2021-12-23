import MainLayout from "../components/Layout/MainLayout"
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Homepage from "../pages/Homepage/Homepage";
import Stories from "../pages/Stories/Stories";

const routes = () => {
    return [
        {
            path:'/login',
            element: <Login/>
        },
        {
            path:'/register',
            element: <Register/>
        },
        {
            path: '/stories/:id',
            element: <Stories />
        },
        {
            path: '/',
            element: <MainLayout />,
            children: [
                { path: '/', element: <Homepage /> },
                // { path: '/messenges/t/:id', element: <Messenges /> },
                // { path: '/marketplace', element: <Marketplace /> }
            ]
        }
    ]
}

export default routes;