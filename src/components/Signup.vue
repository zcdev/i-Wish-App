<template>
  <div class="sign-up">
    <h3>Create a new account</h3>
    <input v-model="email" type="text" class="input" placeholder="Email" required>
    <br>
    <input v-model="password" type="password" class="input" placeholder="Password" required>
    <br>
    <button v-on:click="signUp" class="button">Sign Up!</button>
    <button class="button">
      <router-link to="/login">
        Back
      </router-link>
    </button>
  </div>
</template>
<script>
import firebase from 'firebase/app';
import { db } from '../main';

export default {
  name: 'signup',
  data() {
    return {
      email: '',
      password: '',
      userId: ''
    }
  },
  methods: {
    signUp() {
      firebase.auth().createUserWithEmailAndPassword(
        this.email, this.password).then((token) => {
        // Get user ID at signup, but not needed now.
        /* db.collection('users').doc(token.user.uid).set({userId: token.user.uid}); */
        this.$router.replace('/login')
      }).catch((err) => {
        alert(err.message);
      });
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
