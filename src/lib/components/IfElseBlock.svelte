<script>
  let user = {
    loggedIn: false,
  };



  const toggle = () => {
    user.loggedIn = !user.loggedIn;
  };
</script>
<p>{user.loggedIn ? 'Usuario inicio sesión' : 'Usuario no ha iniciado sesión'}</p>
{#if user.loggedIn}
  <!-- content here -->
  <button on:click={toggle}> Log Out </button>
{:else}
  <!-- else content here -->
  <button on:click={toggle}> Log In </button>
{/if}