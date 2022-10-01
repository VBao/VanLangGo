import { Category, Login, Order, Product, Promotion, Setting, Store } from '~/Pages';
const routes = {
  home: '/',
  store: '/store',
  product: '/product',
  category: '/category',
  order: '/order',
  promotion: '/promotion',
  setting: '/setting',
  login: '/login',
};

const publicRouters = [
  { path: routes.home, component: '' },
  { path: routes.category, component: Category },
  { path: routes.order, component: Order },
  { path: routes.promotion, component: Promotion },
  { path: routes.setting, component: Setting },
  { path: routes.store, component: Store },
  { path: routes.product, component: Product },
  { path: routes.login, component: Login, layout: null },
];

export { publicRouters };
