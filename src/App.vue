<template>
  <v-app>
    <v-main>
      <MainPanel :urlList="items"/>
    </v-main>
    
  <v-footer>
    <div class="mb-2 text-center w-100">
      <div>{{ new Date().getFullYear() }} — Created by <strong>Marco</strong></div>
      <div class="small-gray-text">Made for <strong>Da-young</strong> & <strong>Do-young</strong></div>
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
    urlList: listjsonfile,
    items: [
            { type: 'subheader', title: '추피 콜렉션' },
            {
                title: '추피는 아기 고양이를 키우고 싶어요 🐱',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_1',
            },
            {
                title: '추피는 빌려주는 것이 싫대요 🚫',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_2',
            },
            {
                title: '추피는 잠이 오지 않아요 😴',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_3',
            },
            {
                title: '추피가 정원을 가꿔요 🌸',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_4',
            },
            {
                title: '추피가 자전거를 타요 🚴',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_5',
            },
            {
                title: '추피는 먹는 걸 너무 좋아해요 🍽️',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_6',
            },
            {
                title: '추피가 화났어요 😡',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_7',
            },
            {
                title: '추피는 비 오는 게 좋아요 🌧️',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_8',
            },
            {
                title: '추피가 변장을 했어요 🎭',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_9',
            },
            {
                title: '추피가 크리스마스 파티를 해요 🎄',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_10',
            },
            {
                title: '추피가 해수욕을 해요 🏖️',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_11',
            },
            {
                title: '추피가 눈사람을 만들어요 ⛄',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_12',
            },
            {
                title: '추피가 집을 만들어요 🏡',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_13',
            },
            {
                title: '추피가 유치원에 가요 🎒',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_14',
            },
            {
                title: '추피는 폭풍우가 무서워요 🌩️',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_15',
            },
            {
                title: '추피에게 여동생이 생겼어요 👶',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_16',
            },
            {
                title: '추피가 슈퍼마켓에서 엄마를 잃어버렸어요 🛒',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_17',
            },
            {
                title: '추피가 기차를 타요 🚂',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_18',
            },
            {
                title: '추피가 소풍을 가요 🍉',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_19',
            },
            {
                title: '추피가 아파요 🤒',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_20',
            },
            {
                title: '추피가 엄마의 선물을 준비했어요 🎁',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_21',
            },
            {
                title: '추피의 생일이에요 🎂',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_22',
            },
            {
                title: '추피가 두두를 잃어버렸어요 🧸',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_23',
            },
            {
                title: '추피의 할로윈 파티 🎃',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_24',
            },
            {
                title: '추피가 케이크를 만들어요 🍰',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_25',
            },
            {
                title: '추피가 서커스 구경을 가요 🎪',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_26',
            },
            {
                title: '추피 가족의 연주회 🎻',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_27',
            },
            {
                title: '추피는 텔레비전이 보고 싶어요 📺',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_28',
            },
            {
                title: '추피가 회전목마를 타요 🎠',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_29',
            },
            {
                title: '추피가 여동생을 보살펴요 👶',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_30',
            },
            {
                title: '추피가 낮잠을 자요 💤',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_31',
            },
            {
                title: '추피가 아빠와 다퉜어요 😠',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_32',
            },
            {
                title: '추피에게 변기통이 생겼어요 🚽',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_33',
            },
            {
                title: '추피는 강아지가 무서워요 🐶',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_34',
            },
            {
                title: '추피가 부활절 달걀을 찾고 있어요 🐣',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_35',
            },
            {
                title: '추피가 목욕을 해요 🛁',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_36',
            },
            {
                title: '추피는 혼자 하고 싶어요 👦',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_37',
            },
            {
                title: '추피는 갈레트 과자를 좋아해요 🍪',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_38',
            },
            {
                title: '추피는 잠자기가 싫어요 😴',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_39',
            },
            {
                title: '수영장에 간 추피 🏊',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_40',
            },
            {
                title: '추피가 장난을 쳐요 🤪',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_41',
            },
            {
                title: '추피 가족이 휴가를 떠나요 🏖️',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_42',
            },
            {
                title: '추피는 예의 바른 어린이예요 😊',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_43',
            },
            {
                title: '추피가 혼자서 옷을 입어요 👚',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_44',
            },
            {
                title: '추피가 승마장에 갔어요 🐎',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_45',
            },
            {
                title: '추피는 이모를 좋아해요 🧑‍🦰',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_46',
            },
            {
                title: '추피가 수두에 결렸어요 🤕',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_47',
            },
            {
                title: '추피가 할머니, 할아버지 집에서 자요 🛌',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_48',
            },
            {
                title: '추피 엄마가 아기를 가졌어요 🤰',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_49',
            },
            {
                title: '추피네 가족이 이사가요 🚚',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_50',
            },
            {
                title: '추피는 멋진 꼬마 선장이에요 🚢',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_51',
            },
            {
                title: '추피가 유치원에서 점심을 먹어요 🍱',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_52',
            },
            {
                title: '추피가 다쳤어요 😢',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_53',
            },
            {
                title: '추피에게 여자 친구가 생겼어요 👧',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_54',
            },
            {
                title: '추피가 농장에 가요 🚜',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_55',
            },
            {
                title: '추피는 싸우는 게 싫어요 🤼',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_56',
            },
            {
                title: '추피가 스키를 배워요 🎿',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_57',
            },
            {
                title: '추피는 이제 노리개젖꼭지가 필요 없어요 👶❌',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_58',
            },
            {
                title: '추피가 테니스를 배워요 🎾',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_59',
            },
            {
                title: '추피는 무조건 싫대요 🙅‍♂️',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_60',
            },
            {
                title: '추피는 깜깜한 밤이 무서워요 🌙',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_61',
            },
            {
                title: '추피는 축구 챔피언이에요 ⚽',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_62',
            },
            {
                title: '추피가 즐거운 캠핑을 가요 🏕️',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_63',
            },
            {
                title: '추피가 숨바꼭질을 해요 🤫',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_64',
            },
            {
                title: '추피가 혼자서 이를 닦아요 🦷',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_65',
            },
            {
                title: '추피가 동물원에 가요 🦁',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_66',
            },
            {
                title: '추피가 킥보드를 타요 🛴',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_67',
            },
            {
                title: '추피가 팬케이크를 만들어요 🥞',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_68',
            },
            {
                title: '추피는 이제 이불에 쉬하지 않아요 💧🚫',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_69',
            },
            {
                title: '추피가 수족관에 가요 🐠',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_70',
            },
            {
                title: '추피가 강아지를 키워요 🐕',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_71',
            },
            { type: 'divider' },
            { type: 'subheader', title: '부록' },
            {
                title: '추피가 숲에 갔어요 🌲',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_72',
            },
            {
                title: '추피가 해변에 갔어요 🏖️',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_73',
            },
            {
                title: '추피가 농장에 견학을 갔어요 🚜',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_74',
            },
            {
                title: '추피가 동물원에 놀러 갔어요 🦁',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_75',
            },
            {
                title: '추피가 공원에서 놀아요 🌳',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_76',
            },
            {
                title: '추피와 교통 수단 🚗',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_77',
            },
            {
                title: '유치원에 간 추피 🎒',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_78',
            },
            {
                title: '추피가 병원에 갔어요 🏥',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_79',
            },
            {
                title: '추피의 장난감 🧸',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_80',
            },
            {
                title: '추피의 멋진 새 옷 👗',
                value: 'http://222.231.33.227/webapp/taedong_turnjs/index.html#/?kind=tchoupi_81',
            },
        ],
  }),
}
</script>
<style>
  .small-gray-text {
    font-size: 0.85rem;  /* 텍스트 크기를 작게 설정 */
    color: gray;         /* 글씨 색상을 회색으로 설정 */
  }
</style>