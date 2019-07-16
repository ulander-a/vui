<template>
  <div id="app">
    <Messages />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/api">API</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Messages from './components/Messages'

export default {
  name: 'App',
  components: {
    Messages
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav a {
  color: #42b983;
}
</style>
