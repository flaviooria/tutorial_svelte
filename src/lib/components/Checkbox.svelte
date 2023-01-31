<script>
    // Para el uso de checkbox se usa el checked par obtener si ha cambiado el estado por ende usaríamos el bind:checked
    let yes = false
    let yesBind = false
</script>

<h1>Sin el uso de bind</h1>
<label>
    <input type="checkbox" checked={yes}>
    Acepto los terminos y condicicones
</label>

<button disabled="{!yes}">Suscribirse</button>
<h1>Con el uso de bind</h1>
<label>
    <input type="checkbox" bind:checked={yesBind}>
    Acepto los terminos y condicicones
</label>

{#if yesBind}
    <p>Gracias por aceptar los terminos y condiciones</p>
{:else}
    <p>Debes aceptar los terminos y condiciones para suscribirte</p>
{/if}

<button disabled="{!yesBind}">Suscribirse</button>