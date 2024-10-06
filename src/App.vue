<template>
<v-app>
    <v-main>
        <MainPanel :urlList="urlList" />
    </v-main>

    <v-footer>
        <div class="mb-2 text-center w-100">
            <div>{{ new Date().getFullYear() }} — Created by
                <v-btn text @click="openUrl(conf.owner)" density="compact" variant="plain" :ripple="false">
                    Marco
                </v-btn>
            </div>
            <div class="small-gray-text">Made for <strong>Da-young</strong> & <strong>Do-young</strong></div>
        </div>
    </v-footer>
</v-app>
</template>

<script>
import MainPanel from './components/MainPanel.vue';
import listjsonfile from './list.json'
import conf from './configuration.json'

export default {
    name: 'App',

    components: {
        MainPanel,

    },

    data: () => ({
        urlList: listjsonfile,
        conf: conf
    }),
    methods: {
      openUrl(url) {
      window.open(url, "_self");
    },
    }
}
</script>

<style>
.small-gray-text {
    font-size: 0.85rem;
    /* 텍스트 크기를 작게 설정 */
    color: gray;
    /* 글씨 색상을 회색으로 설정 */
}
</style>
