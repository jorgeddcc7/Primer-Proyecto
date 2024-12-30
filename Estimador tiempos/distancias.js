const distancias = {
    // España y conexiones
    "España-Estados Unidos": 6000, "Estados Unidos-España": 6000,
    "España-Brasil": 8000, "Brasil-España": 8000,
    "España-China": 11000, "China-España": 11000,
    "España-India": 9000, "India-España": 9000,
    "España-Japón": 11000, "Japón-España": 11000,
    "España-México": 9000, "México-España": 9000,
    "España-Reino Unido": 1300, "Reino Unido-España": 1300,
    "España-Argentina": 11000, "Argentina-España": 11000,
    "España-Sudáfrica": 9500, "Sudáfrica-España": 9500,
    "España-Francia": 1000, "Francia-España": 1000,
    "España-Alemania": 1500, "Alemania-España": 1500,


    // Francia y conexiones
    "Francia-Estados Unidos": 6500, "Estados Unidos-Francia": 6500,
    "Francia-Brasil": 8500, "Brasil-Francia": 8500,
    "Francia-China": 10500, "China-Francia": 10500,
    "Francia-India": 9200, "India-Francia": 9200,
    "Francia-Japón": 10400, "Japón-Francia": 10400,
    "Francia-México": 9400, "México-Francia": 9400,
    "Francia-Reino Unido": 500, "Reino Unido-Francia": 500,
    "Francia-Argentina": 11500, "Argentina-Francia": 11500,
    "Francia-Sudáfrica": 8800, "Sudáfrica-Francia": 8800,
    "Francia-Alemania": 600, "Alemania-Francia": 600,


    // Alemania y conexiones
    "Alemania-Estados Unidos": 7000, "Estados Unidos-Alemania": 7000,
    "Alemania-Brasil": 9000, "Brasil-Alemania": 9000,
    "Alemania-China": 10000, "China-Alemania": 10000,
    "Alemania-India": 8800, "India-Alemania": 8800,
    "Alemania-Japón": 10000, "Japón-Alemania": 10000,
    "Alemania-México": 9500, "México-Alemania": 9500,
    "Alemania-Reino Unido": 700, "Reino Unido-Alemania": 700,
    "Alemania-Argentina": 11500, "Argentina-Alemania": 11500,
    "Alemania-Sudáfrica": 8800, "Sudáfrica-Alemania": 8800,


    // Reino Unido y conexiones
    "Reino Unido-Estados Unidos": 5600, "Estados Unidos-Reino Unido": 5600,
    "Reino Unido-Brasil": 8800, "Brasil-Reino Unido": 8800,
    "Reino Unido-China": 9000, "China-Reino Unido": 9000,
    "Reino Unido-India": 7600, "India-Reino Unido": 7600,
    "Reino Unido-Japón": 9700, "Japón-Reino Unido": 9700,
    "Reino Unido-México": 8500, "México-Reino Unido": 8500,
    "Reino Unido-Argentina": 11000, "Argentina-Reino Unido": 11000,
    "Reino Unido-Sudáfrica": 10500, "Sudáfrica-Reino Unido": 10500,


    // Estados Unidos y conexiones
    "Estados Unidos-Brasil": 8000, "Brasil-Estados Unidos": 8000,
    "Estados Unidos-China": 12000, "China-Estados Unidos": 12000,
    "Estados Unidos-India": 13000, "India-Estados Unidos": 13000,
    "Estados Unidos-Japón": 11000, "Japón-Estados Unidos": 11000,
    "Estados Unidos-México": 3000, "México-Estados Unidos": 3000,
    "Estados Unidos-Argentina": 11000, "Argentina-Estados Unidos": 11000,
    "Estados Unidos-Sudáfrica": 13000, "Sudáfrica-Estados Unidos": 13000,


    // Brasil y conexiones
    "Brasil-China": 12000, "China-Brasil": 12000,
    "Brasil-India": 12000, "India-Brasil": 12000,
    "Brasil-Japón": 13000, "Japón-Brasil": 13000,
    "Brasil-México": 7000, "México-Brasil": 7000,
    "Brasil-Argentina": 1500, "Argentina-Brasil": 1500,
    "Brasil-Sudáfrica": 8300, "Sudáfrica-Brasil": 8300,


    // México y conexiones
    "México-China": 12000, "China-México": 12000,
    "México-India": 13000, "India-México": 13000,
    "México-Japón": 13000, "Japón-México": 13000,
    "México-Argentina": 8000, "Argentina-México": 8000,
    "México-Sudáfrica": 12500, "Sudáfrica-México": 12500,


    // China y conexiones
    "China-India": 3000, "India-China": 3000,
    "China-Japón": 2000, "Japón-China": 2000,
    "China-Argentina": 14000, "Argentina-China": 14000,
    "China-Sudáfrica": 13000, "Sudáfrica-China": 13000,


    // India y conexiones
    "India-Japón": 6000, "Japón-India": 6000,
    "India-Argentina": 15000, "Argentina-India": 15000,
    "India-Sudáfrica": 9000, "Sudáfrica-India": 9000,


    // Japón y conexiones
    "Japón-Argentina": 15000, "Argentina-Japón": 15000,
    "Japón-Sudáfrica": 13000, "Sudáfrica-Japón": 13000,


    // Sudáfrica y Argentina
    "Sudáfrica-Argentina": 11000, "Argentina-Sudáfrica": 11000,
};


// Función para calcular distancia basada en origen y destino
function calcularDistancia(origen, destino, transporte) {
    const clave = `${origen}-${destino}`;


    // Si es terrestre, verificamos si es factible
    if (transporte === "terrestre") {
        // Solo permitimos conexiones entre países cercanos por tierra
        const rutasTerrestres = [
            "España-Francia",
            "Francia-Alemania",
            "Alemania-Reino Unido",
            "España-Alemania",
            "Francia-Reino Unido",
            "España-Reino Unido"
        ];
        if (!rutasTerrestres.includes(clave)) {
            return -1; // Devuelve -1 si no es posible por tierra
        }
    }


    return distancias[clave] || 0; // Devuelve la distancia o 0 si no hay datos
}


function calcularTiempoEntrega() {
    const origen = document.getElementById("origen").value;
    const destino = document.getElementById("destino").value;
    const transporte = document.getElementById("transporte").value;


    const distancia = calcularDistancia(origen, destino);


    if (distancia === 0) {
        document.getElementById("resultado-tiempo").textContent =
            "No hay datos disponibles para esta ruta.";
        return;
    }


    let tiempo; // Tiempo en días u horas


    switch (transporte) {
        case "terrestre":
            tiempo = distancia / 800; // 800 km por día
            break;
        case "maritimo":
            tiempo = distancia / 720; // 720 km por día
            break;
        case "aereo":
            if (distancia <= 3000) {
                // Cortas distancias en horas
                tiempo = distancia / 900; // 900 km/h
                const tiempoHoras = Math.ceil(tiempo);
                document.getElementById("resultado-tiempo").textContent = `
                    Distancia: ${distancia} km.
                    Tiempo estimado: ${tiempoHoras} hora(s) en ${transporte}.
                `;
                return;
            } else {
                // Largas distancias en días
                tiempo = distancia / 900; // 900 km/h
                tiempo = tiempo / 24; // Convertir a días
                tiempo = tiempo + 0.5; // Añadimos medio día por trámites aeroportuarios
            }
            break;
        default:
            tiempo = 0;
    }


    // Mostrar el resultado en días
    const tiempoRedondeado = Math.ceil(tiempo);
    document.getElementById("resultado-tiempo").textContent = `
        Distancia: ${distancia} km.
        Tiempo estimado: ${tiempoRedondeado} día(s) en ${transporte}.
    `;
}


// Añadir evento al botón
document.getElementById("calcular-tiempo").addEventListener("click", calcularTiempoEntrega);


// Animación resultado
document.getElementById('calcular-tiempo').addEventListener('click', function() {
    var resultado = document.getElementById('resultado-tiempo');


    // Aseguramos que el resultado no se ve antes de la animación
    resultado.style.display = 'block';


    // Activamos la animación de caída y escalado
    resultado.style.animation = 'caerYCrecer 0.6s forwards ease-out';


    // Después de la animación (0.6s), podemos reiniciar la animación para futuros cálculos
    setTimeout(function() {
        resultado.style.animation = '';  // Resetear la animación
    }, 600);
});
