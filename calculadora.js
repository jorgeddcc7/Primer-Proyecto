function calcularPrecio() {
    const precioBase = parseFloat(document.getElementById('precio-base').value) || 0;
    const transporteLocal = parseFloat(document.getElementById('transporte-local').value) || 0;
    const seguro = parseFloat(document.getElementById('seguro').value) || 0;
    const transporteInternacional = parseFloat(document.getElementById('transporte-internacional').value) || 0;
    const aduanaExportacion = parseFloat(document.getElementById('aduana-exportacion').value) || 0;
    const aduanaImportacion = parseFloat(document.getElementById('aduana-importacion').value) || 0;
    const carga = parseFloat(document.getElementById('carga').value) || 0;
    const descarga = parseFloat(document.getElementById('descarga').value) || 0;
    const impuestos = parseFloat(document.getElementById('impuestos').value) || 0;

    const incotermIndex = parseInt(document.getElementById('incoterm-slider').value);

    let precioTotal = precioBase;

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
        const valorAduana = precioBase + transporteInternacional + seguro + aduanaImportacion;
        const impuestosCalculados = valorAduana * (impuestos / 100);
        precioTotal += transporteLocal + transporteInternacional + descarga + aduanaExportacion + aduanaImportacion + impuestosCalculados;
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

    document.getElementById('precio-final').textContent = `Precio final: ${precioTotal.toFixed(2)}€`;
}

function actualizarIncoterms() {
    const esMaritimo = document.getElementById('es-marítimo').checked;
    const incotermsMaritimos = ['FOB', 'FAS', 'CFR', 'CIF'];
    const incotermsGenerales = ['EXW', 'FCA', 'CPT', 'CIP', 'DAP', 'DPU', 'DDP'];
    const incoterms = esMaritimo ? [...incotermsGenerales, ...incotermsMaritimos] : incotermsGenerales;

    const incotermLabelsContainer = document.getElementById('incoterm-labels');
    incotermLabelsContainer.innerHTML = '';

    incoterms.forEach((term) => {
        const span = document.createElement('span');
        span.textContent = term;
        incotermLabelsContainer.appendChild(span);
    });

    const slider = document.getElementById('incoterm-slider');
    slider.max = incoterms.length - 1;
    if (slider.value > slider.max) {
        slider.value = 0;
    }

    calcularPrecio();
}

document.getElementById('calcular').addEventListener('click', calcularPrecio);
document.getElementById('es-marítimo').addEventListener('change', actualizarIncoterms);
document.getElementById('incoterm-slider').addEventListener('input', calcularPrecio);

actualizarIncoterms();

function moverAlSiguienteInput(event) {
    if (event.key === 'Enter') {
        const inputs = Array.from(document.querySelectorAll('input[type="number"], input[type="checkbox"], input[type="range"]'));
        const index = inputs.indexOf(event.target);

        if (index >= 0 && index < inputs.length - 1) {
            inputs[index + 1].focus();
            event.preventDefault();
        }
    }
}

document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('keydown', moverAlSiguienteInput);
});

// Función para actualizar la divisa y los labels
function actualizarDivisa() {
    const divisaSeleccionada = document.getElementById('divisa').value;
    
    // Definir los símbolos y nombres de las divisas
    const simbolos = {
        EUR: '€',
        USD: '$',
    };

    const divisas = {
        EUR: 'EUR',
        USD: 'USD',
    };

    // Cambiar el símbolo en el precio final
    document.getElementById('precio-final').textContent = `Precio final: 0.00 ${simbolos[divisaSeleccionada]}`;

    // Cambiar las etiquetas de los campos
    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
        // Si el label contiene "EUR" o "USD", actualizarlo
        if (label.textContent.includes('EUR')) {
            label.textContent = label.textContent.replace(/EUR/g, divisas[divisaSeleccionada]);
        } else if (label.textContent.includes('USD')) {
            label.textContent = label.textContent.replace(/USD/g, divisas[divisaSeleccionada]);
        }
    });
}

// Evento para cuando se cambie la divisa
document.getElementById('divisa').addEventListener('change', actualizarDivisa);

// Llamar a la función inicial para configurar la divisa seleccionada al principio
actualizarDivisa();



