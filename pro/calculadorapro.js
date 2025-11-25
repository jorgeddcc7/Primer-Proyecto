let ES_PRO = false;

// 🔹 Guardar estado de si PRO ya se ha inicializado
let estadoProActualizado = false;

// 🔹 Guardar token si hay
const token = localStorage.getItem("token");
;

const API_BASE = window.location.origin;

// 🔹 Función para actualizar estado PRO desde backend
async function actualizarEstadoPro() {
    const token = localStorage.getItem("token");
    if (!token) {
        ES_PRO = false;
        return;
    }

    try {
        const res = await fetch(`${API_BASE}/api/check-pro`, {
            headers: { "Authorization": "Bearer " + token }
        });
        const data = await res.json();
        ES_PRO = Boolean(data.isPro);

        // Si ya es PRO, ocultamos modal de login
        if (ES_PRO) {
            document.getElementById("login-modal").style.display = "none";
        }
    } catch (err) {
        ES_PRO = false;
    }
}

function logout() {
    localStorage.removeItem("token");
    ES_PRO = false;
    actualizarEstadoPro();
    console.log("🔹 Usuario desconectado");
}

// 🔹 Inicializar estado PRO al cargar la página
window.addEventListener('DOMContentLoaded', async () => {
    await actualizarEstadoPro();

    if (ES_PRO) {
        document.getElementById("login-modal").style.display = "none";
    }
});

let rentabilidadInicial = null; // Variable global para rentabilidad inicial
let graficoCostes = null;

// 🔹 Funciones auxiliares para Incoterms
function obtenerIncotermConLugar(incoterm, puertoSalida, puertoLlegada, lugarExportacion, lugarImportacion) {
    switch (incoterm) {
        case 'EXW': return `EXW (dirección del vendedor)`;
        case 'FCA': return `FCA (lugar donde se entrega al transportista)`;
        case 'FAS': return `FAS Puerto de ${puertoSalida}`;
        case 'FOB': return `FOB Puerto de ${puertoSalida}`;
        case 'CFR': return `CFR Puerto de ${puertoSalida}`;
        case 'CIF': return `CIF Puerto de ${puertoSalida}`;
        case 'CPT': return `CPT (lugar de destino)`;
        case 'CIP': return `CIP (lugar de destino)`;
        case 'DAP': return `DAP (lugar de entrega final)`;
        case 'DPU': return `DPU (lugar de descarga)`;
        case 'DDP': return `DDP (dirección del comprador)`;
        default: return incoterm;
    }
}

function obtenerTransferenciaResponsabilidad(incoterm, puertoSalida, lugarExportacion, lugarImportacion) {
    switch (incoterm) {
        case 'EXW': return `Responsabilidad pasa al comprador desde el local del vendedor.`;
        case 'FCA': return `Responsabilidad pasa al comprador cuando la mercancía se entrega al transportista en el lugar acordado.`;
        case 'FAS': return `Responsabilidad pasa al comprador cuando la mercancía está colocada junto al buque en ${puertoSalida}.`;
        case 'FOB': return `Responsabilidad pasa al comprador cuando la mercancía está cargada a bordo del buque en ${puertoSalida}.`;
        case 'CFR': return `Responsabilidad pasa al comprador cuando la mercancía está cargada a bordo del buque en ${puertoSalida}.`;
        case 'CIF': return `Responsabilidad pasa al comprador cuando la mercancía está cargada a bordo del buque en ${puertoSalida}.`;
        case 'CPT': return `Responsabilidad pasa al comprador cuando la mercancía se entrega al primer transportista.`;
        case 'CIP': return `Responsabilidad pasa al comprador cuando la mercancía se entrega al primer transportista.`;
        case 'DAP': return `Responsabilidad pasa al comprador cuando la mercancía llega al lugar de destino del importador, lista para descargar.`;
        case 'DPU': return `Responsabilidad pasa al comprador cuando la mercancía llega al lugar de destino del importador y está descargada.`;
        case 'DDP': return `Responsabilidad pasa al comprador cuando recibe la mercancía en el lugar final del importador, con aduanas e impuestos pagados.`;
        default: return '';
    }
}

// 🔹 Función principal de cálculo de precio
function calcularPrecio(incotermCustom = null, esComparacion = false) {
    if (!esComparacion) rentabilidadInicial = null;

    // 🔹 Valores generales
    const lugarExportacion = document.getElementById('lugar-exportacion').value.trim();
    const lugarImportacion = document.getElementById('lugar-importacion').value.trim();
    const tipoTransporte = document.getElementById('tipo-transporte').value;
    const divisa = document.getElementById('divisa').value;
    const simbolos = { EUR: '€', USD: '$' };
    const simbolo = simbolos[divisa] || '€';

    // 🔹 Valores numéricos
    const precioFabrica = parseFloat(document.getElementById('precio-fabrica').value) || 0;
    const precioVenta = parseFloat(document.getElementById('precio-venta').value) || null;
    const transporteLocal = parseFloat(document.getElementById('transporte-local').value) || 0;
    const seguro = parseFloat(document.getElementById('seguro').value) || 0;
    const transporteInternacional = parseFloat(document.getElementById('transporte-internacional').value) || 0;
    const aduanaExportacion = parseFloat(document.getElementById('aduana-exportacion').value) || 0;
    const aduanaImportacion = parseFloat(document.getElementById('aduana-importacion').value) || 0;
    const carga = parseFloat(document.getElementById('carga').value) || 0;
    const descarga = parseFloat(document.getElementById('descarga').value) || 0;
    const otrosCostes = parseFloat(document.getElementById('otros-costes').value) || 0;

    const incoterm = incotermCustom || document.getElementById('incoterm-select').value;

    // 🔹 Cálculo precio total
    let precioTotal = precioFabrica;
    switch (incoterm) {
        case 'EXW': break;
        case 'FCA': precioTotal += transporteLocal + aduanaExportacion; break;
        case 'CPT': precioTotal += transporteLocal + transporteInternacional + aduanaExportacion; break;
        case 'CIP': precioTotal += transporteLocal + transporteInternacional + seguro + aduanaExportacion; break;
        case 'DAP': precioTotal += transporteLocal + transporteInternacional + carga + aduanaExportacion; break;
        case 'DPU': precioTotal += transporteLocal + transporteInternacional + descarga + aduanaExportacion + carga; break;
        case 'DDP': precioTotal += transporteLocal + transporteInternacional + descarga + aduanaExportacion + aduanaImportacion + otrosCostes; break;
        case 'FOB': precioTotal += transporteLocal + carga + aduanaExportacion; break;
        case 'FAS': precioTotal += transporteLocal + aduanaExportacion; break;
        case 'CFR': precioTotal += transporteLocal + transporteInternacional + aduanaExportacion; break;
        case 'CIF': precioTotal += transporteLocal + transporteInternacional + seguro + aduanaExportacion; break;
    }

    // 🔹 Desglose de costes
    const costes = {
        precioFabrica,
        transporteLocal,
        seguro,
        transporteInternacional,
        aduanaExportacion,
        aduanaImportacion,
        carga,
        descarga,
        otrosCostes
    };
    const desglose = obtenerDesgloseResponsabilidades(incoterm, costes);
    const documentacion = obtenerDocumentacion(incoterm);

    const puertoSalida = document.getElementById("select-puerto-aeropuerto-salida")?.value;
    const puertoLlegada = document.getElementById("select-puerto-aeropuerto-llegada")?.value;

    const incotermConLugar = obtenerIncotermConLugar(incoterm, puertoSalida, puertoLlegada, lugarExportacion, lugarImportacion);
    const transferenciaResponsabilidad = obtenerTransferenciaResponsabilidad(incoterm, puertoSalida, lugarExportacion, lugarImportacion);

    // 🔹 Construcción HTML resumen
    let resumenHTML = `
        <h3>${esComparacion ? 'Comparación con ' + incoterm : 'Resumen de la operación'}</h3>
        <ul>
            ${!esComparacion ? `<li><strong>Lugar de exportación:</strong> ${lugarExportacion}</li>` : ''}
            ${!esComparacion ? `<li><strong>Lugar de importación:</strong> ${lugarImportacion}</li>` : ''}
            ${!esComparacion ? `<li><strong>Tipo de transporte:</strong> ${tipoTransporte ? transporteCorrecto[tipoTransporte] : 'No especificado'}</li>` : ''}
            <li><strong>Divisa:</strong> ${divisa}</li>
            <li><strong>Incoterm seleccionado:</strong> ${incotermConLugar}</li>
            <li><strong>Precio total:</strong> ${precioTotal.toFixed(2)} ${simbolo}</li>
        </ul>
        <h4>Detalle de costes y responsables</h4>
        <ul>
    `;
    desglose.forEach(({ nombre, valor, responsable }) => {
        const nombreFormateado = nombre.charAt(0).toUpperCase() + nombre.slice(1);
        resumenHTML += `<li><strong>${nombreFormateado}:</strong> ${valor.toFixed(2)} ${simbolo} <em>(${responsable})</em></li>`;
    });
    resumenHTML += `<li><strong>Transferencia de responsabilidad (riesgo):</strong> ${transferenciaResponsabilidad}</li></ul>`;

    // 🔹 Documentación
    resumenHTML += `
        <h4>Documentación Básica Requerida:</h4>
        <p>El exportador debe entregar:</p>
        <ul>
            ${documentacion.exportador.map(doc => `<li>${doc}</li>`).join('')}
        </ul>
        <p>El importador debe entregar:</p>
        <ul>
            ${documentacion.importador.map(doc => `<li>${doc}</li>`).join('')}
        </ul>
    `;

    // 🔹 Rentabilidad
    let rentabilidadPorcentaje = null;
    if (precioVenta && !esComparacion) {
        const beneficioNeto = precioVenta - precioTotal;
        rentabilidadPorcentaje = (beneficioNeto / precioTotal) * 100;
        rentabilidadInicial = rentabilidadPorcentaje;

        resumenHTML += `
            <h4>Rentabilidad para el exportador</h4>
            <ul>
                <li><strong>Precio de venta:</strong> ${precioVenta.toFixed(2)} ${simbolo}</li>
                <li><strong>Beneficio neto:</strong> ${beneficioNeto.toFixed(2)} ${simbolo}</li>
                <li><strong>Rentabilidad:</strong> ${rentabilidadPorcentaje.toFixed(2)}%</li>
            </ul>
        `;
    }

    // 🔹 Acuerdos comerciales
    const paisOrigen = lugarExportacion;
    const paisDestino = lugarImportacion;
    const acuerdos = buscarAcuerdo(paisOrigen, paisDestino);
    const infoAcuerdoDiv = document.getElementById('info-acuerdo');
    if (paisOrigen && paisDestino) {
        let contenido = `
            <small style="display:block; margin-bottom:8px; color:#aaa;">
                Se muestran únicamente los acuerdos comerciales en vigor. No se incluyen acuerdos pendientes de firma, ratificación o en proceso de negociación.
            </small>
        `;
        if (acuerdos.length > 0) {
            acuerdos.forEach(acuerdo => {
                contenido += `
                    <div style="margin-bottom:10px;">
                        <strong>🤝 Acuerdo Comercial:</strong><br>
                        <strong>${acuerdo.nombre}</strong><br>
                        <em style="margin-top:8px;">${acuerdo.beneficios}</em>
                    </div>
                `;
            });
        } else {
            contenido += `<em>No existe actualmente un acuerdo comercial en vigor entre estos países.</em>`;
        }
        infoAcuerdoDiv.innerHTML = contenido;
        infoAcuerdoDiv.style.display = 'block';
    } else {
        infoAcuerdoDiv.innerHTML = '';
        infoAcuerdoDiv.style.display = 'none';
    }

    // 🔹 Comparación de incoterms
    if (esComparacion) {
        let comparacionHTML = `
            <h3>Comparación con ${incoterm}</h3>
            <ul style="font-size: 16px; list-style-type: none; padding-left: 0; background-color: #2e3c5d; border-radius: 10px; margin-top: 20px;">
                <li style="padding: 12px 0; color: #e1e6f0;"><strong>Precio total:</strong> ${precioTotal.toFixed(2)} ${simbolo}</li>
        `;
        if (precioVenta) {
            const beneficioNeto = precioVenta - precioTotal;
            rentabilidadPorcentaje = (beneficioNeto / precioTotal) * 100;
            comparacionHTML += `
                <li style="padding: 12px 0; color: #e1e6f0;"><strong>Rentabilidad:</strong> ${rentabilidadPorcentaje.toFixed(2)}%</li>
                <li style="padding: 12px 0; color: #e1e6f0;"><strong>Beneficio neto:</strong> ${beneficioNeto.toFixed(2)} ${simbolo}</li>
            `;

            let recomendacionTexto = '';
            let recomendacionClase = '';
            let recomendacionIcono = '';
            if (rentabilidadInicial !== null) {
                if (rentabilidadPorcentaje > rentabilidadInicial) {
                    recomendacionTexto = '¡Más recomendado!';
                    recomendacionClase = 'rentabilidad-alta';
                    recomendacionIcono = '👍';
                } else if (rentabilidadPorcentaje < rentabilidadInicial) {
                    recomendacionTexto = 'Menos recomendado';
                    recomendacionClase = 'rentabilidad-negativa';
                    recomendacionIcono = '👎';
                } else {
                    recomendacionTexto = 'Misma rentabilidad';
                    recomendacionClase = 'rentabilidad-media';
                    recomendacionIcono = '➖';
                }
                comparacionHTML += `
                    <p class="${recomendacionClase}" style="font-size: 18px; text-align: center; color: #e1e6f0; margin-top: 20px; display: flex; justify-content: center; align-items: center;">
                        <span style="font-size: 25px; margin-right: 10px;">${recomendacionIcono}</span><strong>${recomendacionTexto}</strong>
                    </p>
                `;
            }
        }
        comparacionHTML += `</ul>`;
        document.getElementById('resultado-comparacion').innerHTML = comparacionHTML;
        document.getElementById('resultado-comparacion').style.display = 'block';
    } else {
        document.getElementById('resumen-datos').innerHTML = resumenHTML;
        renderizarGraficoCostes(desglose);
        mostrarAranceles(paisOrigen, paisDestino);
        document.getElementById('comparar-incoterm-section').style.display = 'block';
    }
}

// 🔹 Función actualizar divisa
function actualizarDivisa() {
    calcularPrecio();
}

// 🔹 Eventos principales
document.getElementById('divisa')?.addEventListener('change', actualizarDivisa);
document.getElementById('incoterm-select')?.addEventListener('change', () => calcularPrecio());
document.getElementById('btn-comparar')?.addEventListener('click', () => {
    const nuevoIncoterm = document.getElementById('incoterm-comparar').value;
    if (nuevoIncoterm) calcularPrecio(nuevoIncoterm, true);
});
document.getElementById('btn-suscribirse')?.addEventListener('click', async () => {
    const plan = document.querySelector('input[name="plan"]:checked')?.value;
    const token = localStorage.getItem("token");
    if (!token) { alert("Debes iniciar sesión primero."); return; }
    const res = await fetch(`${API_BASE}/api/create-checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, token })
    });
    const data = await res.json();
    window.location.href = data.url;
});

// 🔹 Función para renderizar gráfico de costes
function renderizarGraficoCostes(desglose) {
    const ctx = document.getElementById('grafico-costes')?.getContext('2d');
    if (!ctx) return;

    const etiquetas = desglose.map(i => i.nombre.charAt(0).toUpperCase() + i.nombre.slice(1));
    const valores = desglose.map(i => i.valor);
    const colores = ['#61dafb','#4ac0e7','#399bc9','#2c7bb3','#20629b','#164a83','#0c326b','#071c4f','#050f3d'];

    if (graficoCostes) graficoCostes.destroy();
    graficoCostes = new Chart(ctx, {
        type: 'pie',
        data: { labels: etiquetas, datasets: [{ data: valores, backgroundColor: colores, borderWidth: 1 }] },
        options: { plugins: { legend: { position: 'bottom', labels: { color: '#e1e6f0' } } } }
    });

    document.getElementById('grafico-costes-section').style.display = 'block';
}

// 🔹 Función para mostrar aranceles
function mostrarAranceles(paisOrigen, paisDestino) {
    const resultado = buscarAranceles(paisOrigen, paisDestino);
    const seccion = document.getElementById("aranceles-section");
    const contenedor = document.getElementById("tabla-aranceles");
    if (!seccion || !contenedor) return;

    if (resultado && resultado.aranceles.length > 0) {
        let mensajeHTML = `<p style="font-size:0.85em; color:#cfcfcf; margin-bottom:8px;">Solo se muestran aranceles significativos aplicados bajo el régimen MFN, sin incluir casos con trato preferencial o acuerdos que reduzcan tarifas.</p>`;
        let tablaHTML = `<table style="width:100%; border-collapse:collapse; color:#e1e6f0;">
            <thead>
                <tr style="background-color:#2a3b5c;">
                    <th style="padding:8px; border-bottom:1px solid #444; text-align:center;">Producto</th>
                    <th style="padding:8px; border-bottom:1px solid #444; text-align:center;">Tipo</th>
                    <th style="padding:8px; border-bottom:1px solid #444; text-align:center;">Valor</th>
                </tr>
            </thead>
            <tbody>`;
        resultado.aranceles.forEach(a => {
            tablaHTML += `
                <tr>
                    <td style="padding:8px; border-bottom:1px solid #333; text-align:center;">${a.producto}</td>
                    <td style="padding:8px; border-bottom:1px solid #333; text-align:center;">${a.tipo}</td>
                    <td style="padding:8px; border-bottom:1px solid #333; text-align:center;">${a.valor}</td>
                </tr>`;
        });
        tablaHTML += `</tbody></table>`;
        contenedor.innerHTML = mensajeHTML + tablaHTML;
        seccion.style.display = "block";
    } else {
        seccion.style.display = "block";
        contenedor.innerHTML = `<em>No se aplican aranceles significativos entre ${paisOrigen} y ${paisDestino}, ya sea por acuerdos comerciales o falta de información.</em>`;
    }
}

// 🔹 Botón calcular
document.getElementById('calcular')?.addEventListener('click', async () => {
    if (!estadoProActualizado) { alert("Espere unos segundos, cargando estado PRO..."); return; }
    if (!ES_PRO) {
        document.getElementById("login-modal").style.display = "block";
        return;
    }
    await calcularPrecio();
});

// 🔹 Cerrar modal PRO
document.getElementById('close-pro')?.addEventListener('click', () => {
    document.getElementById('login-modal').style.display = 'none';
});

// 🔹 LOGIN / REGISTRO
let modoActual = "registro"; // "registro" o "login"
document.getElementById("modal-toggle-text")?.addEventListener("click", () => {
    if (modoActual === "registro") {
        modoActual = "login";
        document.getElementById("modal-title").textContent = "Inicia sesión";
        document.getElementById("modal-btn-action").textContent = "Entrar";
        document.getElementById("modal-toggle-text").textContent = "¿No tienes cuenta? Regístrate";
    } else {
        modoActual = "registro";
        document.getElementById("modal-title").textContent = "Regístrate";
        document.getElementById("modal-btn-action").textContent = "Registrarse";
        document.getElementById("modal-toggle-text").textContent = "¿Ya tienes cuenta? Inicia sesión";
    }
});

// 🔹 Acción principal registro/login
document.getElementById("modal-btn-action")?.addEventListener("click", async () => {
    const email = document.getElementById("modal-email").value.trim();
    const password = document.getElementById("modal-password").value.trim();
    const errorBox = document.getElementById("modal-error");
    errorBox.textContent = "";

    if (!email || !password) {
        errorBox.textContent = "Debes rellenar ambos campos.";
        return;
    }

    const endpoint = modoActual === "registro" ? `${API_BASE}/api/register` : `${API_BASE}/api/login`;

    try {
        const res = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();
        if (data.error) { errorBox.textContent = data.error; return; }

        // Guardar token y actualizar estado PRO
        localStorage.setItem("token", data.token);
        await actualizarEstadoPro();
        document.getElementById("login-modal").style.display = "none";

    } catch (err) {
        errorBox.textContent = "Error al conectar con el servidor.";
    }
});

// 🔹 Detectar retorno de Stripe en /pro
if (window.location.pathname === "/pro" && window.location.search.includes("success=true")) {
    await actualizarEstadoPro();
    alert("¡Felicidades! Ahora eres usuario PRO.");
    window.history.replaceState({}, document.title, "/pro");
}