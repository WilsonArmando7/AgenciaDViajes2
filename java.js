// Este script podría contener interacciones dinámicas, como mostrar más detalles de un paquete o promoción al hacer clic en el botón correspondiente.
// Por ejemplo:
document.querySelectorAll('.package-card button').forEach(button => {
    button.addEventListener('click', () => {
      // Lógica para mostrar detalles del paquete
      alert('Detalles del paquete');
    });
  });
  
  document.querySelectorAll('.promotion-card button').forEach(button => {
    button.addEventListener('click', () => {
      // Lógica para mostrar detalles de la promoción
      alert('Detalles de la promoción');
    });
  });
  

  function regresar() {
    window.history.back();
}

function mostrarDetalles() {
  var detalles = document.getElementById("detalles");
  if (detalles) {
    detalles.style.display = "block"; // Cambia el estilo para mostrar el elemento
  } else {
    console.error("No se encontró el elemento con ID 'detalles'.");
  }
}

    function mostrarDetalles() {
      var detalles = document.querySelector('.package-card .detalles');
      detalles.style.display = 'block';
      var botonCerrarDetalles = document.querySelector('.package-card button[onclick="cerrarDetalles()"]');
      botonCerrarDetalles.style.display = 'block';
    }

    function cerrarDetalles() {
      var detalles = document.querySelector('.package-card .detalles');
      detalles.style.display = 'none';
      var botonCerrarDetalles = document.querySelector('.package-card button[onclick="cerrarDetalles()"]');
      botonCerrarDetalles.style.display = 'none';
    }

    function regresar() {
      // Scroll hasta el inicio de la página
      window.scrollTo(0, 0);
    }
  
