document.getElementById('convertir').addEventListener('click', function() {
    var cantidad = document.getElementById('cantidad').value;
    var deDivisa = document.getElementById('deDivisa').value;
    var aDivisa = document.getElementById('aDivisa').value;

    if (cantidad && deDivisa && aDivisa) {
        var url = `https://openexchangerates.org/api/latest.json?app_id=492f4442cd0745a2a719f3b6d656574d`;

        // Realizar la solicitud a la API
        fetch(url)
            .then(response => response.json())
            .then(data => {
                var tasaCambio = data.rates[aDivisa];
                if (tasaCambio) {
                    var resultado = (cantidad * tasaCambio).toFixed(2);
                    const resultadoDiv = document.getElementById('resultado');
                    resultadoDiv.innerText = `${cantidad} ${deDivisa} = ${resultado} ${aDivisa}`;
                    resultadoDiv.style.display = 'block'; 
                } else {
                    throw new Error("Tasa de cambio no disponible");
                }
            })
            .catch(error => {
                const resultadoDiv = document.getElementById('resultado');
                resultadoDiv.innerText = "Error al obtener la tasa de cambio.";
                resultadoDiv.style.display = 'block';
                console.error('Error fetching data: ', error);
            });
    } else {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerText = "Por favor, completa todos los campos.";
        resultadoDiv.style.display = 'block'; 
    }
});

// GRÁFICO
document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('exchangeRateChart').getContext('2d');
    
    const labels = [
        "03/03/2025", "04/03/2025", "05/03/2025", "06/03/2025", "07/03/2025", 
        "10/03/2025", "11/03/2025", "12/03/2025", "13/03/2025", "14/03/2025", 
        "17/03/2025", "18/03/2025", "19/03/2025", "20/03/2025", "21/03/2025",
        "24/03/2025", "25/03/2025", "26/03/2025", "27/03/2025", "28/03/2025",
        "31/03/2025",
    ];

    // Las tasas de cambio reales   
    const exchangeRates = [
        1.0486, 1.0624, 1.0790, 1.0783, 1.0832, 
        1.0832, 1.0918, 1.0886, 1.0852, 1.0879, 
        1.0921, 1.0943, 1.0901, 1.0851, 1.0814, 
        1.0800, 1.0791, 1.0752, 1.0801, 1.0827,
        1.0817,
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
