<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>
    <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="Pesquise por títulos...">
    {{ filtro }}
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
        <meu-Painel :titulo="foto.titulo">
        <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">
        </meu-Painel>
      </li>
    </ul>
  </div>
</template>

<script>
  import Painel from './components/shared/painel/Painel.vue';

  export default {
    components:{
      'meu-Painel': Painel,
    },
    data() {
      return {
        titulo: "Alurapic",
        fotos: [],
        filtro: ''
      }
    },
    computed:{
      fotosComFiltro(){
        if(this.filtro) {
          let exp = new RegExp(this.filtro.trim(), 'i');
          return this.fotos.filter(foto => exp.test(foto.titulo));
        }else{
          return this.fotos;
        }
      }
    },
    created() {
      this.$http.get("http://localhost:3000/v1/fotos")
        .then(res => res.json())
        .then(qualquernome => this.fotos = qualquernome, erro => console.log(erro));
    }
  }
</script>

<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

  .centralizado {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .imagem-responsiva {
    width: 100%;
  }

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
  .filtro{
    display:block;
    width:100%;
  }

</style>
