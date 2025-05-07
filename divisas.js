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
        "01/04/2025", "02/04/2025", "03/04/2025", "04/04/2025", "07/04/2025", 
        "08/04/2025", "09/04/2025", "10/04/2025", "11/04/2025", "14/04/2025", 
        "15/04/2025", "16/04/2025", "17/04/2025", "18/04/2025", "21/04/2025",
        "22/04/2025", "23/04/2025", "24/04/2025", "25/04/2025", "28/04/2025",
        "29/04/2025", "30/04/2025",
    ];

    // Las tasas de cambio reales   
    const exchangeRates = [
        1.0793, 1.0855, 1.1050, 1.0955, 1.0904, 
        1.0956, 1.0951, 1.1197, 1.1360, 1.1349, 
        1.1281, 1.1398, 1.1363, 1.1391, 1.1513, 
        1.1420, 1.1315, 1.1389, 1.1365, 1.1422,
        1.1386, 1.1329,
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
