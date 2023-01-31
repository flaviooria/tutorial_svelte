<script>
  // Vamos uso del store que tiene svelte,es un almacen que nos servira para manejar el estado del valor que le pasemos
  // ya que no siempre se maneja todo en la jerarquía de componentes, y a veces es necesario acceder a algún valor para hacer uso de este.
  // El store en otros frameworks como react o flutter sería el provider o manejador de estado.
  import { count } from '../store/write.store';

  let countValue;

  // Método subscribe, servira para asignar a nuestro store el valor del contador
  count.subscribe((value) => {
    console.log({ value });
    countValue = value;
  });
  //Con update actualizamos el valor del estado
  const increment = () => {
    count.update((number) => ++number);
  };

  const decrement = () => {
    count.update((number) => --number);
  };

  // Con set establecemos el valor por defecto que tendra
  const reset = () => {
    count.set(0);
  };
</script>

<p>Valor de contador actual es: {countValue}</p>
<button on:click={increment}>
    +
</button>
<button on:click={decrement}>
    -
</button>
<button on:click={reset}>
    reset
</button>
