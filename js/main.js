window.addEventListener('load', () => {
  /* referenciar a los elementos del DOM */
  const formCrear = document.getElementById('form-crear');
  const listaTareas = document.getElementById('lista-tareas');
  const inputCrear = document.getElementById('crear');
  const inputBuscar = document.getElementById('buscar');

  /* Procedimiento para el Alta */
  formCrear.addEventListener('submit', (e) => {
    e.preventDefault(); //hace que no se recarga la pagina
    capturarValor();
  });

  const capturarValor = () => {
    const tareaNombre = inputCrear.value.trim();
    tareaNombre.length ? mostrarTareaHTRML(tareaNombre) : alert('Debes ingresar una tarea');
  };

  const mostrarTareaHTRML = (tarea) => {
    const liHTML = `<li><strong>${tarea}</strong> <i class="fa-solid fa-trash borrar"></i></li>`;
    listaTareas.innerHTML += liHTML;
  };

  /* metodo de busqueda en las listas */
  inputBuscar.addEventListener('keyup', () => {
    const caracter = inputBuscar.value.trim();
    busqueda(caracter);
  });

  const busqueda = (cadena) => {
    let arreglo = Array.from(listaTareas.children);
    arreglo.filter((texto) => !texto.textContent.toLocaleLowerCase().includes(cadena));
    arreglo.forEach((cadenaFiltrada) => {
      cadenaFiltrada.classList.add('textoFiltrado');
    });
  };
});
