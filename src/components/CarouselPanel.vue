<template>
  <v-container fluid class="carousel-container pa-0">
    <v-row class="ma-0">
      <v-col cols="12" class="pa-0">
        <div class="d-flex align-center justify-space-between">
          <v-btn 
            icon="mdi-arrow-left" 
            variant="text" 
            @click="goBack"
            size="large"
            color="white"
          ></v-btn>
          
          <h2 class="text-center">{{ currentBookTitle }}</h2>
          
          <v-btn 
            icon="mdi-home" 
            variant="text" 
            @click="goHome"
            size="large"
            color="white"
          ></v-btn>
        </div>
      </v-col>
    </v-row>

    <v-row justify="center" class="ma-0">
      <v-col cols="12" class="pa-0">
        <v-card class="carousel-card" elevation="8">
          <v-window v-model="currentPage" class="carousel-window">
            <v-window-item
              v-for="(pagePair, index) in pagePairs"
              :key="index"
              :value="index"
            >
              <div class="d-flex justify-center align-center pa-2">
                <!-- 왼쪽 페이지 -->
                <div class="page-container mr-1">
                  <v-img
                    :src="pagePair.left"
                    :alt="`Page ${pagePair.leftPageNumber}`"
                    class="book-page"
                    cover
                    width="700"
                    height="700"
                  >
                    <template v-slot:placeholder>
                      <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="primary"></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                  <div class="text-center mt-1">
                    <v-chip size="small" color="primary" variant="outlined">
                      {{ pagePair.leftPageNumber }}
                    </v-chip>
                  </div>
                </div>

                <!-- 오른쪽 페이지 (마지막 페이지가 홀수인 경우 빈 페이지) -->
                <div class="page-container ml-1" v-if="pagePair.right">
                  <v-img
                    :src="pagePair.right"
                    :alt="`Page ${pagePair.rightPageNumber}`"
                    class="book-page"
                    cover
                    width="700"
                    height="700"
                  >
                    <template v-slot:placeholder>
                      <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="primary"></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                  <div class="text-center mt-1">
                    <v-chip size="small" color="primary" variant="outlined">
                      {{ pagePair.rightPageNumber }}
                    </v-chip>
                  </div>
                </div>
                
                <!-- 빈 페이지 (마지막 페이지가 홀수인 경우) -->
                <div class="page-container ml-1 empty-page" v-else>
                  <div class="empty-page-content">
                    <v-icon size="48" color="grey-lighten-1">mdi-book-open-variant</v-icon>
                    <p class="text-grey-lighten-1 mt-2">끝</p>
                  </div>
                </div>
              </div>
            </v-window-item>
          </v-window>

          <!-- 페이지 인디케이터 -->
          <!-- <v-card-actions class="justify-center pa-2">
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
          </v-card-actions> -->

          <!-- 네비게이션 버튼 -->
          <!-- <v-card-actions class="justify-space-between pa-2">
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
          </v-card-actions> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import bookList from '@/list.json'

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
      const bookNumber = parseInt(this.bookId.replace('bok_', ''));
      const bookData = bookList[bookNumber - 1]; // list.json은 0부터 시작하므로 bookNumber-1
      return bookData ? bookData.label : `추피 동화 ${bookNumber}`;
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
  padding: 0 !important;
}

.carousel-card {
  border-radius: 8px;
  overflow: hidden;
  margin: 0;
}

.carousel-window {
  background-color: #f5f5f5;
}

.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 700px;
  
  @media (max-width: 1400px) {
    min-width: 600px;
  }
  
  @media (max-width: 1200px) {
    min-width: 500px;
  }
  
  @media (max-width: 1000px) {
    min-width: 400px;
  }
  
  @media (max-width: 800px) {
    min-width: 300px;
  }
  
  @media (max-width: 600px) {
    min-width: 250px;
  }
}

.book-page {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  width: 700px !important;
  height: 700px !important;
  
  @media (max-width: 1400px) {
    width: 600px !important;
    height: 600px !important;
  }
  
  @media (max-width: 1200px) {
    width: 500px !important;
    height: 500px !important;
  }
  
  @media (max-width: 1000px) {
    width: 400px !important;
    height: 400px !important;
  }
  
  @media (max-width: 800px) {
    width: 300px !important;
    height: 300px !important;
  }
  
  @media (max-width: 600px) {
    width: 250px !important;
    height: 250px !important;
  }
}

.empty-page {
  width: 700px;
  height: 700px;
  background-color: #f8f9fa;
  border: 2px dashed #dee2e6;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 1400px) {
    width: 600px;
    height: 600px;
  }
  
  @media (max-width: 1200px) {
    width: 500px;
    height: 500px;
  }
  
  @media (max-width: 1000px) {
    width: 400px;
    height: 400px;
  }
  
  @media (max-width: 800px) {
    width: 300px;
    height: 300px;
  }
  
  @media (max-width: 600px) {
    width: 250px;
    height: 250px;
  }
}

.empty-page-content {
  text-align: center;
}

h1 {
  color: white;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin: 0;
}
</style>
