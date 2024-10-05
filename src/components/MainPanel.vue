<template>
  <v-app-bar :elevation="4" color="red">
    <v-app-bar-title>T'choupi</v-app-bar-title>
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
    <v-btn v-for="(x, numberofbook) in urlList" :key="x" @click="openUrl(x.url)" block class="mt-2" variant="tonal" color="red" size="x-large">{{displayIndex(numberofbook)}}. {{x.label}}</v-btn>
  </VSheet>
</template>

<script>
export default {
  name: "MainPanel",
  created() {},
  data: () => ({
    search:"",
    limit: 71
  }),
  props: {
    urlList: {
      type: Array,
      default: null,
    }
  },
  methods: {
    openUrl(url) {
      window.open(url, '_self'); // '_blank'로 새 창에서 URL을 엽니다.
    },
    displayIndex(index) {
      // 72번째부터 다시 번호를 1번부터 시작하도록 설정
      if (index >= this.limit) {
        return index - this.limit + 1;
      }
      return index + 1;
    },
  },
};
</script>

<style lang="scss" scoped></style>