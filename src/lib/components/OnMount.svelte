<script>
	import UserCard from "./UserCard.svelte"
					
  // Lifecycles -> Svelte explica que cada componente tiene un clico de vida que inicia y que se destruye, la cual
  // existen algunas funciones que permitiran ejecutar código en algun momento indicado.
  // El más frecuente es el onMount, el cual usaremos para cargar datos
  import { onMount } from 'svelte';

  let users = [];

  // Llamaremos a onMount y vamos a obtener los datos de un json
  onMount(async () => {
    const res = await fetch('../../src/db/db.json');
    users = await res.json();
  });
</script>

<div class="grid gap-5 bg-indigo-100">
  {#each users as user (user.id)}
    <!-- content here -->
    <UserCard {...user}/>
  {:else}
    <!-- empty list -->
    <p>No hay datos</p>
  {/each}
</div>
