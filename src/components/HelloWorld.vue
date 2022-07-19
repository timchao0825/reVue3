<template>
  <div class="hello">
    <h1>Option API vs Composition API</h1>
    <hr />
    <OptionDemo />
    <hr />
    <!-- <CompositionDemo /> -->
  </div>
</template>

<script>
import OptionDemo from "./option.vue";
// import CompositionDemo from "./composition.vue";
export default {
  name: "HelloWorld",
  components: {
    OptionDemo,
    // CompositionDemo,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
