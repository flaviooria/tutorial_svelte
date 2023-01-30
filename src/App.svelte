<script>
  // Importando nuestro primer componente
  // Los componentes en svelte no requieren un export para usarlos, solo se importan
  import Atributes from './lib/components/Atributes.svelte';
  import DispatcherEvents from './lib/components/DispatcherEvents.svelte';
  import EventModifiers from './lib/components/EventModifiers.svelte';
  import OnEvents from './lib/components/OnEvents.svelte';

  let user = null;

  const setUser = (e) => {
    user = e.detail.user;
  };
</script>

<!--  Usando nuestro componente -->
<!-- <Atributes /> -->
<!-- <OnEvents></OnEvents> -->
<!-- <EventModifiers></EventModifiers> -->
<DispatcherEvents
  on:saludo={(e) => console.log(e.detail.content)}
  on:user={setUser}
/>

<!-- Sin if usando el nullish assetion -->
<p>Nombre: {user?.name ?? ''}</p>
<p>Edad: {user?.age ?? ''}</p>
<p>Profesión: {user?.profession ?? ''}</p>

<!--Con if -->
{#if user}
  <!-- content here -->
  <p>Nombre: {user.name}</p>
  <p>Edad: {user.age}</p>
  <p>Profesión: {user.profession}</p>
{/if}
