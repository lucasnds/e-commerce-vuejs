import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Basket from '../views/Basket.vue'
import Accessories from '../views/Accessories.vue'
import Electronics from '../views/Electronics.vue'
import MenClothes from '../views/MenClothes.vue'
import WomenClothes from '../views/WomenClothes.vue'


const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/basket',
        name: 'Basket',
        component: Basket
    },
    {
        path: '/electronics',
        name: 'Electronics',
        component: Electronics
    },
    {
        path: '/accessories',
        name: 'Accessories',
        component: Accessories
    },
    {
        path: '/menclothes',
        name: 'MenClothes',
        component: MenClothes
    },
    {
        path: '/womenclothes',
        name: 'WomenClothes',
        component: WomenClothes
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router