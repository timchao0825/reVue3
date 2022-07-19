<template>
  <div class="hello">
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
  name: "CompositionDemo",
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
