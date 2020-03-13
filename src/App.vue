<template>
  <div class="corpo">
    <meu-Menu :rotas="routes"></meu-Menu>
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
  <!--
    NÃO PODE USAR A TAG a:href POIS VAI RECARREGAR A PÁGINA E SPA(SIMPLE PAGE APPLICATION), NÃO PODE SER RECARREGADA
  -->
</template>

<script>
  import {routes} from './routes';
  import Menu from './components/shared/menu/Menu.vue';

  export default {
    components: {
      'meu-Menu': Menu
    },
    data() {
      return {
        routes
      }
    }
  }
</script>

<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

  .pagina-enter, .pagina-leave-active {
    opacity: 0;
  }

  .pagina-enter-active, .pagina-leave-active {
    transition: opacity .4s;
  }
</style>
