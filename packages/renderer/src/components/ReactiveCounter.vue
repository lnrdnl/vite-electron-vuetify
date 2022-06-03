<script lang="ts" setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <v-card
    class="ma-2"
    color="grey-lighten-3"
  >
    <v-card-title>Test Vue Reactivity</v-card-title>
    <v-card-text>
      <div class="d-flex justify-center">
        <v-btn
          class="mb-4"
          @click="count++"
        >
          count is: {{ count }}
        </v-btn>
      </div>
      <v-card class="pa-2">
        <code>packages/renderer/src/components/ReactiveCounter.vue</code>
      </v-card>
    </v-card-text>
  </v-card>
</template>
