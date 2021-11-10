import Home from '@/pages/Home'
import Search from '../pages/Search'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Detail from '../pages/detail'
import AddCartSuccess from '../pages/AddCartSuccess'
import ShopCart from '../pages/ShopCart'
import Trade from '../pages/Trade'
import Pay from '../pages/Pay'
import PaySuccess from '../pages/PaySuccess'
import Center from '../pages/Center'
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
        path: '/addcartsuccess',
        component: AddCartSuccess
    },
    {
        path: '/shopcart',
        component: ShopCart
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
    {
        path: '/detail/:skuId',
        meta: {
            isHideFooter: false
        },
        component: Detail
    },
    {
        path: '/trade',
        component: Trade
    },
    {
        path: '/pay',
        component: Pay
    },
    {
        path: '/paysuccess',
        component: PaySuccess
    },
    {
        path: '/center',
        component: Center
    }

]