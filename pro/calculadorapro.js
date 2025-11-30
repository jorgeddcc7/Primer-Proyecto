// Estado global
let user = null;        // datos del usuario
let isPro = false;      // si es PRO o no
let token = null;

// Crear modal LOGIN/REGISTER dinámicamente
function crearModalAuth() {
  const modal = document.createElement('div');
  modal.id = "modal-auth";
  modal.style = `
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.65);
    backdrop-filter: blur(6px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
    font-family: 'Inter', sans-serif;
  `;

  modal.innerHTML = `
    <div style="
      background:#fff; 
      padding:40px; 
      width:400px; 
      border-radius:24px; 
      text-align:center; 
      box-shadow: 0 20px 60px rgba(0,0,0,0.35), 0 0 10px rgba(0,0,0,0.1); 
      position: relative;
      transition: transform 0.4s ease, opacity 0.4s ease;
      transform: translateY(-30px);
      opacity:0;
    " id="modal-auth-content">

      <h2 id="auth-title" style="
        margin-bottom:34px; 
        font-size:28px; 
        color:#111; 
        font-weight:800;
      ">Crear cuenta</h2>

      <!-- REGISTRO -->
      <div id="form-register">
        ${crearCampo("reg-email", "Email")}
        ${crearCampo("reg-pass", "Contraseña", "password")}

        <button id="btn-register" style="
          width:100%; padding:16px; margin-top:22px; 
          background: linear-gradient(90deg, #0a74ff, #1f9bff);
          color:white; border:none; border-radius:12px; font-weight:700; font-size:16px; cursor:pointer; 
          box-shadow: 0 4px 12px rgba(0,0,0,0.2); transition: all 0.3s;
        ">Registrarme</button>

        <p style="margin-top:22px; font-size:14px; color:#555;">
          ¿Ya tienes cuenta?
          <button id="ir-login" style="
            background:none; border:none; color:#0a74ff; cursor:pointer; font-weight:700; font-size:14px;
          ">Inicia sesión</button>
        </p>
      </div>

      <!-- LOGIN -->
      <div id="form-login" style="display:none;">
        ${crearCampo("log-email", "Email")}
        ${crearCampo("log-pass", "Contraseña", "password")}

        <button id="btn-login" style="
          width:100%; padding:16px; margin-top:22px; 
          background: linear-gradient(90deg, #0a74ff, #1f9bff);
          color:white; border:none; border-radius:12px; font-weight:700; font-size:16px; cursor:pointer; 
          box-shadow: 0 4px 12px rgba(0,0,0,0.2); transition: all 0.3s;
        ">Entrar</button>

        <p style="margin-top:22px; font-size:14px; color:#555;">
          ¿No tienes cuenta?
          <button id="ir-register" style="
            background:none; border:none; color:#0a74ff; cursor:pointer; font-weight:700; font-size:14px;
          ">Regístrate</button>
        </p>
      </div>

      <p id="auth-error" style="
        color:#ff4d4f; 
        margin-top:10px; 
        font-size:14px; 
        font-weight:700; 
        min-height:0px;
        opacity:0;
        transition: all 0.25s ease;
      "></p>
    </div>
  `;

  // Inserto el modal
  document.body.appendChild(modal);

  // Input floating label + estilo PRO
  modal.querySelectorAll("input").forEach(input => {
  // Mostrar / ocultar contraseña con iconos SVG
  modal.querySelectorAll("[data-eye]").forEach(eye => {
    const id = eye.getAttribute("data-eye");
    const input = modal.querySelector(`#${id}`);

    const openIcon = eye.querySelector("[data-eye-open]");
    const closedIcon = eye.querySelector("[data-eye-closed]");

    let visible = false;

    eye.onclick = () => {
      visible = !visible;

      input.type = visible ? "text" : "password";

      openIcon.style.display = visible ? "none" : "block";
      closedIcon.style.display = visible ? "block" : "none";

      eye.style.opacity = visible ? "1" : "0.6";
    };

    input.addEventListener("focus", () => (eye.style.opacity = "1"));
    input.addEventListener("blur", () => (eye.style.opacity = visible ? "1" : "0.6"));
  });

    const label = input.nextElementSibling;

    const update = () => {
      if (input.value.trim() !== "") {
        label.style.top = "6px";
        label.style.fontSize = "11px";
        label.style.color = "#0a74ff";
      } else {
        label.style.top = "18px";
        label.style.fontSize = "14px";
        label.style.color = "#999";
      }
    };

    input.addEventListener("input", update);
    input.addEventListener("focus", () => {
      input.style.borderColor = "#0a74ff";
      input.style.boxShadow = "0 0 0 3px rgba(10,116,255,0.25)";
      update();
    });
    input.addEventListener("blur", () => {
      input.style.borderColor = "#ccc";
      input.style.boxShadow = "none";
      update();
    });

    update();
  });

  // Animación modal
  setTimeout(() => {
    const content = document.getElementById('modal-auth-content');
    content.style.transform = 'translateY(0)';
    content.style.opacity = '1';
  }, 50);

  // Bloquear scroll
  document.body.style.overflow = 'hidden';

  // Login y registro
  document.getElementById("btn-login").onclick = async () => {
    await login();
    document.body.style.overflow = '';
  };
  document.getElementById("btn-register").onclick = async () => {
    await register();
    document.body.style.overflow = '';
  };

  // Cambiar entre login/registro
  document.getElementById("ir-login").onclick = () => cambiarModo("login");
  document.getElementById("ir-register").onclick = () => cambiarModo("register");

  function cambiarModo(modo) {
    document.getElementById("form-login").style.display = modo === "login" ? "block" : "none";
    document.getElementById("form-register").style.display = modo === "register" ? "block" : "none";
    
    const title = document.getElementById("auth-title");
    title.innerText = modo === "login" ? "Iniciar sesión" : "Crear cuenta";

    const err = document.getElementById("auth-error");
    err.innerText = "";
    err.style.opacity = 0;
    err.style.minHeight = "0px";
  }
}

// 🔧 función generadora del campo (clean)
function crearCampo(id, label, type = "text") {
  const isPass = type === "password";

  return `
    <div style="position: relative; margin-bottom:22px;">
      <input id="${id}" type="${type}" required placeholder=" " style="
        width:100%; 
        padding:16px 50px 16px 14px;  /* padding-right mayor para el icono */
        border:1px solid #ccc; 
        border-radius:12px; 
        font-size:16px; 
        transition: 0.25s ease; 
        background:#f7f7f7; 
        color:#111;
      ">
      
      <label for="${id}" style="
        position:absolute; 
        left:16px; 
        top:18px; 
        color:#999; 
        font-size:14px; 
        pointer-events:none; 
        transition:0.25s ease;
      ">${label}</label>

      ${
        isPass
          ? `<div data-eye="${id}" style="
                position:absolute; 
                right:12px; 
                top:50%; 
                transform: translateY(-50%);
                width:24px; 
                height:24px; 
                cursor:pointer;
                opacity:0.6;
                transition:opacity 0.2s;
                display:flex;
                align-items:center;
                justify-content:center;
              ">
                <svg data-eye-open style="width:24px; height:24px; display:block;" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
        
                <svg data-eye-closed style="width:24px; height:24px; display:none;" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 19c-7 0-11-7-11-7a19.26 19.26 0 0 1 5.06-5.94"/>
                  <path d="M1 1l22 22"/>
                </svg>
              </div>`
          : ""
      }
    </div>
  `;
}

function crearModalPro() {
  const modal = document.createElement('div');
  modal.id = "modal-pro";
  modal.style = `
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.75);
    backdrop-filter: blur(6px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
    font-family: 'Montserrat', sans-serif;
  `;

  modal.innerHTML = `
    <div id="modal-pro-content" style="
      background: var(--card-2);
      padding: 35px 30px;
      width: 90%;
      max-width: 760px;
      border-radius: 20px;
      text-align: center;
      color: var(--text-main);
      box-shadow: var(--shadow);
      position: relative;
      transform: translateY(-30px);
      opacity: 0;
      transition: transform 0.4s ease, opacity 0.4s ease;
    ">

      <h2 style="font-size:28px; font-weight:800; color:var(--accent); margin-bottom:10px;">
        Elige tu plan PRO
      </h2>

      <p style="color:var(--text-light); margin-bottom:30px; font-size:15px;">
        Acceso ilimitado al calculador avanzado.
      </p>

      <div style="
        display:flex; 
        gap:20px; 
        justify-content:center; 
        flex-wrap:wrap;
      ">

        <!-- MENSUAL -->
        <div class="pro-plan-card" data-plan="mensual" style="
          background:var(--card-3); 
          width:210px; padding:25px; border-radius:16px;
          border:2px solid transparent;
          text-align:center; transition:0.3s;
        ">
          <h3 style="color:var(--text-light); font-size:20px;">Mensual</h3>
          <p style="font-size:30px; font-weight:700; color:var(--accent); margin:10px 0;">€12.99</p>
          <p style="color:var(--text-muted); margin-bottom:20px;">Acceso 30 días</p>
          <button class="plan-btn" style="
            width:100%;
            padding:14px;
            border:none;
            border-radius:12px;
            background: linear-gradient(135deg, var(--accent), var(--accent-hover));
            color: var(--bg-main);
            cursor:pointer;
            font-weight:800;
            font-size:16px;
            letter-spacing:0.3px;
            box-shadow: 0 4px 14px rgba(0,0,0,0.25);
            transition: all 0.25s ease;
          ">
            Elegir
          </button>
        </div>

        <!-- TRIMESTRAL -->
        <div class="pro-plan-card recomendado" data-plan="trimestral" style="
          background:var(--card-3); 
          width:210px; padding:25px; border-radius:16px;
          border:2px solid var(--accent);
          text-align:center; position:relative; transition:0.3s;
        ">
          <div style="
            position:absolute; top:-10px; right:-10px; background:var(--accent);
            color:var(--bg-main); padding:4px 10px; border-radius:8px;
            font-size:12px; font-weight:700;
          ">Recomendado</div>
          <h3 style="color:var(--text-light); font-size:20px;">Trimestral</h3>
          <p style="font-size:30px; font-weight:700; color:var(--accent); margin:10px 0;">€29.99</p>
          <p style="color:var(--text-muted); margin-bottom:20px;">€9'99 / mes</p>
          <button class="plan-btn recomendado-btn" style="
            width:100%;
            padding:14px;
            border:none;
            border-radius:12px;
            background: linear-gradient(135deg, var(--accent), var(--accent-hover));
            color: var(--bg-main);
            cursor:pointer;
            font-weight:800;
            font-size:16px;
            letter-spacing:0.3px;
            box-shadow: 0 0 18px rgba(70, 215, 255, 0.48), 0 4px 14px rgba(0,0,0,0.25);
            transition: all 0.25s ease;
          ">
            Elegir
          </button>
        </div>

        <!-- ANUAL -->
        <div class="pro-plan-card" data-plan="anual" style="
          background:var(--card-3); 
          width:210px; padding:25px; border-radius:16px;
          border:2px solid transparent;
          text-align:center; transition:0.3s;
        ">
          <h3 style="color:var(--text-light); font-size:20px;">Anual</h3>
          <p style="font-size:30px; font-weight:700; color:var(--accent); margin:10px 0;">€89.99</p>
          <p style="color:var(--text-muted); margin-bottom:20px;">€7'49 / mes</p>
          <button class="plan-btn" style="
            width:100%;
            padding:14px;
            border:none;
            border-radius:12px;
            background: linear-gradient(135deg, var(--accent), var(--accent-hover));
            color: var(--bg-main);
            cursor:pointer;
            font-weight:800;
            font-size:16px;
            letter-spacing:0.3px;
            box-shadow: 0 4px 14px rgba(0,0,0,0.25);
            transition: all 0.25s ease;
          ">
            Elegir
          </button>
        </div>

      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Animación de entrada
  const content = document.getElementById("modal-pro-content");
  setTimeout(() => {
    content.style.transform = "translateY(0)";
    content.style.opacity = "1";
  }, 50);

  // Bloquear scroll
  document.body.style.overflow = "hidden";

  // Hover tarjetas
  modal.querySelectorAll(".pro-plan-card").forEach(card => {
    card.addEventListener("mouseenter", () => card.style.transform = "translateY(-6px)");
    card.addEventListener("mouseleave", () => card.style.transform = "translateY(0)");
  });

  modal.querySelectorAll(".plan-btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "translateY(-3px)";
      btn.style.boxShadow = "0 6px 18px rgba(0,0,0,0.35)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translateY(0)";
      btn.style.boxShadow = "0 4px 14px rgba(0,0,0,0.25)";
    });
  });

  // Selección de plan
  modal.querySelectorAll(".plan-btn").forEach(btn => {
    btn.onclick = async () => {
      const plan = btn.parentElement.dataset.plan;

      if (!token) {
        alert("Debes iniciar sesión primero.");
        return;
      }

      try {
        const res = await fetch("http://localhost:4000/api/stripe/create-checkout-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
          },
          body: JSON.stringify({ plan })
        });

        const data = await res.json();
        if (data.url) window.location.href = data.url;

      } catch (err) {
        console.error(err);
        alert("Error al iniciar pago.");
      }
    };
  });
}

// LOGIN
async function login(desdeRegistro = false) {
  const email = desdeRegistro
    ? document.getElementById("reg-email").value
    : document.getElementById("log-email").value;

  const password = desdeRegistro
    ? document.getElementById("reg-pass").value
    : document.getElementById("log-pass").value;

  const res = await fetch("http://localhost:4000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (!data.success) {
    document.getElementById("auth-error").innerText = data.message;
    return;
  }

  token = data.token;
  localStorage.setItem("token", token);

  user = data.user;
  isPro = user.pro;

  document.getElementById("modal-auth").remove();
}

async function register() {
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-pass").value;

  const res = await fetch("http://localhost:4000/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (!data.success) {
    document.getElementById("auth-error").innerText = data.message;
    return;
  }

  // Registro correcto → iniciar sesión
  await login(true);  // true = login desde registro
}

// Verificar token al cargar la página
async function verificarToken() {
  const saved = localStorage.getItem("token");
  if (!saved) {
    crearModalAuth();
    return;
  }

  const res = await fetch("http://localhost:4000/api/check-token", {
    headers: { "Authorization": "Bearer " + saved }
  });

  const data = await res.json();

  if (!data.valid) {
    localStorage.removeItem("token");
    crearModalAuth();
    return;
  }

  user = data.user;
  isPro = user.pro;
  token = saved;
}

// Control del botón CALCULAR
function protegerBotonCalcular() {
  const btn = document.getElementById("calcular");

  btn.addEventListener("click", async (e) => {
    if (!isPro) {
      e.preventDefault();
    
      // Crear modal PRO si aún no existe
      let modalPro = document.getElementById("modal-pro");
      if (!modalPro) crearModalPro();
    
      modalPro = document.getElementById("modal-pro");
      modalPro.style.display = "flex";
    
      return;
    }
  
    // Usuario PRO → ejecutar calculo normal
    await calcularPrecio();
  });
}

// Iniciar
window.addEventListener("DOMContentLoaded", async () => {

  await verificarToken();    // Verificar token / usuario
  protegerBotonCalcular();   // Controlar botón calcular

  // Si viene de Stripe
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('checkout') === 'success') {
    alert("¡Pago completado! Ahora eres usuario PRO.");
    
    // Refrescar token/usuario
    await verificarToken();

    // Cerrar modal PRO si estaba abierto
    const modalPro = document.getElementById("modal-pro");
    if (modalPro) modalPro.style.display = "none";
  }
});

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