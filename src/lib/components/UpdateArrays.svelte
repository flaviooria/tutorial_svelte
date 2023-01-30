<script>
  // Veremos como actulizar el array y objetos
  let numbers = [1, 2, 3, 4, 5];

  const addNumber = () => {
    numbers = [...numbers, numbers.length + 1];
  };

  $: joinedNumbers = numbers.join(' + ')
  $: totalNumbers = numbers.reduce((a, b) => a + b);
</script>

<button on:click={addNumber}>
    Agregar número
</button>
<p>{joinedNumbers} = {totalNumbers}</p>
