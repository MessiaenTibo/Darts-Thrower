<script lang="ts">
import Step from '@/components/generic/Step.vue';
import StepLine from '@/components/generic/StepLine.vue';
import { ref } from 'vue';

export default {
  components: {
    Step,
    StepLine,
  },

  setup() {
    // Variables
    // Game type
    const gameType = ref();
    const gameTypeActive = ref(false);
    // Score type
    const scoreType = ref();
    // Type
    const type = ref();
    // Legs or sets
    const legsOrSets = ref('legs');
    const amountOfLegsOrSets = ref(1);
    // Configure game
    const configureGameActive = ref(false);

    const handleSubmit = () => {
      console.log('submit');
    };

    const handleGameTypeChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      gameType.value = target.value;
      gameTypeActive.value = true;
    };

    const handleLegsOrSetsChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      legsOrSets.value = target.value;
    };

    const handleContinue = () => {
      configureGameActive.value = true;
    };

    return {
      handleSubmit,
      handleGameTypeChange,
      gameTypeActive,
      handleLegsOrSetsChange,
      handleContinue,
      configureGameActive,
      gameType,
    };
  },
};
</script>

<template>
  <div>
    <h2>Creating a game</h2>
    <form action.default="handleSubmit" class="max-w-lg">
      <div>
        <Step
          :number="1"
          title="SELECT GAME TYPE"
          :active="true"
          :completed="gameTypeActive"
        />
        <div class="flex gap-6">
          <StepLine :active="gameTypeActive" />
          <select
            name="GameType"
            id="GameType"
            class="w-full border focus-within:outline-none my-1"
            :class="gameTypeActive ? 'border-green-500' : 'border-gray-500'"
            @change="handleGameTypeChange"
          >
            <option value="501" selected disabled hidden
              >Choose a game type</option
            >
            <option value="x01">X01</option>
            <option value="cricket">Cricket</option>
          </select>
        </div>
      </div>
      <div>
        <Step
          :number="2"
          title="CONFIGURE GAME"
          :active="gameTypeActive"
          :completed="configureGameActive"
        />
        <div class="flex gap-6 min-h-4">
          <StepLine :active="configureGameActive" />
          <div v-if="gameType == 'x01'" class="flex flex-col gap-3 w-full py-1">
            <fieldset class="grid grid-cols-4 w-full">
              <legend>Score</legend>
              <div class="flex w-full">
                <input
                  type="radio"
                  name="scoreType"
                  id="scoreType1"
                  value="170"
                  class="hidden peer/scoreType1"
                />
                <label
                  for="scoreType1"
                  class="border border-gray-400 w-full text-center peer-checked/scoreType1:border-green-500"
                  >170</label
                >
              </div>
              <div class="flex w-full">
                <input
                  type="radio"
                  name="scoreType"
                  id="scoreType2"
                  value="301"
                  class="hidden peer/scoreType2"
                />
                <label
                  for="scoreType2"
                  class="border border-gray-400 w-full text-center peer-checked/scoreType2:border-green-500"
                  >301</label
                >
              </div>
              <div class="flex w-full">
                <input
                  type="radio"
                  name="scoreType"
                  id="scoreType3"
                  value="501"
                  class="hidden peer/scoreType3"
                  checked
                />
                <label
                  for="scoreType3"
                  class="border border-gray-400 w-full text-center peer-checked/scoreType3:border-green-500"
                  >501</label
                >
              </div>
              <div class="flex w-full">
                <input
                  type="radio"
                  name="scoreType"
                  id="scoreType4"
                  value="701"
                  class="hidden peer/scoreType4"
                />
                <label
                  for="scoreType4"
                  class="border border-gray-400 w-full text-center peer-checked/scoreType4:border-green-500"
                  >701</label
                >
              </div>
            </fieldset>
            <fieldset class="grid grid-cols-2 w-full">
              <legend>Type</legend>
              <div class="flex w-full">
                <input
                  type="radio"
                  name="type"
                  id="type1"
                  class="hidden peer/type1"
                  value="race-to"
                  checked
                />
                <label
                  for="type1"
                  class="border border-gray-400 w-full text-center peer-checked/type1:border-green-500"
                  >Race to</label
                >
              </div>
              <div class="flex w-full">
                <input
                  type="radio"
                  name="type"
                  id="type2"
                  value="best-of"
                  class="hidden peer/type2"
                />
                <label
                  for="type2"
                  class="border border-gray-400 w-full text-center peer-checked/type2:border-green-500"
                  >Best of</label
                >
              </div>
            </fieldset>
            <fieldset class="grid grid-cols-3 gap-2 w-full">
              <input
                type="number"
                name="amoutOfLegsOrSets"
                id="amoutOfLegsOrSets"
                value="1"
                min="1"
                max="20"
                class="w-full border border-gray-500 focus-within:outline-none focus-within:border-green-500 text-center"
              />
              <select
                name="legsOrSets"
                id="legsOrSets"
                class="w-full border border-gray-500 focus-within:border-green-500"
                @change="handleLegsOrSetsChange"
              >
                <option value="legs">Legs</option>
                <option value="sets">Sets</option>
              </select>
              <div class="flex gap-2">
                <input
                  type="checkbox"
                  name="doubleCheckout"
                  id="doubleCheckout"
                />
                <label for="doubleCheckout" class="leading-4"
                  >Double Checkout</label
                >
              </div>
            </fieldset>
            <div class="flex justify-end">
              <button
                type="button"
                class="py-2 px-4 bg-green-500 rounded-md"
                @click="handleContinue"
              >
                CONTINUE
              </button>
            </div>
          </div>
          <div v-if="gameType == 'cricket'">
            <p>Not available yet</p>
          </div>
        </div>
      </div>
      <div>
        <Step
          :number="3"
          title="ADD PLAYERS"
          :active="configureGameActive"
          :completed="false"
        />
        <div v-if="configureGameActive">
          <fieldset class="grid grid-cols-4 w-full">
            <legend>Number of players</legend>
            <div class="flex w-full">
              <input
                type="radio"
                name="playerAmount"
                id="playerAmount1"
                value="1"
                class="hidden peer/playerAmount1"
                checked
              />
              <label
                for="playerAmount1"
                class="border border-gray-400 w-full text-center peer-checked/playerAmount1:border-green-500"
                >1</label
              >
            </div>
            <div class="flex w-full">
              <input
                type="radio"
                name="playerAmount"
                id="playerAmount2"
                value="2"
                class="hidden peer/playerAmount2"
              />
              <label
                for="playerAmount2"
                class="border border-gray-400 w-full text-center peer-checked/playerAmount2:border-green-500"
                >2</label
              >
            </div>
            <div class="flex w-full">
              <input
                type="radio"
                name="playerAmount"
                id="playerAmount3"
                value="3"
                class="hidden peer/playerAmount3"
              />
              <label
                for="playerAmount3"
                class="border border-gray-400 w-full text-center peer-checked/playerAmount3:border-green-500"
                >3</label
              >
            </div>
            <div class="flex w-full">
              <input
                type="radio"
                name="playerAmount"
                id="playerAmount4"
                value="4"
                class="hidden peer/scoreType4"
              />
              <label
                for="playerAmount4"
                class="border border-gray-400 w-full text-center peer-checked/playerAmount4:border-green-500"
                >4</label
              >
            </div>
          </fieldset>
        </div>
      </div>
    </form>
  </div>
</template>
<style scoped></style>
