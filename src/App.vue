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
html {
  height: 100%;
  box-sizing: border-box;
}

body {
  font-family: Verdana, sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

h1 {
  font-size: 3rem;
  color: #fff;
  font-family: 'Satisfy', cursive;
  margin-bottom: 0;
}

h3 {
  font-size: 20px;
  font-weight: 100;
  margin-top: 0;
}

p {
  font-family: Verdana, sans-serif;
}

input {
  font-size: 1em;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.7);
  color: #000;
}

::placeholder {
  color: #000;
}

button {
  border: 1px solid #999999;
  border-radius: 0.2rem;
  font-size: 1rem;
  display: block;
  margin-top: 0.5rem;
  background: #ffffff;
  background: linear-gradient(to bottom,  #ffffff 0%,#f3f3f3 50%,#ededed 51%,#ffffff 100%);
}

</style>
