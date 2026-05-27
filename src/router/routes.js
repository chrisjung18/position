const routes = [
  {
    path: '/auth',
    name: "auth",
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '/login', name: "login", component: () => import('pages/LoginPage.vue'), meta: { requireAuth: false, toHomeIfLogged: true } },
      { path: '/register', name: "register", component: () => import('pages/RegisterPage.vue'), meta: { requireAuth: false, toHomeIfLogged: true } }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue'), meta: { requireAuth: true } }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
