import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHome, faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faHome, faCartShopping) //icons
createApp(App)
    .component("fa", FontAwesomeIcon) //icons
    .use(store)
    .use(router) //biblioteca
    .mount('#app') //principal