function calcularPrecio() {
    const precioBase = parseFloat(document.getElementById('precio-base').value) || 0;
    const transporteLocal = parseFloat(document.getElementById('transporte-local').value) || 0;
    const seguro = parseFloat(document.getElementById('seguro').value) || 0;
    const transporteInternacional = parseFloat(document.getElementById('transporte-internacional').value) || 0;
    const aduanaExportacion = parseFloat(document.getElementById('aduana-exportacion').value) || 0;
    const aduanaImportacion = parseFloat(document.getElementById('aduana-importacion').value) || 0;
    const carga = parseFloat(document.getElementById('carga').value) || 0;
    const descarga = parseFloat(document.getElementById('descarga').value) || 0;

    const incotermIndex = parseInt(document.getElementById('incoterm-slider').value);

    // Definir `precioTotal` aquí y luego agregar costos
    let precioTotal = precioBase;

    // Lógica para calcular el precio según el incoterm seleccionado
    switch (incotermIndex) {
        case 0: // EXW
            precioTotal += 0;
            break;

        case 1: // FCA
            precioTotal += transporteLocal + aduanaExportacion;
            break;

        case 2: // CPT
            precioTotal += transporteLocal + transporteInternacional + aduanaExportacion;
            break;

        case 3: // CIP
            precioTotal += transporteLocal + transporteInternacional + seguro + aduanaExportacion;
            break;

        case 4: // DAP
            precioTotal += transporteLocal + transporteInternacional + carga + aduanaExportacion;
            break;

        case 5: // DPU
            precioTotal += transporteLocal + transporteInternacional + descarga + aduanaExportacion + carga;
            break;

        case 6: // DDP
            precioTotal += transporteLocal + transporteInternacional + descarga + aduanaExportacion + aduanaImportacion;
            break;

        case 7: // FOB
            precioTotal += transporteLocal + carga + aduanaExportacion;
            break;

        case 8: // FAS
            precioTotal += transporteLocal + aduanaExportacion;
            break;

        case 9: // CFR
            precioTotal += transporteLocal + transporteInternacional + aduanaExportacion;
            break;

        case 10: // CIF
            precioTotal += transporteLocal + transporteInternacional + seguro + aduanaExportacion;
            break;

        default:
            break;
    }

    // Mostrar el precio final
    document.getElementById('precio-final').textContent = `Precio final: ${precioTotal.toFixed(2)}€`;
}


// Función para actualizar los incoterms dinámicamente
function actualizarIncoterms() {
    const esMaritimo = document.getElementById('es-marítimo').checked;
    const incotermsMaritimos = ['FOB', 'FAS', 'CFR', 'CIF'];
    const incotermsGenerales = ['EXW', 'FCA', 'CPT', 'CIP', 'DAP', 'DPU', 'DDP'];
    const incoterms = esMaritimo ? [...incotermsGenerales, ...incotermsMaritimos] : incotermsGenerales;

    const incotermLabelsContainer = document.getElementById('incoterm-labels');
    incotermLabelsContainer.innerHTML = ''; // Limpiar los incoterms

    incoterms.forEach((term) => {
        const span = document.createElement('span');
        span.textContent = term;
        incotermLabelsContainer.appendChild(span);
    });

    // Ajustar el rango del deslizador y asegurar que el índice sea válido
    const slider = document.getElementById('incoterm-slider');
    slider.max = incoterms.length - 1;
    if (slider.value > slider.max) {
        slider.value = 0; // Resetear al primer incoterm si el valor actual excede el nuevo rango
    }

    calcularPrecio(); // Recalcular precio con los nuevos valores
}

// Eventos
document.getElementById('calcular').addEventListener('click', calcularPrecio);
document.getElementById('es-marítimo').addEventListener('change', actualizarIncoterms);
document.getElementById('incoterm-slider').addEventListener('input', calcularPrecio);

// Inicializar incoterms al cargar
actualizarIncoterms();

// Función para mover al siguiente input al presionar Enter
function moverAlSiguienteInput(event) {
    const inputs = document.querySelectorAll('input');
    const index = Array.from(inputs).indexOf(event.target); // Encontrar el índice del input actual

    // Si no es el último input, mueve al siguiente
    if (index < inputs.length - 1) {
        inputs[index + 1].focus();
    }
}

function moverAlSiguienteInput(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evita que el formulario se envíe al presionar Enter

        const inputs = Array.from(document.querySelectorAll('input')); // Todos los inputs
        const indexActual = inputs.indexOf(event.target); // Índice del input actual

        // Si no es el último input, mover al siguiente
        if (indexActual >= 0 && indexActual < inputs.length - 1) {
            inputs[indexActual + 1].focus();
        }
    }
}

// Añadir evento de "keydown" a todos los inputs
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('keydown', moverAlSiguienteInput);
});

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6775666300374227"
    crossorigin="anonymous"></script>
