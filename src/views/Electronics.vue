<template>
  <div class="home">
    <div class="products">

      <div v-for="(product, index) in filteredProducts"
       class="product"
       :class="{inBag:isInBag(product)}"
       :key="index" 
       
       >
        <div class="product-image" :style="{backgroundImage: 'url('+product.image+')'}"></div>
        <h4>{{product.title}}</h4>
        <p class="price">R$ {{product.price.toFixed(2).replace('.',',')}}</p>
        <button v-if="!isInBag(product)" @click="addToBag(product)">Adicionar ao carrinho</button>
        <button 
        v-else 
        class="remove" 
        @click="this.$store.dispatch('removeFromBag',product.id)"
        >Remova do carrinho</button>

      </div>
    </div>
    
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Accessories',
  computed:{
    ...mapState([
    'products',
    'productsInBag']),
    filteredProducts() {
      return this.products.filter((valor) =>{return valor.category==='electronics';})
  },
}, 
  methods: {
    //método pra adicionar um produto chamando dinamicante um atributo "quantity" que nao tem na api inicial
    addToBag(product){
      product.quantity = 1 
      this.$store.dispatch('addToBag',product)
    },
   //método verifica se já existo o produto dentro da bag
    isInBag(product){
      return this.productsInBag.find(item=>item.id==product.id)
    }
  }
}
</script>
