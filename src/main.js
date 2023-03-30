import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import Select2 from 'vue3-select2-component';
import CKEditor from '@ckeditor/ckeditor5-vue';

const app = createApp(App);

app.component('SelectTwo', Select2)
app.use(CKEditor);
app.use(router);
app.mount('#app')