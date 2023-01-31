<script>
    // Vamos a usar la auto suscripción del store, svelte explica que tal como se suscribe un valor al store, este debería de destruirse, entonces veremos dos casos de uso en el cual usamos el destroyer, y otro la referencia
  import { count } from '../store/write.store';

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

<h1>Haciendo uso del $</h1>
<p>No necesitamos suscribirnos solo haciendo uso <code>$etiqueta_store</code> haremos referencia al store</p>
<p>Valor de contador actual es: {$count}</p>
<button on:click={increment}>
    +
</button>
<button on:click={decrement}>
    -
</button>
<button on:click={reset}>
    reset
</button>
