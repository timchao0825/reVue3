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
    <hr />
    <h1>Reactive Demo :</h1>
    <p>a ==> : {{ a }}</p>
    <p>count space left ==> : {{ spaceLeft }}</p>
    <ul>
      <li v-for="(name, idx) in name" :key="idx">
        {{ name }}
      </li>
    </ul>
    <button @click="increaseCapacity()">add a</button>
    <hr />
    <h1>watch demo :</h1>
    <div>
      Search form <input v-model="searchInput" />
      <p>Number of events => {{ results }}</p>
    </div>
  </div>
</template>

<script>
import { ref, computed, toRefs, watch } from "vue";
import useIncreaseCapacity from "@/useFunction/increaseCapacity";
// ref == reactive reference
// toRefs == 使用reactive時，每次轉template會一直使用範例的event.a, event.spaceleft ... 可以用toRefs函式解構

// lifecycle note
// beforeCreate , created 不需要放置至setup()
// onRenderTraced => reative內容成功被render之後，在render中，此函式會被呼叫
// onRenderTriggered ==> 新的render被觸發後，可以讓你檢查哪些組件被重新render
export default {
  name: "CompositionDemo",
  setup() {
    const { event, increaseCapacity } = useIncreaseCapacity();

    // watch demo
    const searchInput = ref("");
    const results = ref("0");
    // watch effect 提供第一次渲染，是簡單使用的function
    // watchEffect(() => {
    //   fetch(`https://jsonplaceholder.typicode.com/todos/${searchInput.value}`)
    //     .then((res) => res.json())
    //     .then((json) => {
    //       console.log(json);
    //       results.value = json.id;
    //     });
    // });
    watch(searchInput, () => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${searchInput.value}`)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          results.value = json.id;
        });
    });
    return {
      // import use function
      ...toRefs(event),
      increaseCapacity,
      // watch effect
      searchInput,
      results,
      // 模組化
      ...useEventSpace(),
    };
  },
};
// function modularizing 模組化
function useEventSpace() {
  // ref demo
  const setupCount = ref(10);
  const setupCountList = ref(["d", "e", "f", "g"]);
  const setupIncreaseCountList = computed(() => {
    return setupCount.value * setupCountList.value.length;
  });
  // ref setup add count
  function setupAddCount() {
    setupCount.value++;
  }
  return {
    setupCount,
    setupAddCount,
    setupCountList,
    setupIncreaseCountList,
  };
}
</script>
