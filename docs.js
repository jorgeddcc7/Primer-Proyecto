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

// Array to store goods
let mercancias = [];

// Function to add goods to the list
document.addEventListener("DOMContentLoaded", function () {
    const addMercanciaBtn = document.getElementById('addMercanciaBtn');
    const mercanciasList = document.getElementById('mercanciasList'); // List where the goods will be shown

    // Ensure that the button and list exist in the DOM
    if (addMercanciaBtn && mercanciasList) {
        addMercanciaBtn.addEventListener('click', function () {
            const descripcion = document.getElementById('descripcionMercancia').value;
            const cantidad = document.getElementById('cantidadMercancia').value;
            const precioUnidad = document.getElementById('precioUnidad').value;
            const IVA = document.getElementById('IVA').value;

            // Data validation (numbers only for quantity, price, and VAT)
            if (isNaN(cantidad) || isNaN(precioUnidad) || isNaN(IVA)) {
                mostrarMensajeError('Please enter valid numeric values for quantity, unit price, and VAT.');
                return;
            }

            if (descripcion && cantidad && precioUnidad && IVA) {
                // Calculate base amount and VAT
                const baseImponible = cantidad * precioUnidad;
                const ivaMercancia = baseImponible * IVA / 100;
                const valorTotal = baseImponible + ivaMercancia;

                // Create an object for the good
                const mercancia = {
                    descripcion: descripcion,
                    cantidad: cantidad,
                    precioUnidad: precioUnidad,
                    IVA: IVA,
                    baseImponible: baseImponible,
                    ivaMercancia: ivaMercancia,
                    valorTotal: valorTotal
                };

                // Add the good to the array
                mercancias.push(mercancia);

                // Create a new item in the goods list
                const mercanciaItem = document.createElement('li');
                mercanciaItem.innerHTML = `Description: ${descripcion}, 
                                        Quantity: ${cantidad}, 
                                        Unit Price: ${precioUnidad}, 
                                        VAT: ${IVA}%, 
                                        Total Value: ${valorTotal.toFixed(2)}`;
                
                // Add the item to the visible list
                mercanciasList.appendChild(mercanciaItem);

                // Clear the input fields for adding a new good
                document.getElementById('descripcionMercancia').value = '';
                document.getElementById('cantidadMercancia').value = '';
                document.getElementById('precioUnidad').value = '';
                document.getElementById('IVA').value = '';
                document.getElementById('valorTotal').value = '';
            } else {
                mostrarMensajeError('Please complete all fields before adding the good.');
            }
        });
    } else {
        console.error('The "Add Another Good" button or "mercanciasList" is not found in the DOM.');
    }

    // Get the selected language
    const languageSelect = document.getElementById('languageSelect');
    let currentLanguage = languageSelect.value; // Default language is selected when the page loads

    languageSelect.addEventListener('change', function() {
        currentLanguage = languageSelect.value;
    });

    // Generate the PDF document
    document.getElementById('documentForm').addEventListener('submit', function (event) {
        event.preventDefault(); 
        
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
    
        const tipoDocumento = document.getElementById('tipoDocumento').value;
    
        // Company data
        const nombreEmpresa = document.getElementById('nombreEmpresa').value;
        const direccion = document.getElementById('direccion').value;
        const telefono = document.getElementById('telefono').value;
        const email = document.getElementById('email').value;
        const nif = document.getElementById('nif').value;
        const logoInput = document.getElementById('logoEmpresa');
    
        // Customer data
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

            // Set texts based on the selected language
            const texts = {
                es: {
                    facturaTitle: `Factura Proforma Nº: ${numeroFactura}`,
                    fecha: `Fecha: ${fechaFactura}`,
                    cliente: "Cliente:",
                    moneda: "Moneda:",
                    metodoPago: "Método de Pago:",
                    incoterm: "Incoterm:",
                    detallesFactura: "Detalles de Factura",
                    descripcion: 'Descripción',
                    cantidad: 'Cantidad',
                    precioUnitario: 'Precio Unitario',
                    iva: 'IVA',
                    baseImponible: 'Base Imponible',
                    ivaTotal: 'IVA Total',
                    total: 'Total'
                },
                en: {
                    facturaTitle: `Proforma Invoice No: ${numeroFactura}`,
                    fecha: `Date: ${fechaFactura}`,
                    cliente: "Client:",
                    moneda: "Currency:",
                    metodoPago: "Payment Method:",
                    incoterm: "Incoterm:",
                    detallesFactura: "Invoice Details",
                    descripcion: 'Description',
                    cantidad: 'Quantity',
                    precioUnitario: 'Unit Price',
                    iva: 'VAT',
                    baseImponible: 'Base Amount',
                    ivaTotal: 'VAT Total',
                    total: 'Total'
                }
            };

            const langTexts = texts[currentLanguage];

            // Add the text based on the selected language
            doc.setFont("helvetica", "bold");
            doc.setFontSize(14);
            doc.text(langTexts.facturaTitle, 140, 20);
            doc.text(langTexts.fecha, 140, 30);
    
            // Company information (Left)
            doc.setFontSize(12);
            doc.setFont("helvetica", "normal");
            doc.text(nombreEmpresa, 10, 50);
            doc.text(direccion, 10, 60);
            doc.text(`Tel: ${telefono}`, 10, 70);
            doc.text(`Email: ${email}`, 10, 80);
            doc.text(`NIF: ${nif}`, 10, 90);
    
            // Customer information (Right)
            const xDerecha = 140; 
            doc.text(langTexts.cliente, xDerecha, 50);
            doc.text(nombreCliente, xDerecha, 60);
            doc.text(direccionCliente, xDerecha, 70);
            doc.text(`Tel: ${telefonoCliente}`, xDerecha, 80);
            doc.text(`NIF: ${nifCliente}`, xDerecha, 90);
    
            let startY = 100; 
    
            if (tipoDocumento === 'factura') {
                const moneda = document.getElementById('moneda').value;
                const metodoPago = document.getElementById('metodoPago').value;
                const incoterm = document.getElementById('incoterm').value;

                doc.setFont("helvetica", "bold");
                doc.text(langTexts.detallesFactura, 10, startY);
                doc.setFont("helvetica", "normal");
    
                doc.text(`${langTexts.moneda} ${moneda}`, 10, startY + 10);
    
                let offset = 0; 
                if (metodoPago) {
                    doc.text(`${langTexts.metodoPago}: ${metodoPago}`, 10, startY + 20);
                    offset += 10; 
                }
                if (incoterm) {
                    doc.text(`${langTexts.incoterm}: ${incoterm}`, 10, startY + 20 + offset);
                    offset += 10; 
                }
    
                let tableStartY = startY + 20 + offset; 
                doc.autoTable({
                    startY: tableStartY, 
                    head: [
                        [langTexts.descripcion, langTexts.cantidad, langTexts.precioUnitario, langTexts.iva, langTexts.baseImponible, langTexts.ivaTotal, langTexts.total]
                    ],
                    body: mercanciasParaPDF,
                    theme: 'grid',
                    headStyles: {
                        fillColor: [0, 123, 255], 
                        textColor: [255, 255, 255] 
                    },
                    bodyStyles: {
                        fillColor: [255, 255, 255], 
                        textColor: [0, 0, 0] 
                    }
                });
    
                startY = doc.lastAutoTable.finalY + 20;
            }

            // Calculate total base amount, total VAT, and final total
            let baseImponibleTotal = mercancias.reduce((sum, m) => sum + m.baseImponible, 0);
            let ivaTotal = mercancias.reduce((sum, m) => sum + m.ivaMercancia, 0);
            let totalFinal = baseImponibleTotal + ivaTotal;
    
            const margenInferior = 10;  
            const yFinal = doc.internal.pageSize.height - margenInferior;

            doc.line(140, yFinal - 20, 200, yFinal - 20)
    
            doc.setFont("helvetica", "bold");
            doc.text(`${langTexts.baseImponible}: ${baseImponibleTotal.toFixed(2)}`, 140, yFinal - 40);
            doc.text(`${langTexts.iva}: ${ivaTotal.toFixed(2)}`, 140, yFinal - 30);
            doc.text(`${langTexts.total}: ${totalFinal.toFixed(2)}`, 140, yFinal - 10);

            const texto = "Generado por Calcula Incoterms®";
            const textoWidth = doc.getStringUnitWidth(texto) * doc.getFontSize() / doc.internal.scaleFactor; 
            const desplazamientoDerecha = 10; // Ajustar este valor para moverlo más a la derecha
            const xCentro = (doc.internal.pageSize.width - textoWidth) / 2 + desplazamientoDerecha;  
            
            doc.setFontSize(8);  
            doc.setFont("helvetica", "normal");
            doc.setTextColor(169, 169, 169); 
            const yPos = doc.internal.pageSize.height - 10;  // Mueve el texto justo al final
            doc.text(texto, xCentro, yPos);               
    
            try {
                doc.save(`${tipoDocumento}.pdf`);
            } catch (error) {
                console.error("Error generating the PDF:", error);
                mostrarMensajeError("There was a problem downloading the PDF. Please try again.");
            }
        };
    
        // Load the logo if exists
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


function openModal(id, event) {
  event.preventDefault(); // ¡Evita el salto hacia arriba!
    document.getElementById('modal-' + id).style.display = 'block';
}

function closeModal(id) {
    document.getElementById('modal-' + id).style.display = 'none';
}

    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const rejectBtn = document.getElementById('reject-cookies');
    
    const GA_MEASUREMENT_ID = 'G-9G78K6JBFB';
    
    if (!localStorage.getItem('cookies-analytics')) {
        banner.style.display = 'block';
    } else if (localStorage.getItem('cookies-analytics') === 'accepted') {
        banner.style.display = 'none';
        loadAnalytics();
    } else {
        banner.style.display = 'none';
    }
    
      // Función para cargar Google Analytics
    function loadAnalytics() {
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        script.async = true;
        document.head.appendChild(script);
    
        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID);
    }
    
      // Aceptar cookies
    acceptBtn.onclick = () => {
        localStorage.setItem('cookies-analytics', 'accepted');
        loadAnalytics();
        banner.style.display = 'none';
    };
    
      // Rechazar cookies
    rejectBtn.onclick = () => {
        localStorage.setItem('cookies-analytics', 'rejected');
        banner.style.display = 'none';
    };
    
      // Si ya aceptó anteriormente, cargar Analytics automáticamente
    if (localStorage.getItem('cookies-analytics') === 'accepted') {
        loadAnalytics();
    }

    function savePreferences() {
    const analiticas = document.getElementById('cookies-analiticas').checked;
    const marketing = document.getElementById('cookies-marketing').checked;

  // Guarda en localStorage (o cookies)
    localStorage.setItem('cookies_analiticas', analiticas);
    localStorage.setItem('cookies_marketing', marketing);

    alert('Preferencias guardadas.');

    closeModal('preferencias');

    if (!analiticas) {
    // Desactivar Google Analytics (puedes borrar cookies o bloquear scripts)
        console.log('Google Analytics desactivado');
    } else {
        console.log('Google Analytics activado');
    }
}
});