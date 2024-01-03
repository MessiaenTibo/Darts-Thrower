<script lang="ts">
// Vue
import { useRoute } from 'vue-router';
// Components
import Title from '@/components/game/Title.vue';
import Name from '@/components/game/Name.vue';
import LegsOrsets from '@/components/game/LegsOrSets.vue';
import Score from '@/components/game/Score.vue';
import ScoreInput from '@/components/game/ScoreInput.vue';
import Numpad from '@/components/game/Numpad.vue';

export default {
  components: {
    Title,
    Name,
    LegsOrsets,
    Score,
    ScoreInput,
    Numpad,
  },

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
  <div class="grid w-full flex-1">
    <Title class="row-span-1" />
    <Name class="row-span-1" />
    <LegsOrsets class="row-span-1" />
    <Score class="row-span-4" />
    <ScoreInput class="row-span-1" />
    <Numpad class="row-span-12" />
  </div>
</template>

<style scoped>
/* You can add additional styling if needed */
</style>
