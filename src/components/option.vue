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
  </div>
</template>

<script>
export default {
  name: "OptionDemo",
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
};
</script>
