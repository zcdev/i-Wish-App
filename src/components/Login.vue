<template>
  <div class="login">
    <h1>Make a wish .</h1>
    <h3 class="text">Foster positivity for our time... ♥️</h3>
    <input type="text" v-model="email" placeholder="Email address" class="input" required>
    <br />
    <input type="password" v-model="password" placeholder="Password" class="input" required>
    <br />
    <button v-on:click="login" class="button">Enter</button>
    <p class="link">
      <router-link to="/signup">
        New here? Create a new account
      </router-link>
    </p>
    <p class="text">
    &copy 2020 ZCDEV
    </p>
  </div>
</template>
<script>
import firebase from 'firebase/app';
import { db } from '../main';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
        this.$router.replace('/wishes');
      }).catch((err) => {
        alert(err.message);
      });
    }
  }
}

</script>
<style scoped>
.login {
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
  background: url('../assets/wish-cover.jpg');
  background-position: 10%;
  background-size: cover;
  padding: 1rem;
}

.input {
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.7);
  color: #000;
}

.text,
.link a {
  color: #fff;
}

@media screen and (max-width: 800px) {
  .login {
    background-position: 44%;
  }
}

</style>
