<script>
    // Vamos a aprender a usar la tag @html, esto nos servira por si en alguna variable tenga un etiqueta html
    // esta la pueda interpretar como tal.
    let tagHtml = 'Hola developers, haremos uso de la etiqueta <b><code>{@html attribute}</code></b>'
</script>

<p>Esto es sin usar la etiqueta html</p>
<p>{tagHtml}</p>
<p>Usando la etiqueta</p>
<p>{@html tagHtml}</p>