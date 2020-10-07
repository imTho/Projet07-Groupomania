<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
html{
  box-sizing: border-box;
}

body{
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

 a {
  color: inherit;
  text-decoration: none;
}

a.router-link-exact-active {
  color: inherit;
}
</style>
