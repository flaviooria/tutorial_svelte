<script>
  // Importando nuestro primer componente
  // Los componentes en svelte no requieren un export para usarlos, solo se importan
  import Atributes from './lib/components/Atributes.svelte';
  import OnDestroy from './lib/components/OnDestroy.svelte';
  import OnMount from './lib/components/OnMount.svelte';
</script>

<!--  Usando nuestro componente -->
<!-- <Atributes /> -->
<!-- <OnMount></OnMount> -->
<OnDestroy></OnDestroy>