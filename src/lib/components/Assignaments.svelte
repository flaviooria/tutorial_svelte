<script>
    // Trabajaremos la reactividad, donde tocaremos 4 puntos 
    /**
     * Asignación reactiva
     * Declarión reactiva
     * Sentencias
     * Actualizando arrays y objetos
     */

    let count = 0;

    function incrementCount() {
		// Manejaremos la reactividad que tiene svelte donde manipula directamente el dom, con nuestra variable declarada previamente
        // Esto se denomina asignación reactiva, ya que cada vez que hagamos click se activara la función y sumara +1 al count
        count++;
	}

    // Ahora haremos uso de una declaración reactiva, que es esto, pues svelte utiliza un label "$:", que le indica que debe de renderizarse de nuevo cada vez que los valores referenciados cambie.
    $: doubled = count * 2
</script>

<!-- Usaremos el evento on:click para hacer uso de nuestra función definida -->
<button on:click={incrementCount}>
	Clicks {count} {count === 1 ? 'vez' : 'veces'}
</button>
<p>El doble de {count} es {doubled}</p>