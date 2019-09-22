<template>
  <div class="wishes">
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
        <h1>Make a wish .</h1>
        <textarea v-model="message" placeholder="Make a wish." class="input" required></textarea>
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
.wishes {  
background-image: url('../assets/wish-wall.jpg');
  background-size: cover;
  box-sizing: border-box;
width:100vw;
min-height: 100vh;
padding: 1rem;
}
.message {font-size: 1.5em;}
.name {font-size: 1em; position: absolute; bottom: 0;}
textarea { font-size: 1em; min-width: 19rem; min-height: 20em; background: rgba(255, 255, 255, 0.7); color: #000;}


</style>
