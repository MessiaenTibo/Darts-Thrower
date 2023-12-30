<script lang="ts">
export default {
  setup() {
    return {
      // data
    };
  },
};
</script>

<template>
  <header
    class="flex py-2 px-4 h-20 min-h-min items-center justify-between bg-white shadow-md"
  >
    <div class="cursor-pointer">
      <router-link to="/">
        <h1 class="text-2xl font-bold">Darts Thrower</h1>
      </router-link>
    </div>
    <nav>
      <ul class="flex gap-4">
        <li class="cursor-pointer">
          <router-link to="/game">Game</router-link>
        </li>
        <li class="cursor-pointer">
          <router-link to="/history">History</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
