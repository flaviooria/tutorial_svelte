<script>
  // Aquí vamos a hacer uso de los modificadores, que nos servirán para alterar el comportamiento del evento.
  /*  
La lista completa de modificadores:
preventDefault - llama a event.preventDefault() antes de ejecutar el manejador. Útil para el manejo de formularios del lado del cliente, por ejemplo.
stopPropagation - llama a event.stopPropagation(), evitando que el evento llegue al siguiente elemento.
passive - mejora el rendimiento del desplazamiento en eventos de toque/rueda (Svelte lo añadirá automáticamente donde sea seguro hacerlo)
nonpassive - establece explícitamente passive: false
capture - dispara el manejador durante la fase de captura en lugar de la fase de burbujeo (MDN docs)
once - elimina el manejador después de la primera vez que se ejecuta
self - sólo dispara el manejador si event.target es el propio elemento
trusted - sólo activa el manejador si event.isTrusted es verdadero. Es decir, si el evento es provocado por una acción del usuario.
*/
</script>

<!-- Evento sin modificador -->
<button on:click={() => alert('Haciendo click varias veces')}>
  Mostrar alerta varias veces
</button>
<!-- Evento con modificador once => Ejecuta solo una vez el manejador -->
<button on:click|once={() => alert('Haciendo click solo una vez')}>
  Mostrar alerta una vez
</button>
