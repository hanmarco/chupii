<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center mb-6">추피 동화책 📚</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-list class="book-list">
          <v-list-item
            v-for="book in books"
            :key="book.id"
            @click="goToCarousel(book.id)"
            class="book-list-item mb-2"
            hover
          >
            <template v-slot:prepend>
              <v-avatar size="80" class="book-avatar">
                <v-img
                  :src="getBookCover(book.id)"
                  cover
                  class="book-cover"
                >
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="primary"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-avatar>
            </template>

            <v-list-item-title class="book-title">
              {{ book.title }}
            </v-list-item-title>
            
            <v-list-item-subtitle class="book-subtitle">
              {{ book.id }}
            </v-list-item-subtitle>

            <template v-slot:append>
              <v-chip 
                color="primary" 
                size="small"
                variant="outlined"
                class="book-number"
              >
                {{ book.id.replace('bok_', '') }}
              </v-chip>
              <v-icon icon="mdi-chevron-right" class="ml-2"></v-icon>
            </template>
          </v-list-item>
        </v-list>
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
.book-list {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 16px;
}

.book-list-item {
  border-radius: 8px;
  margin-bottom: 8px;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background-color: #f5f5f5;
    transform: translateX(4px);
  }
}

.book-avatar {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.book-cover {
  border-radius: 8px;
}

.book-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1976d2;
  margin-bottom: 4px;
}

.book-subtitle {
  color: #666;
  font-size: 0.9rem;
}

.book-number {
  font-weight: 600;
}

h1 {
  color: #1976d2;
  font-weight: 600;
}
</style>