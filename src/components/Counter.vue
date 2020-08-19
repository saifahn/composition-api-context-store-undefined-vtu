<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increaseCount">Increase count</button>
  </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
export default defineComponent ({
  setup() {
    const count = ref(0);
    function increaseCount() {
      count.value += 1;
    }
    return { count, increaseCount }
  }
})
</script>