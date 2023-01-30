<script>
  import IfElseBlock from "./IfElseBlock.svelte";

  let user = {
    loggedIn: true,
  };

  const toggle = () => {
    user.loggedIn = !user.loggedIn;
  };
</script>

<p>{user.loggedIn ? 'Usuario inicio sesión' : 'Usuario no ha iniciado sesión'}</p>

<!-- Acá no tan solo trabajamos con las sentencias de bloques, si no con el renderizado condicional -->
{#if user.loggedIn}
  <!-- content here -->
  <button on:click={toggle}> Log Out </button>
{/if}

{#if !user.loggedIn}
  <!-- content here -->
  <button on:click={toggle}> Log In </button>
{/if}
