import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BuyingView from '../views/BuyingView.vue'
import CartView from '../views/CartView.vue'
import RecommendationsView from '../views/RecommendationsView.vue'
import MyShoppingList from '../views/MyShoppingList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/buying',
      name: 'buying',
      component: BuyingView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/recommendations',
      name: 'recommendations',
      component: RecommendationsView
    },
    {
      path: '/my-shopping-list',
      name: 'my shopping list',
      component: MyShoppingList
    },

  ]
})

export default router
