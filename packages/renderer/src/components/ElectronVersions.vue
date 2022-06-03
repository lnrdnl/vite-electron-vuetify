<script lang="ts" setup>
/**
 * window.versions was exposed from {@link module:preload}
 */
const versions = Object.entries(window.versions).sort(([key1], [key2]) =>
  key1.localeCompare(key2),
);
</script>

<template>
  <v-card
    class="ma-2"
    color="grey-lighten-3"
  >
    <v-card-title>Environment</v-card-title>
    <v-card-text>
      <v-table class="mb-4">
        <thead>
          <tr>
            <th class="text-left">
              Lib
            </th>
            <th class="text-left">
              Version
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="[lib, version] in versions"
            :key="lib"
          >
            <td>
              <strong>{{ lib }}</strong>
            </td>
            <td>v{{ version }}</td>
          </tr>
        </tbody>
      </v-table>
      <v-card class="pa-2">
        <code>packages/renderer/src/components/ElectronVersions.vue</code>
      </v-card>
    </v-card-text>
  </v-card>
</template>
