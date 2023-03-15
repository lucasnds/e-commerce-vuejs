import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
//import Basket from '../views/Basket.vue'
// import Accessories from '../views/Accessories.vue'
// import Electronics from '../views/Electronics.vue'
// import MenClothes from '../views/MenClothes.vue'
// import WomenClothes from '../views/WomenClothes.vue'


const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/basket',
        name: 'Basket',
        component: () =>
            import ('../views/Basket.vue')
    },
    {
        path: '/electronics',
        name: 'Electronics',
        component: () =>
            import ('../views/Electronics.vue')
    },
    {
        path: '/accessories',
        name: 'Accessories',
        component: () =>
            import ('../views/Accessories.vue')
    },
    {
        path: '/menclothes',
        name: 'MenClothes',
        component: () =>
            import ('../views/MenClothes.vue')
    },
    {
        path: '/womenclothes',
        name: 'WomenClothes',
        component: () =>
            import ('../views/WomenClothes.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router