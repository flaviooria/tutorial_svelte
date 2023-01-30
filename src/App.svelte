<script>
  // Importando nuestro primer componente
  // Los componentes en svelte no requieren un export para usarlos, solo se importan
  import Atributes from './lib/components/Atributes.svelte';
  import Props from './lib/components/Props.svelte';
</script>

<!--  Usando nuestro componente -->
<!-- <Atributes /> -->

<!-- Pasando props a nuestro componente hijo -->
<Props keyword={'<b>keyword</b>'}></Props>