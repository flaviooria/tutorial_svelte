<script>
  // Importando nuestro primer componente
  // Los componentes en svelte no requieren un export para usarlos, solo se importan
  import Atributes from './lib/components/Atributes.svelte';
  import Assignaments from './lib/components/Assignaments.svelte';
</script>

<!--  Usando nuestro componente -->
<Atributes />
<br>
<Assignaments></Assignaments>
