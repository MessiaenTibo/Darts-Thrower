<script lang="ts" setup>
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
</script>

<template>
  <div class="text-black min-h-screen">
    <AppHeader />
    <main class="relative h-full p-4">
      <slot />
    </main>
  </div>
  <AppFooter />
</template>
