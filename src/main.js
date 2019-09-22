// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app';

import 'firebase/firestore'
import 'firebase/app'
import 'firebase/auth';
import "firebase/messaging";



Vue.use(firestorePlugin);

export const db = firebase.initializeApp({
	// to be inserted.
  }).firestore()


new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
