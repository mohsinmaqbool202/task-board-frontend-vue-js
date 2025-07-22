import { createApp } from 'vue';
import { createPinia } from 'pinia'

import App from './App.vue';
import router from './router';
import "@/plugins/validations"
import Notifications from '@kyvg/vue3-notification'

const pinia = createPinia()
createApp(App).use(router).use(pinia).use(Notifications).mount('#app');

const defaultDocumentTitle = 'Task Board'
router.afterEach((to) => {
  document.title = to.meta?.title
    ? `${to.meta.title} - ${defaultDocumentTitle}`
    : defaultDocumentTitle
})