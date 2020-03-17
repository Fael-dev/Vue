//const Cadastro = () => System.import('./components/cadastro/Cadastro.vue')

import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';

export const routes = [
  {path: '/home', component: Home, nome: 'Home', name: 'home', menu: true},
  {path: '/cadastro', component: Cadastro, nome: 'Cadastro', name:'cadastro', menu: true},
  {path: '/editar/:id', component: Cadastro, nome: 'Editar', name:'editar', menu: false},
  {path: '*', component: Home, menu: false}
];
