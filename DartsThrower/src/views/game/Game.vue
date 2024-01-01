<script lang="ts">
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    console.log(route.query);

    // Variables from the URL
    const gameType = route.query.gameType;
    const amoutOfLegsOrSets = route.query.amoutOfLegsOrSets;
    const type = route.query.type;

    return {
      // data
      gameType,
      amoutOfLegsOrSets,
      type,
    };
  },
};
</script>

<template>
  <div>
    <h2 v-if="type == 'first-to'">First to {{ amoutOfLegsOrSets }}</h2>
    <h2 v-if="type == 'best-of'">Best of {{ amoutOfLegsOrSets }}</h2>
  </div>
</template>
<style scoped></style>
