window.onload = function() {
    mostrarCampos();
};

function mostrarCampos() {
    const facturaFields = document.getElementById("facturaFields");
    facturaFields.style.display = "block";
    marcarRequired(facturaFields);
}

function marcarRequired(fields) {
    const inputs = fields.querySelectorAll("input, textarea, select");
    inputs.forEach(input => {
        if (input.hasAttribute("required")) {
            input.setAttribute("required", "true");
        }
    });
}

function mostrarMensajeError(mensaje) {
    const errorContainer = document.getElementById('errorContainer');
    if (errorContainer) {
        errorContainer.textContent = mensaje;
        errorContainer.style.display = 'block';
    }
}

// Array para almacenar las mercancías
let mercancias = [];

// Función para añadir mercancías al listado
document.addEventListener("DOMContentLoaded", function () {
    const addMercanciaBtn = document.getElementById('addMercanciaBtn');
    const mercanciasList = document.getElementById('mercanciasList'); // Lista donde se mostrarán las mercancías

    // Asegurarse de que el botón y la lista existan en el DOM
    if (addMercanciaBtn && mercanciasList) {
        addMercanciaBtn.addEventListener('click', function () {
            const descripcion = document.getElementById('descripcionMercancia').value;
            const cantidad = document.getElementById('cantidadMercancia').value;
            const precioUnidad = document.getElementById('precioUnidad').value;
            const IVA = document.getElementById('IVA').value;

            // Validación de datos (números solo para cantidad, precio y IVA)
            if (isNaN(cantidad) || isNaN(precioUnidad) || isNaN(IVA)) {
                mostrarMensajeError('Por favor, ingrese valores numéricos válidos para cantidad, precio por unidad y IVA.');
                return;
            }

            if (descripcion && cantidad && precioUnidad && IVA) {
                // Calcular la base imponible y el IVA
                const baseImponible = cantidad * precioUnidad;
                const ivaMercancia = baseImponible * IVA / 100;
                const valorTotal = baseImponible + ivaMercancia;

                // Crear un objeto con la mercancía
                const mercancia = {
                    descripcion: descripcion,
                    cantidad: cantidad,
                    precioUnidad: precioUnidad,
                    IVA: IVA,
                    baseImponible: baseImponible,
                    ivaMercancia: ivaMercancia,
                    valorTotal: valorTotal
                };

                // Añadir la mercancía al array
                mercancias.push(mercancia);

                // Crear un nuevo item en la lista de mercancías
                const mercanciaItem = document.createElement('li');
                mercanciaItem.innerHTML = `Descripción: ${descripcion}, 
                                        Cantidad: ${cantidad}, 
                                        Precio por Unidad: ${precioUnidad}, 
                                        IVA: ${IVA}%, 
                                        Valor Total: ${valorTotal.toFixed(2)}`;
                
                // Añadir el item a la lista visible
                mercanciasList.appendChild(mercanciaItem);

                // Limpiar los campos de entrada para añadir una nueva mercancía
                document.getElementById('descripcionMercancia').value = '';
                document.getElementById('cantidadMercancia').value = '';
                document.getElementById('precioUnidad').value = '';
                document.getElementById('IVA').value = '';
                document.getElementById('valorTotal').value = '';
            } else {
                mostrarMensajeError('Por favor, complete todos los campos antes de añadir la mercancía.');
            }
        });
    } else {
        console.error('El botón "Añadir Otra Mercancía" o la lista "mercanciasList" no se encuentran en el DOM.');
    }

    // Generar el documento PDF
    document.getElementById('documentForm').addEventListener('submit', function (event) {
        event.preventDefault(); 
        
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
    
        const tipoDocumento = document.getElementById('tipoDocumento').value;
    
        // Datos de la empresa
        const nombreEmpresa = document.getElementById('nombreEmpresa').value;
        const direccion = document.getElementById('direccion').value;
        const telefono = document.getElementById('telefono').value;
        const email = document.getElementById('email').value;
        const nif = document.getElementById('nif').value;
        const logoInput = document.getElementById('logoEmpresa');
    
        // Datos del cliente
        const nombreCliente = document.getElementById('nombreCliente').value;
        const direccionCliente = document.getElementById('direccionCliente').value;
        const telefonoCliente = document.getElementById('telefonoCliente').value;
        const nifCliente = document.getElementById('nifCliente').value;
    
        const numeroFactura = document.getElementById('numeroFactura').value;
        const fechaFactura = document.getElementById('fechaFactura').value;
    
        const mercanciasParaPDF = mercancias.map(m => [
            m.descripcion,
            m.cantidad,
            m.precioUnidad,
            `${m.IVA}%`,  
            m.baseImponible.toFixed(2),
            m.ivaMercancia.toFixed(2),
            m.valorTotal.toFixed(2)
        ]);
    
        const generarPDF = (logoBase64) => {
            if (logoBase64) {
                doc.addImage(logoBase64, 'PNG', 10, 10, 30, 30); 
            }
    
            // Factura Proforma en la parte superior derecha
            doc.setFont("helvetica", "bold");
            doc.setFontSize(14);
            doc.text(`Factura Proforma Nº: ${numeroFactura}`, 140, 20);
            doc.text(`Fecha: ${fechaFactura}`, 140, 30);
    
            // Información de la Empresa (Izquierda)
            doc.setFontSize(12);
            doc.setFont("helvetica", "normal");
            doc.text(nombreEmpresa, 10, 50);
            doc.text(direccion, 10, 60);
            doc.text(`Tel: ${telefono}`, 10, 70);
            doc.text(`Email: ${email}`, 10, 80);
            doc.text(`NIF: ${nif}`, 10, 90);
    
            // Información del Cliente (Derecha)
            const xDerecha = 140; 
            doc.text("Cliente:", xDerecha, 50);
            doc.text(nombreCliente, xDerecha, 60);
            doc.text(direccionCliente, xDerecha, 70);
            doc.text(`Tel: ${telefonoCliente}`, xDerecha, 80);
            doc.text(`NIF: ${nifCliente}`, xDerecha, 90);
    
            let startY = 100; // Subimos los detalles una línea
    
            if (tipoDocumento === 'factura') {
                const moneda = document.getElementById('moneda').value;
                const metodoPago = document.getElementById('metodoPago').value;
                const incoterm = document.getElementById('incoterm').value;

                doc.setFont("helvetica", "bold");
                doc.text("Detalles de Factura", 10, startY);
                doc.setFont("helvetica", "normal");
    
                doc.text(`Moneda: ${moneda}`, 10, startY + 10);
    
                let offset = 0; 
                if (metodoPago) {
                    doc.text(`Método de Pago: ${metodoPago}`, 10, startY + 20);
                    offset += 10; 
                }
                if (incoterm) {
                    doc.text(`Incoterm: ${incoterm}`, 10, startY + 20 + offset);
                    offset += 10; 
                }
    
                let tableStartY = startY + 20 + offset; 
                doc.autoTable({
                    startY: tableStartY, 
                    head: [['Descripción', 'Cantidad', 'Precio Unitario', 'IVA', 'Base Imponible', 'IVA Total', 'Total']],
                    body: mercanciasParaPDF,
                    theme: 'grid',
                    headStyles: {
                        fillColor: [0, 123, 255], // Color #007bff para la tabla
                        textColor: [255, 255, 255] // Texto en blanco
                    },
                    bodyStyles: {
                        fillColor: [255, 255, 255], // Fondo blanco para las filas
                        textColor: [0, 0, 0] // Texto en negro
                    }
                });
    
                startY = doc.lastAutoTable.finalY + 20;
            }

            // Calcular la base imponible total, el IVA total y el total final
            let baseImponibleTotal = mercancias.reduce((sum, m) => sum + m.baseImponible, 0);
            let ivaTotal = mercancias.reduce((sum, m) => sum + m.ivaMercancia, 0);
            let totalFinal = baseImponibleTotal + ivaTotal;
    
            const margenInferior = 10;  
            const yFinal = doc.internal.pageSize.height - margenInferior;

            doc.line(140, yFinal - 20, 200, yFinal - 20)
    
            doc.setFont("helvetica", "bold");
            doc.text(`Base Imponible: ${baseImponibleTotal.toFixed(2)}`, 140, yFinal - 40);
            doc.text(`IVA: ${ivaTotal.toFixed(2)}`, 140, yFinal - 30);
            doc.text(`Total: ${totalFinal.toFixed(2)}`, 140, yFinal - 10);
    
            // Guardar el PDF
            try {
                doc.save(`${tipoDocumento}.pdf`);
            } catch (error) {
                console.error("Error al generar el PDF:", error);
                mostrarMensajeError("Hubo un problema al descargar el PDF. Intenta nuevamente.");
            }
        };
    
        // Cargar el logo si existe
        if (logoInput.files.length > 0) {
            const file = logoInput.files[0];
            const reader = new FileReader();
            reader.onload = function (event) {
                generarPDF(event.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            generarPDF(null);
        }
    });
});
