import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';

export const routes = [
  {path: '/home', component: Home, nome: 'Home', name: 'home', menu: true},
  {path: '/cadastro', component: Cadastro, nome: 'Cadastro', name:'cadastro', menu: true},
  {path: '*', component: Home, menu: false}
];
