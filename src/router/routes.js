import Home from '@/pages/Home'
import Search from '../pages/Search'
import Login from '../pages/Login'
import Register from '../pages/Register'
export default [
    {
        path: '/',
        component: Home
    },
    {
        name: 'search',
        path: '/search/:keyword?', // 这个问号就可以解决传空参数报错
        component: Search
    },
    {
        path: '/login',
        meta: {
            isHideFooter: true
        },
        component: Login
    },
    {
        path: '/register',
        meta: {
            isHideFooter: true
        },
        component: Register
    },
]