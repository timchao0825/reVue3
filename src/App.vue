<template>
  <img class="main-logo" alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello world !!" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-logo {
  margin-top: 16px;
  width: 100px;
}
</style>
