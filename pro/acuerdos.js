const responsabilidadesCostes = {
  EXW: {
    precioFabrica: 'exportador',
    transporteLocal: 'importador',
    seguro: 'importador',
    transporteInternacional: 'importador',
    aduanaExportacion: 'importador',
    aduanaImportacion: 'importador',
    carga: 'importador',
    descarga: 'importador',
  },
  FCA: {
    precioFabrica: 'exportador',
    transporteLocal: 'exportador',
    seguro: 'importador',
    transporteInternacional: 'importador',
    aduanaExportacion: 'exportador',
    aduanaImportacion: 'importador',
    carga: 'exportador',
    descarga: 'importador',
  },
  CPT: {
    precioFabrica: 'exportador',
    transporteLocal: 'exportador',
    seguro: 'importador',
    transporteInternacional: 'exportador',
    aduanaExportacion: 'exportador',
    aduanaImportacion: 'importador',
    carga: 'exportador',
    descarga: 'importador',
  },
  CIP: {
    precioFabrica: 'exportador',
    transporteLocal: 'exportador',
    seguro: 'exportador',
    transporteInternacional: 'exportador',
    aduanaExportacion: 'exportador',
    aduanaImportacion: 'importador',
    carga: 'exportador',
    descarga: 'importador',
  },
  DAP: {
    precioFabrica: 'exportador',
    transporteLocal: 'exportador',
    seguro: 'exportador',
    transporteInternacional: 'exportador',
    aduanaExportacion: 'exportador',
    aduanaImportacion: 'importador',
    carga: 'exportador',
    descarga: 'importador',
  },
  DPU: {
    precioFabrica: 'exportador',
    transporteLocal: 'exportador',
    seguro: 'exportador',
    transporteInternacional: 'exportador',
    aduanaExportacion: 'exportador',
    aduanaImportacion: 'importador',
    carga: 'exportador',
    descarga: 'exportador',
  },
  DDP: {
    precioFabrica: 'exportador',
    transporteLocal: 'exportador',
    seguro: 'exportador',
    transporteInternacional: 'exportador',
    aduanaExportacion: 'exportador',
    aduanaImportacion: 'exportador',
    carga: 'exportador',
    descarga: 'exportador',
  },
  FOB: {
    precioFabrica: 'exportador',
    transporteLocal: 'exportador',
    seguro: 'importador',
    transporteInternacional: 'importador',
    aduanaExportacion: 'exportador',
    aduanaImportacion: 'importador',
    carga: 'exportador',
    descarga: 'importador',
  },
  FAS: {
    precioFabrica: 'exportador',
    transporteLocal: 'exportador',
    seguro: 'importador',
    transporteInternacional: 'importador',
    aduanaExportacion: 'exportador',
    aduanaImportacion: 'importador',
    carga: 'exportador',
    descarga: 'importador',
  },
  CFR: {
    precioFabrica: 'exportador',
    transporteLocal: 'exportador',
    seguro: 'importador',
    transporteInternacional: 'exportador',
    aduanaExportacion: 'exportador',
    aduanaImportacion: 'importador',
    carga: 'exportador',
    descarga: 'importador',
  },
  CIF: {
    precioFabrica: 'exportador',
    transporteLocal: 'exportador',
    seguro: 'exportador',
    transporteInternacional: 'exportador',
    aduanaExportacion: 'exportador',
    aduanaImportacion: 'importador',
    carga: 'exportador',
    descarga: 'importador',
  },
};

function obtenerDesgloseResponsabilidades(incoterm, costes) {
  const asignaciones = responsabilidadesCostes[incoterm] || {};

  return Object.entries(costes).map(([clave, valor]) => {
    return {
      nombre: clave.replace(/([A-Z])/g, ' $1').toLowerCase(),
      valor,
      responsable: asignaciones[clave] || 'No definido',
    };
  });
}

const documentacion = {
  EXW: {
    exportador: [
      'Factura proforma',
      'Packing List',
    ],
    importador: [
      'Factura comercial',
      'Licencia de importación',
      'Declaración aduanera de importación',
    ],
  },
  FCA: {
    exportador: [
      'Factura proforma',
      'Packing List',
      'Documento de transporte',
    ],
    importador: [
      'Factura comercial',
      'Licencia de importación',
      'Declaración aduanera de importación',
    ],
  },
  CPT: {
    exportador: [
      'Factura proforma',
      'Packing List',
      'Documento de transporte',
    ],
    importador: [
      'Factura comercial',
      'Licencia de importación',
      'Declaración aduanera de importación',
      'Seguro de transporte',
    ],
  },
  CIP: {
    exportador: [
      'Factura proforma',
      'Packing List',
      'Documento de transporte',
      'Seguro de transporte',
    ],
    importador: [
      'Factura comercial',
      'Licencia de importación',
      'Declaración aduanera de importación',
    ],
  },
  DAP: {
    exportador: [
      'Factura proforma',
      'Packing List',
      'Documento de transporte',
    ],
    importador: [
      'Factura comercial',
      'Licencia de importación',
      'Declaración aduanera de importación',
    ],
  },
  DPU: {
    exportador: [
      'Factura proforma',
      'Packing List',
      'Documento de transporte',
    ],
    importador: [
      'Factura comercial',
      'Licencia de importación',
      'Declaración aduanera de importación',
    ],
  },
  DDP: {
    exportador: [
      'Factura proforma',
      'Packing List',
      'Documento de transporte',
      'Licencia de exportación',
    ],
    importador: [
      'Factura comercial',
      'Licencia de importación',
      'Declaración aduanera de importación',
    ],
  },
  FOB: {
    exportador: [
      'Factura proforma',
      'Packing List',
      'Documento de transporte',
      'Certificado de origen',
    ],
    importador: [
      'Factura comercial',
      'Licencia de importación',
      'Declaración aduanera de importación',
    ],
  },
  FAS: {
    exportador: [
      'Factura proforma',
      'Packing List',
      'Documento de transporte',
      'Certificado de origen',
    ],
    importador: [
      'Factura comercial',
      'Licencia de importación',
      'Declaración aduanera de importación',
    ],
  },
  CFR: {
    exportador: [
      'Factura proforma',
      'Packing List',
      'Documento de transporte',
    ],
    importador: [
      'Factura comercial',
      'Licencia de importación',
      'Declaración aduanera de importación',
    ],
  },
  CIF: {
    exportador: [
      'Factura proforma',
      'Packing List',
      'Documento de transporte',
      'Seguro de transporte',
    ],
    importador: [
      'Factura comercial',
      'Licencia de importación',
      'Declaración aduanera de importación',
    ],
  },
};

// Función que devuelve la documentación según el Incoterm
function obtenerDocumentacion(incoterm) {
  return documentacion[incoterm] || { exportador: [], importador: [] };
}

const acuerdosComerciales = [
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Argentina, Brasil, Paraguay, Uruguay",
    nombre: "Partnership Agreement UE‑Mercosur",
    beneficios: "Acuerdo político para liberalizar comercio entre bloques, incluyendo reducción de aranceles y barreras no‑arancelarias."  // fuente :contentReference[oaicite:3]{index=3}
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Argelia",
    nombre: "Acuerdo de Asociación UE-Argelia",
    beneficios: "Liberalizar progresivamente el comercio de bienes, con un trato asimétrico y favorable hacia Argelia."
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Bahamas, Jamaica, República Dominicana",
    nombre: "Economic Partnership Agreement UE-Cariforum",
    beneficios: "Facilita el acceso de productos caribeños al mercado europeo y promueve inversiones y desarrollo sostenible."
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Bosnia",
    nombre: "Stabilisation and Association Agreement UE-Bosnia",
    beneficios: "Establece una zona de libre comercio progresiva y apoya la integración económica y política de Bosnia con la UE."
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Canadá",
    nombre: "Comprehensive Economic and Trade Agreement (CETA)",
    beneficios: "Elimina la mayoría de aranceles, facilita el comercio de bienes y servicios y promueve la inversión bilateral."
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Chile",
    nombre: "Association Agreement UE-Chile",
    beneficios: "Liberaliza el comercio de bienes y servicios, fomenta la cooperación política y moderniza las relaciones económicas."
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Colombia, Ecuador, Perú",
    nombre: "Trade Agreement UE-Colombia/Perú/Ecuador",
    beneficios: "Elimina aranceles gradualmente, mejora el acceso a mercados y fomenta la cooperación económica y social."
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Corea del Sur",
    nombre: "Free Trade Agreement UE-Corea del Sur",
    beneficios: "Suprime casi todos los aranceles sobre bienes industriales y agrícolas, y facilita el comercio de servicios y la inversión."
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Costa de Marfil",
    nombre: "Interim Economic Partnership Agreement UE-Costa de Marfil",
    beneficios: "Garantiza acceso preferencial de productos marfileños al mercado europeo y apoya el desarrollo económico sostenible."
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Costa Rica, El Salvador, Guatemala, Honduras, Nicaragua",
    nombre: "Association Agreement UE-Centroamérica",
    beneficios: "Crea una zona de libre comercio, promueve inversiones y refuerza la cooperación política y social."
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Egipto",
    nombre: "Association Agreement UE-Egipto",
    beneficios: "Liberaliza el comercio de bienes industriales, mejora la cooperación económica y fortalece los lazos políticos."
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Iraq",
    nombre: "Partnership and Cooperation Agreement UE-Iraq",
    beneficios: "Fomenta el diálogo político, la cooperación económica y la diversificación del comercio bilateral."
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Islandia, Noruega",
    nombre: "European Economic Area (EEA) Agreement",
    beneficios: "Permite a estos países participar en el mercado interior de la UE, garantizando libre circulación de bienes, servicios, personas y capitales."
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Israel",
    nombre: "Association Agreement UE-Israel",
    beneficios: "Establece libre comercio para la mayoría de bienes industriales y fortalece la cooperación económica, científica y tecnológica."
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Japón",
    nombre: "Economic Partnership Agreement UE-Japón",
    beneficios: "Elimina la mayoría de aranceles, facilita el comercio de bienes y servicios y promueve normas comunes y cooperación económica."
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Kazajistán",
    nombre: "Enhanced Partnership and Cooperation Agreement UE-Kazajstán",
    beneficios: "Refuerza la cooperación política y económica, mejora las condiciones para el comercio e inversión."
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Líbano",
    nombre: "Association Agreement UE-Líbano",
    beneficios: "Facilita el comercio de bienes industriales, impulsa la cooperación económica y promueve el diálogo político."
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Marruecos",
    nombre: "Association Agreement UE-Marruecos",
    beneficios: "Liberaliza el comercio de bienes y servicios, reduce aranceles y refuerza la cooperación económica y política."
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "México",
    nombre: "Global Agreement UE-México",
    beneficios: "Crea una zona de libre comercio, mejora el acceso a mercados y amplía la cooperación política y de inversiones."
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Reino Unido",
    nombre: "Trade and Cooperation Agreement UE-Reino Unido",
    beneficios: "Garantiza el comercio libre de aranceles y cuotas en bienes, y establece cooperación en áreas como energía, transporte y seguridad."
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Serbia",
    nombre: "Stabilisation and Association Agreement UE-Serbia",
    beneficios: "Liberaliza progresivamente el comercio y apoya la integración económica y política de Serbia con la UE."
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Singapur",
    nombre: "Free Trade Agreement UE-Singapur",
    beneficios: "Elimina aranceles, facilita el comercio de bienes y servicios, y promueve la inversión y la cooperación sostenible."
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Sudáfrica",
    nombre: "Trade, Development and Cooperation Agreement UE-Sudáfrica",
    beneficios: "Crea una zona de libre comercio, impulsa el desarrollo económico y refuerza la cooperación política y social."
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Suiza",
    nombre: "Bilateral Agreements UE-Suiza",
    beneficios: "Permiten a Suiza acceder parcialmente al mercado interior de la UE y garantizan la cooperación económica y técnica."
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Túnez",
    nombre: "Association Agreement UE-Túnez",
    beneficios: "Establece libre comercio de bienes industriales y fomenta la cooperación económica, política y social."
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Turquía",
    nombre: "Customs Union UE-Turquía",
    beneficios: "Elimina aranceles sobre bienes industriales y facilita el comercio mediante una unión aduanera."
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Ucrania",
    nombre: "Association Agreement UE-Ucrania",
    beneficios: "Abre los mercados mediante una amplia zona de libre comercio y apoya la aproximación a las normas europeas."
  },
  {
    pais1: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia",
    pais2: "Vietnam",
    nombre: "Free Trade Agreement UE-Vietnam",
    beneficios: "Elimina la mayoría de aranceles, mejora el acceso a mercados y fomenta la inversión y la cooperación sostenible."
  },
    {
    pais1: "Arabia Saudita",
    pais2: "EAU, Egipto, Marruecos, Argelia, Qatar, Túnez",
    nombre: "Gran Área de Libre Comercio Árabe (GAFTA)",
    beneficios: "Eliminación gradual de aranceles fronterizos en el comercio intraárabe; mayor integración de mercados regionales."
  },
  {
    pais1: "Arabia Saudita",
    pais2: "Egipto",
    nombre: "Acuerdo de Liberalización de Comercio de Servicios Árabe",
    beneficios: "Liberalización progresiva del comercio de servicios entre países árabes, abriendo nuevos mercados y facilitando inversiones."
  },
  {
    pais1: "Arabia Saudita",
    pais2: "Singapur",
    nombre: "Acuerdo de Libre Comercio GCC–Singapur",
    beneficios: "Elimina el 99% de los aranceles para exportaciones de Singapur a los mercados del GCC."
  },
  {
    pais1: "Arabia Saudita",
    pais2: "Suiza, Noruega, Islandia",
    nombre: "Acuerdo de Libre Comercio GCC–EFTA",
    beneficios: "Libre comercio de bienes industriales: abolición de aranceles en la mayoría de productos manufacturados."
  },
    {
    pais1: "Argentina",
    pais2: "Bolivia, Brasil, Chile, Colombia, Cuba, Ecuador, México, Panamá, Paraguay, Perú, Uruguay, Venezuela",
    nombre: "Asociación Latinoamericana de Integración (ALADI)",
    beneficios: "Marco para acuerdos bilaterales de liberalización parcial (ACE) que establecen mercados comunes; permite reducir aranceles selectivamente y aumentar el comercio regional."
  },
  {
    pais1: "Argentina",
    pais2: "Brasil, Paraguay, Uruguay, Bolivia",
    nombre: "Mercado Común del Sur (Mercosur)",
    beneficios: "Unión aduanera con tarifa externa común; zona de libre comercio interna: eliminación de la mayoría de aranceles entre miembros."
  },
  {
    pais1: "Argentina",
    pais2: "Sudáfrica",
    nombre: "Mercosur – Unión Aduanera de África Austral (SACU)",
    beneficios: "Acuerdo preferencial con reducción de aranceles en el comercio bilateral entre MERCOSUR y SACU."
  },
  {
    pais1: "Argentina, Brasil, Paraguay, Uruguay",
    pais2: "Israel",
    nombre: "Mercosur – Israel",
    beneficios: "Creación de una zona de libre comercio: eliminación escalonada de aranceles en varias categorías de productos."
  },
  {
    pais1: "Argentina",
    pais2: "Egipto",
    nombre: "Mercosur – Egipto",
    beneficios: "Eliminación gradual de aranceles aduaneros según un cronograma por categorías (A a E) tras su entrada en vigor."
  },
  {
    pais1: "Argentina",
    pais2: "India",
    nombre: "Mercosur – India",
    beneficios: "Concesiones arancelarias en aproximadamente 450 líneas de productos, con reducciones entre 10% y 100% en aranceles."
  },
    {
    pais1: "Australia",
    pais2: "Nueva Zelanda",
    nombre: "Australia–Nueva Zelanda (CER/ANZCERTA)",
    beneficios: "Eliminación casi total de barreras comerciales desde 1983; libre circulación recíproca de bienes y servicios entre ambos países."
  },
  {
    pais1: "Australia",
    pais2: "Singapur",
    nombre: "Singapur–Australia (SAFTA)",
    beneficios: "Eliminación de aranceles sobre productos originarios; fortalece el comercio bilateral y la protección de inversiones."
  },
  {
    pais1: "Australia",
    pais2: "Estados Unidos",
    nombre: "Australia–Estados Unidos (AUSFTA)",
    beneficios: "Abolición de la mayoría de aranceles mutuos; mejora el acceso a mercados agrícolas e industriales clave."
  },
  {
    pais1: "Australia",
    pais2: "Tailandia",
    nombre: "Tailandia–Australia (TAFTA)",
    beneficios: "Reducción progresiva de aranceles en la mayoría de bienes comerciales; acceso preferencial de exportaciones australianas a Tailandia."
  },
  {
    pais1: "Australia",
    pais2: "Chile",
    nombre: "Chile–Australia (AClFTA)",
    beneficios: "Eliminación de aranceles sobre la mayoría de bienes (agroindustriales e industriales); facilita el comercio bilateral."
  },
  {
    pais1: "Australia",
    pais2: "Singapur, Tailandia, Vietnam",
    nombre: "ASEAN–Australia–Nueva Zelanda (AANZFTA)",
    beneficios: "Amplia reducción/eliminación de aranceles en la región Asia-Pacífico; acceso preferencial de bienes y servicios entre Australia, NZ y países del ASEAN."
  },
  {
    pais1: "Australia",
    pais2: "Malasia",
    nombre: "Malasia–Australia (MAFTA)",
    beneficios: "Eliminación escalonada de aranceles en productos industriales; mejora el acceso de exportaciones australianas al mercado malasio."
  },
  {
    pais1: "Australia",
    pais2: "Corea del Sur",
    nombre: "Corea del Sur–Australia (KAFTA)",
    beneficios: "Eliminación del 99% de aranceles a bienes industriales desde 2020; apertura de sectores como automotor y maquinaria."
  },
  {
    pais1: "Australia",
    pais2: "Japón",
    nombre: "Japón–Australia (JAEPA)",
    beneficios: "Eliminación de ~97% de aranceles en exportaciones australianas (industriales y agrícolas); mejora el acceso para carne y otros productos."
  },
  {
    pais1: "Australia",
    pais2: "China",
    nombre: "China–Australia (ChAFTA)",
    beneficios: "Eliminación del 85% de los aranceles sobre productos industriales al entrar en vigor (2015); apertura de mercado para exportaciones agrícolas australianas."
  },
  {
    pais1: "Australia",
    pais2: "Canadá, Chile, Japón, México, Nueva Zelanda, Perú, Singapur, Reino Unido, Vietnam",
    nombre: "CPTPP (TPP-11)",
    beneficios: "Amplia zona de libre comercio: elimina tarifas en la mayoría de bienes; armoniza normas de comercio de servicios e inversión entre los miembros."
  },
  {
    pais1: "Australia",
    pais2: "Hong Kong",
    nombre: "Australia–Hong Kong (A–HKFTA, con IA)",
    beneficios: "Eliminación de aranceles en bienes; incluye Acuerdo de Inversiones (IA) para proteger inversiones mutuas."
  },
  {
    pais1: "Australia",
    pais2: "Perú",
    nombre: "Perú–Australia (PAFTA)",
    beneficios: "Eliminación progresiva de aranceles (p.ej. ~80% al inicio) en productos agroindustriales e industriales; acceso preferencial bilateral."
  },
  {
    pais1: "Australia",
    pais2: "Indonesia",
    nombre: "Indonesia–Australia (IA–CEPA)",
    beneficios: "Eliminación del 90% de aranceles indonesios sobre importaciones australianas desde el inicio; facilita el comercio de bienes y servicios (con liberalización sectorial)."
  },
  {
    pais1: "Australia",
    pais2: "India",
    nombre: "Australia–India (ECTA)",
    beneficios: "Reducción del 85% de los aranceles en exportaciones australianas (agricultura, manufacturas) desde fines de 2022."
  },
  {
    pais1: "Australia",
    pais2: "Reino Unido",
    nombre: "Australia–Reino Unido (UKFTA)",
    beneficios: "Eliminación inmediata de la mayoría de los aranceles en bienes; cuotas preferenciales de exportación agrícola para Australia."
  },
  {
    pais1: "Australia",
    pais2: "EAU",
    nombre: "Australia–Emiratos Árabes Unidos (CEPA)",
    beneficios: "Abolición de aranceles en casi todas las exportaciones bilaterales; incluye acceso preferente en bienes, servicios, inversiones y movilidad laboral."
  },
  {
  pais1: "Argelia",
  pais2: "Costa de Marfil, Egipto, Marruecos",
  nombre: "Acuerdo de Libre Comercio Africano (AfCFTA)",
  beneficios: "Crea un área de libre comercio continental africano. Permite a Argelia diversificar exportaciones (agro, industria, farmacia) y fortalecer el comercio intrafricano."
  },
  {
    pais1: "Argelia",
    pais2: "Egipto, Marruecos, Argentina, Bolivia, Brasil, Chile, Colombia, Cuba, Ecuador, México, Perú, Venezuela, Corea del Norte, Corea del Sur, Filipinas, India, Indonesia, Singapur, Tailandia, Vietnam",
    nombre: "Sistema Global de Preferencias Comerciales (SGPC)",
    beneficios: "Reducción arancelaria preferencial entre los países miembros, facilitando el comercio Sur–Sur."
  },
  {
  pais1: "Bolivia",
  pais2: "Chile",
  nombre: "ACE N°22 Bolivia–Chile",
  beneficios: "Programa de complementación económica que liberó el comercio bilateral. Chile aplica arancel 0% a casi todas las exportaciones bolivianas."
  },
  {
    pais1: "Bolivia",
    pais2: "México",
    nombre: "ACE N°66 Bolivia–México",
    beneficios: "Facilita el intercambio Bolivia–México. Bolivia exporta minerales, soya, textiles, etc. a México beneficiándose de aranceles reducidos o nulos."
  },
  {
    pais1: "Bolivia",
    pais2: "Cuba",
    nombre: "Acuerdo de Complementación Económica N° 47 (Bolivia–Cuba)",
    beneficios: "Zona de libre comercio total: eliminación recíproca de aranceles en 100 % del universo arancelario."
  },
  {
    pais1: "Bolivia",
    pais2: "Venezuela",
    nombre: "Acuerdo de Comercio entre los Pueblos (Bolivia–Venezuela)",
    beneficios: "Zona de libre comercio total: eliminación recíproca de aranceles en 100 % del universo arancelario."
  },
  {
    pais1: "Bolivia",
    pais2: "Colombia, Ecuador, Perú",
    nombre: "Zona de Libre Comercio Andina (Comunidad Andina)",
    beneficios: "Eliminación total de aranceles internos y barreras no arancelarias en el comercio intracomunitario."
  },
  {
  pais1: "Brasil",
  pais2: "India",
  nombre: "Acuerdo Preferencial Mercosur–India (2009)",
  beneficios: "Acuerdo preferencial que ofrece preferencias arancelarias en 450 líneas arancelarias de India y 452 del Mercosur."
  },
  {
    pais1: "Brasil",
    pais2: "México",
    nombre: "ACE N°54 Mercosur–México (2002)",
    beneficios: "Establece un área de libre comercio entre Mercosur y México, eliminando aranceles sobre la mayoría de los bienes comerciados recíprocamente."
  },
    {
    pais1: "Bosnia",
    pais2: "Serbia",
    nombre: "CEFTA (Acuerdo de Libre Comercio Centro-Europeo)",
    beneficios: "Zona de libre comercio intrarregional: arancel cero en el comercio de bienes entre los países miembros."
  },
  {
  pais1: "Canadá",
  pais2: "Estados Unidos, México",
  nombre: "Tratado México–Estados Unidos–Canadá (T-MEC / USMCA)",
  beneficios: "Continuación del TLCAN: zona de libre comercio trilateral con arancel cero para la mayoría de los bienes."
  },
  {
    pais1: "Canadá",
    pais2: "Chile, Japón, México, Nueva Zelanda, Perú, Singapur, Reino Unido, Vietnam",
    nombre: "CPTPP (TPP-11)",
    beneficios: "Amplia zona de libre comercio: elimina tarifas en la mayoría de bienes; armoniza normas de comercio de servicios e inversión entre los miembros."
  },
  {
    pais1: "Canadá",
    pais2: "Reino Unido",
    nombre: "Acuerdo de Continuidad Comercial Canadá–Reino Unido (Canadian Trade Continuity, CTC)",
    beneficios: "Mantiene los términos del CETA tras el Brexit: reducción de aranceles en ~98 % de los productos."
  },
  {
    pais1: "Canadá",
    pais2: "Corea del Sur",
    nombre: "Tratado de Libre Comercio Canadá–Corea del Sur",
    beneficios: "Eliminación arancelaria progresiva: ~98 % de las líneas arancelarias industriales eliminadas."
  },
  {
    pais1: "Canadá",
    pais2: "Israel",
    nombre: "Tratado de Libre Comercio Canadá–Israel (CIFTA)",
    beneficios: "Eliminación de aranceles sobre el 100 % de los productos industriales fabricados en ambos países."
  },
  {
    pais1: "Canadá",
    pais2: "Panamá",
    nombre: "Tratado de Libre Comercio Canadá–Panamá",
    beneficios: "Eliminación de aranceles en el 90 % de las importaciones panameñas desde Canadá (el restante 10 % desaparece gradualmente)."
  },
  {
    pais1: "Canadá",
    pais2: "Perú",
    nombre: "Tratado de Libre Comercio Canadá–Perú (CPFTA)",
    beneficios: "Acceso preferencial con reducciones arancelarias mutuas."
  },
  {
    pais1: "Canadá",
    pais2: "Colombia",
    nombre: "Tratado de Libre Comercio Canadá–Colombia",
    beneficios: "Acceso preferencial con reducciones arancelarias mutuas."
  },
  {
    pais1: "Canadá",
    pais2: "Chile",
    nombre: "Tratado de Libre Comercio Canadá–Chile",
    beneficios: "Eliminación de aranceles sobre el 75 % del comercio bilateral."
  },
  {
    pais1: "Canadá",
    pais2: "Islandia, Noruega, Suiza",
    nombre: "Acuerdo de Libre Comercio Canadá–Asociación Europea de Libre Comercio (EFTA)",
    beneficios: "Eliminación de casi todos los aranceles entre Canadá y los estados EFTA."
  },
  {
    pais1: "Canadá",
    pais2: "Ucrania",
    nombre: "Tratado de Libre Comercio Canadá–Ucrania (CUFTA)",
    beneficios: "Libre comercio de bienes: eliminación de aranceles."
  },
  {
  pais1: "Chile",
  pais2: "Paraguay",
  nombre: "Acuerdo Comercial entre Chile y Paraguay",
  beneficios: "Moderniza la relación comercial con Paraguay y promueve una mayor integración productiva."
  },
  {
    pais1: "Chile",
    pais2: "Japón, México, Nueva Zelanda, Perú, Singapur, Reino Unido, Vietnam",
    nombre: "CPTPP (TPP-11)",
    beneficios: "Amplia zona de libre comercio: elimina tarifas en la mayoría de bienes; armoniza normas de comercio de servicios e inversión entre los miembros."
  },
  {
    pais1: "Chile",
    pais2: "Brasil",
    nombre: "Tratado de Libre Comercio Chile–Brasil",
    beneficios: "Complementa la liberalización previa entre ambos países, permitiendo un libre intercambio ampliado."
  },
  {
    pais1: "Chile",
    pais2: "Nueva Zelanda, Singapur, Corea del Sur",
    nombre: "Acuerdo de Asociación de Economía Digital (DEPA)",
    beneficios: "Crea un marco para el comercio electrónico y la economía digital. Facilita el libre flujo de datos y prohíbe la discriminación de productos digitales."
  },
  {
    pais1: "Chile",
    pais2: "Reino Unido",
    nombre: "Acuerdo de Asociación Chile–Reino Unido (Acuerdo de Continuidad)",
    beneficios: "Garantiza la continuidad de las preferencias arancelarias bilaterales tras la salida del Reino Unido de la UE."
  },
  {
    pais1: "Chile",
    pais2: "Japón",
    nombre: "Acuerdo de Asociación Económica Chile–Japón",
    beneficios: "Elimina progresivamente los aranceles sobre los productos comerciales entre ambos países."
  },
  {
    pais1: "Chile",
    pais2: "India",
    nombre: "Acuerdo de Alcance Parcial Chile–India",
    beneficios: "Establece preferencia arancelaria unilateral entre las dos economías. Chile concede reducciones arancelarias (80–100 %) a 2.099 productos indios, e India a 1.110 productos chilenos."
  },
  {
    pais1: "Chile",
    pais2: "Perú, México, Colombia",
    nombre: "Protocolo Comercial de la Alianza del Pacífico",
    beneficios: "Elimina aranceles en un alto porcentaje de bienes industriales y agropecuarios entre los cuatro países."
  },
  {
    pais1: "Chile",
    pais2: "Costa Rica, El Salvador, Guatemala, Honduras, Nicaragua",
    nombre: "Tratado de Libre Comercio Chile–Centroamérica",
    beneficios: "Establece un arancel cero bilateral por etapas con cada país centroamericano."
  },
  {
    pais1: "Chile",
    pais2: "Singapur, Nueva Zelanda",
    nombre: "Acuerdo de Asociación Económica P-4",
    beneficios: "Libre comercio integral entre las cuatro economías. Desde el inicio, Singapur liberalizó el 100 % de las importaciones chilenas y Nueva Zelanda el 80 %."
  },
  {
    pais1: "Chile",
    pais2: "China",
    nombre: "Tratado de Libre Comercio Chile–China",
    beneficios: "Amplía el mercado para los productos chilenos en China. A partir de 2015, el 97,2 % de las mercancías chilenas (más de 7.300 productos) ingresan a China libres de arancel."
  },
  {
  pais1: "China",
  pais2: "Australia, Corea del Sur, Filipinas, Indonesia, Japón, Nueva Zelanda, Singapur, Tailandia, Vietnam",
  nombre: "Asociación Económica Integral Regional (RCEP)",
  beneficios: "Fija reducciones arancelarias extensas en la región Asia-Pacífico y armoniza normas. Impulsa la liberalización y facilitación del comercio e inversión en Asia Oriental."
  },
  {
    pais1: "China",
    pais2: "Indonesia, Filipinas, Singapur, Tailandia, Vietnam",
    nombre: "Tratado de Libre Comercio China–ASEAN",
    beneficios: "Elimina progresivamente los aranceles en un alto porcentaje de productos entre China y cada miembro de la ASEAN."
  },
  {
    pais1: "China",
    pais2: "Nueva Zelanda",
    nombre: "Tratado de Libre Comercio China–Nueva Zelanda",
    beneficios: "Reduce y elimina aranceles gradualmente en ambos sentidos, favoreciendo el comercio agrícola e industrial bilateral."
  },
  {
    pais1: "China",
    pais2: "Singapur",
    nombre: "Tratado de Libre Comercio China–Singapur",
    beneficios: "Abre el comercio de bienes con tarifas reducidas o nulas en la mayoría de las partidas arancelarias."
  },
  {
    pais1: "China",
    pais2: "Corea del Sur",
    nombre: "Acuerdo de Asociación Económica China–Corea del Sur",
    beneficios: "Establece preferencias arancelarias mutuas: China eliminó aranceles sobre la mayoría de productos coreanos, y Corea hizo lo propio con productos chinos."
  },
  {
    pais1: "China",
    pais2: "Suiza",
    nombre: "Tratado de Libre Comercio China–Suiza",
    beneficios: "Elimina aranceles sobre la mayor parte del comercio bilateral, ofreciendo acceso preferencial a productos suizos en China."
  },
  {
    pais1: "China",
    pais2: "Tailandia",
    nombre: "Tratado de Libre Comercio China–Tailandia",
    beneficios: "Elimina progresivamente aranceles en cientos de productos, estimulando el intercambio de bienes, especialmente electrónicos y manufacturas."
  },
  {
  pais1: "Colombia",
  pais2: "Perú, México",
  nombre: "Protocolo Comercial de la Alianza del Pacífico",
  beneficios: "Elimina aranceles en un alto porcentaje de bienes industriales y agropecuarios entre los cuatro países."
  },
  {
    pais1: "Colombia",
    pais2: "Panamá",
    nombre: "Acuerdo de Alcance Parcial Colombia–Panamá (AAP 29)",
    beneficios: "Ofrece preferencias arancelarias: más de 80 bienes colombianos exportados a Panamá entran con arancel cero."
  },
  {
    pais1: "Colombia",
    pais2: "Ecuador, Perú",
    nombre: "Zona de Libre Comercio Andina (Comunidad Andina)",
    beneficios: "Eliminación total de aranceles internos y barreras no arancelarias en el comercio intracomunitario."
  },
  {
    pais1: "Colombia",
    pais2: "Jamaica",
    nombre: "Acuerdo de Alcance Parcial Colombia–CARICOM",
    beneficios: "Proporciona preferencias arancelarias y cooperación económica con el Caribe."
  },
  {
    pais1: "Colombia",
    pais2: "Corea del Sur",
    nombre: "Tratado de Libre Comercio Colombia–Corea del Sur",
    beneficios: "Establece reducciones arancelarias significativas: el 80 % de los productos colombianos ingresan a Corea con arancel cero."
  },
  {
    pais1: "Colombia",
    pais2: "Costa Rica",
    nombre: "Tratado de Libre Comercio Colombia–Costa Rica",
    beneficios: "Otorga acceso preferencial especialmente a manufacturas colombianas, con reducciones arancelarias graduales."
  },
  {
    pais1: "Colombia",
    pais2: "Cuba",
    nombre: "Acuerdo de Complementación Económica N°49 (Colombia–Cuba)",
    beneficios: "Concede amplias preferencias arancelarias (entre el 10 % y el 100 %) a más de 4.600 subpartidas cubanas."
  },
  {
    pais1: "Colombia",
    pais2: "Suiza, Noruega, Islandia",
    nombre: "Tratado de Libre Comercio Colombia–Estados AELC (EFTA)",
    beneficios: "Elimina aranceles sobre la mayoría de las mercancías intercambiadas, brindando acceso preferencial a los mercados de los países EFTA."
  },
  {
    pais1: "Colombia",
    pais2: "El Salvador, Honduras, Guatemala",
    nombre: "Tratado de Libre Comercio Colombia–El Salvador/Honduras/Guatemala",
    beneficios: "Suprime aranceles en gran parte del comercio entre estos cuatro países."
  },
  {
    pais1: "Colombia",
    pais2: "Estados Unidos",
    nombre: "Tratado de Libre Comercio Colombia–Estados Unidos",
    beneficios: "Elimina aranceles para más de 500 productos colombianos de exportación, facilitando el acceso."
  },
  {
    pais1: "Colombia",
    pais2: "Israel",
    nombre: "Tratado de Libre Comercio Colombia–Israel",
    beneficios: "Garantiza acceso preferencial mediante reducciones arancelarias en bienes manufacturados colombianos."
  },
  {
    pais1: "Colombia",
    pais2: "Reino Unido",
    nombre: "Acuerdo comercial de continuidad Colombia–Reino Unido",
    beneficios: "Mantiene las condiciones comerciales previas al Brexit, otorgando a Colombia los mismos beneficios arancelarios que tenía con la UE."
  },
  {
    pais1: "Colombia",
    pais2: "México",
    nombre: "Tratado de Libre Comercio Colombia–México",
    beneficios: "Avanzada liberalización comercial: desde 1995 liberalizó progresivamente la mayoría de productos, profundizada en 2011."
  },
  {
  pais1: "Costa de Marfil",
  pais2: "Reino Unido",
  nombre: "Acuerdo de Asociación Económica Costa de Marfil–Reino Unido",
  beneficios: "Replica el tratamiento arancelario preferencial de la EPA con la UE. Permite que las exportaciones marfileñas al Reino Unido ingresen con los mismos aranceles que tenía la UE."
  },
  {
    pais1: "Costa de Marfil",
    pais2: "Egipto, Marruecos",
    nombre: "Acuerdo de Libre Comercio Africano (AfCFTA)",
    beneficios: "Crea un área de libre comercio continental africano. Permite a Argelia diversificar exportaciones (agro, industria, farmacia) y fortalecer el comercio intrafricano."
  },
  {
  pais1: "Costa Rica",
  pais2: "Estados Unidos, El Salvador, Guatemala, Honduras, Nicaragua, Panamá, República Dominicana",
  nombre: "Tratado de Libre Comercio CAFTA-DR",
  beneficios: "Suprime aranceles en la mayoría de los bienes comercializados entre Costa Rica y los demás miembros."
  },
  {
    pais1: "Costa Rica",
    pais2: "Canadá",
    nombre: "Tratado de Libre Comercio Costa Rica–Canadá",
    beneficios: "Establece acceso preferencial, eliminando aranceles sobre la mayor parte de los productos costarricenses exportados a Canadá."
  },
  {
    pais1: "Costa Rica",
    pais2: "Suiza, Noruega, Islandia",
    nombre: "Acuerdo de Libre Comercio Costa Rica–Asociación Europea de Libre Comercio (AELC)",
    beneficios: "Elimina aranceles en gran parte del comercio bilateral."
  },
  {
    pais1: "Costa Rica",
    pais2: "Singapur",
    nombre: "Tratado de Libre Comercio Costa Rica–Singapur",
    beneficios: "Acceso libre de aranceles inmediato para la gran mayoría de los productos costarricenses en Singapur."
  },
  {
    pais1: "Costa Rica",
    pais2: "México",
    nombre: "Tratado de Libre Comercio Costa Rica–México",
    beneficios: "Profundiza un libre intercambio de bienes; Costa Rica redujo aranceles en varias etapas."
  },
  {
    pais1: "Costa Rica",
    pais2: "Perú",
    nombre: "Tratado de Libre Comercio Costa Rica–Perú",
    beneficios: "Suprime aranceles en la mayor parte de las exportaciones costarricenses a Perú."
  },
  {
    pais1: "Costa Rica",
    pais2: "Panamá",
    nombre: "Tratado de Libre Comercio Costa Rica–Panamá",
    beneficios: "Elimina aranceles en una alta proporción de los bienes exportados bilateralmente."
  },
  {
    pais1: "Costa Rica",
    pais2: "República Dominicana",
    nombre: "Tratado de Libre Comercio Costa Rica–República Dominicana",
    beneficios: "Suprime aranceles en las exportaciones costarricenses dirigidas a República Dominicana."
  },
  {
    pais1: "Costa Rica",
    pais2: "Corea del Sur",
    nombre: "Tratado de Libre Comercio Costa Rica–Corea del Sur",
    beneficios: "Otorga acceso inmediato sin arancel al 80 % de los productos costarricenses, fomentando exportaciones de café, azúcar y manufacturas."
  },
  {
    pais1: "Costa Rica",
    pais2: "Reino Unido",
    nombre: "Acuerdo comercial Costa Rica–Reino Unido",
    beneficios: "Concede a Costa Rica los mismos beneficios que tenía con la UE antes del Brexit."
  },
  {
  pais1: "Cuba",
  pais2: "Argentina, Bolivia, Brasil, Chile, Colombia, Ecuador, México, Panamá, Paraguay, Perú, Uruguay, Venezuela",
  nombre: "Tratado de Montevideo (ALADI, 1980)",
  beneficios: "Fomenta integración regional, reduce gradualmente trabas al comercio intrarregional."
  },
  {
    pais1: "Cuba",
    pais2: "Venezuela",
    nombre: "ACE N° 40 Cuba–Venezuela (1999)",
    beneficios: "Eliminación/reducción arancelaria recíproca: facilita el comercio bilateral mediante rebaja de gravámenes arancelarios."
  },
  {
    pais1: "Cuba",
    pais2: "Chile",
    nombre: "ACE N° 42 Chile–Cuba (2008)",
    beneficios: "Acceso preferencial mutuo: Cuba eliminó aranceles (100%) a 878 productos chilenos y Chile hizo lo propio con 281 productos cubanos."
  },
  {
    pais1: "Cuba",
    pais2: "Ecuador",
    nombre: "ACE N° 46 Cuba–Ecuador (2013)",
    beneficios: "Preferencias arancelarias recíprocas: acuerdos para facilitar e incrementar el comercio mediante reducción porcentual de gravámenes."
  },
  {
    pais1: "Cuba",
    pais2: "Bolivia",
    nombre: "ACE N° 47 Bolivia–Cuba (2000)",
    beneficios: "Libre acceso arancelario bilateral: inicialmente Cuba concedió 100% de rebaja para ~90 productos bolivianos y viceversa."
  },
  {
    pais1: "Cuba",
    pais2: "Colombia",
    nombre: "ACE N° 49 Cuba–Colombia (2000)",
    beneficios: "Eliminación gradual de aranceles: calendario de liberalización arancelaria para productos originarios de ambos países, fomentando el libre comercio."
  },
  {
    pais1: "Cuba",
    pais2: "Perú",
    nombre: "ACE N° 50 Cuba–Perú (2013)",
    beneficios: "Preferencias arancelarias mutuas: las partes establecen reducciones porcentuales de aranceles para productos negociados entre Cuba y Perú."
  },
  {
    pais1: "Cuba",
    pais2: "México",
    nombre: "ACE N° 51 Cuba–México (1985)",
    beneficios: "Reducción o eliminación de aranceles: pacto bilateral para reducir o eliminar gravámenes aduaneros aplicados a productos originarios de ambas naciones."
  },
  {
    pais1: "Cuba",
    pais2: "Bolivia, Nicaragua, Venezuela",
    nombre: "ACE N° 70 (ECOALBA/TCP, 2013)",
    beneficios: "Integración ALBA: establece espacio económico conjunto (ECOALBA) con iniciativas de liberalización comercial e inversiones entre los países miembros."
  },
  {
    pais1: "Cuba",
    pais2: "Panamá",
    nombre: "ACE N° 71 Cuba–Panamá (2013)",
    beneficios: "Preferencias arancelarias mutuas: eliminación de gravámenes a las importaciones de los productos negociados."
  },
  {
    pais1: "Cuba",
    pais2: "Jamaica",
    nombre: "Acuerdo de Cooperación Económica Cuba–CARICOM (2000)",
    beneficios: "Promoción del comercio regional: elimina barreras arancelarias entre Cuba y CARICOM, facilitando intercambio de bienes y servicios."
  },
  {
  pais1: "República Dominicana",
  pais2: "Panamá",
  nombre: "Tratado Comercial RD–Panamá (1985, v. vig. 2003)",
  beneficios: "Libre comercio parcial bilateral: aproximadamente 100 productos dominicanos y panameños acceden con arancel cero a ambos mercados."
  },
  {
    pais1: "República Dominicana",
    pais2: "Jamaica",
    nombre: "TLC RD–CARICOM (2001)",
    beneficios: "Creación de zona libre de comercio: libera gradualmente aranceles y barreras no arancelarias entre la RD y CARICOM."
  },
  {
    pais1: "República Dominicana",
    pais2: "Costa Rica, Guatemala, Honduras, Nicaragua",
    nombre: "TLC RD–Centroamérica (1998/2001)",
    beneficios: "Facilitación del comercio regional: eliminación progresiva de aranceles en bienes originarios de las partes, y liberalización de flujos de comercio e inversiones."
  },
  {
    pais1: "República Dominicana",
    pais2: "Estados Unidos, Guatemala, Honduras, Nicaragua, Costa Rica",
    nombre: "DR-CAFTA (2004)",
    beneficios: "Acceso preferencial EUA-Centroamérica: elimina aranceles en la mayoría de productos de la RD hacia EE.UU."
  },
  {
  pais1: "Egipto",
  pais2: "Emiratos Árabes Unidos, Marruecos, Arabia Saudita",
  nombre: "PAFTA/GAFTA (1997/1998)",
  beneficios: "Libre comercio árabe: elimina la mayoría de aranceles aduaneros en el comercio de bienes entre Egipto y los países árabes signatarios."
  },
  {
    pais1: "Egipto",
    pais2: "Islandia, Noruega, Suiza",
    nombre: "EFTA (2007)",
    beneficios: "Reducción de aranceles industriales: acuerdo con el EFTA que liberaliza el comercio de bienes industriales."
  },
  {
    pais1: "Egipto",
    pais2: "Argentina, Brasil, Paraguay, Uruguay",
    nombre: "TLG MERCOSUR–Egipto (2010)",
    beneficios: "Libre acceso arancelario: Egipto aplica arancel 0% a productos originarios de Mercosur de las canastas A, B, C."
  },
  {
    pais1: "Egipto",
    pais2: "Costa de Marfil, Marruecos",
    nombre: "Acuerdo de Libre Comercio Africano (AfCFTA)",
    beneficios: "Crea un área de libre comercio continental africano. Permite a Egipto diversificar exportaciones (agro, industria, farmacia) y fortalecer el comercio intrafricano."
  },
  {
    pais1: "Egipto",
    pais2: "Marruecos",
    nombre: "Acuerdo de Agadir (2004/2007)",
    beneficios: "Libre comercio mediterráneo: elimina aranceles al comercio de bienes entre Egipto y los demás miembros."
  },
  {
    pais1: "Egipto",
    pais2: "Estados Unidos",
    nombre: "Zonas Industriales Calificadas (QIZ) Egipto–EE.UU. (2004)",
    beneficios: "Preferencia arancelaria textil: permite exportar a EE.UU. productos (tela, confecciones) con partes procedentes de Israel sin arancel."
  },
  {
  pais1: "Emiratos Árabes Unidos",
  pais2: "Marruecos, Arabia Saudita",
  nombre: "PAFTA/GAFTA (1997/1998)",
  beneficios: "Libre comercio árabe: elimina la mayoría de aranceles aduaneros en el comercio de bienes entre Emiratos Árabes Unidos y los países árabes signatarios."
  },
  {
    pais1: "Emiratos Árabes Unidos",
    pais2: "Singapur",
    nombre: "Acuerdo GCC–Singapur (GSFTA, 2008/2013)",
    beneficios: "Acceso arancelario mutuo: exención de aranceles para casi todos los bienes entre EAU (CCG) y Singapur."
  },
  {
    pais1: "Emiratos Árabes Unidos",
    pais2: "Nueva Zelanda",
    nombre: "Acuerdo GCC–Nueva Zelanda (2009)",
    beneficios: "Libre comercio: elimina aranceles en la mayoría de productos industriales y agrícolas entre EAU y Nueva Zelanda."
  },
  {
    pais1: "Emiratos Árabes Unidos",
    pais2: "Islandia, Noruega, Suiza",
    nombre: "Acuerdo GCC–EFTA (2009)",
    beneficios: "Preferencias arancelarias: arancel cero o reducido para productos industriales originarios entre EAU y países de la AELC."
  },
  {
    pais1: "Emiratos Árabes Unidos",
    pais2: "India",
    nombre: "CEPA EAU–India (2023)",
    beneficios: "Acuerdo económico integral: elimina o reduce aranceles en la mayoría de bienes entre EAU e India."
  },
  {
    pais1: "Emiratos Árabes Unidos",
    pais2: "Indonesia",
    nombre: "CEPA EAU–Indonesia (2022)",
    beneficios: "Acuerdo integral: reducción/arancel cero para gran parte de bienes intercambiados; incluye disposiciones de inversión y servicios."
  },
  {
    pais1: "Emiratos Árabes Unidos",
    pais2: "Turquía",
    nombre: "CEPA EAU–Turquía (2023)",
    beneficios: "Acuerdo integral: liberalización progresiva de aranceles en bienes y servicios; establece reglas de inversión y cooperaciones económicas."
  },
  {
  pais1: "Estados Unidos",
  pais2: "México",
  nombre: "Tratado México–Estados Unidos–Canadá (T-MEC / USMCA)",
  beneficios: "Continuación del TLCAN: zona de libre comercio trilateral con arancel cero para la mayoría de los bienes."
  },
  {
    pais1: "Estados Unidos",
    pais2: "Corea del Sur",
    nombre: "TLC EE. UU.–Corea del Sur (KORUS, 2012)",
    beneficios: "Libre comercio bilateral: arancel cero en aproximadamente 95% de productos industriales y agropecuarios."
  },
  {
    pais1: "Estados Unidos",
    pais2: "Israel",
    nombre: "TLC EE. UU.–Israel (1985)",
    beneficios: "Libre comercio bilateral: elimina barreras arancelarias en bienes industriales y agrícolas."
  },
  {
    pais1: "Estados Unidos",
    pais2: "Guatemala, El Salvador, Honduras, Nicaragua, Costa Rica, República Dominicana",
    nombre: "CAFTA-DR (2006) – Tratado EE. UU.–Centroamérica–R. Dom.",
    beneficios: "Acceso preferencial regional: elimina aranceles en el 80–100% de productos con origen centroamericano o dominicano."
  },
  {
    pais1: "Estados Unidos",
    pais2: "Singapur",
    nombre: "TLC EE. UU.–Singapur (2004)",
    beneficios: "Libre comercio bilateral: elimina barreras arancelarias en manufacturas y productos agrícolas."
  },
  {
    pais1: "Estados Unidos",
    pais2: "Panamá",
    nombre: "TLC EE. UU.–Panamá (2012)",
    beneficios: "Libre comercio bilateral: acceso con arancel cero para la mayor parte de bienes originarios."
  },
  {
    pais1: "Estados Unidos",
    pais2: "Perú",
    nombre: "TLC EE. UU.–Perú (2009)",
    beneficios: "Libre comercio bilateral: elimina o reduce aranceles en el comercio de bienes."
  },
  {
    pais1: "Estados Unidos",
    pais2: "Marruecos",
    nombre: "TLC EE. UU.–Marruecos (2006)",
    beneficios: "Libre comercio bilateral: reduce aranceles en productos agrícolas e industriales."
  },
  {
    pais1: "Estados Unidos",
    pais2: "Chile",
    nombre: "TLC EE. UU.–Chile (2004)",
    beneficios: "Libre comercio bilateral: arancel cero en la mayoría de productos industriales y agrícolas."
  },
  {
    pais1: "Estados Unidos",
    pais2: "Colombia",
    nombre: "TLC EE. UU.–Colombia (2012)",
    beneficios: "Libre comercio bilateral: elimina barreras a productos industriales y agropecuarios."
  },
  {
  pais1: "Filipinas",
  pais2: "Indonesia, Singapur, Tailandia, Vietnam",
  nombre: "ASEAN Trade in Goods Agreement (ATIGA)",
  beneficios: "Eliminación de aranceles y la reducción de barreras al comercio para lograr el libre flujo de bienes en la región."
  },
  {
    pais1: "Filipinas",
    pais2: "Corea del Sur",
    nombre: "TLC ASEAN–Corea (AKFTA)",
    beneficios: "Elimina los aranceles para la mayoría de los productos intercambiados, aumentando el comercio de bienes, servicios y capitales entre ambas regiones."
  },
  {
    pais1: "Filipinas",
    pais2: "Japón",
    nombre: "ASEAN–Japón (AJCEP)",
    beneficios: "Liberaliza el comercio, reduce aranceles, promueve la inversión y facilita el comercio de servicios."
  },
  {
    pais1: "Filipinas",
    pais2: "India",
    nombre: "TLC ASEAN–India (AIFTA)",
    beneficios: "Establece una zona de libre comercio que impulsa el comercio y la inversión entre Filipinas e India."
  },
  {
    pais1: "Filipinas",
    pais2: "Australia, Nueva Zelanda",
    nombre: "TLC ASEAN–Australia/Nueva Zelanda (AANZFTA)",
    beneficios: "Facilita el comercio mediante la reducción de aranceles entre Filipinas y los países de Oceanía."
  },
  {
    pais1: "Filipinas",
    pais2: "Japón",
    nombre: "Acuerdo de Asociación Económica Filipinas–Japón (JPEPA)",
    beneficios: "Elimina aranceles en más del 90% del comercio de bienes, agiliza procedimientos comerciales y fomenta la inversión japonesa en Filipinas."
  },
  {
    pais1: "Filipinas",
    pais2: "Noruega, Suiza, Islandia",
    nombre: "TLC Filipinas–EFTA",
    beneficios: "Elimina la mayoría de los aranceles para productos industriales y agrícolas entre Filipinas y los países de la AELC."
  },
  {
    pais1: "Filipinas",
    pais2: "Australia, Japón, Corea del Sur, Nueva Zelanda, Indonesia, Singapur, Tailandia, Vietnam",
    nombre: "Asociación Económica Integral Regional (RCEP)",
    beneficios: "Fija reducciones arancelarias extensas en la región Asia-Pacífico y armoniza normas, impulsando la liberalización y facilitación del comercio e inversión en Asia Oriental."
  },
  {
  pais1: "Guatemala",
  pais2: "El Salvador, Honduras, Nicaragua, Costa Rica, República Dominicana",
  nombre: "CAFTA-DR (2006) – Tratado EE. UU.–Centroamérica–R. Dom.",
  beneficios: "Acceso preferencial regional: elimina aranceles en el 80–100% de productos con origen centroamericano o dominicano."
  },
  {
    pais1: "Guatemala",
    pais2: "Costa Rica, El Salvador, Guatemala, Honduras, Nicaragua",
    nombre: "Tratado de Libre Comercio Chile–Centroamérica",
    beneficios: "Establece un arancel cero bilateral por etapas con cada país centroamericano."
  },
  {
    pais1: "Guatemala",
    pais2: "Taiwán",
    nombre: "TLC Guatemala–Taiwán",
    beneficios: "Promueve la expansión del comercio, elimina barreras arancelarias y facilita la circulación de mercancías y servicios."
  },
  {
    pais1: "Guatemala",
    pais2: "Panamá",
    nombre: "TLC Centroamérica–Panamá",
    beneficios: "Elimina aranceles, facilita exportaciones, atrae inversión extranjera y crea un entorno comercial más seguro y predecible."
  },
  {
  pais1: "Honduras",
  pais2: "El Salvador, Nicaragua, Costa Rica, República Dominicana",
  nombre: "CAFTA-DR (2006) – Tratado EE. UU.–Centroamérica–R. Dom.",
  beneficios: "Acceso preferencial regional: elimina aranceles en el 80–100% de productos con origen centroamericano o dominicano."
  },
  {
    pais1: "Honduras",
    pais2: "México",
    nombre: "TLC México–Centroamérica",
    beneficios: "Facilita el comercio bilateral a través de la eliminación de aranceles y barreras no arancelarias."
  },
  {
    pais1: "Honduras",
    pais2: "Colombia, El Salvador, Guatemala",
    nombre: "TLC Colombia–El Salvador–Guatemala–Honduras",
    beneficios: "Mejora el acceso a mercados, facilita el comercio y promueve las inversiones mutuas."
  },
  {
    pais1: "Honduras",
    pais2: "Costa Rica, El Salvador, Guatemala, Nicaragua",
    nombre: "Tratado de Libre Comercio Chile–Centroamérica",
    beneficios: "Establece un arancel cero bilateral por etapas con cada país centroamericano."
  },
  {
    pais1: "Honduras",
    pais2: "Perú",
    nombre: "TLC Honduras–Perú",
    beneficios: "Facilita el intercambio comercial mediante la reducción de aranceles y la apertura de mercados."
  },
  {
    pais1: "Honduras",
    pais2: "Canadá",
    nombre: "TLC Honduras–Canadá",
    beneficios: "Fortalece el comercio bilateral al establecer un marco legal que facilita el intercambio de bienes y servicios."
  },
  {
    pais1: "Honduras",
    pais2: "Corea del Sur",
    nombre: "TLC Centroamérica–Corea del Sur",
    beneficios: "Otorga acceso preferencial a las exportaciones centroamericanas en el mercado coreano."
  },
  {
    pais1: "Honduras",
    pais2: "Panamá",
    nombre: "TLC Centroamérica–Panamá",
    beneficios: "Elimina aranceles, facilita exportaciones, atrae inversión extranjera y crea un entorno comercial más seguro y predecible."
  },
  {
  pais1: "India",
  pais2: "Singapur, Tailandia, Vietnam",
  nombre: "TLC ASEAN–India",
  beneficios: "Reducción o eliminación de aranceles en más del 90% de los productos."
  },
  {
    pais1: "India",
    pais2: "Singapur",
    nombre: "TLC India–Singapur (CECA)",
    beneficios: "Facilita el comercio, la inversión y la cooperación en áreas como bienes, servicios, propiedad intelectual y ciencia y tecnología."
  },
  {
    pais1: "India",
    pais2: "Corea del Sur",
    nombre: "TLC India–Corea del Sur (CEPA)",
    beneficios: "Facilita el comercio y la inversión bilateral mediante la reducción o eliminación de aranceles para la mayoría de los productos."
  },
  {
    pais1: "India",
    pais2: "Japón",
    nombre: "TLC India–Japón (CEPA)",
    beneficios: "Abolición de aranceles, eliminando el 94% de los aranceles comerciales en un plazo de diez años."
  },
  {
    pais1: "India",
    pais2: "China, Corea del Sur",
    nombre: "APTA (Acuerdo de Comercio Asia-Pacífico)",
    beneficios: "Mayor comercio intrarregional y crecimiento económico para los países miembros."
  },
  {
    pais1: "India",
    pais2: "Emiratos Árabes Unidos",
    nombre: "TLC India–Emiratos Árabes Unidos (CEPA)",
    beneficios: "Reduce los aranceles y facilita el comercio y la inversión."
  },
  {
  pais1: "Indonesia",
  pais2: "Singapur, Tailandia, Vietnam",
  nombre: "ASEAN Trade in Goods Agreement (ATIGA)",
  beneficios: "Eliminación de aranceles y reducción de barreras al comercio para lograr el libre flujo de bienes en la región."
  },
  {
    pais1: "Indonesia",
    pais2: "Japón",
    nombre: "TLC ASEAN–Japón (AJCEP)",
    beneficios: "Liberalización del comercio de bienes y servicios entre Japón y los países de la ASEAN."
  },
  {
    pais1: "Indonesia",
    pais2: "Corea del Sur",
    nombre: "TLC ASEAN–Corea del Sur (AKFTA)",
    beneficios: "Elimina los aranceles para el 80-90% de los bienes, impulsando comercio e inversión."
  },
  {
    pais1: "Indonesia",
    pais2: "India",
    nombre: "TLC ASEAN–India (AIFTA)",
    beneficios: "Creación de una zona de libre comercio que impulsa el comercio y la inversión entre India y los diez países de la ASEAN."
  },
  {
    pais1: "Indonesia",
    pais2: "Australia, Nueva Zelanda",
    nombre: "TLC ASEAN–Australia/Nueva Zelanda (AANZFTA)",
    beneficios: "Aumento del comercio bilateral, eliminación de la mayoría de aranceles y facilitación del acceso de productos y servicios al mercado de los países participantes."
  },
  {
    pais1: "Indonesia",
    pais2: "Japón",
    nombre: "TLC Indonesia–Japón (IJEPA)",
    beneficios: "Reduce o elimina barreras comerciales, estimulando el comercio bilateral."
  },
  {
    pais1: "Indonesia",
    pais2: "Corea del Sur",
    nombre: "TLC Indonesia–Corea del Sur (IK-CEPA)",
    beneficios: "Reducción de barreras comerciales y fomento de la inversión y el comercio entre ambos países."
  },
  {
    pais1: "Indonesia",
    pais2: "Islandia, Suiza, Noruega",
    nombre: "TLC Indonesia–EFTA (IECEPA)",
    beneficios: "Acceso privilegiado al mercado europeo."
  },
  {
  pais1: "Israel",
  pais2: "Guatemala",
  nombre: "Tratado de Libre Comercio Israel–Guatemala (2024)",
  beneficios: "Facilita el acceso preferencial a mercados, impulsando exportaciones guatemaltecas como cardamomo, café y textiles, e importaciones de insumos israelíes como fertilizantes y abonos."
  },
  {
    pais1: "Israel",
    pais2: "Panamá",
    nombre: "Tratado de Libre Comercio Israel–Panamá (2020)",
    beneficios: "Elimina aranceles en bienes industriales, pesqueros y agrícolas de ambas partes, ampliando el comercio bilateral y acceso a mercados."
  },
  {
    pais1: "Israel",
    pais2: "Turquía",
    nombre: "Acuerdo de Libre Comercio Israel–Turquía (1997)",
    beneficios: "Establece arancel cero para una amplia gama de productos industriales y agrícolas entre Israel y Turquía."
  },
  {
    pais1: "Israel",
    pais2: "Suiza, Noruega, Islandia",
    nombre: "Acuerdo de Libre Comercio AELC–Israel (1993)",
    beneficios: "Elimina aranceles en casi todos los bienes industriales entre Israel y los estados AELC."
  },
  {
    pais1: "Jamaica",
    pais2: "Costa Rica",
    nombre: "Acuerdo CARICOM-Costa Rica (2004)",
    beneficios: "Establece acceso recíproco preferencial para un amplio listado de productos industriales entre Jamaica (como parte de CARICOM) y Costa Rica."
  },
  {
    pais1: "Jamaica",
    pais2: "Venezuela",
    nombre: "Acuerdo CARICOM-Venezuela (1992)",
    beneficios: "Permite que productos seleccionados originarios de CARICOM entren libres de aranceles en Venezuela, mientras Venezuela goza de trato de Nación Más Favorecida al revés."
  },
  {
    pais1: "Jamaica",
    pais2: "Estados Unidos",
    nombre: "Caribbean Basin Initiative (CBI)",
    beneficios: "Otorga desgravación arancelaria a exportaciones jamaicanas (excepto algunos textiles, petróleo, etc.) hacia EE. UU."
  },
  {
    pais1: "Jamaica",
    pais2: "Canadá",
    nombre: "CARIBCAN (Canadá)",
    beneficios: "Programa que brinda acceso libre arancelario a exportaciones caribeñas (incluida Jamaica) a Canadá."
  },
  {
    pais1: "Japón",
    pais2: "México, Nueva Zelanda, Perú, Singapur, Reino Unido, Vietnam",
    nombre: "CPTPP (TPP-11)",
    beneficios: "Amplia zona de libre comercio: elimina tarifas en la mayoría de bienes; armoniza normas de comercio de servicios e inversión entre los miembros."
  },
  {
    pais1: "Japón",
    pais2: "Australia, Corea del Sur, Nueva Zelanda, Indonesia, Singapur, Tailandia, Vietnam",
    nombre: "Asociación Económica Integral Regional (RCEP)",
    beneficios: "Fija reducciones arancelarias extensas en la región Asia-Pacífico y armoniza normas. Impulsa la liberalización y facilitación del comercio e inversión en Asia Oriental."
  },
  {
    pais1: "Japón",
    pais2: "Estados Unidos",
    nombre: "Acuerdo Japón–Estados Unidos (2019/2020)",
    beneficios: "Elimina gran parte de aranceles estadounidenses para productos agrícolas japoneses y otros bienes."
  },
  {
    pais1: "Japón",
    pais2: "Reino Unido",
    nombre: "TLC Japón–Reino Unido (2020)",
    beneficios: "Suprime aranceles en bienes industriales y agropecuarios, facilitando el comercio bilateral con UK."
  },
  {
    pais1: "Japón",
    pais2: "Suiza",
    nombre: "TLC Japón–Suiza (2009)",
    beneficios: "Reduce aranceles en productos industriales entre Japón y Suiza; promueve cooperación tecnológica."
  },
  {
    pais1: "Japón",
    pais2: "Tailandia",
    nombre: "Japón–Tailandia (2007)",
    beneficios: "Elimina aranceles para productos originarios, ampliando el comercio en la región del Sudeste Asiático y Asia Central."
  },
  {
    pais1: "Kazajistán",
    pais2: "Rusia",
    nombre: "Unión Económica Euroasiática",
    beneficios: "Implica arancel común sobre importaciones de terceros países, libre circulación de mercancías, servicios y capitales."
  },
  {
    pais1: "Kazajistán",
    pais2: "Rusia",
    nombre: "Acuerdo de Libre Comercio de la CEI",
    beneficios: "Facilita comercio intra-comunitario rebajando aranceles entre los países signatarios. Kazajistán participa como parte de este marco multilateral."
  },
  {
    pais1: "Kazajistán",
    pais2: "Vietnam",
    nombre: "EAEU–Vietnam (2016)",
    beneficios: "Elimina tarifas arancelarias en bienes industriales entre los países."
  },
  {
    pais1: "Kazajistán",
    pais2: "Serbia",
    nombre: "EAEU–Serbia (2020)",
    beneficios: "Facilita exportaciones serbias a Kazajistán y viceversa mediante reducción arancelaria en productos industriales."
  },
  {
    pais1: "Kazajistán",
    pais2: "Singapur",
    nombre: "EAEU–Singapur (2020)",
    beneficios: "Crea un tratado de libre comercio abarcando bienes, servicios e inversiones con algunos aranceles eliminados gradualmente."
  },
  {
    pais1: "Kazajistán",
    pais2: "China",
    nombre: "EAEU–China (2019)",
    beneficios: "Acuerdo de cooperación comercial que sienta bases legales para el comercio y la industria entre China y los países de la EAEU."
  },
  {
    pais1: "Líbano",
    pais2: "EAU, Egipto, Marruecos, Argelia, Qatar, Túnez",
    nombre: "Gran Área de Libre Comercio Árabe (GAFTA)",
    beneficios: "Eliminación gradual de aranceles fronterizos en el comercio intraárabe; mayor integración de mercados regionales."
  },
  {
    pais1: "Líbano",
    pais2: "Noruega, Suiza",
    nombre: "Acuerdo de Libre Comercio EFTA–Líbano",
    beneficios: "Arancel cero para la mayoría de las exportaciones industriales libanesas (y alimentos procesados)."
  },
  {
    pais1: "Líbano",
    pais2: "Estados Unidos, Nicaragua",
    nombre: "Programa de Preferencias Generales (GSP) de EE.UU.",
    beneficios: "La mayoría de las exportaciones libanesas ingresan a EE.UU. sin arancel, favoreciendo exportadores locales frente a países sin TLC con EE.UU."
  },
  {
    pais1: "México",
    pais2: "Nueva Zelanda, Perú, Singapur, Reino Unido, Vietnam",
    nombre: "CPTPP (TPP-11)",
    beneficios: "Amplia zona de libre comercio: elimina tarifas en la mayoría de bienes; armoniza normas de comercio de servicios e inversión entre los miembros."
  },
  {
    pais1: "México",
    pais2: "Egipto, Marruecos, Argentina, Bolivia, Brasil, Chile, Colombia, Cuba, Ecuador, Perú, Venezuela, Corea del Norte, Corea del Sur, Filipinas, India, Indonesia, Singapur, Tailandia, Vietnam",
    nombre: "Sistema Global de Preferencias Comerciales (SGPC)",
    beneficios: "Reducción arancelaria preferencial entre los países miembros, facilitando el comercio Sur–Sur."
  },
  {
    pais1: "México",
    pais2: "Perú",
    nombre: "Protocolo Comercial de la Alianza del Pacífico",
    beneficios: "Elimina aranceles en un alto porcentaje de bienes industriales y agropecuarios entre los cuatro países."
  },
  {
    pais1: "México",
    pais2: "Bolivia, Brasil, Chile, Colombia, Ecuador, Panamá, Paraguay, Perú, Uruguay, Venezuela",
    nombre: "Tratado de Montevideo (ALADI, 1980)",
    beneficios: "Fomenta integración regional, reduce gradualmente trabas al comercio intrarregional."
  },
  {
    pais1: "México",
    pais2: "Noruega, Suiza",
    nombre: "TLC México–AELC",
    beneficios: "Acceso libre de aranceles para exportaciones mexicanas de bienes industriales y alimentos hacia esos países europeos."
  },
  {
    pais1: "México",
    pais2: "Japón",
    nombre: "TLC México–Japón",
    beneficios: "Eliminación de aranceles en numerosos bienes industriales (incluyendo automotrices y electrónicos)."
  },
  {
    pais1: "México",
    pais2: "Israel",
    nombre: "TLC México–Israel",
    beneficios: "Elimina aranceles en la mayoría de bienes (especial énfasis en energía), generando un fuerte incremento de exportaciones mexicanas hacia Israel."
  },
  {
    pais1: "México",
    pais2: "Uruguay",
    nombre: "TLC México–Uruguay",
    beneficios: "Arancel cero para la mayoría de bienes industriales, promoviendo comercio y cooperación económica entre ambos."
  },
  {
    pais1: "Nicaragua",
    pais2: "El Salvador, Costa Rica, República Dominicana",
    nombre: "CAFTA-DR (2006) – Tratado EE. UU.–Centroamérica–R. Dom.",
    beneficios: "Acceso preferencial regional: elimina aranceles en el 80–100% de productos con origen centroamericano o dominicano."
  },
  {
    pais1: "Nicaragua",
    pais2: "China",
    nombre: "TLC Nicaragua–China (2023/24)",
    beneficios: "Cubre alrededor del 71% del comercio actual de Nicaragua con preferencias arancelarias (0% arancel en la entrada en vigor a inicios de 2024)."
  },
  {
    pais1: "Nicaragua",
    pais2: "Corea del Sur",
    nombre: "TLC CA–Corea del Sur",
    beneficios: "Redujo aranceles en productos industriales y agrícolas, aumentando las exportaciones nicas a Corea del Sur."
  },
  {
    pais1: "Nicaragua",
    pais2: "Venezuela",
    nombre: "Acuerdos Comerciales con países del ALBA",
    beneficios: "Arancel cero o reducido para diversos productos entre países bolivarianos, fortaleciendo la cooperación económica regional."
  },
  {
    pais1: "Nueva Zelanda",
    pais2: "Singapur, Tailandia, Vietnam, Australia",
    nombre: "ASEAN–Australia–Nueva Zelanda (AANZFTA)",
    beneficios: "Amplia reducción/eliminación de aranceles en la región Asia-Pacífico; acceso preferencial de bienes y servicios entre Australia, NZ y países del ASEAN."
  },
  {
    pais1: "Nueva Zelanda",
    pais2: "Perú, Singapur, Reino Unido, Vietnam",
    nombre: "CPTPP (TPP-11)",
    beneficios: "Amplia zona de libre comercio: elimina tarifas en la mayoría de bienes; armoniza normas de comercio de servicios e inversión entre los miembros."
  },
  {
    pais1: "Nueva Zelanda",
    pais2: "Singapur",
    nombre: "CEP Nueva Zelanda–Singapur",
    beneficios: "Libre comercio bilateral con arancel cero en casi todos los bienes, fortaleciendo las exportaciones agrícolas y tecnológicas neozelandesas."
  },
  {
    pais1: "Nueva Zelanda",
    pais2: "Tailandia",
    nombre: "CEP Nueva Zelanda–Tailandia",
    beneficios: "Eliminación arancelaria progresiva en bienes agrícolas e industriales neozelandeses, ampliando mercado en el Sudeste Asiático."
  },
  {
    pais1: "Nueva Zelanda",
    pais2: "Corea del Sur",
    nombre: "Acuerdo NZ–Corea del Sur (FTA)",
    beneficios: "Reducción arancelaria amplia (metalurgia, alimentos) mejorando las exportaciones neozelandesas a Corea del Sur."
  },
  {
    pais1: "Nueva Zelanda",
    pais2: "Reino Unido",
    nombre: "Acuerdo NZ–Reino Unido (FTA)",
    beneficios: "Elimina o reduce aranceles para gran parte de los intercambios NZ-UK, impulsando el comercio bilateral post-Brexit."
  },
  {
    pais1: "Nueva Zelanda",
    pais2: "Singapur, Chile",
    nombre: "P4 (Acuerdo Económico Estratégico Transpacífico)",
    beneficios: "Primer acuerdo transpacífico (2006) que eliminó aranceles entre ellos, sentando las bases para integraciones mayores como el TPP."
  },
  {
    pais1: "Nueva Zelanda",
    pais2: "Australia, Corea del Sur, Indonesia, Singapur, Tailandia, Vietnam",
    nombre: "Asociación Económica Integral Regional (RCEP)",
    beneficios: "Fija reducciones arancelarias extensas en la región Asia-Pacífico y armoniza normas. Impulsa la liberalización y facilitación del comercio e inversión en Asia Oriental."
  },
  {
    pais1: "Panamá",
    pais2: "Bolivia, Brasil, Chile, Colombia, Ecuador, Paraguay, Perú, Uruguay, Venezuela",
    nombre: "Tratado de Montevideo (ALADI, 1980)",
    beneficios: "Fomenta integración regional, reduce gradualmente trabas al comercio intrarregional."
  },
  {
    pais1: "Panamá",
    pais2: "Singapur",
    nombre: "TLC Panamá–Singapur",
    beneficios: "Elimina aranceles sobre casi todos los bienes comerciados y facilita inversiones y cooperación económica."
  },
  {
    pais1: "Panamá",
    pais2: "México",
    nombre: "TLC Panamá–México",
    beneficios: "Reduce aranceles arancelarios, incrementa exportaciones panameñas a México y amplía la integración comercial."
  },
  {
    pais1: "Panamá",
    pais2: "Chile",
    nombre: "TLC Panamá–Chile",
    beneficios: "Amplía el acceso preferencial de Panamá al mercado chileno (y viceversa), promoviendo la exportación de productos agrícolas e industriales panameños."
  },
  {
    pais1: "Panamá",
    pais2: "Corea del Sur",
    nombre: "TLC Centroamérica–República de Corea",
    beneficios: "Acceso preferencial a productos centroamericanos en Corea del Sur, beneficiando exportaciones panameñas clave."
  },
  {
    pais1: "Panamá",
    pais2: "Noruega, Suiza",
    nombre: "Acuerdo de Asociación Panamá-Mercados EFTA",
    beneficios: "Fortalecer las relaciones comerciales entre Panamá (junto con Costa Rica) y los países de la EFTA."
  },
  {
    pais1: "Paraguay",
    pais2: "Bolivia, Brasil, Chile, Colombia, Ecuador, Perú, Uruguay, Venezuela",
    nombre: "Tratado de Montevideo (ALADI, 1980)",
    beneficios: "Fomenta integración regional, reduce gradualmente trabas al comercio intrarregional."
  },
  {
    pais1: "Paraguay",
    pais2: "Brasil, Uruguay",
    nombre: "Mercado Común del Sur (Mercosur)",
    beneficios: "Unión aduanera con tarifa externa común; zona de libre comercio interna: eliminación de la mayoría de aranceles entre miembros."
  },
  {
    pais1: "Paraguay",
    pais2: "México",
    nombre: "ACE N°54 Mercosur–México (2002)",
    beneficios: "Establece un área de libre comercio entre Mercosur y México, eliminando aranceles sobre la mayoría de los bienes comerciados recíprocamente."
  },
  {
    pais1: "Paraguay",
    pais2: "Sudáfrica",
    nombre: "Mercosur – Unión Aduanera de África Austral (SACU)",
    beneficios: "Acuerdo preferencial con reducción de aranceles en el comercio bilateral entre MERCOSUR y SACU."
  },
  {
    pais1: "Paraguay",
    pais2: "Israel",
    nombre: "Mercosur – Israel",
    beneficios: "Creación de una zona de libre comercio: eliminación escalonada de aranceles en varias categorías de productos."
  },
  {
    pais1: "Paraguay",
    pais2: "Egipto",
    nombre: "Mercosur – Egipto",
    beneficios: "Eliminación gradual de aranceles aduaneros según un cronograma por categorías (A a E) tras su entrada en vigor."
  },
  {
    pais1: "Paraguay",
    pais2: "India",
    nombre: "Mercosur – India",
    beneficios: "Concesiones arancelarias en aproximadamente 450 líneas de productos, con reducciones entre 10% y 100% en aranceles."
  },
  {
    pais1: "Paraguay",
    pais2: "Argentina",
    nombre: "ACE N° 13/90 Paraguay–Argentina (sector automotor)",
    beneficios: "Permite acceso preferencial al mercado argentino para vehículos y autopartes paraguayas, integrando cadenas productivas regionales."
  },
  {
    pais1: "Paraguay",
    pais2: "Bolivia",
    nombre: "ACE N° 36/97 MERCOSUR–Bolivia",
    beneficios: "Elimina aranceles sobre múltiples bienes, facilitando exportaciones paraguayas al mercado boliviano."
  },
  {
    pais1: "Paraguay",
    pais2: "Colombia, Ecuador, Venezuela",
    nombre: "ACE N° 59/05 MERCOSUR–CAN",
    beneficios: "Acceso preferencial a los mercados andinos, especialmente para exportaciones agroindustriales y textiles."
  },
  {
    pais1: "Paraguay",
    pais2: "Brasil",
    nombre: "ACE N° 74/20 Paraguay–Brasil (sector automotor)",
    beneficios: "Da acceso preferencial a autopartes paraguayas en Brasil, refuerza la planta productiva paraguaya e incentiva inversiones binacionales en el sector."
  },
  {
    pais1: "Perú",
    pais2: "Ecuador",
    nombre: "Zona de Libre Comercio Andina (Comunidad Andina)",
    beneficios: "Eliminación total de aranceles internos y barreras no arancelarias en el comercio intracomunitario."
  },
  {
    pais1: "Perú",
    pais2: "Bolivia, Brasil, Chile, Colombia, Ecuador, Uruguay, Venezuela",
    nombre: "Tratado de Montevideo (ALADI, 1980)",
    beneficios: "Fomenta integración regional, reduce gradualmente trabas al comercio intrarregional."
  },
  {
    pais1: "Perú",
    pais2: "Singapur, Reino Unido, Vietnam",
    nombre: "CPTPP (TPP-11)",
    beneficios: "Amplia zona de libre comercio: elimina tarifas en la mayoría de bienes; armoniza normas de comercio de servicios e inversión entre los miembros."
  },
  {
    pais1: "Perú",
    pais2: "Egipto, Marruecos, Argentina, Bolivia, Brasil, Chile, Colombia, Cuba, Ecuador, Venezuela, Corea del Norte, Corea del Sur, Filipinas, India, Indonesia, Singapur, Tailandia, Vietnam",
    nombre: "Sistema Global de Preferencias Comerciales (SGPC)",
    beneficios: "Reducción arancelaria preferencial entre los países miembros, facilitando el comercio Sur–Sur."
  },
  {
    pais1: "Perú",
    pais2: "China",
    nombre: "TLC Perú–China",
    beneficios: "Abre el mercado chino (un 90% de aranceles eliminados o reducidos) para productos peruanos como minerales y agropecuarios, y viceversa."
  },
  {
    pais1: "Perú",
    pais2: "Corea del Sur",
    nombre: "TLC Perú–Corea del Sur",
    beneficios: "Elimina aranceles en la mayoría de productos, ampliando las exportaciones peruanas de minería, agroindustria y manufacturas."
  },
  {
    pais1: "Perú",
    pais2: "Japón",
    nombre: "TLC Perú–Japón",
    beneficios: "Ofrece liberalización arancelaria preferencial a más de 80% del comercio bilateral."
  },
  {
    pais1: "Perú",
    pais2: "Singapur",
    nombre: "TLC Perú–Singapur",
    beneficios: "Elimina casi todos los aranceles entre ambas partes, favoreciendo especialmente las exportaciones de productos agroindustriales y pesqueros."
  },
  {
    pais1: "Perú",
    pais2: "Noruega, Suiza",
    nombre: "TLC Perú–EFTA",
    beneficios: "Elimina aranceles sobre ~88% del comercio bilateral, abriendo nuevos mercados europeos."
  },
  {
    pais1: "Catar",
    pais2: "EAU, Egipto, Marruecos, Argelia, Túnez",
    nombre: "Gran Área de Libre Comercio Árabe (GAFTA)",
    beneficios: "Eliminación gradual de aranceles fronterizos en el comercio intraárabe; mayor integración de mercados regionales."
  },
  {
    pais1: "Catar",
    pais2: "Singapur",
    nombre: "Acuerdos CCG–Singapur",
    beneficios: "Elimina la mayoría (∼99%) de aranceles sobre exportaciones mutuas."
  },
  {
    pais1: "Catar",
    pais2: "Noruega, Suiza",
    nombre: "Acuerdos CCG–EFTA",
    beneficios: "Catar, como miembro del CCG, obtiene acceso preferencial al mercado EFTA (eliminación de aranceles en la mayor parte del comercio)."
  },
  {
    pais1: "Reino Unido",
    pais2: "Singapur, Vietnam",
    nombre: "CPTPP (TPP-11)",
    beneficios: "Amplia zona de libre comercio: elimina tarifas en la mayoría de bienes; armoniza normas de comercio de servicios e inversión entre los miembros."
  },
  {
    pais1: "Reino Unido",
    pais2: "Corea del Sur",
    nombre: "TLC Reino Unido–Corea del Sur",
    beneficios: "Elimina tarifas en la práctica totalidad del comercio industrial y agropecuario, ampliando el acceso a exportaciones británicas en Corea del Sur."
  },
  {
    pais1: "Reino Unido",
    pais2: "Singapur",
    nombre: "TLC Reino Unido–Singapur",
    beneficios: "Establece comercio libre de aranceles para la casi totalidad de productos entre ambos, y fuertes capítulos de inversiones y servicios."
  },
  {
    pais1: "Reino Unido",
    pais2: "Noruega, Suiza",
    nombre: "Acuerdo Reino Unido–EFTA",
    beneficios: "Facilita el comercio libre de aranceles entre el Reino Unido y estos países (parte del Tratado de Aseguramiento Económico)."
  },
  {
    pais1: "Rusia",
    pais2: "Vietnam",
    nombre: "TLC UEEA–Vietnam",
    beneficios: "Duplica el comercio bilateral y otorga incentivos arancelarios que favorecen las exportaciones vietnamitas a los mercados de la unión."
  },
  {
    pais1: "Singapur",
    pais2: "Tailandia, Vietnam",
    nombre: "ASEAN Trade in Goods Agreement (ATIGA)",
    beneficios: "Eliminación de aranceles y la reducción de barreras al comercio para lograr el libre flujo de bienes en la región."
  },
  {
    pais1: "Singapur",
    pais2: "Tailandia, Vietnam, Australia",
    nombre: "ASEAN–Australia–Nueva Zelanda (AANZFTA)",
    beneficios: "Amplia reducción/eliminación de aranceles en la región Asia-Pacífico; acceso preferencial de bienes y servicios entre Australia, NZ y países del ASEAN."
  },
  {
    pais1: "Singapur",
    pais2: "Vietnam",
    nombre: "CPTPP (TPP-11)",
    beneficios: "Amplia zona de libre comercio: elimina tarifas en la mayoría de bienes; armoniza normas de comercio de servicios e inversión entre los miembros."
  },
  {
    pais1: "Singapur",
    pais2: "Egipto, Marruecos, Argentina, Bolivia, Brasil, Chile, Colombia, Cuba, Ecuador, Venezuela, Corea del Norte, Corea del Sur, Filipinas, India, Indonesia, Tailandia, Vietnam",
    nombre: "Sistema Global de Preferencias Comerciales (SGPC)",
    beneficios: "Reducción arancelaria preferencial entre los países miembros, facilitando el comercio Sur–Sur."
  },
  {
    pais1: "Singapur",
    pais2: "Nueva Zelanda, Corea del Sur",
    nombre: "Acuerdo de Asociación de Economía Digital (DEPA)",
    beneficios: "Crea un marco para el comercio electrónico y la economía digital. Facilita el libre flujo de datos y prohíbe la discriminación de productos digitales."
  },
  {
    pais1: "Singapur",
    pais2: "Australia, Corea del Sur, Indonesia, Tailandia, Vietnam",
    nombre: "Asociación Económica Integral Regional (RCEP)",
    beneficios: "Fija reducciones arancelarias extensas en la región Asia-Pacífico y armoniza normas. Impulsa la liberalización y facilitación del comercio e inversión en Asia Oriental."
  },
  {
    pais1: "Singapur",
    pais2: "China",
    nombre: "Tratado de Libre Comercio China–ASEAN",
    beneficios: "Elimina progresivamente los aranceles en un alto porcentaje de productos entre China y cada miembro de la ASEAN."
  },
  {
    pais1: "Singapur",
    pais2: "India",
    nombre: "TLC ASEAN–India (AIFTA)",
    beneficios: "Establecimiento de una zona de libre comercio que impulsa el comercio y la inversión."
  },
  {
    pais1: "Singapur",
    pais2: "Corea del Sur",
    nombre: "TLC Corea del Sur–Singapur (KSFTA)",
    beneficios: "Elimina el 91.6% de aranceles para exportaciones singapurenses hacia Corea del Sur."
  },
  {
    pais1: "Sudáfrica",
    pais2: "Costa de Marfil, Marruecos, Egipto",
    nombre: "Acuerdo de Libre Comercio Africano (AfCFTA)",
    beneficios: "Crea un área de libre comercio continental africano. Permite a Argelia diversificar exportaciones (agro, industria, farmacia) y fortalecer el comercio intrafricano."
  },
  {
    pais1: "Sudáfrica",
    pais2: "Noruega, Suiza",
    nombre: "TLC SACU–EFTA",
    beneficios: "Elimina aranceles industriales (manufacturas, productos energéticos) para facilitar exportaciones e inversiones tecnológicas entre ambas regiones."
  },
  {
    pais1: "Sudáfrica",
    pais2: "Argentina, Brasil, Paraguay, Uruguay",
    nombre: "Acuerdo Preferencial SACU–MERCOSUR",
    beneficios: "Otorga preferencias arancelarias reducidas en sectores seleccionados (manufacturas, alimentos) de ambos bloques, incrementando el intercambio comercial bilateral."
  },
  {
    pais1: "Suiza",
    pais2: "Noruega",
    nombre: "Asociación Europea de Libre Comercio (AELC/EFTA)",
    beneficios: "Elimina barreras comerciales internas y armoniza normas entre los miembros."
  },
  {
    pais1: "Suiza",
    pais2: "Tailandia",
    nombre: "TLC EFTA–Tailandia",
    beneficios: "Facilita exportaciones industriales y agroalimentarias gracias a aranceles arancelarios reducidos."
  },
  {
    pais1: "Corea del Sur",
    pais2: "Suiza, Noruega, Islandia",
    nombre: "TLC EFTA–Corea del Sur",
    beneficios: "Elimina aranceles en sectores clave (maquinaria, químicos, metales)."
  },
  {
    pais1: "Corea del Sur",
    pais2: "Australia, Indonesia, Tailandia, Vietnam",
    nombre: "Asociación Económica Integral Regional (RCEP)",
    beneficios: "Fija reducciones arancelarias extensas en la región Asia-Pacífico y armoniza normas. Impulsa la liberalización y facilitación del comercio e inversión en Asia Oriental."
  },
  {
    pais1: "Tailandia",
    pais2: "Australia, Indonesia, Vietnam",
    nombre: "Asociación Económica Integral Regional (RCEP)",
    beneficios: "Fija reducciones arancelarias extensas en la región Asia-Pacífico y armoniza normas. Impulsa la liberalización y facilitación del comercio e inversión en Asia Oriental."
  },
  {
    pais1: "Turquía",
    pais2: "Noruega, Suiza",
    nombre: "Acuerdo de Libre Comercio Turquía–Estados de la AELC (EFTA)",
    beneficios: "Elimina aranceles sobre la mayoría de productos industriales (incluido pescado y mariscos), facilitando el comercio bilateral."
  },
  {
    pais1: "Turquía",
    pais2: "Marruecos",
    nombre: "Acuerdo de Libre Comercio Turquía–Marruecos",
    beneficios: "Facilita el acceso preferencial de productos industriales turcos al mercado marroquí."
  },
  {
    pais1: "Turquía",
    pais2: "Egipto",
    nombre: "Acuerdo de Libre Comercio Turquía–Egipto",
    beneficios: "Abolió los aranceles aduaneros sobre bienes industriales, de modo que las exportaciones industriales de ambos países ingresan sin tarifas al otro."
  },
  {
    pais1: "Turquía",
    pais2: "Corea del Sur",
    nombre: "Acuerdo de Libre Comercio Turquía–Corea del Sur",
    beneficios: "Elimina aranceles en la mayor parte de los bienes industriales (en 7 años se reducen los aranceles restantes), abriendo amplias oportunidades industriales."
  },
  {
    pais1: "Turquía",
    pais2: "Singapur",
    nombre: "Acuerdo de Libre Comercio Turquía–Singapur",
    beneficios: "Turquía elimina aranceles en el 95 % de sus partidas (80 % al inicio) para productos singapurenses, mientras Singapur suprime aranceles a todas las importaciones turcas."
  },
  {
    pais1: "Turquía",
    pais2: "Catar",
    nombre: "Acuerdo de Asociación Comercial Turquía–Qatar",
    beneficios: "Elimina aranceles recíprocos en gran parte de los productos comercializados, profundizando el comercio."
  },
  {
    pais1: "Uruguay",
    pais2: "Bolivia, Brasil, Chile, Colombia, Ecuador, Venezuela",
    nombre: "Tratado de Montevideo (ALADI, 1980)",
    beneficios: "Fomenta integración regional, reduce gradualmente trabas al comercio intrarregional."
  },
  {
    pais1: "Uruguay",
    pais2: "Noruega, Suiza",
    nombre: "Acuerdo de Libre Comercio Mercosur–EFTA",
    beneficios: "Reduciría aranceles sobre bienes agroindustriales, y EFTA concedería cuotas exclusivas para carne, arroz, vino y aceites a Mercosur."
  },
  {
    pais1: "Venezuela",
    pais2: "Bolivia, Brasil, Chile, Colombia, Ecuador",
    nombre: "Tratado de Montevideo (ALADI, 1980)",
    beneficios: "Fomenta integración regional, reduce gradualmente trabas al comercio intrarregional."
  },
  {
    pais1: "Venezuela",
    pais2: "Ecuador",
    nombre: "Acuerdo Marco ALBA Ecuador–Venezuela",
    beneficios: "Profundiza los lazos comerciales bilateralmente, reduciendo barreras a intercambios entre ambos."
  },
  {
    pais1: "Vietnam",
    pais2: "Australia, Indonesia",
    nombre: "Asociación Económica Integral Regional (RCEP)",
    beneficios: "Fija reducciones arancelarias extensas en la región Asia-Pacífico y armoniza normas. Impulsa la liberalización y facilitación del comercio e inversión en Asia Oriental."
  },
  {
    pais1: "Vietnam",
    pais2: "Emiratos Árabes Unidos",
    nombre: "Acuerdo Comercial Vietnam–Emiratos Árabes Unidos",
    beneficios: "Otorga acceso preferencial mutuo, liberando aranceles en una amplia gama de productos industriales y comerciales."
  },
  {
    pais1: "Vietnam",
    pais2: "Reino Unido",
    nombre: "Acuerdo de Libre Comercio Vietnam–Reino Unido",
    beneficios: "Mantiene las preferencias del EVFTA con el Reino Unido tras el Brexit."
  },
  {
    pais1: "Vietnam",
    pais2: "Kazajistán",
    nombre: "Acuerdo de Libre Comercio Vietnam–Unión Económica Euroasiática",
    beneficios: "Elimina progresivamente los aranceles mutuos en un amplio conjunto de bienes (industrial y agrícola)."
  },
  {
    pais1: "Marruecos",
    pais2: "Suiza, Noruega",
    nombre: "Acuerdo de Libre Comercio EFTA‑Marruecos",
    beneficios: "Elimina la mayoría de aranceles para productos industriales de los estados EFTA que ingresan a Marruecos."
  },
  {
    pais1: "Marruecos",
    pais2: "Costa de Marfil, Egipto",
    nombre: "Acuerdo de Libre Comercio Africano (AfCFTA)",
    beneficios: "Crea un área de libre comercio continental africano. Permite a Argelia diversificar exportaciones (agro, industria, farmacia) y fortalecer el comercio intrafricano."
  },
];

function buscarAcuerdo(paisOrigen, paisDestino) {
  return acuerdosComerciales.filter(acuerdo => {
    const paises1 = acuerdo.pais1.split(",").map(p => p.trim());
    const paises2 = acuerdo.pais2.split(",").map(p => p.trim());

    const origenEnP1 = paises1.includes(paisOrigen);
    const destinoEnP2 = paises2.includes(paisDestino);

    const origenEnP2 = paises2.includes(paisOrigen);
    const destinoEnP1 = paises1.includes(paisDestino);

    return (origenEnP1 && destinoEnP2) || (origenEnP2 && destinoEnP1);
  });
}