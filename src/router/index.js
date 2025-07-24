import { createRouter, createWebHistory } from 'vue-router';
import { notify } from "@kyvg/vue3-notification";

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
  {
    meta: {
      title: 'Accept Invite',
      requiresAuth: false
    },
    path: '/auth/set-password',
    name: 'set-password',
    component: () => import('@/views/auth/ResetPassword.vue')
  },
  {
    meta: {
      title: 'Verify Email',
      requiresAuth: false
    },
    path: '/auth/verify-email',
    name: 'verify-email',
    component: () => import('@/views/auth/VerifyEmail.vue')
  },

  // authenticated routes
  {
    meta: {
      title: 'Home',
      requiresAuth: true,
      roles: ['admin', 'manager', 'member']
    },
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    meta: {
      title: 'Users',
      requiresAuth: true,
      roles: ['admin']
    },
    path: '/users',
    name: 'users',
    component: () => import('@/views/user/Users.vue')
  },
  {
    meta: {
      title: 'Create User',
      requiresAuth: true,
      roles: ['admin']
    },
    path: '/users/create',
    name: 'create-user',
    component: () => import('@/views/user/CreateUser.vue')
  },
  {
    meta: {
      title: 'Update User',
      requiresAuth: true,
      roles: ['admin']
    },
    path: '/users/:id/edit',
    name: 'update-user',
    component: () => import('@/views/user/UpdateUser.vue')
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
  const { title, requiresAuth, roles } = to.meta;
  const token = localStorage.getItem('token');

  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const userRole = user.role;

  if (title === 'PageNotFound') {
    return next();
  }

  if (requiresAuth && !token) {
    return next({ name: 'login' });
  }

  if (!requiresAuth && token) {
    return next({ name: 'home' });
  }

  if (roles && !roles.includes(userRole)) {
    notify({
      type: 'error',
      title: 'Unauthorized',
      text: 'You are not authorized to access this page'
    })
    return next({ name: 'home' });
  }

  next();
})

export default router
