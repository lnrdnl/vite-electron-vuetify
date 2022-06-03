<script lang="ts" setup>
import ReactiveCounter from '/@/components/ReactiveCounter.vue';
import ReactiveHash from '/@/components/ReactiveHash.vue';
import ElectronVersions from '/@/components/ElectronVersions.vue';
</script>

<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
    >
      <slot>
        Electron Vuetify
      </slot>
      <!--  <v-app-bar-title> gives a TS error: error TS2322: Type '{ text: string; }' is not assignable to type 'IntrinsicAttributes & Partial<{}> -->
      <!-- <v-app-bar-title text="Electron Vuetify"></v-app-bar-title> -->
    </v-app-bar>
    <v-main>
      <ReactiveCounter class="mb-6" />
      <ReactiveHash class="mb-6" />
      <ElectronVersions />
    </v-main>
  </v-app>
</template>

<style>
  .v-main {
    margin: 1em auto;
    max-width: 640px;
  }
</style>
