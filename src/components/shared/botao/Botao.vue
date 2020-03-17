<template>
  <!-- ANGULAR EXPRESSION == INTERPOLAÇÃO -->
  <div>
    <button @click="disparaAcao()" class="botao" :class="estiloBotao" :type="tipo">{{ rotulo }}</button>
  </div>
</template>

<script>
  export default {
    name: "Botao",
    props: {
      tipo: {
        required: true,
        type: String
      },
      rotulo: {
        required: true,
        type: String
      },
      confirmacao: Boolean,
      estilo: String
    },
    methods: {
      disparaAcao() {
        if (this.confirmacao) {
          if (confirm("Remover foto?")) {
            this.$emit('botaoAtivado'); //$emit => PERMITE ALTERAR O NOME DO EVENTO
          }
          return;
        }
        this.$emit('botaoAtivado');
      }
    },
    computed: {
      estiloBotao() {
        if (this.estilo == 'padrao' || !this.estilo) return 'botao-padrao';
        if (this.estilo == 'perigo') return 'botao-perigo';
      }
    }
  }
</script>

<style lang="sass">

  @import './Botao.scss';

</style>
