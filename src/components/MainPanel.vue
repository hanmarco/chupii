<template>
  <v-app-bar :elevation="4" color="red">
    <v-app-bar-title>T'choupi</v-app-bar-title>
  </v-app-bar>
  <VSheet>
    <v-btn v-for="x in list" :key="x">{{x}}</v-btn>
  </VSheet>
</template>

<script>
export default {
  name: "MainPanel",
  created() {},
  data() {
    return {list: [{label:"오디오북", url:"http://naver.com"}]};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>