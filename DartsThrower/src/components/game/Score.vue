<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {},
});
</script>

<template>
  <div
    class="grid grid-rows-6 w-full bg-gray-100 dark:bg-gray-800 dark:text-white font-medium px-2"
  >
    <div
      class="flex justify-center items-center row-span-3 text-6xl border-green-500 border-b-2"
    >
      501
    </div>
    <div class="flex items-center border-green-500 border-b-2">
      Last score:-
    </div>
    <div class="flex items-center border-green-500 border-b-2">
      Darts thrown: 0
    </div>
    <div class="flex items-center">3-dart avg.: 0.00</div>
  </div>
</template>

<style scoped></style>
