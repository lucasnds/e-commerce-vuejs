<template>
  <div class="home">
    <div class="products">

      <div v-for="(product, index) in this.products"
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
        ><fa icon="trash"/>  Remova do carrinho</button>
      </div>
      
    </div>
    
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Home',
  
  computed:mapState([
    'products',
    'productsInBag'
  ]),
   
  
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

<style lang="scss">

  .home {

    .products {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top:30px;
     


      .product {
        flex: 0 0 25%;
        //box-sizing: border-box;  
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        padding: 16px;
        margin: 8px;
        height: 360px;

        @media only screen and (max-width: 769px) {
          flex: 0 0 40%;
        }

        @media only screen and (max-width: 640px) {
          flex: 0 0 90%;
        }

        &.inBag {
          border: 1px solid #007bff;
        }
        
        
        .product-image {
          margin: 20px auto;
          width: 160px;
          height: 140px;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
        h4 {
          margin: 22px auto;
          font-size: 12px;
          max-width: 60%;
          font-weight: normal;
        }

        p.price {
          font-size: 20px;
          font-weight: bold;
          margin:20px 0px;
        }

        button {
          color: #fff;
          background-color: #007bff;
          border: 1px solid #007bff;
          border-radius: 100px;
          font-weight: 400;
          text-align: center;
          padding: 8px 16px;
          cursor: pointer;

          &:hover {
            opacity: 0.8;
          }

          &.remove {
            background-color: transparent;
            border: none;
            color: black;
            text-decoration: underline;
          }
        }
      }
    }

  }


</style>
