// import Home from '@/pages/Home'
// 路由懒加载
const Home = () => import('@/pages/Home')
// import Search from '../pages/Search'
const Search = () => import('../pages/Search')
// import Login from '../pages/Login'
const Login = () => import('../pages/Login')
// import Register from '../pages/Register'
const Register = () => import('../pages/Register')
// import Detail from '../pages/detail'
const Detail = () => import('../pages/detail')
// import AddCartSuccess from '../pages/AddCartSuccess'
const AddCartSuccess = () => import('../pages/AddCartSuccess')
// import ShopCart from '../pages/ShopCart'
const ShopCart = () => import('../pages/ShopCart')
// import Trade from '../pages/Trade'
const Trade = () => import('../pages/Trade')
// import Pay from '../pages/Pay'
const Pay = () => import('../pages/Pay')
// import PaySuccess from '../pages/PaySuccess'
const PaySuccess = () => import('../pages/PaySuccess')
// import Center from '../pages/Center'
const Center = () => import('../pages/Center')

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
        component: AddCartSuccess,
        beforeEnter: (to, from, next) => {
            let skuNum = to.query.skuNum
            let skuInfo = sessionStorage.getItem('SKUINFO_KEY')
            if (skuNum && skuInfo) {
                next()
            } else {
                next('/')
            }
        }
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
        component: Trade,
        beforeEnter: (to, from, next) => {
            if (from.path === '/shopcart') {
                next()
            } else {
                next('/')
            }
        }
    },
    {
        path: '/pay',
        component: Pay,
        beforeEnter: (to, from, next) => {
            if (from.path === '/trade') {
                next()
            } else {
                next('/')
            }
        }
    },
    {
        path: '/paysuccess',
        component: PaySuccess,
        beforeEnter: (to, from, next) => {
            if (from.path === '/pay') {
                next()
            } else {
                next('/')
            }
        }
    },
    {
        path: '/center',
        component: Center
    }

]