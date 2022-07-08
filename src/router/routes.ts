import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'cv', component: () => import('pages/cv.vue') },
      { path: 'portfolio', component: () => import('pages/portfolio.vue') },
      { path: 'modules', component: () => import('pages/modules.vue') },
      { path: 'contact', component: () => import('pages/contact.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
