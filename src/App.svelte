<script>
  // Importando nuestro primer componente
  // Los componentes en svelte no requieren un export para usarlos, solo se importan
  import Atributes from './lib/components/Atributes.svelte';
  import AutoSubscription1 from './lib/components/AutoSubscription1.svelte';
  import AutoSubscription2 from './lib/components/AutoSubscription2.svelte';
  import ReadableStore from './lib/components/ReadableStore.svelte';
  import WritableStore from './lib/components/WritableStore.svelte';
</script>

<!--  Usando nuestro componente -->
<!-- <Atributes /> -->
<!-- <WritableStore></WritableStore> -->
<!-- <AutoSubscription1></AutoSubscription1> -->
<!-- <AutoSubscription2></AutoSubscription2> -->
<ReadableStore></ReadableStore>