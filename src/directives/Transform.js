import Vue from 'vue';

Vue.directive('meu-transform', {
  bind(el, binding, vnode) {
    let current = 0;
    el.addEventListener('click',function(){
      //let incremento = binding.value || 90; // Pega o valor passado, se não tiver valor, vai ser 90
      let incremento = binding.value || 90;

      if(binding.modifiers.reverse){
        current -= incremento;
      }else{
        current += incremento;
      }
      el.style.transition = `transform 0.5s`;
      el.style.transform = `rotate(${current}deg)`;

      if(binding.modifiers.animate) el.style.transition = 'transform 2s';
    });
  }
});
// el ======> Referencia ao elemento que está sofrendo a acao
// binding => Pega o valor passado na diretiva
// vnode ===>
