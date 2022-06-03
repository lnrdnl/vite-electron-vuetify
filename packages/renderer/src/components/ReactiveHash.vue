<script lang="ts" setup>
import { computed, ref } from 'vue';

const rawString = ref('Hello World');
/**
 * window.nodeCrypto was exposed from {@link module:preload}
 */
const hashedString = computed(() => window.nodeCrypto.sha256sum(rawString.value));
</script>

<template>
  <v-card
    color="grey-lighten-3"
    class="ma-2"
  >
    <v-card-title>Test Node.js API</v-card-title>
    <v-card-text>
      <v-form>
        <v-container>
          <v-text-field
            v-model="rawString"
            variant="contained"
            label="Raw value"
            clearable
          />
          <v-text-field
            v-model="hashedString"
            label="Hashed by node:crypto"
          />
        </v-container>
      </v-form>
      <v-card class="pa-2">
        <code>packages/renderer/src/components/ReactiveHash.vue</code>
      </v-card>
    </v-card-text>
  </v-card>
</template>
