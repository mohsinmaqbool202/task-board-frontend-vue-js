import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // guest routes
    {
        meta: {
            title: 'Sign Up',
            requiresAuth: false
        },
        path: '/auth/register',
        name: 'register',
        component: () => import('@/views/auth/Register.vue')
    },
    {
        meta: {
            title: 'Login',
            requiresAuth: false
        },
        path: '/auth/login',
        name: 'login',
        component: () => import('@/views/auth/Login.vue')
    },
    {
        meta: {
            title: 'Forgot Password',
            requiresAuth: false
        },
        path: '/auth/forgot-password',
        name: 'forgot-password',
        component: () => import('@/views/auth/ForgotPassword.vue')
    },
    {
        meta: {
            title: 'Reset Password',
            requiresAuth: false
        },
        path: '/auth/reset-password',
        name: 'reset-password',
        component: () => import('@/views/auth/ResetPassword.vue')
    },

    // authenticated routes
    {
      meta: {
        title: 'Home',
        requiresAuth: true
      },
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },

    // fallback route
    {
        meta: {
            title: 'PageNotFound',
        },
        path: "/:pathMatch(.*)*",
        name: "PageNotFound",
        component: () => import('@/views/404/PageNotFound.vue')
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const { title, requiresAuth } = to.meta;
  const token = localStorage.getItem('token');

  if (title === 'PageNotFound') {
    return next();
  }

  if (requiresAuth && !token) {
    return next({ name: 'login' });
  }

  if (!requiresAuth && token) {
    console.log('token', token);
    return next({ name: 'home' });
  }

  next();
})

export default router
