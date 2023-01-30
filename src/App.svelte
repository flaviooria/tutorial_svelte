<script>
  // Importando nuestro primer componente
  // Los componentes en svelte no requieren un export para usarlos, solo se importan
  import Atributes from './lib/components/Atributes.svelte';
  import Props from './lib/components/Props.svelte';
  import SpreadProps from './lib/components/SpreadProps.svelte';

  // Vamos a ver como podemos pasar props haciendo un spread
  let spreadProps = {
    src: '../public/vite.svg',
    alt: 'Logo vite',
  };
</script>

<!--  Usando nuestro componente -->
<!-- <Atributes /> -->

<!-- Pasando props a nuestro componente hijo -->
<Props keyword={'<b>keyword</b>'} />
<br />

<!-- Pasadon spread props -->

<SpreadProps {...spreadProps}/>
