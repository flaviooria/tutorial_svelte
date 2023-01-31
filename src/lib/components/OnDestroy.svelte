<script>
  import Timer from "./Timer.svelte";

  let open = false;
  let seconds = 1;

  const toggle = () => (open = !open);
  const incrementSeconds = () => seconds++;
</script>

<button on:click={toggle}> {!open ? 'Abrir' : 'Cerrar'} temporizador </button>

<p>El componente timer esta abierto por {seconds} {seconds === 1 ? 'segundo' : 'segundos'}</p>

{#if open}
  <Timer callback={incrementSeconds}></Timer>
{/if}
