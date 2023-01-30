<script>
    // Trabajaremos la reactividad, donde tocaremos 4 puntos 
    /**
     * Asignación reactiva
     * Declarión reactiva
     * Manejo de estado
     * Actualizando arrays y objetos
     */

    let count = 0;

    function incrementCount() {
		// Manejaremos la reactividad que tiene svelte donde manipula directamente el dom, con nuestra variable declarada previamente
        // Esto se denomina asignación reactiva, ya que cada vez que hagamos click se activara la función y sumara +1 al count
        count++;
	}
</script>

<!-- Usaremos el evento on:click para hacer uso de nuestra función definida -->
<button on:click={incrementCount}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>