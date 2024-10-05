<template>
  <v-app>
    <v-main>
      <MainPanel :urlList="urlList"/>
    </v-main>
    
  <v-footer>
    <div class="mb-2 text-center w-100">
      {{ new Date().getFullYear() }} — Made by <strong>Da-young</strong> & <strong>Do-young</strong>
    </div>
  </v-footer>
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
