import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './registerServiceWorker'
import router from './router';

loadFonts()

const app = createApp(App);

app.use(vuetify);
app.use(router);
app.mount('#app');
