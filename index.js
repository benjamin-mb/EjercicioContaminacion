//crear un array
/*const Contaminacion=[];


//1. crear una variable para enlazar cada caja del formulario
const numeroCarros = document.getElementById('numeroVehiculos')
const zonasMedellin=document.getElementById('zonas')
const resultados = document.getElementById('resultados');

//2. guardar datos del Array
function registrarContaminacion(zona, vehiculos) {
    // Agregar un nuevo objeto para la zona sin verificar existencia
    contaminacion.push({
        zona: zona,
        vehiculos: vehiculos,
        contaminacion:nivelContaminacion(vehiculos) // Calcular la contaminación
    });
    mostrarResultados(); // Mostrar resultados después de registrar
}

function nivelContaminacion(vehiculos) {
    if (vehiculos < 50) {
        return "Bajo";
    } else if (vehiculos < 100) {
        return "Moderado";
    } else if (vehiculos < 200) {
        return "Alto";
    } else {
        return "Crítico";
    }

}

function mostrarResultados() {
    resultadosDiv.innerHTML = ''; // Limpiar resultados previos

    contaminacion.forEach(area => {
        resultados.innerHTML += `<p>${area.zona}: ${area.vehiculos} vehículos, Nivel de Contaminación: ${area.contaminacion}</p>`;
    });
}

boton.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar el envío del formulario

    const zona = zonasMedellin.value.trim(); // Obtener el valor de la zona
    const numeroVehiculos = parseInt(numeroCarros.value, 10); // Convertir a número

    if (zona && numeroVehiculos > 0) { // Verificar que los valores sean válidos
        registrarContaminacion(zona, numeroVehiculos); // Almacenar en el array
        document.querySelector('form').reset(); // Reiniciar el formulario
    } else {
        alert('Ingresa una zona válida y un número de vehículos mayor a 0.');
    }
}); */

// Crear un array
const contaminacion = [];

// Enlazar elementos del formulario
const numeroCarros = document.getElementById('numeroVehiculos');
const zonasMedellin = document.getElementById('zonas');
const resultados = document.getElementById('resultados');
const boton = document.getElementById('botonRegistro');
const filtrar=document.getElementById('botonFiltro')

// Función para registrar la contaminación
function registrarContaminacion(zona, vehiculos) {
    contaminacion.push({
        zona: zona,
        vehiculos: vehiculos,
        contaminacion: nivelContaminacion(vehiculos)
    });
    mostrarResultados(); // Mostrar resultados después de registrar
}

// Función para determinar el nivel de contaminación
function nivelContaminacion(vehiculos) {
    if (vehiculos < 50) {
        return "Bajo";
    } else if (vehiculos < 100) {
        return "Moderado";
    } else if (vehiculos < 200) {
        return "Alto";
    } else {
        return "Crítico";
    }
}

// Función para mostrar resultados
function mostrarResultados() {
    resultados.innerHTML = ''; // Limpiar resultados previos
    contaminacion.forEach(area => {
        resultados.innerHTML += `<p>${area.zona}: ${area.vehiculos} vehículos, Nivel de Contaminación: ${area.contaminacion}</p>`;
    });
}

// Evento del botón
boton.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar el envío del formulario

    const zona = zonasMedellin.value.trim(); // Obtener el valor de la zona
    const numeroVehiculos = parseInt(numeroCarros.value, 10); // Convertir a número

    if (zona && numeroVehiculos > 0) { // Verificar que los valores sean válidos
        registrarContaminacion(zona, numeroVehiculos); // Almacenar en el array
        document.querySelector('form').reset(); // Reiniciar el formulario
    } else {
        alert('Ingresa una zona válida y un número de vehículos mayor a 0.');
    }
});

