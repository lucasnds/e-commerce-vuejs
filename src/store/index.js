import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        //como se fosse o 'data', armazena dados
        products: [],
        productsInBag: []

    },
    mutations: {
        loadProducts(state, products) {
            state.products = products
            console.log(products)
        },
        loadBag(state, products) {
            state.productsInBag = products
            console.log(products)
        },
        addToBag(state, product) {
            state.productsInBag.push(product)
            localStorage.setItem('productsInBag', JSON.stringify(state.productsInBag))
        },

        removeFromBag(state, productId) {
            let updatedBag = state.productsInBag.filter(item => productId != item.id)
            state.productsInBag = updatedBag
            localStorage.setItem('productsInBag', JSON.stringify(state.productsInBag))

        }
    },
    actions: {
        loadProducts({ commit }) {
            axios
                .get('https://fakestoreapi.com/products')
                .then(response => {
                    commit('loadProducts', response.data) //chamando a mutation
                })
        },
        loadBag({ commit }) {
            if (localStorage.getItem('productsInBag'))
                commit('loadBag', JSON.parse(localStorage.getItem('productsInBag')))
        },
        addToBag({ commit }, product) {
            commit('addToBag', product)
        },
        removeFromBag({ commit }, productId) {
            if (confirm('Tem certeza que quer remover do carrinho?'))
                commit('removeFromBag', productId)
        }

    },
    modules: {}
})