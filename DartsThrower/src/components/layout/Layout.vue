<script lang="ts" setup>
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
</script>

<template>
  <div class="flex flex-col text-black min-h-screen">
    <AppHeader />

    <main class="flex relative h-full flex-1">
      <slot />
    </main>
  </div>
  <AppFooter />
</template>
