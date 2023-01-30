<script>
  let promise;

  $: if (!promise) {
    promise = fetch('../../src/db/db.json')
      .then((res) => res.json())
      .then((res) => {
        return res || [];
      });
  }
</script>

{#await promise then value}
  {#each value as { id, first_name, last_name }, index (id)}
    <!-- content here -->
    <p>Usuario #{++index}: {first_name} {last_name}</p>
  {:else}
    <!-- empty list -->
    <p>No hay usuarios que listar</p>
  {/each}
{/await}
