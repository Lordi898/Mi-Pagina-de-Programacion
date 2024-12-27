// Generador de Contraseñas
function generarContraseña() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let contraseña = "";
    for (let i = 0; i < 12; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      contraseña += caracteres[indice];
    }
    document.getElementById("resultado").innerText = contraseña;
  }
  
  // Navegación Suave
  document.querySelectorAll('nav a').forEach(enlace => {
    enlace.addEventListener('click', function(event) {
      event.preventDefault();
      const seccionId = this.getAttribute('href');
      document.querySelector(seccionId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Validación del Formulario de Contacto
  document.querySelector('form').addEventListener('submit', function(event) {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
  
    if (!nombre || !email || !mensaje) {
      event.preventDefault(); // Evita que se envíe el formulario
      alert('Por favor, completa todos los campos antes de enviar.');
    } else {
      alert('¡Mensaje enviado con éxito!');
    }
  });
  
  // Filtro de Ejercicios
  function filtrarEjercicios() {
    const input = document.getElementById('buscador').value.toLowerCase();
    const ejercicios = document.querySelectorAll('.ejercicio');
  
    ejercicios.forEach(ejercicio => {
      const texto = ejercicio.innerText.toLowerCase();
      if (texto.includes(input)) {
        ejercicio.style.display = 'block';
      } else {
        ejercicio.style.display = 'none';
      }
    });
  }
  
  // Mostrar/Ocultar Soluciones
  function toggleSolucion(id) {
    const solucion = document.getElementById(id);
    if (solucion.style.display === 'none') {
      solucion.style.display = 'block';
    } else {
      solucion.style.display = 'none';
    }
  }
  
  // Alerta de Descarga
  function confirmarDescarga(nombreArchivo) {
    alert(`Gracias por descargar ${nombreArchivo}. ¡Esperamos que te sea útil!`);
  }
  
  // Contador de Visitas
  window.onload = function() {
    const contador = localStorage.getItem('visitas') || 0;
    const nuevoContador = parseInt(contador) + 1;
    localStorage.setItem('visitas', nuevoContador);
    document.getElementById('contador-visitas').innerText = `Visitas: ${nuevoContador}`;
  };
  