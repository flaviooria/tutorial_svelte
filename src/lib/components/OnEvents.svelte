<script>
    // Trabajaremos hoy eventos en el DOM, todos los eventos en svelte se usan con la directiva "on:evento"
    let m = { x: 0, y: 0 };
    let m1 = { x: 0, y: 0 };
  
    function handleMousemove(event) {
      m.x = event.clientX;
      m.y = event.clientY;
    }
  </script>
  
  <section on:mousemove={handleMousemove}>
      <p>La posición del mouse es: {m.x} x {m.y}</p>
  </section>
  
  <br>
  <!-- Tambien podemos invocar a un evento usando manejadores en linea -->
  <section on:mousemove="{e => m1 = {...m1, x: e.clientX, y: e.clientY}}">
      <p>La posición del mouse es: {m1.x} x {m1.y}</p>
  </section>
  
  <style>
      section {
          width: 100%;
          height: 100%;
          border: 1px solid red;
      }
  </style>