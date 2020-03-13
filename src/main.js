import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {routes} from './routes';
import './directives/Transform';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes, // PODE-SE DEIXAR APENAS routes, SEGUNDO O ECMASCRIPT 6, QUANDO O VALOR TEM O MSM NOME DA PROPRIEDADE
  mode: 'history' // MUDA O PADRÃO DE: LOCALHOST:8080/#/ PARA LOCALHOST:8080/
});

new Vue({
  el: '#app',
  router, // PADRÃO ECMASCRIPT 6
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
