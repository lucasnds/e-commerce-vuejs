import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHome, faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faHome, faCartShopping)
createApp(App)
    .component("fa", FontAwesomeIcon)
    .use(store)
    .use(router)
    .mount('#app')