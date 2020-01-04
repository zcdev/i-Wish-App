<template>
  <div class="wishes">
    <ul class="posts">
      <li class="wish" v-for="(wish, idx) in wishes" :key="idx">
        <p class="message">{{ wish.message }}</p>
        <p class="info"><span class="name">{{ wish.name }}</span><br>{{ wish.createdAt.toDate() | moment("dddd, MMMM Do YYYY, h:mm:ss A") }}</p>
        <button v-if="wish.userId == user" class="button" @click="deleteWish(wish.id)">
          My wish came true (remove wish)
        </button>
      </li>
    </ul>
    <div class="makewish">
      <button class="button logout" v-on:click="logout">Logout</button>
      <form @submit.prevent="addWish(message)">
        <h1>Make a wish .</h1>
        <textarea v-model="message" placeholder="Write down your wish here. Approximately 150 characters or less." class="input" required></textarea>
        <button type="submit" class="button submit">Submit my wish</button>
      </form>
      <div class="topwishes">
        {{getTopWishes}}
        <h2>Top Wishes</h2>
        <ol>
        <li v-for="wish in topWishes">
          {{wish}}
        </li>
        </ol>
      </div>
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
      user: firebase.auth().currentUser.uid,
      topWishes: []
    }
  },
  firestore() {
    return {
      wishes: db.collection('wishes').orderBy('createdAt')
    }
  },
  computed: {
    getTopWishes() {
      db.collection("wishes").get().then((querySnapshot) => {
        let rank = {love: 0, health: 0, joy: 0, happiness: 0, peace: 0, success: 0, job: 0, wealth: 0};

        querySnapshot.forEach((doc) => {
          let message = doc.data().message;
          if (message.includes("love")) {
            rank["love"]++;
          }
          if (message.includes("health") || message.includes("healthy")) {
            rank["health"]++;
          }
          if (message.includes("joy")) {
            rank["joy"]++;
          }
          if (message.includes("happiness") || message.includes("happy")) {
            rank["happiness"]++;
          }
          if (message.includes("peace") || message.includes("peaceful") || message.includes("peacefully")) {
            rank["peace"]++;
          }
          if (message.includes("success") || message.includes("successful") || message.includes("successfully")) {
            rank["success"]++;
          }
          if (message.includes("job")) {
            rank["job"]++;
          }
          if (message.includes("wealth") || message.includes("money")) {
            rank["wealth"]++;
          }
        });

      let topWishes = Object.keys(rank).sort((a,b) => rank[b]-rank[a]);
      return this.topWishes = topWishes;

      });
    }
  },
  methods: {
    addWish(message) {
      if (this.message.length > 150) {
        alert("Your wish is too much... Sorry...");
        return
      }
      const createdAt = new Date();
      const userId = firebase.auth().currentUser.uid;
      const name = firebase.auth().currentUser.displayName;
      db.collection('wishes').add({ message, name, userId, createdAt });
      this.message = "";
      alert("Thanks, your wish is posted on the wall!");
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
  width: 100vw;
  min-height: 100vh;
  padding: 1rem;
}

.message {
  font-size: 1.5em;
}

.info {
  font-size: 0.7em;
  position: absolute;
  bottom: 0;
  font-family: Verdana, sans-serif;
}

.name {
  font-family: 'Satisfy', cursive;
  font-size: 1.5em;
}

textarea {
  font-size: 1em;
  min-width: 19rem;
  min-height: 20em;
  background: rgba(255, 255, 255, 0.7);
  color: #000;
}

ol li {
  list-style: number;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-transform: capitalize;
}

h2 { color: #fff; margin-top: 20px;}

ul,
ul li {
  list-style: none;
}

ul {
  overflow: hidden;
  margin: 0;
}

ul li {
  text-decoration: none;
  color: #000;
  background: #ffc0c8;
  display: block;
  height: 20em;
  width: 20em;
  padding: 1em;
  -moz-box-shadow: 5px 5px 7px rgba(33, 33, 33, 1);
  -webkit-box-shadow: 5px 5px 7px rgba(33, 33, 33, .7);
  box-shadow: 5px 5px 7px rgba(33, 33, 33, .7);
}

ul li {
  margin: 1em;
  float: left;
}

ul li h2 {
  font-size: 140%;
  font-weight: bold;
  padding-bottom: 10px;
}

ul li p {
  font-family: 'Satisfy', cursive;
  font-size: 180%;
  margin: 0;
  margin-bottom: 1em;
}

ul li {
  -webkit-transform: rotate(-6deg);
  -o-transform: rotate(-6deg);
  -moz-transform: rotate(-6deg);
}

ul li:nth-child(1n) {
  -o-transform: rotate(4deg);
  -webkit-transform: rotate(4deg);
  -moz-transform: rotate(4deg);
  position: relative;
  top: 5px;
  background: #ffdfb6;
}

ul li:nth-child(2n) {
  -o-transform: rotate(-3deg);
  -webkit-transform: rotate(-3deg);
  -moz-transform: rotate(-3deg);
  position: relative;
  top: -5px;
  background: #d3b6e5;
}

ul li:nth-child(3) {
  -o-transform: rotate(-1deg);
  -webkit-transform: rotate(-1deg);
  -moz-transform: rotate(-1deg);
  position: relative;
  top: -10px;
  background: #89cda7;
}

ul li:nth-child(4n) {
  -o-transform: rotate(5deg);
  -webkit-transform: rotate(5deg);
  -moz-transform: rotate(5deg);
  position: relative;
  top: -10px;
  background: #97daf8;
}

ul li:nth-child(5n) {
  -o-transform: rotate(2deg);
  -webkit-transform: rotate(2deg);
  -moz-transform: rotate(2deg);
  position: relative;
  top: -5px;
  background: #ffc0c8;
}

ul li:nth-child(7n) {
  -o-transform: rotate(-4deg);
  -webkit-transform: rotate(-4deg);
  -moz-transform: rotate(-4deg);
  position: relative;
  top: 5px;
  background: #89cda7;
}

ul li:hover,
ul li a:focus {
  box-shadow: 10px 10px 7px rgba(0, 0, 0, .7);
  -moz-box-shadow: 10px 10px 7px rgba(0, 0, 0, .7);
  -webkit-box-shadow: 10px 10px 7px rgba(0, 0, 0, .7);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -o-transform: scale(1.1);
  position: relative;
  z-index: 5;
}

.makewish {
  width: 24%;
  float: right;
  position: fixed;
  top: 0;
  right: 0;
  padding-left: 2rem;
}

.posts {
  width: 76%;

}

@media screen and (max-width: 500px) {
  .posts,
  .makewish {
    width: 100%;
    display: block;
    position: relative;
    padding: 0;
  }
  .wishes {
    background-size: contain;
  }
  .message {
    font-size: 100%;
  }
  .logout {
    margin-top: 2em;
  }
  .submit {
    margin: 2em 0;
  }
  textarea {
    padding: 0.5em;
    margin: 1%;
    margin-top: 10%;
    display: block;
    min-width: 90%;
  }
  h1 {
    color: #000;
  }
  ul li {
    height: 15em;
    width: 15em;
  }
  ol li, h2 {
    color: #000;
  }
}

</style>
