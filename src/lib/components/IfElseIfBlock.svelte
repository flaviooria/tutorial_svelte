<script>
  let x = 0;

  const incrementNumber = () => {
    x++;
  };
</script>

<button on:click={incrementNumber} >Incrementar número {x}</button>
{#if x > 10}
  <p>{x} es mayor que 10</p>
{:else if 5 > x}
  <p>{x} es menor que 5</p>
{:else}
  <p>{x} esta entre 5 y 10</p>
{/if}
