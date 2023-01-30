<script>
  // Eventos en componentes, nostros podemos crear componentes para enviar ciertos eventos que queramos o alguna lógica
  // que vayamos a necesitar

  // Necesitamos importar un disparador de eventos
  import { createEventDispatcher } from 'svelte';

  const disptach = createEventDispatcher(); // Asignamos a una variable la función para crear el evento

  function eventoSaludo() {
    let nombreEvento = 'saludo';
    let content = 'Hola Devs';

    disptach(nombreEvento, { content });
  }

  // Crearemos un evento donde enviamos un objeto que hemos recuperado de una base de datos

  function getUserFromDB() {
    let user = {
      name: 'Flavio',
      age: 23,
      profession: 'Developer',
    };

    disptach('user', {user});
  }
</script>

<button on:click={eventoSaludo}> Click para saludar </button>

<button on:click={getUserFromDB}> Click para obtener usuario </button>
