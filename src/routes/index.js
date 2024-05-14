import Product from '../components/Product/Product';
import About from '../pages/About/About';
import { Login, Register } from '../pages/Authentication';
import Cart from '../pages/Cart/Cart';
import Checkout from '../pages/Checkout/Checkout';
import Contact from '../pages/Contact';
import Detail from '../pages/Detail';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import Wishlish from '../pages/Wishlist/Wishlish';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/wishlist', component: Wishlish },
    { path: '/about', component: About },
    { path: '/cart', component: Cart },
    { path: '/checkout', component: Checkout },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/product/:id', component: Detail },
    { path: '/wishlist/:id', component: Detail },
    { path: '/:id', component: Detail },
    { path: '/product', component: Product },
    { path: '/contact', component: Contact },
    { path: '/profile', component: Profile },
    { path: '/*', component: NotFound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
