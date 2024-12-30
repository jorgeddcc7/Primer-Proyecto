document.getElementById('convertir').addEventListener('click', function() {
    var cantidad = document.getElementById('cantidad').value;
    var deDivisa = document.getElementById('deDivisa').value;
    var aDivisa = document.getElementById('aDivisa').value;

    // Verificar que se haya ingresado una cantidad y las divisas estén seleccionadas
    if(cantidad && deDivisa && aDivisa) {
        // URL de la API de Fixer.io (o la API que elijas)
        var url = `https://api.exchangerate-api.com/v4/latest/${deDivisa}`;

        // Realizar la solicitud a la API
        fetch(url)
            .then(response => response.json())
            .then(data => {
                var tasaCambio = data.rates[aDivisa];
                var resultado = (cantidad * tasaCambio).toFixed(2);  // Resultado de la conversión
                document.getElementById('resultado').innerText = `${cantidad} ${deDivisa} = ${resultado} ${aDivisa}`;
            })
            .catch(error => {
                document.getElementById('resultado').innerText = "Error al obtener la tasa de cambio.";
                console.error('Error fetching data: ', error);
            });
    } else {
        document.getElementById('resultado').innerText = "Por favor, completa todos los campos.";
    }
});
