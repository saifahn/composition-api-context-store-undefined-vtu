<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increaseCount">Increase count</button>
  </div>
</template>

<script>
import { defineComponent, computed } from '@vue/composition-api'
export default defineComponent ({
  setup(props, context) {
    const count = computed(() => context.root.$store.state.count);
    function increaseCount() {
      context.root.$store.commit('increment')
    }
    return { count, increaseCount }
  }
})
</script>