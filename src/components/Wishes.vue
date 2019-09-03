<template>
  <div>
    <button class="button logout" v-on:click="logout">Logout</button>
    <article class="covers" v-for="(wish, idx) in wishes" :key="idx">
      <div>
        <p>{{ wish.message }}</p>
        <hr>
        <button class="button" @click="deleteWish(wish.id)">
          Delete
        </button>
      </div>
    </article>
    <form @submit="addWish(message)">
      <h2>Make a wish</h2>
      <input v-model="message" placeholder="Make a wish." class="input" required>
      <button type="submit" class="button">Add new wish</button>
    </form>
  </div>
</template>
<script>
import firebase from 'firebase'
import { db } from '../main';

export default {
  name: 'Wishes',
  data() {
    return {
      wishes: [],
      message: '',
      userId: ''
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
      db.collection('wishes').add({ message, userId, createdAt });
      this.message = "";
    },
    deleteWish(userId) {
      let wishesRef = db.collection("wishes");

      wishesRef.doc(userId).onSnapshot(function(doc) {
        if (doc.exists) {
          if (doc.data().userId == firebase.auth().currentUser.uid) {
            db.collection('wishes').doc(userId).delete();
          } else {
            alert("Can't delete other people's wishes!");
          }
        }
      });

    },
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login');
      })
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
