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
        "01/01/2025", "02/01/2025", "03/01/2025", "04/01/2025", "05/01/2025", 
        "06/01/2025", "07/01/2025", "08/01/2025", "09/01/2025", "10/01/2025", 
        "11/01/2025", "12/01/2025", "13/01/2025", "14/01/2025", "15/01/2025",
        "16/01/2025", "17/01/2025", "18/01/2025", "19/01/2025", "20/01/2025", 
        "21/01/2025", "22/01/2025", "23/01/2025", "24/01/2025", "25/01/2025", 
        "26/01/2025", "27/01/2025", "28/01/2025", "29/01/2025", "30/01/2025", "31/01/2025"
    ];

    // Las tasas de cambio reales (valores aproximados para enero de 2025)
    const exchangeRates = [
        1.0353, 1.0351, 1.0267, 1.0313, 1.0311, 
        1.0305, 1.0383, 1.0342, 1.0314, 1.0296, 
        1.0242, 1.0318, 1.0244, 1.0307, 1.0289, 
        1.0298, 1.0271, 1.0271, 1.0274, 1.0414, 
        1.0429, 1.0407, 1.0415, 1.0493, 1.0494, 
        1.0495, 1.0491, 1.0428, 1.0420, 1.0390, 1.0362
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
