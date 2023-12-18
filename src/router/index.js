import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Products from '../components/Products.vue'
import Register from '../components/Register.vue'
import SingleProduct from '../components/SingleProduct.vue'
import Checkout from '../components/Checkout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "HomePage",
      }
    },
    {
      path: '/Products',
      name: 'Products',
      component: Products,
      meta: {
        title: "Products",
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/Login.vue'),
      meta: {
        title: "Login",
      }
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
      meta: {
        title: "Register",
      }
    },
    {
      path: '/edit-product/:id',
      name: 'SingleProduct',
      component: SingleProduct,
      meta: {
        title: "SingleProduct",
      }
    },
    {
      path: '/Checkout/:id',
      name: 'Checkout',
      component: Checkout,
      meta: {
        title: "Checkout",
      }
    },

  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Page`;
  next()
})

export default router
