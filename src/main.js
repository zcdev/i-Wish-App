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
  	apiKey: "AIzaSyBcmFvDa_df_NNM1SNkvBc6E8PKPRcISHQ",
	authDomain: "iwishapp-bf5ff.firebaseapp.com",
	databaseURL: "https://iwishapp-bf5ff.firebaseio.com",
	projectId: "iwishapp-bf5ff",
	storageBucket: "",
	messagingSenderId: "697283254027",
	appId: "1:697283254027:web:78c20dd0682741bc"
  }).firestore()


new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
