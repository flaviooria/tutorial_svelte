<script>
  import { onDestroy } from 'svelte';

  export let callback;
  export let milliseconds = 1000;
  // Haremos uso del onDestroy, que servira para remover el intervalo que usaremos en el temporizador
  let interval = setInterval(callback, milliseconds);

  onDestroy(() => clearInterval(interval));
</script>

<p>
  This component executes a callback every
  {milliseconds} millisecond{milliseconds === 1 ? '' : 's'}
</p>

<style>
  p {
    border: 1px solid blue;
    padding: 5px;
  }
</style>
