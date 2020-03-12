import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

/*
ACIMA ESTÁ EM ECMASCRIPT 6 - 2015
MESMA REPRESENTACAO DA DECLARACAO ACIMA
new Vue({
  el: '#app',
  render: function () {
    h(App);
  }
})
*/
