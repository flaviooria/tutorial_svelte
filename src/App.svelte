<script>
  // Importando nuestro primer componente
  // Los componentes en svelte no requieren un export para usarlos, solo se importan
  import Atributes from './lib/components/Atributes.svelte';
  import Await from './lib/components/Await.svelte';
  import EachBlock from './lib/components/EachBlock.svelte';
  import IfBlock from './lib/components/IfBlock.svelte';
  import IfElseBlock from './lib/components/IfElseBlock.svelte';
  import IfElseIfBlock from './lib/components/IfElseIfBlock.svelte';
  import KeyEach from './lib/components/KeyEach.svelte';
  ('./lib/components/IfBlock.svelte');
</script>

<!--  Usando nuestro componente -->
<!-- <Atributes /> -->

<h1>Lógica</h1>
<h2>Sentencia if</h2>
<IfBlock />
<br />
<h2>Sentecia if - else</h2>
<IfElseBlock />
<br />
<h2>Sentencia if - else if - else</h2>
<IfElseIfBlock />
<h2>Sentencia each</h2>
<EachBlock />
<h2>Sentencia each con key</h2>
<KeyEach />
<h2>Sentencia await</h2>
<Await></Await>