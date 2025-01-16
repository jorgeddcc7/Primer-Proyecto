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
                // Realizamos la conversión
                var resultado = (cantidad * tasaCambio).toFixed(2); // Resultado de la conversión
                const resultadoDiv = document.getElementById('resultado');
                resultadoDiv.innerText = `${cantidad} ${deDivisa} = ${resultado} ${aDivisa}`;
                resultadoDiv.style.display = 'block'; // Mostrar el resultado
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
