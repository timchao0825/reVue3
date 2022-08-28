import { computed, reactive } from "vue";

export default function increaseCapacity() {
  // reactive demo
  const event = reactive({
    a: 1,
    name: ["Tim", "bob", "joe"],
    spaceLeft: computed(() => {
      return event.a * event.name.length;
    }),
  });
  // function

  // reative add count
  function increaseCapacity() {
    event.a++;
  }

  return {
    event,
    increaseCapacity,
  };
}
