<script>
    // Vamos a trabajar con los bindings, el uso que tienen es que nos facilitarán el acceso a un dato que queramos obtener. Por ejemplo si en input, normalmente para obtener el valor lo tenemos que coger con un event.target.value
    // Con los bind nos simplifica mucho esa tarea obteniendo el valor del input y actualizando a la vez la  variable
    let name = ''

    $: if (name) {
        console.log(name);
    }
</script>

<!-- Sin bind -->
<input type="text" value={name} placeholder="Escribe algo ...">
<p>Sin bind: {name}</p>
<!-- Con bind -->
<input type="text" bind:value={name} placeholder="Escribe algo ...">
<p>Con bind: {name}</p>