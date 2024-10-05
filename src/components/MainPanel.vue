<template>
  <v-app-bar :elevation="4" color="red">
    <v-app-bar-title>T'choupi</v-app-bar-title>
  </v-app-bar>
  <VSheet>
    <v-btn v-for="x in urlList" :key="x" @click="openUrl(x.url)">{{x.label}}</v-btn>
  </VSheet>
</template>

<script>
export default {
  name: "MainPanel",
  created() {},
  data() {},
  props: {
    urlList: {
      type: Array,
      default: null,
    }
  },
  methods: {
    openUrl(url) {
      window.open(url, '_self'); // '_blank'로 새 창에서 URL을 엽니다.
    }
  },
};
</script>

<style lang="scss" scoped></style>