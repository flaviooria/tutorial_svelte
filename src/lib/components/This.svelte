<script>
    // Usaremos el bind:this para hacer referencia a algun elemento del DOM, que queramos utilizar en alguna funcionalidad
    // Por ejemplo cuando queramos hacer un focus en algún input al buscar algo

    let input;
    let value = '';

    const search = () => {
        if (value === '') {
            input.focus()
            input.placeholder = 'Ingresa un texto a buscar'
        }    
        setTimeout(() => input.placeholder = '',500);
        return
    }
</script>
<!--  Acá haremos uso de this para referenciar a nuestro input -->
<input type="text" bind:value={value} bind:this={input}>
<button on:click={search}>
    Buscar
</button>