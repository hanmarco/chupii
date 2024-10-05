<template>
  <v-app>
    <v-main>
      <MainPanel :urlList="urlList"/>
    </v-main>
  </v-app>
</template>

<script>
import MainPanel from './components/MainPanel.vue';
import listjsonfile from './list.json'

export default {
  name: 'App',

  components: {
    MainPanel,

  },

  data: () => ({
    urlList: listjsonfile
  }),
}
</script>
