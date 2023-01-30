<script>
    let greating = 'Mundo';
  
    // Atributo dinamico
    let src = '../public/vite.svg';
  </script>
  
  <h1>Hola {greating}</h1>
  
  <!--  Pasando nuetro atributo dinamico -->
  <img {src} alt="Logo vite" />
  <!--  Pasando nuetro atributo dinamico de manera corta -->
  <img {src} alt="Logo vite" />
  
  <style>
    h1 {
      font-size: 3.5em;
      color: #09f;
    }
  
    img {
      width: 100px;
      padding: 8px;
      border-radius: 8px;
      background-color: rgba(0, 153, 255, 0.363);
    }
  </style>
  