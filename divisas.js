document.getElementById('convertir').addEventListener('click', function() {
    var cantidad = document.getElementById('cantidad').value;
    var deDivisa = document.getElementById('deDivisa').value;
    var aDivisa = document.getElementById('aDivisa').value;

    // Verificar que se haya ingresado una cantidad y las divisas estén seleccionadas
    if (cantidad && deDivisa && aDivisa) {
        var url = `https://api.exchangerate-api.com/v4/latest/${deDivisa}`;

        // Realizar la solicitud a la API
        fetch(url)
            .then(response => response.json())
            .then(data => {
                var tasaCambio = data.rates[aDivisa];
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

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6775666300374227"
    crossorigin="anonymous"></script>