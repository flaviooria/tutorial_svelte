<script>
  let cats = [
    { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
    { id: 'z_AbfPXTKms', name: 'Maru' },
    { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' },
  ];
</script>


{#each cats as cat}
  <!-- content here -->
  <p>Nombre: {cat.name}</p>
{/each}
