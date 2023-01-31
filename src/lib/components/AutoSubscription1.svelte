<script>
  import { onDestroy } from 'svelte';

    // Vamos a usar la auto suscripción del store, svelte explica que tal como se suscribe un valor al store, este debería de destruirse, entonces veremos dos casos de uso en el cual usamos el destroyer, y otro la referencia
  import { count } from '../store/write.store';

  let countValue;

  // Método subscribe, servira para asignar a nuestro store el valor del contador
  let unsubscribe = count.subscribe((value) => {
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

  onDestroy(unsubscribe);

</script>

<h1>Haciendo uso del destroy</h1>
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
