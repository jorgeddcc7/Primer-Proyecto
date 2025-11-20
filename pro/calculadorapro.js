let rentabilidadInicial = null; // Variable global para almacenar la rentabilidad inicial
let graficoCostes = null;

function obtenerIncotermConLugar(incoterm, puertoSalida, puertoLlegada, lugarExportacion, lugarImportacion) {
  switch(incoterm) {
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
  switch(incoterm) {
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

function calcularPrecio(incotermCustom = null, esComparacion = false) {
  // 🔹 Recoger valores generales
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

  // 🔹 Cálculo del precio total
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

  // 🔹 Preparar desglose de costes
  const costes = {
    precioFabrica,
    transporteLocal,
    seguro,
    transporteInternacional,
    aduanaExportacion,
    aduanaImportacion,
    carga,
    descarga,
    otrosCostes,
  };

  const desglose = obtenerDesgloseResponsabilidades(incoterm, costes);

  const documentacion = obtenerDocumentacion(incoterm);

  // 🔹 Obtener puertos/aeropuertos seleccionados
  const puertoSalida = document.getElementById("select-puerto-aeropuerto-salida")?.value;
  const puertoLlegada = document.getElementById("select-puerto-aeropuerto-llegada")?.value;

  // 🔹 Incoterm con lugar
  const incotermConLugar = obtenerIncotermConLugar(incoterm, puertoSalida, puertoLlegada, lugarExportacion, lugarImportacion);

  // 🔹 Transferencia de responsabilidad
  const transferenciaResponsabilidad = obtenerTransferenciaResponsabilidad(incoterm, puertoSalida, lugarExportacion, lugarImportacion);

  // 🔹 Construcción del resumen HTML
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

  // Documentación
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

  // 🔹 Rentabilidad (solo si no es comparación)
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

  // Acuerdos
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
      acuerdos.forEach((acuerdo, index) => {
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

  // 🔹 Comparación
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
          <p class="${recomendacionClase}" style=" font-size: 18px; text-align: center; color: #e1e6f0; margin-top: 20px; display: flex; justify-content: center; align-items: center;">
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

function actualizarDivisa() {
  const divisaSeleccionada = document.getElementById('divisa').value;
  const simbolos = { EUR: '€', USD: '$' };
}

// 🔹 Eventos
document.getElementById('calcular').addEventListener('click', async () => {
  await calcularPrecio();         // Calcula los costes
});

document.getElementById('divisa').addEventListener('change', actualizarDivisa);
document.getElementById('incoterm-select').addEventListener('change', () => calcularPrecio());
document.getElementById('btn-comparar').addEventListener('click', () => {
  const nuevoIncoterm = document.getElementById('incoterm-comparar').value;
  if (nuevoIncoterm) {
    calcularPrecio(nuevoIncoterm, true);
  }
});

function renderizarGraficoCostes(desglose) {
  const ctx = document.getElementById('grafico-costes').getContext('2d');

  const etiquetas = desglose.map(item => item.nombre.charAt(0).toUpperCase() + item.nombre.slice(1));
  const valores = desglose.map(item => item.valor);
  const colores = [
    '#61dafb', '#4ac0e7', '#399bc9', '#2c7bb3',
    '#20629b', '#164a83', '#0c326b', '#071c4f', '#050f3d'
  ];

  if (graficoCostes) graficoCostes.destroy(); // Destruir si ya existe

  graficoCostes = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: etiquetas,
      datasets: [{
        data: valores,
        backgroundColor: colores,
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#e1e6f0'
          }
        }
      }
    }
  });

  document.getElementById('grafico-costes-section').style.display = 'block';
}

function mostrarAranceles(paisOrigen, paisDestino) {
  const resultado = buscarAranceles(paisOrigen, paisDestino);
  const seccion = document.getElementById("aranceles-section");
  const contenedor = document.getElementById("tabla-aranceles");

  if (resultado && resultado.aranceles.length > 0) {
    let mensajeHTML = `<p style="font-size:0.85em; color:#cfcfcf; margin-bottom:8px;">Solo se muestran aranceles significativos aplicados bajo el régimen MFN, sin incluir los casos donde existe trato preferencial o acuerdos que reducen o eliminan tarifas. Sectores y valores aproximados según negociaciones y estructuras arancelarias recientes.</p>`;
    let tablaHTML = `
      <table style="width:100%; border-collapse:collapse; color:#e1e6f0;">
        <thead>
          <tr style="background-color:#2a3b5c;">
            <th style="padding:8px; border-bottom:1px solid #444; text-align:center; vertical-align:middle;">Producto</th>
            <th style="padding:8px; border-bottom:1px solid #444; text-align:center; vertical-align:middle;">Tipo</th>
            <th style="padding:8px; border-bottom:1px solid #444; text-align:center; vertical-align:middle;">Valor</th>
          </tr>
        </thead>
        <tbody>
    `;
      
    resultado.aranceles.forEach(a => {
      tablaHTML += `
        <tr>
          <td style="padding:8px; border-bottom:1px solid #333; word-wrap: break-word; overflow-wrap: break-word; max-width:170px; text-align:center; vertical-align:middle;">${a.producto}</td>
          <td style="padding:8px; border-bottom:1px solid #333; word-wrap: break-word; overflow-wrap: break-word; max-width:150px; text-align:center; vertical-align:middle;">${a.tipo}</td>
          <td style="padding:8px; border-bottom:1px solid #333; text-align:center; vertical-align:middle;">${a.valor}</td>
        </tr>
      `;
    });

    tablaHTML += `</tbody></table>`;
    contenedor.innerHTML = mensajeHTML + tablaHTML;
    seccion.style.display = "block";
  } else {
    seccion.style.display = "block";
    contenedor.innerHTML = `<em>No se aplican aranceles significativos entre ${paisOrigen} y ${paisDestino}, ya sea por la existencia de acuerdos comerciales o por falta de información detallada disponible.</em>`;
  }
}
