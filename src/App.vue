<template>
  <div id="app" class="content">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}

</script>
<style>
        html { height: 100%; box-sizing: border-box; }

body {
  font-family: Verdana, sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*, *:before, *:after { box-sizing: inherit; }

h1 {font-size: 3rem; color: #fff; font-family: 'Satisfy', cursive;}

h3 {
  font-size: 20px;
  font-weight: 100;
}

p {font-family: Verdana, sans-serif;}

input {font-size: 1em; margin-bottom: 1rem; padding: 0.5rem;
  background: rgba(255, 255, 255, 0.7); color: #000;}

::placeholder { color: #000; }

button { border-radius: 0.2rem; font-size: 1rem; display: block; margin-top: 0.5rem;}

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
  width: 24%;
  float: right;
  position: fixed;
  top: 0;
  right: 0;
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
  }
}

</style>
