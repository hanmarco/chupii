<template>
  <v-app-bar :elevation="4" color="red">
    <v-app-bar-title>T'choupi</v-app-bar-title>

    <template v-slot:prepend>
      <v-btn icon>
        <v-icon @click="openUrl(chupiTube)">mdi-youtube</v-icon>
      </v-btn>
    </template>

    <v-spacer></v-spacer>
    
    <v-text-field
      v-model="search"
      density="compact"
      label="Search"
      prepend-inner-icon="mdi-magnify"
      variant="solo-filled"
      flat
      hide-details
      single-line
      class="mr-2"
    ></v-text-field>
  </v-app-bar>
  <VSheet class="ma-2">
    <v-row dense>
      <v-col
        v-for="x in filteredUrlList"
        :key="x.originalIndex"
        cols="12"
        md="6"
      >
        <v-btn
          @click="openUrl(x.url)"
          block
          class="mt-2"
          variant="tonal"
          :color="x.originalIndex+1 == displayOriginalIndex(x.originalIndex)? 'red': 'blue'"
          size="x-large"
          :ripple="false"
        >
          <template v-slot:prepend>
            <span class="prepend-number" style="margin-right: 8px;">{{ displayOriginalIndex(x.originalIndex) }}.</span>
          </template>
          {{ x.label }}
        </v-btn>
      </v-col>
    </v-row>
  </VSheet>
</template>

<script>
export default {
  name: "MainPanel",
  data: () => ({
    search: "",
    limit: 71,
    chupiTube: 'https://www.youtube.com/watch?v=tiLEdxPU2mE&list=PLN7gmmzwthNYU0_kLHRzqGHC3udLddNB-'
  }),
  props: {
    urlList: {
      type: Array,
      default: null,
    },
  },
  computed: {
    filteredUrlList() {
      if (!this.search) {
        return this.urlList.map((item, index) => ({ ...item, originalIndex: index })); // 원본 인덱스를 포함
      }
      const searchLower = this.search.toLowerCase();
      return this.urlList
        .map((item, index) => ({ ...item, originalIndex: index })) // 원본 인덱스를 포함
        .filter((x) => x.label.toLowerCase().includes(searchLower));
    },
  },
  methods: {
    openUrl(url) {
      window.open(url, "_self");
    },
    displayOriginalIndex(index) {
      if (index >= this.limit) {
        return index - this.limit + 1;
      }
      return index + 1;
    },
  },
};
</script>