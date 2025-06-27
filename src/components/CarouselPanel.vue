<template>
  <v-container fluid class="carousel-container">
    <v-row>
      <v-col cols="12">
        <div class="d-flex align-center justify-space-between mb-4">
          <v-btn 
            icon="mdi-arrow-left" 
            variant="text" 
            @click="goBack"
            size="large"
          ></v-btn>
          
          <h1 class="text-center">{{ currentBookTitle }}</h1>
          
          <v-btn 
            icon="mdi-home" 
            variant="text" 
            @click="goHome"
            size="large"
          ></v-btn>
        </div>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card class="carousel-card" elevation="8">
          <v-window v-model="currentPage" class="carousel-window">
            <v-window-item
              v-for="(pagePair, index) in pagePairs"
              :key="index"
              :value="index"
            >
              <div class="d-flex justify-center align-center pa-4">
                <!-- 왼쪽 페이지 -->
                <div class="page-container mr-2">
                  <v-img
                    :src="pagePair.left"
                    :alt="`Page ${pagePair.leftPageNumber}`"
                    class="book-page"
                    cover
                    width="400"
                    height="600"
                  >
                    <template v-slot:placeholder>
                      <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="primary"></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                  <div class="text-center mt-2">
                    <v-chip size="small" color="primary" variant="outlined">
                      {{ pagePair.leftPageNumber }}
                    </v-chip>
                  </div>
                </div>

                <!-- 오른쪽 페이지 (마지막 페이지가 홀수인 경우 빈 페이지) -->
                <div class="page-container ml-2" v-if="pagePair.right">
                  <v-img
                    :src="pagePair.right"
                    :alt="`Page ${pagePair.rightPageNumber}`"
                    class="book-page"
                    cover
                    width="400"
                    height="600"
                  >
                    <template v-slot:placeholder>
                      <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="primary"></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                  <div class="text-center mt-2">
                    <v-chip size="small" color="primary" variant="outlined">
                      {{ pagePair.rightPageNumber }}
                    </v-chip>
                  </div>
                </div>
                
                <!-- 빈 페이지 (마지막 페이지가 홀수인 경우) -->
                <div class="page-container ml-2 empty-page" v-else>
                  <div class="empty-page-content">
                    <v-icon size="48" color="grey-lighten-1">mdi-book-open-variant</v-icon>
                    <p class="text-grey-lighten-1 mt-2">끝</p>
                  </div>
                </div>
              </div>
            </v-window-item>
          </v-window>

          <!-- 페이지 인디케이터 -->
          <v-card-actions class="justify-center pa-4">
            <v-chip-group>
              <v-chip
                v-for="(pagePair, index) in pagePairs"
                :key="index"
                :color="currentPage === index ? 'primary' : 'default'"
                variant="outlined"
                size="small"
                @click="currentPage = index"
              >
                {{ pagePair.leftPageNumber }}-{{ pagePair.rightPageNumber || pagePair.leftPageNumber }}
              </v-chip>
            </v-chip-group>
          </v-card-actions>

          <!-- 네비게이션 버튼 -->
          <v-card-actions class="justify-space-between pa-4">
            <v-btn
              :disabled="currentPage === 0"
              @click="previousPage"
              prepend-icon="mdi-chevron-left"
              variant="outlined"
            >
              이전
            </v-btn>
            
            <span class="text-body-2">
              {{ currentPage + 1 }} / {{ pagePairs.length }}
            </span>
            
            <v-btn
              :disabled="currentPage === pagePairs.length - 1"
              @click="nextPage"
              append-icon="mdi-chevron-right"
              variant="outlined"
            >
              다음
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CarouselPanel',
  data() {
    return {
      bookId: '',
      bookPages: [],
      currentPage: 0,
      maxPages: 0
    };
  },
  computed: {
    currentBookTitle() {
      const bookNumber = this.bookId.replace('bok_', '');
      return `추피 동화 ${bookNumber}`;
    },
    pagePairs() {
      const pairs = [];
      for (let i = 0; i < this.bookPages.length; i += 2) {
        const leftPage = this.bookPages[i];
        const rightPage = this.bookPages[i + 1];
        
        pairs.push({
          left: leftPage,
          right: rightPage,
          leftPageNumber: i + 1,
          rightPageNumber: rightPage ? i + 2 : null
        });
      }
      return pairs;
    }
  },
  created() {
    this.initializeBook();
  },
  methods: {
    initializeBook() {
      // URL에서 책 ID 가져오기
      this.bookId = this.$route.params.bookId || 'bok_001';
      this.loadBookPages();
    },
    loadBookPages() {
      this.bookPages = [];
      
      // 각 책 폴더의 페이지 수를 확인하고 로드
      // bok_001부터 bok_061까지는 24페이지, bok_062부터는 25페이지, bok_070부터는 27페이지, bok_071은 28페이지
      let pageCount = 24; // 기본값
      
      const bookNumber = parseInt(this.bookId.replace('bok_', ''));
      if (bookNumber >= 62 && bookNumber <= 69) {
        pageCount = 25;
      } else if (bookNumber === 70) {
        pageCount = 27;
      } else if (bookNumber === 71) {
        pageCount = 28;
      }
      
      for (let i = 1; i <= pageCount; i++) {
        const pageNumber = String(i).padStart(2, '0');
        this.bookPages.push(`${process.env.BASE_URL}assets/books/${this.bookId}/page-${pageNumber}.png`);
      }
      
      this.maxPages = this.bookPages.length;
    },
    previousPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.pagePairs.length - 1) {
        this.currentPage++;
      }
    },
    goBack() {
      this.$router.go(-1);
    },
    goHome() {
      this.$router.push('/');
    }
  },
  watch: {
    '$route.params.bookId'() {
      this.initializeBook();
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.carousel-card {
  border-radius: 16px;
  overflow: hidden;
}

.carousel-window {
  background-color: #f5f5f5;
}

.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 400px;
}

.book-page {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  width: 400px !important;
  height: 600px !important;
}

.empty-page {
  width: 400px;
  height: 600px;
  background-color: #f8f9fa;
  border: 2px dashed #dee2e6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.empty-page-content {
  text-align: center;
}

h1 {
  color: white;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
</style>
