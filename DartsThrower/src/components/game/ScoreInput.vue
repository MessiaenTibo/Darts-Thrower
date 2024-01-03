<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {},
});
</script>

<template>
  <div
    class="grid grid-cols-3 justify-center items-center text-center w-full bg-green-500"
  >
    <div>
      Undo
    </div>
    <input
      class="text-center outline-none"
      type="number"
      name="score"
      id="score"
      min="0"
      max="180"
      placeholder="Score"
    />
    <div>
      Enter
    </div>
  </div>
</template>

<style scoped></style>
