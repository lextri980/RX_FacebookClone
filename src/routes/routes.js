import MainLayout from "../components/Layout/MainLayout"
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Profile from '../pages/Profile/Profile'

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
                // { path: '/', element: <Homepage/>},
                { path: '/profile/*', element: <Profile />},
                // { path: '/messenges/t/:id', element: <Messenges /> },
                // { path: '/marketplace', element: <Marketplace /> }
            ]
        }
    ]
}

export default routes;