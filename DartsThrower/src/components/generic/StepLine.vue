<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StepLine',
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<template>
  <div
    v-if="active"
    class="border-l-2 border-dotted border-green-500 ml-[0.70rem] w-1"
  ></div>
  <div
    v-else
    class="border-l-2 border-dotted border-gray-500 ml-[0.70rem] w-1 opacity-40"
  ></div>
</template>
