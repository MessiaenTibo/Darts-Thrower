<script lang="ts">
import Step from '@/components/generic/Step.vue';
import StepLine from '@/components/generic/StepLine.vue';

export default {
  components: {
    Step,
    StepLine,
  },

  handleSubmit() {
    console.log('submit');
  },

  setup() {
    return {
      // data
    };
  },
};
</script>

<template>
  <div>
    <h2>Creating a game</h2>
    <form action.default="handleSubmit">
      <div>
        <Step
          :number="1"
          title="SELECT GAME TYPE"
          :active="true"
          :completed="true"
        />
        <div class="flex gap-6">
          <StepLine :active="true" />
          <fieldset class="grid grid-cols-2 w-full">
            <div class="flex w-full">
              <input
                type="radio"
                name="gameType"
                id="gameType1"
                class="hidden peer/gameType1"
              />
              <label
                for="gameType1"
                class="border border-gray-400 w-full text-center peer-checked/gameType1:border-green-500"
                >X01</label
              >
            </div>
            <div class="flex w-full">
              <input
                type="radio"
                name="gameType"
                id="gameType2"
                class="hidden peer/gameType2"
              />
              <label
                for="gameType2"
                class="border border-gray-400 w-full text-center peer-checked/gameType2:border-green-500"
                >Cricket</label
              >
            </div>
          </fieldset>
        </div>
      </div>
      <div>
        <Step
          :number="2"
          title="CONFIGURE GAME"
          :active="true"
          :completed="false"
        />
        <div class="flex gap-6">
          <StepLine :active="false" />
          <div>Test</div>
        </div>
      </div>
      <Step
        :number="3"
        title="ADD PLAYERS"
        :active="false"
        :completed="false"
      />
    </form>
  </div>
</template>
<style scoped></style>
