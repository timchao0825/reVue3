<template>
  <div class="hello">
    <h1>Option API :</h1>
    <h2>{{ count }}</h2>
    <button @click="addCount">Add Count</button>
    <ul>
      <li v-for="(name, idx) in countList" :key="idx">
        {{ name }}
      </li>
    </ul>
    <h2>count * countList = {{ increaseCountList }}</h2>
    <hr />
    <h1>Composition API :</h1>
    <h2>{{ setupCount }}</h2>
    <button @click="setupAddCount">Add Count</button>
    <ul>
      <li v-for="(name, idx) in setupCountList" :key="idx">
        {{ name }}
      </li>
    </ul>
    <h2>setupCount * setupCountList = {{ setupIncreaseCountList }}</h2>
  </div>
</template>

<script>
import { ref, computed } from "vue";
// ref == reactive reference
export default {
  name: "HelloWorld",
  // ---
  // option API
  // ---
  data() {
    return {
      count: 1,
      countList: ["a", "b", "c"],
    };
  },
  computed: {
    increaseCountList() {
      return this.count * this.countList.length;
    },
  },
  methods: {
    addCount() {
      this.count += 1;
    },
  },
  // ---
  // Composition API
  // ---
  setup() {
    const setupCount = ref(10);
    const setupCountList = ref(["d", "e", "f", "g"]);
    const setupIncreaseCountList = computed(() => {
      return setupCount.value * setupCountList.value.length;
    });
    function setupAddCount() {
      setupCount.value++;
    }

    return {
      setupCount,
      setupAddCount,
      setupCountList,
      setupIncreaseCountList,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
