<script>
    /**
     * En el DOM, todo es una cadena. Eso no es útil cuando se trata de entradas numéricas - type="number" y type="range" - ya que significa que usted tiene que recordar para coaccionar input.value antes de usarlo.
     * Con bind:value, Svelte se encarga de ello:
    */

    let number1 = 1;
    let number2 = 2;
</script>

<label>
	<input type=number bind:value={number1} min=0 max=10>
	<input type=range bind:value={number1} min=0 max=10>
</label>

<label>
	<input type=number bind:value={number2} min=0 max=10>
	<input type=range bind:value={number2} min=0 max=10>
</label>

<p>{number1} + {number2} = {number1 + number2}</p>