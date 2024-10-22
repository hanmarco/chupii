<template>
    <v-app>
      <nav>
        <RouterLink to="/">Go to Home</RouterLink>
        <RouterLink to="/carousel">Go to About</RouterLink>
      </nav>
      <RouterView  />
      </v-app>
    </template>
    
    <script>
    import listjsonfile from './list.json'
    import conf from './configuration.json'
    
    export default {
        name: 'App',
    
        components: {
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
    