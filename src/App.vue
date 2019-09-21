<template>
  <div id="app" class="content">
    <link href="https://fonts.googleapis.com/css?family=Dancing+Script|Satisfy&display=swap" rel="stylesheet">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}

</script>
<style>
body {
  ont-family: arial, sans-serif;
  background: url('../src/assets/wish-wall.jpg');
  background-size: cover;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

ul,
li {
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
  height: 15em;
  width: 15em;
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
}

ul li {
  -webkit-transform: rotate(-6deg);
  -o-transform: rotate(-6deg);
  -moz-transform: rotate(-6deg);
}

ul li:nth-child(even) {
  -o-transform: rotate(4deg);
  -webkit-transform: rotate(4deg);
  -moz-transform: rotate(4deg);
  position: relative;
  top: 5px;
  background: #ffdfb6;
}

ul li:nth-child(3n) {
  -o-transform: rotate(-3deg);
  -webkit-transform: rotate(-3deg);
  -moz-transform: rotate(-3deg);
  position: relative;
  top: -5px;
  background: #d3b6e5;
}

ul li:nth-child(5n) {
  -o-transform: rotate(5deg);
  -webkit-transform: rotate(5deg);
  -moz-transform: rotate(5deg);
  position: relative;
  top: -10px;
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
  width: 22%;
  float: right;
  position: fixed;
  top: 0;
  right: 0;
}

.posts {
  width: 78%;

}

@media screen and (max-width: 500px) {
  .posts,
  .makewish {
    width: 100%;
    display: block;
    position: relative;
  }
}

</style>
