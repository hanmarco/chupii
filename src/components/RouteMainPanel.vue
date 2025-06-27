<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center mb-6">추피 동화책 📚</h1>
      </v-col>
    </v-row>
    
    <v-row>
      <v-col 
        v-for="book in books" 
        :key="book.id"
        cols="12" 
        sm="6" 
        md="4" 
        lg="3" 
        xl="2"
      >
        <v-card 
          class="book-card mx-auto" 
          max-width="200"
          @click="goToCarousel(book.id)"
          hover
          elevation="3"
        >
          <v-img
            :src="getBookCover(book.id)"
            height="200"
            cover
            class="book-cover"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          
          <v-card-title class="text-center pa-3">
            <span class="text-body-2">{{ book.title }}</span>
          </v-card-title>
          
          <v-card-text class="text-center pa-2">
            <v-chip 
              color="primary" 
              size="small"
              variant="outlined"
            >
              {{ book.id }}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import bookList from '@/list.json'

export default {
  name: "RouteMainPanel",
  data() {
    return {
      books: []
    };
  },
  created() {
    this.generateBookList();
  },
  methods: {
    generateBookList() {
      // list.json의 데이터를 사용하여 책 목록 생성
      this.books = [];
      for (let i = 1; i <= 71; i++) {
        const bookId = `bok_${String(i).padStart(3, '0')}`;
        const bookData = bookList[i - 1]; // list.json은 0부터 시작하므로 i-1
        
        this.books.push({
          id: bookId,
          title: bookData.label,
          url: bookData ? bookData.url : ''
        });
      }
    },
    getBookCover(bookId) {
      // 각 책의 첫 번째 페이지를 커버 이미지로 사용
      return `${process.env.BASE_URL}assets/books/${bookId}/page-01.png`;
    },
    goToCarousel(bookId) {
      this.$router.push(`/carousel/${bookId}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.book-card {
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-5px);
  }
}

.book-cover {
  border-radius: 8px 8px 0 0;
}

h1 {
  color: #1976d2;
  font-weight: 600;
}
</style>