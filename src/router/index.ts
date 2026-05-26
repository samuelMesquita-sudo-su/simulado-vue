import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import OrdensPage from '../pages/OrdensPage.vue'
import NovaOrdemPage from '../pages/NovaOrdemPage.vue'
import DetalhesOrdemPage from '../pages/DetalhesOrdemPage.vue'

// TODO: Configure as rotas da aplicação dentro do array 'routes'.
// As rotas que você deve criar são:
//   '/'             → HomePage
//   '/ordens'       → OrdensPage
//   '/ordens/nova'  → NovaOrdemPage
//   '/ordens/:id'   → DetalhesOrdemPage  (:id é um parâmetro dinâmico)
// https://router.vuejs.org/guide/#Creating-the-router-instance

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/ordens',
      name: 'Ordens',
      component: OrdensPage
    },
    {
      path: '/ordens/nova',
      name: 'NovaOrdem',
      component: NovaOrdemPage
    },
    {
      path: '/ordens/:id',
      name: 'DetalhesOrdem',
      component: DetalhesOrdemPage,
      props: true
    }
  ]
})

export default router