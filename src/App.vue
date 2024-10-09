<template>
    <v-app>
        <!-- 동의 여부 확인 오버레이 -->
        <v-dialog v-model="showDialog" persistent max-width="400">
          <v-card>
            <v-card-title class="headline">동의 하겠습니까?</v-card-title>
            <v-card-text>이 사이트를 이용하려면 동의가 필요합니다.</v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="agree">동의</v-btn>
              <v-btn color="secondary" @click="disagree">미동의</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    
        <!-- 메인 콘텐츠 (동의한 경우에만 보임) -->
        <v-main v-if="isAgreed">
          <MainPanel :urlList="urlList" />
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
        </v-main>
    
        <!-- Empty state (미동의 상태일 때 보임) -->
        <v-main v-if="!isAgreed & !showDialog">
          <v-container>
            <v-row justify="center" align="center" style="height: 100vh;">
              <v-col class="text-center">
                <v-icon color="grey" large>mdi-alert-circle-outline</v-icon>
                <div>서비스 이용에 동의하지 않으셨습니다.</div>
                <v-btn color="primary" @click="retry">다시 시도</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
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
            conf: conf,
            isAgreed: false,
            showDialog: false,
        }),
        created() {
            this.checkAgreement();
        },
        methods: {
            openUrl(url) {
                window.open(url, "_self");
            },
            checkAgreement() {
                const agreement = localStorage.getItem('userAgreement');
                if (agreement === 'agreed') {
                    this.isAgreed = true;
                } else {
                    this.showDialog = true;
                }
                console.log(this.showDialog)
            },
            agree() {
                localStorage.setItem('userAgreement', 'agreed');
                this.isAgreed = true;
                this.showDialog = false;
            },
            disagree() {
                localStorage.setItem('userAgreement', 'disagreed');
                this.isAgreed = false;
                this.showDialog = false;
            },
            retry() {
                this.showDialog = true;
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
    
    html,
    body {
        overflow-x: hidden;
        /* 수평 스크롤 제거 */
        height: 100%;
        /* 수직 스크롤을 위한 높이 설정 */
        margin: 0;
        padding: 0;
    }
    </style>
    