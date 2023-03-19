<template>
  <div class="container">
    <div id="nav">
      <router-link to="/"> <fa icon="home"/> Teste</router-link> 
      <div>
        <router-link to="/accessories"> Acessórios </router-link> -
        <router-link to="/electronics"> Eletrônicos </router-link> -
        <router-link to="/womenclothes"> Roupas Femeninas </router-link> - 
        <router-link to="/menclothes"> Roupas Masculinas </router-link> 
      </div>
      <router-link to="/basket">
        <fa :icon="['fas', 'cart-shopping']" />
         Carrinho ({{ this.productsInBag.length }})
      </router-link> 
      <!--  -->
    </div>
    
    
    <router-view/>
    <br><br><br><br><br>
    <Footer/>
  </div>
</template>

<script>
//consumindo a api da fake store com a ajuda da lib 'axios' e usando o lifeCycle Hooks 'created' que significa criado, ou seja, depois da inicialização da api
import {mapState} from 'vuex'//importando a biblioteca
import Footer from './components/Footer.vue'//chamando o componente
  export default {
    components:{
    Footer//declarando o componente
  },
  created(){
    this.$store.dispatch('loadProducts')
    this.$store.dispatch('loadBag') 
  
},
computed:mapState([
    'productsInBag'
  ])
}
  
</script>


<style lang="scss">
*{
  margin:0
}

.container{
  min-height:100vh;
  position:relative;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //max-width: 1280px;
  margin: 80px auto 0px auto;

  @media screen and (max-width: 503px) {
    margin: 110px auto 0px auto;
  }
  
  
}

#nav {
  padding: 16px 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: rgb(37, 37, 37);
  color: white;
  display:flex;
  flex-direction:row;
  justify-content:space-around;

  a {
    color: white;
    text-decoration: none;

    &.router-link-exact-active {
      color: #007bff;
    }
  }
}

</style>
