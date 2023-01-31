<script>
  // En select podemos obtener el valor con el value, bind:value en nuestro caso
  let questions = [
    { id: 1, text: `Where did you go to school?` },
    { id: 2, text: `What is your mother's name?` },
    {
      id: 3,
      text: `What is another personal fact that an attacker could easily find with Google?`,
    },
  ];

  let selected;

  let answer = '';

  function handleSubmit() {
    const { id, text } = questions.find((q) => q.id === selected);
    alert(`answered question ${id} (${text}) with "${answer}"`);
  }

  $: if (selected) {
    console.log(selected);
  }
</script>

<h2>Preguntas sobre la inseguridad</h2>

<form class="formulario" on:submit|preventDefault={handleSubmit}>
  <select bind:value={selected} name="questions">
    {#each questions as { id, text } (id)}
      <option value={id}>{text}</option>
    {/each}
  </select>
  <label>
    <input
      type="text"
      name="answer"
      placeholder="Answer here!"
      bind:value={answer}
    />
  </label>
  <button disabled={!answer} type="submit">Enviar</button>
</form>

<p>Pregunta seleccionada es {selected}</p>

<style>
  .formulario {
    display: flex;
    flex-direction: column;
  }
</style>
