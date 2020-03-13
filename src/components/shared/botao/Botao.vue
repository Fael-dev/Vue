<template>
  <!-- ANGULAR EXPRESSION == INTERPOLAÇÃO -->
  <div>
    <button class="botao botao-perigo" :type="tipo">{{ rotulo }} </button>
  </div>
</template>

<script>
  export default {
    name: "Botao",
    props:['tipo','rotulo']
  }
</script>

<style scoped>
  .botao{
    display: inline-block;
    padding:10px;
    border-radius:3px;
    margin:10px;
    font-size:1.2em;
  }
  .botao-perigo{
    background-color: firebrick;
    color:white;
  }
  .botao-padrao{
    background-color: darkcyan;
    color:white;
  }

</style>
