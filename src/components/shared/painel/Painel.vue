<template>
  <div class="painel">
    <h2 class="painel-titulo" @click="visivel = !visivel">{{ titulo }}</h2>
    <transition name="painel-fade">
      <div class="painel-conteudo" v-show="visivel">
        <slot>
          <!--
            SLOT FAZ QUASE A MSM COISA QUE UM BLOCK NO DJANGO
            <slot name="header"> CHAMA O SLOT PELO NOME
            <div slot="header"></div>
            SLOT não recebe diretivas
            DIRETIVA v-on: => forma simples @
           -->
        </slot>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: ['titulo'],
    data() {
      return {
        visivel: true
      }
    }
  }
</script>

<style scoped> // SCOPED quer dizer que esse estilo só pega nesse componente
/* estilo do painel */

.painel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.painel .painel-titulo {
  text-align: center;
  border: solid 2px;
  background: lightblue;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
}

* {
  box-shadow: 5px 5px 5px;
}
  .painel-fade-enter, .painel-fade-leave-active{
    opacity:0;
  }
  .painel-fade-enter-active, .painel-fade-leave-active{
    transition: opacity .4s;
  }

</style>

// painel-fade-enter  // Antes do elemento ser incluído ou removido, estado atual
// painel-fade-enter-active // Quando o elemento está sendo incluido
// painel-fade-leave-active // Quando o elemento está sendo removido
