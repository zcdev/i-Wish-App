import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Wishes from '../components/Wishes'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/wishes',
      name: 'Wishes',
      component: Wishes,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
  	next('login');
  } else if (!requiresAuth && currentUser) {
  	next('wishes');
  } else {
  	next();
  }
  
});

export default router
