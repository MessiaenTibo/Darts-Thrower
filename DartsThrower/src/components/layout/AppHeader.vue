<script lang="ts">
import ToggleDarkmode from '@/components/ToggleDarkmode.vue';

export default {
  components: {
    ToggleDarkmode,
  },
  setup() {
    return {
      // data
    };
  },
};
</script>

<template>
  <header
    class="flex py-2 px-4 h-20 min-h-min items-center justify-between bg-white dark:bg-gray-900 dark:text-white shadow-md"
  >
    <div class="sr-only xsm:not-sr-only cursor-pointer">
      <router-link to="/">
        <h1 class="text-2xl font-bold">Darts Thrower</h1>
      </router-link>
    </div>
    <div class="not-sr-only xsm:sr-only cursor-pointer">
      <router-link to="/">
        <h1 class="text-2xl font-bold">DT</h1>
      </router-link>
    </div>
    <nav>
      <ul class="flex gap-4">
        <li class="cursor-pointer">
          <router-link to="/game/create">Game</router-link>
        </li>
        <li class="cursor-pointer">
          <router-link to="/history">History</router-link>
        </li>
        <li>
          <ToggleDarkmode />
        </li>
      </ul>
    </nav>
  </header>
</template>
