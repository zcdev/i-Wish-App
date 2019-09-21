<template>
  <div>
    <ul class="posts">
      <li class="wish" v-for="(wish, idx) in wishes" :key="idx">
          <p class="message">{{ wish.message }}</p>
          <p class="name">from: {{ wish.name }}</p>
          <button v-if="wish.userId == user" class="button" @click="deleteWish(wish.id)">
            My wish came true
          </button>
      </li>
    </ul>
    <div class="makewish">
    <button class="button logout" v-on:click="logout">Logout</button>
      <form @submit="addWish(message)">
        <h1>Make a wish.</h1>
        <input v-model="message" placeholder="Make a wish." class="input" required>
        <button type="submit" class="button">Submit my wish</button>
      </form>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase/app';
import { db } from '../main';

export default {
  name: 'Wishes',
  data() {
    return {
      wishes: [],
      message: '',
      name: firebase.auth().currentUser.displayName,
      userId: '',
      user: firebase.auth().currentUser.uid
    }
  },
  firestore() {
    return {
      wishes: db.collection('wishes').orderBy('createdAt')
    }
  },
  methods: {
    addWish(message) {
      const createdAt = new Date();
      const userId = firebase.auth().currentUser.uid;
      const name = firebase.auth().currentUser.displayName;
      db.collection('wishes').add({ message, name, userId, createdAt });
      this.message = "";
    },
    deleteWish(userId) {
      let wishesRef = db.collection("wishes");

      wishesRef.doc(userId).onSnapshot(function(doc) {
        if (doc.exists) {
          if (doc.data().userId == firebase.auth().currentUser.uid) {
            db.collection('wishes').doc(userId).delete();
          } else {
            alert("Can't remove other people's wishes!");
          }
        }
      });

    },
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('/login');
      })
    }
  }
}

</script>

<style scoped>
.message, input {font-size: 1.5em;}
.name {font-size: 1em; position: absolute; bottom: 0;}
h1 {font-size: 3rem; color: #fff; font-family: 'Satisfy', cursive;}
button { border-radius: 0.2rem; font-size: 1rem; display: block; margin-top: 0.5rem;}


</style>
