<template>
  <div class="sign-up">
  <h1>Make a wish .</h1>
    <h3 class="text">Create a new account</h3>
    <input v-model="email" type="text" class="input" placeholder="Email" required>
    <br>
    <input v-model="password" type="password" class="input" placeholder="Password" required>
    <br>
    <input v-model="name" type="text" class="input" placeholder="Name" required>
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
  name: 'SignUp',
  data() {
    return {
      email: '',
      password: '',
      userId: '',
      name: ''
    }
  },
  methods: {

    signUp() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
        this.$router.replace('/wishes');
      }).catch((err) => {
          alert(err.message);
        });

      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          user.updateProfile({
            displayName: this.name
          }).then(() => {
            let name = user.displayName;
          }).catch((err) => {
            alert(err.message);
          });
        }
      });
    }
  }
}

</script>
<style scoped>
.sign-up {
box-sizing: border-box;
width:100vw;
min-height: 100vh;
background: url('../assets/wish-cover.jpg');
background-size: cover;
padding: 1rem;
}
.text, .link a {
  color: #fff;
}

.button a {
  color: #000;
}
</style>
