<script lang="ts">
import { defineComponent } from 'vue';
import { Check } from 'lucide-vue-next';

export default defineComponent({
  name: 'Step',
  components: {
    Check,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<template>
  <div v-if="active">
    <div v-if="completed" class="flex gap-4">
      <div
        class="flex items-center justify-center w-6 h-6 bg-green-500 rounded-full"
      >
        <Check :size="16" stroke="white" stroke-width="4" />
      </div>
      <div>{{ title }}</div>
    </div>
    <div v-else class="flex gap-4">
      <div
        class="flex items-center justify-center w-6 h-6 bg-green-500 rounded-full"
      >
        <div class="text-white font-medium">{{ number }}</div>
      </div>
      <div>{{ title }}</div>
    </div>
  </div>
  <div v-else class="flex gap-4 opacity-40">
    <div
      class="flex items-center justify-center w-6 h-6 bg-gray-500 rounded-full"
    >
      <div class="text-white font-medium">{{ number }}</div>
    </div>
    <div>{{ title }}</div>
  </div>
</template>
