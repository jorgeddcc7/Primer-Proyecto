// Conversor de divisas
document.getElementById('convertir').addEventListener('click', function() {
    var cantidad = document.getElementById('cantidad').value;
    var deDivisa = document.getElementById('deDivisa').value;
    var aDivisa = document.getElementById('aDivisa').value;

    // Verificar que se haya ingresado una cantidad y las divisas estén seleccionadas
    if (cantidad && deDivisa && aDivisa) {
        // Usamos el APP_ID de Open Exchange Rates
        var url = `https://openexchangerates.org/api/latest.json?app_id=492f4442cd0745a2a719f3b6d656574d`;

        // Realizar la solicitud a la API
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Obtenemos la tasa de cambio desde la respuesta de la API
                var tasaCambio = data.rates[aDivisa];
                if (tasaCambio) {
                    // Realizamos la conversión
                    var resultado = (cantidad * tasaCambio).toFixed(2); // Resultado de la conversión
                    const resultadoDiv = document.getElementById('resultado');
                    resultadoDiv.innerText = `${cantidad} ${deDivisa} = ${resultado} ${aDivisa}`;
                    resultadoDiv.style.display = 'block'; // Mostrar el resultado
                } else {
                    throw new Error("Tasa de cambio no disponible");
                }
            })
            .catch(error => {
                const resultadoDiv = document.getElementById('resultado');
                resultadoDiv.innerText = "Error al obtener la tasa de cambio.";
                resultadoDiv.style.display = 'block'; // Mostrar el mensaje de error
                console.error('Error fetching data: ', error);
            });
    } else {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerText = "Por favor, completa todos los campos.";
        resultadoDiv.style.display = 'block'; // Mostrar el mensaje de error
    }
});

// GRÁFICO
document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('exchangeRateChart').getContext('2d');
    
    // Las tasas de cambio reales (por ejemplo, valores aproximados para enero de 2025)
    const labels = [
        "03/02/2025", "04/02/2025", "05/02/2025", "06/02/2025", "07/02/2025", 
        "10/02/2025", "11/02/2025", "12/02/2025", "13/02/2025", "14/02/2025", 
        "17/02/2025", "18/02/2025", "19/02/2025", "20/02/2025", "21/02/2025",
        "24/02/2025", "25/02/2025", "26/02/2025", "27/02/2025", "28/02/2025", 
    ];

    // Las tasas de cambio reales   
    const exchangeRates = [
        1.0344, 1.0377, 1.0402, 1.0381, 1.0327, 
        1.0306, 1.0360, 1.0382, 1.0464, 1.0491, 
        1.0482, 1.0445, 1.0421, 1.0500, 1.0458, 
        1.0466, 1.0513, 1.0483, 1.0394, 1.0400, 
    ];

    try {
        // Crear el gráfico con los datos históricos de cambio de EUR a USD
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: "Tipo de Cambio (EUR -> USD)",
                    data: exchangeRates,
                    borderColor: "blue",
                    backgroundColor: "rgba(0, 0, 255, 0.2)",
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: false }
                }
            }
        });
    } catch (error) {
        console.error("Error creando el gráfico:", error);
    }
});
