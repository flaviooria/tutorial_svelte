<script>
  let emojis = {
    manzana: '🍎',
    platano: '🍌',
    naranja: '🍊',
    fresa: '🍓',
  };

  let fruits = ['manzana', 'platano', 'naranja', 'fresa'];
</script>

<!-- Aquí, (fruit) es la clave, que le dice a Svelte cómo averiguar qué nodo del DOM cambiar cuando el componente se actualiza. -->
{#each fruits as fruit (fruit)}
     <!-- content here -->
    <p>La fruta que más me gusta es {fruit} {emojis[fruit]}</p>
{/each}

