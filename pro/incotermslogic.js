// Plantillas países MFN y preferenciales
// UE - Aranceles MFN estándar (sin acuerdos preferenciales)
const arancelesBaseUE_MFN = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "10–12 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "10–12 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "30–50 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "30–50 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "30–50 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "0–5 %" }
];
// EE.UU. - Aranceles base MFN estándar (sin acuerdos preferenciales)
const arancelesBaseUSA_MFN = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "2–10 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "10–50 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "0–5 %" }
];
// EE.UU. - Aranceles preferenciales (TLC y acuerdos en vigor)
const arancelesBaseUSA_TLC = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "0–2 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "0 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "0 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "0 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "0 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "0 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "0 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "0 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "0 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "0 %" }
];

// Arabia Saudita
const arancelesBaseArabiaSaudita = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "50 %" }, // tarifa estándar para alcohol
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "0–10 %" }
];
// Argelia
const arancelesBaseArgelia = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "15–30 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "15–30 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "20–50 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "25–50 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "30–50 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "50–100 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "5–15 %" }
];
// Bolivia
const arancelesBaseBolivia = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 % (preferencial/exento posible)" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "15–25 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "15–25 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "15–30 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–35 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "25–40 % + impuestos internos" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–8 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "8–15 %" }
];
// Costa de Marfil
const arancelesBaseCostaDeMarfil = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 % (preferencial/exento posible)" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "15–25 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "15–25 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "15–30 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–35 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "25–40 % + impuestos internos" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–8 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "8–15 %" }
];
// Bosnia
const arancelesBaseBosnia = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "20–50 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "0–10 %" }
];
// Corea del Sur
const arancelesBaseCoreaDelSur = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "8–40 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–40 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "15–50 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–50 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "0–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "20–50 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–8 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "5–15 %" }
];
// Costa Rica
const arancelesBaseCostaRica = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "20–35 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–35 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "50–100 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "0–10 %" }
];
// Cuba
const arancelesBaseCuba = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "20–40 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "20–35 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "20–35 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "15–40 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "20–40 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–40 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "15–35 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "50–100 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "10–25 %" }
];
// Republica Dominicana
const arancelesBaseRepDominicana = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "15–25 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "15–25 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "15–30 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–35 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "20–50 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–8 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "5–15 %" }
];
// Egipto
const arancelesBaseEgipto = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "15–40 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "15–30 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "15–30 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–35 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "15–40 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–40 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "50–100 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "5–15 %" }
];
// EAU
const arancelesBaseEAU = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "50–100 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "0–10 %" }
];
// El Salvador
const arancelesBaseElSalvador = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "15–25 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "15–25 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "15–30 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–35 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "20–50 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–8 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "5–15 %" }
];
// Guatemala
const arancelesBaseGuatemala = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "15–25 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "15–25 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "15–30 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–35 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "20–50 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–8 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "5–15 %" }
];
// Honduras
const arancelesBaseHonduras = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "15–25 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "15–25 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "15–30 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–35 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "20–50 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–8 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "5–15 %" }
];
// Indonesia
const arancelesBaseIndonesia = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "10–40 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "20–40 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–40 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "30–150 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "10–30 %" }
];
// India
const arancelesBaseIndia = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "20–60 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "20–40 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "20–40 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "20–40 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "20–50 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "25–50 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "20–40 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "40–150 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "10–30 %" }
];
// Israel
const arancelesBaseIsrael = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "10–50 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "15–35 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–35 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "20–50 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–8 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "5–15 %" }
];
// Japón
const arancelesBaseJapon = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "5–50 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "5–50 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "10–50 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "15–50 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "5–25 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "20–50 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "5–15 %" }
];
// Kazajistán
const arancelesBaseKazajistan = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "5–10 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "20–40 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–40 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "30–50 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "5–15 %" }
];
// Filipinas
const arancelesBaseFilipinas = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "5–30 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "1–10 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "3–10 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "1–7 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "3–10 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "3–10 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "15–40 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "3–10 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "20–50 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–3 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "3–10 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "3–10 %" }
];
// Jamaica
const arancelesBaseJamaica = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "10–40 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "0–20 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "15–30 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "5–40 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "20–40 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–40 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "40–100 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "5–20 %" }
];
// Líbano
const arancelesBaseLibano = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "5–35 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "0–15 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "5–25 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "20–40 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "15–40 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "5–25 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "30–80 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "5–15 %" }
];
// Nicaragua
const arancelesBaseNicaragua = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "0–15 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "15–40 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–40 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "40–100 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "5–15 %" }
];
// Nueva Zelanda
const arancelesBaseNuevaZelanda = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "5–10 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "5–10 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "0–5 %" }
];
// Panamá
const arancelesBasePanama = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "15–40 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–40 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "40–100 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "5–15 %" }
];
// Catar
const arancelesBaseQatar = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "5 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "5 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "5 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "5 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "5 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "5 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "5 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "5 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "5 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "5 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "5 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "5 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "5 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "5 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "5 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "5 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "100 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "5 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "5 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "5 %" }
];
// Rusia
const arancelesBaseRusia = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "5–10 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "15–40 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "15–40 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "20–50 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "5–10 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "10–15 %" }
];
// Singapur
const arancelesBaseSingapur = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "0–20 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "0 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "0 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "0 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "0 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "0 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "0 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "0 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "0 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "0 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "0 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "0 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "0 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "0 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "0 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "0 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "20–100 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "0 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "0 %" }
];
// Sudáfrica
const arancelesBaseSudafrica = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "20–40 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "5–10 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–35 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "20–40 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–40 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "30–80 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "5–10 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "5–15 %" }
];
// Tailandia
const arancelesBaseTailandia = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–40 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "20–50 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–50 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "40–100 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "5–15 %" }
];
// Turquía
const arancelesBaseTurquia = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "10–40 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–40 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "20–50 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–50 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "40–100 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "5–15 %" }
];
// Venezuela
const arancelesBaseVenezuela = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "20–50 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "15–35 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "15–35 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "20–50 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "30–60 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "30–60 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "15–40 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "50–150 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "5–15 %" }
];
// Vietnam
const arancelesBaseVietnam = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "10–40 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–35 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "20–50 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–50 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "40–100 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "5–15 %" }
];
// Marruecos
const arancelesBaseMarruecos = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–35 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "20–50 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–50 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "5–20 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "40–100 %" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "5–15 %" }
];
// Plantilla base de aranceles de Mercosur
const arancelesBaseMercosur = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "18–28 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "8–14 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "8–14 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 % (preferencial/exento)" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "15–25 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "15–25 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "10–18 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "15–30 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–30 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "20–35 % + impuestos internos" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–8 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "8–15 %" }
];

// Plantilla base de aranceles de China 
const arancelesBaseChina = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "5–10 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "5–10 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "5–10 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 % (preferencial/exento)" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "15–25 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "15–25 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "20–35 % + impuestos internos" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–8 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "8–15 %" }
];

// Plantilla base de aranceles del Reino Unido
const arancelesBaseReinoUnido = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "3–10 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "5–10 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "4–10 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 % (preferencial/exento)" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "8–18 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "15–30 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–35 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "20–40 % + impuestos especiales" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–8 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "5–12 %" }
];

const arancelesBaseMexico = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "5–10 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 % (preferencial/exento posible)" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "15–25 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "15–30 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "15–30 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–40 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "25–45 % + IEPS (impuesto especial interno)" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–8 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "5–15 %" }
];

const arancelesBaseAustralia = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "5–25 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "5–30 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "10–40 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "0–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "0–15 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "0–20 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "0–15 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem + specific", valor: "0–45 % + impuestos especiales" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "0–10 %" }
];

const arancelesBaseCanada = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "6–20 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–8 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "5–10 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "0–8 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "0–8 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 % (preferencial/exento posible)" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "10–18 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–10 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "15–25 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–35 % (altamente protegidos)" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "5–10 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "20–35 % + impuestos especiales" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "5–10 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "5–10 %" }
];

const arancelesBaseChileGrupo1 = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "5–10 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "5–10 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 % (preferencial/exento posible)" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "15–30 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–35 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "25–40 % + impuestos internos" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–8 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "5–12 %" }
];

const arancelesBaseChileGrupo2 = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "15–30 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "10–18 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–8 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "15–25 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "15–30 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "15–25 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "20–35 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "25–40 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "10–18 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "12–20 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "15–25 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "10–18 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "30–45 % + impuestos internos" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–8 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "10–18 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "8–15 %" }
];

const arancelesBasePeru = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "5–10 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 % (preferencial/exento parcial)" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "12–25 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "15–35 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–35 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "12–25 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "5–12 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "25–45 % + impuestos internos" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–8 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "8–15 %" }
];

const arancelesBaseColombia = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "10–35 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5 % (preferencial/exento posible)" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "15–40 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "15–40 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–25 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "15–35 %" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–45 %" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "15–25 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "10–20 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "25–45 % + impuesto al consumo" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–8 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "8–15 %" }
];

const arancelesBaseEFTA = [
  { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "0–10 %" },
  { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "0–8 %" },
  { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–8 %" },
  { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "0–8 %" },
  { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "0–6 %" },
  { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "0–6 %" },
  { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0 %" },
  { producto: "Textiles y confección", tipo: "ad valorem", valor: "6–12 %" },
  { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "8–15 %" },
  { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "4–10 %" },
  { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "0–8 %" },
  { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "10–40 %" },
  { producto: "Carne y productos animales", tipo: "ad valorem", valor: "25–100 % (según tipo)" },
  { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "40–200 % (muy protegido)" },
  { producto: "Pescado y marisco", tipo: "ad valorem", valor: "0–15 %" },
  { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Alimentos procesados", tipo: "ad valorem", valor: "10–30 %" },
  { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "5–15 %" },
  { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "20–60 % + impuestos internos" },
  { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5 %" },
  { producto: "Materiales de construcción", tipo: "ad valorem", valor: "0–8 %" },
  { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "0–10 %" }
];

// Aranceles típicos entre países o bloques
const arancelesComunes = [
  {
    pais1: "Estados Unidos",
    pais2: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia Europea",
    arancelesPais1ImportandoPais2: [
      { producto: "Vehículos y transporte", tipo: "Ad valorem", valor: "0–25%" },
      { producto: "Maquinaria y equipo industrial", tipo: "Ad valorem", valor: "0–5%" },
      { producto: "Electrónica e informática", tipo: "Ad valorem", valor: "0–4%" },
      { producto: "Electrodomésticos y electrónica de consumo", tipo: "Ad valorem", valor: "0–10%" },
      { producto: "Metales y siderurgia", tipo: "Ad valorem", valor: "0–5%" },
      { producto: "Químicos y petroquímicos", tipo: "Ad valorem", valor: "0–5%" },
      { producto: "Farmacéuticos y productos médicos", tipo: "Ad valorem", valor: "0–2.5%" },
      { producto: "Textiles y confección", tipo: "Ad valorem", valor: "14–32%" },
      { producto: "Calzado y cuero", tipo: "Ad valorem", valor: "20–37%" },
      { producto: "Muebles y artículos del hogar", tipo: "Ad valorem", valor: "0–5%" },
      { producto: "Cosméticos y limpieza", tipo: "Ad valorem", valor: "0–6%" },
      { producto: "Productos agrícolas primarios", tipo: "Ad valorem", valor: "0–6%" },
      { producto: "Carne y productos animales", tipo: "Ad valorem", valor: "0–9%" },
      { producto: "Lácteos", tipo: "Ad valorem", valor: "0–15%" },
      { producto: "Pescado y marisco", tipo: "Ad valorem", valor: "0–6%" },
      { producto: "Aceites y grasas vegetales", tipo: "Ad valorem", valor: "0–9%" },
      { producto: "Alimentos procesados", tipo: "Ad valorem", valor: "0–8%" },
      { producto: "Bebidas no alcohólicas", tipo: "Ad valorem", valor: "0–6%" },
      { producto: "Bebidas alcohólicas", tipo: "Ad valorem", valor: "0–6%" },
      { producto: "Minerales y productos mineros", tipo: "Ad valorem", valor: "0–5%" },
      { producto: "Energía y combustibles", tipo: "Ad valorem", valor: "0%" },
      { producto: "Materiales de construcción", tipo: "Ad valorem", valor: "0–10%" },
      { producto: "Madera y forestales", tipo: "Ad valorem", valor: "0–7%" }
    ],
    arancelesPais2ImportandoPais1: [
      { producto: "Vehículos y transporte", tipo: "Ad valorem", valor: "0–10%" },
      { producto: "Maquinaria y equipo industrial", tipo: "Ad valorem", valor: "0–7%" },
      { producto: "Electrónica e informática", tipo: "Ad valorem", valor: "0–10%" },
      { producto: "Electrodomésticos y electrónica de consumo", tipo: "Ad valorem", valor: "0–10%" },
      { producto: "Metales y siderurgia", tipo: "Ad valorem", valor: "0–17%" },
      { producto: "Químicos y petroquímicos", tipo: "Ad valorem", valor: "0–78%" },
      { producto: "Farmacéuticos y productos médicos", tipo: "Ad valorem", valor: "0%" },
      { producto: "Textiles y confección", tipo: "Ad valorem", valor: "0–12%" },
      { producto: "Calzado y cuero", tipo: "Ad valorem", valor: "0–8%" },
      { producto: "Muebles y artículos del hogar", tipo: "Ad valorem", valor: "0–10%" },
      { producto: "Cosméticos y limpieza", tipo: "Ad valorem", valor: "0–6%" },
      { producto: "Productos agrícolas primarios", tipo: "Ad valorem", valor: "0–12%" },
      { producto: "Carne y productos animales", tipo: "Ad valorem", valor: "12–20%" },
      { producto: "Lácteos", tipo: "Ad valorem", valor: "0–35%" },
      { producto: "Pescado y marisco", tipo: "Ad valorem", valor: "0–12%" },
      { producto: "Aceites y grasas vegetales", tipo: "Ad valorem", valor: "5–9%" },
      { producto: "Alimentos procesados", tipo: "Ad valorem", valor: "0–12%" },
      { producto: "Bebidas no alcohólicas", tipo: "Ad valorem", valor: "0–19%" },
      { producto: "Bebidas alcohólicas", tipo: "Ad valorem", valor: "0–32%" },
      { producto: "Minerales y productos mineros", tipo: "Ad valorem", valor: "0–5%" },
      { producto: "Energía y combustibles", tipo: "Ad valorem", valor: "0–14%" },
      { producto: "Materiales de construcción", tipo: "Ad valorem", valor: "0–6%" },
      { producto: "Madera y forestales", tipo: "Ad valorem", valor: "0–8%" }
    ],
  },
  {
    pais1: "China",
    pais2: "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia Europea",
    arancelesPais1ImportandoPais2: [
      { producto: "Vehículos y transporte", tipo: "ad valorem + AD/AS", valor: "10–45%" },
      { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "0–8%" },
      { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–5%" },
      { producto: "Equipos eléctricos y electrónicos domésticos", tipo: "ad valorem", valor: "0–6%" },
      { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem + AD/AS", valor: "0–10%" },
      { producto: "Productos químicos y petroquímicos", tipo: "ad valorem (+AD puntuales)", valor: "0–12%" },
      { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–2%" },
      { producto: "Textiles y confección", tipo: "ad valorem", valor: "5–12%" },
      { producto: "Calzado y artículos de cuero", tipo: "ad valorem / mixto", valor: "5–15%" },
      { producto: "Productos agrícolas primarios", tipo: "ad valorem / mixto/cuotas", valor: "0–12%" },
      { producto: "Carne y productos animales", tipo: "ad valorem / mixto", valor: "5–20%" },
      { producto: "Lácteos y derivados", tipo: "mixto / ad valorem", valor: "5–30%" },
      { producto: "Pescado y marisco", tipo: "ad valorem", valor: "0–12%" },
      { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "0–10%" },
      { producto: "Productos alimentarios procesados", tipo: "ad valorem / mixto", valor: "0–15%" },
      { producto: "Bebidas no alcohólicas", tipo: "ad valorem / específico", valor: "0–12%" },
      { producto: "Bebidas alcohólicas", tipo: "ad valorem / específico", valor: "0–30%" },
      { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–5%" },
      { producto: "Energía y combustibles", tipo: "ad valorem / específico", valor: "0–5%" },
      { producto: "Materiales de construcción", tipo: "ad valorem", valor: "0–6%" },
      { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "0–8%" }
    ],
    arancelesPais2ImportandoPais1: [
      { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "15–25%" },
      { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "0–10%" },
      { producto: "Electrónica y TI", tipo: "ad valorem", valor: "0–8%" },
      { producto: "Equipos eléctricos y electrónicos domésticos", tipo: "ad valorem", valor: "0–8%" },
      { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem + AD/AS", valor: "0–12%" },
      { producto: "Productos químicos y petroquímicos", tipo: "ad valorem + AD", valor: "0–12%" },
      { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "0–5%" },
      { producto: "Textiles y confección", tipo: "ad valorem", valor: "5–15%" },
      { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "5–20%" },
      { producto: "Productos agrícolas primarios", tipo: "ad valorem / cuotas", valor: "0–25%" },
      { producto: "Carne y productos animales", tipo: "ad valorem + AD", valor: "0–62%" },
      { producto: "Lácteos y derivados", tipo: "ad valorem / cuotas", valor: "5–25%" },
      { producto: "Pescado y marisco", tipo: "ad valorem / controles sanitarios", valor: "0–12%" },
      { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "0–12%" },
      { producto: "Productos alimentarios procesados", tipo: "ad valorem", valor: "0–15%" },
      { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "0–8%" },
      { producto: "Bebidas alcohólicas", tipo: "ad valorem / específico", valor: "0–20%" },
      { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "0–5%" },
      { producto: "Energía y combustibles", tipo: "ad valorem", valor: "0–5%" },
      { producto: "Materiales de construcción", tipo: "ad valorem", valor: "0–8%" },
      { producto: "Madera y productos forestales", tipo: "ad valorem / contingentes", valor: "0–8%" }
    ]
  },
  {
    "pais1": "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia Europea",
    "pais2": "Rusia",
    "arancelesPais1ImportandoPais2": [
      { "producto": "Vehículos y transporte", "tipo": "comercio reducido", "valor": "-" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "restricciones", "valor": "-" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "6,1%" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "Permitido pero condicionado", "valor": "-" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "8,5%" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "8,5%" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "permitido", "valor": "bajo" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "6,1%" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "6-9%" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "5-10%" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "9,7%" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "9,7%" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "9,7%" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "9%" },
      { "producto": "Productos alimentarios procesados", "tipo": "ad valorem", "valor": "9%" },
      { "producto": "Bebidas no alcohólicas", "tipo": "permitido", "valor": "bajos-moderados" },
      { "producto": "Bebidas alcohólicas", "tipo": "permitido", "valor": "muy altos" },
      { "producto": "Minerales y productos mineros", "tipo": "permitido", "valor": "bajos" },
      { "producto": "Energía y combustibles", "tipo": "limitado", "valor": "-" },
      { "producto": "Materiales de construcción", "tipo": "permitido en algunos casos", "valor": "bajos-moderados" },
      { "producto": "Madera y productos forestales", "tipo": "permitido", "valor": "modestos" }
    ],
    "arancelesPais2ImportandoPais1": [
      { "producto": "Vehículos y transporte", "tipo": "prohibido", "valor": "-" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "mucho control", "valor": "-" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "Muchas partidas vetadas" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "Permitido pero condicionado", "valor": "-" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "Suspendido", "valor": "-" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "8,5%" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "Fuertes controles", "valor": "-" },
      { "producto": "Textiles y confección", "tipo": "Reducido", "valor": "-" },
      { "producto": "Calzado y artículos de cuero", "tipo": "Muy limitado", "valor": "-" },
      { "producto": "Muebles y artículos del hogar", "tipo": "Reducido", "valor": "-" },
      { "producto": "Productos agrícolas primarios", "tipo": "mixto", "valor": "6,5% + €40-45/t" },
      { "producto": "Carne y productos animales", "tipo": "Muchas prohibiciones", "valor": "-" },
      { "producto": "Lácteos y derivados", "tipo": "Muy limitado", "valor": "-" },
      { "producto": "Pescado y marisco", "tipo": "Sanciones y controles", "valor": "-" },
      { "producto": "Productos alimentarios procesados", "tipo": "ad valorem", "valor": "elevado" },
      { "producto": "Bebidas no alcohólicas", "tipo": "Muy reducido", "valor": "-" },
      { "producto": "Bebidas alcohólicas", "tipo": "Vetadas o reguladas", "valor": "-" },
      { "producto": "Minerales y productos mineros", "tipo": "Sanciones", "valor": "-" },
      { "producto": "Energía y combustibles", "tipo": "Prohibido", "valor": "-" },
      { "producto": "Materiales de construcción", "tipo": "Limitado", "valor": "-" },
      { "producto": "Madera y productos forestales", "tipo": "Vetadas o sanciones", "valor": "-" }
    ]
  },
  {
    "pais1": "Arabia Saudita",
    "pais2": "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia Europea",
    "arancelesPais1ImportandoPais2": arancelesBaseUE_MFN,
    "arancelesPais2ImportandoPais1": arancelesBaseArabiaSaudita
  },
  {
    "pais1": "Cuba",
    "pais2": "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia Europea",
    "arancelesPais1ImportandoPais2": arancelesBaseUE_MFN,
    "arancelesPais2ImportandoPais1": arancelesBaseCuba
  },
  {
    "pais1": "Estados Unidos",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "2,5–25% MFN + 25% (Sección 301) + 25% (Sección 232)" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "0–5% MFN + 25% (Sección 301 Lista 3)" },
      { "producto": "Electrónica y TIC", "tipo": "ad valorem", "valor": "0% MFN + 25% (Sección 301 Listas 3/4)" },
      { "producto": "Electrodomésticos y electrónicos domésticos", "tipo": "ad valorem", "valor": "0–5% MFN + 25% (Sección 301)" },
      { "producto": "Metales y siderúrgicos", "tipo": "ad valorem", "valor": "0% MFN + 50% (Sección 232) + 25% (Sección 301)" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "4–6% MFN + 25% (Sección 301 Listas 1–3)" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0% MFN + 20–30% (precursores opioides, medidas especiales)" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "12–15% MFN + 25% (Sección 301)" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "hasta 14% MFN + 25% (Sección 301)" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "0–5% MFN + 10% (Sección 232 madera) + 25% (muebles 2025)" },
      { "producto": "Cosméticos y productos de limpieza", "tipo": "ad valorem", "valor": "2–5% MFN (sin adicionales actuales)" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "3–8% MFN (sin adicionales recientes)" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "0–3,5% MFN (sin adicionales actuales)" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "0–2,5% MFN (sin adicionales actuales)" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "0–5% MFN (sin adicionales)" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "0–5% MFN (sin adicionales)" },
      { "producto": "Productos alimentarios procesados", "tipo": "ad valorem", "valor": "5–10% MFN (sin adicionales recientes)" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "0–7,5% MFN (sin adicionales)" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem", "valor": "0–5% MFN (sin adicionales)" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–5% MFN + 25% (Sección 232/301)" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0% MFN (sin adicionales)" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "7–10% MFN + 25% (Sección 232 cerámica/vidrio)" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "3% MFN + 10% (Sección 232 – madera blanda)" }
    ],
    "arancelesPais2ImportandoPais1": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "15% MFN + 25% (retaliatorio autos/partes) + 10% (reducción 2025)" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "6,5% MFN + 25% (retaliatorio Listas 3/4)" },
      { "producto": "Electrónica y TIC", "tipo": "ad valorem", "valor": "0–10% MFN + 25% (retaliatorio Listas 3/4) + 10% (2025 recíproco)" },
      { "producto": "Electrodomésticos y electrónicos domésticos", "tipo": "ad valorem", "valor": "8–12% MFN + 25% (retaliatorio 4A)" },
      { "producto": "Metales y siderúrgicos", "tipo": "ad valorem", "valor": "6–12% MFN + 25% (retaliatorio metales EE.UU.)" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "5–10% MFN + 25% (retaliatorio químicos EE.UU.)" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "5–8% MFN + 10–15% (retaliatorio sanitario 2025)" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "12–17% MFN + 25% (retaliatorio textiles)" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "8–19% MFN + 25% (retaliatorio 4A)" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "8–12% MFN + 25% (retaliatorio madera) + 10% (2025)" },
      { "producto": "Cosméticos y productos de limpieza", "tipo": "ad valorem", "valor": "6–10% MFN (sin adicionales relevantes)" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "9–12% MFN + 25% (retaliatorio carne/soja/frutas) + 10–15% (2025)" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "12–15% MFN + 25% (retaliatorio carnes EE.UU.)" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "12% MFN + 25% (retaliatorio lácteos EE.UU.)" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "0–5% MFN (sin adicionales relevantes)" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "5–12% MFN (sin adicionales relevantes)" },
      { "producto": "Productos alimentarios procesados", "tipo": "ad valorem", "valor": "10–20% MFN + 25% (retaliatorio dulces/snacks)" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "6–10% MFN + 10% (recíproco 2025)" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem", "valor": "14–20% MFN + 25% (retaliatorio vinos/licores)" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–6% MFN + 25% (retaliatorio minerales EE.UU.)" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "3,3% MFN + 25% (retaliatorio GNL EE.UU.)" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "15% MFN (sin adicionales específicos)" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "9% MFN + 10% (retaliatorio madera EE.UU.)" }
    ]
  },
  {
    "pais1": "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia Europea",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "0–10% (coches ≈10%, camiones 0–6%, aeronaves 0%)" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "0–6% (mayoría 0–4%)" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "0–5% (muchos dispositivos 0%)" },
      { "producto": "Electrodomésticos y electrónicos domésticos", "tipo": "ad valorem", "valor": "0–6% (TV, frigos, lavadoras 0–6%)" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem (+AD/AS si aplica)", "valor": "0–6% (MFN bajo; medidas antidumping en algunos casos)" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "0–7% (plásticos/resinas 0–6%; químicos especializados mayores)" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0–2% (medicamentos acabados típicamente 0%)" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "0–12% (prendas típicamente 8–12%, hilos/tejidos más bajos)" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem / mixto", "valor": "0–12% (calzado hasta ~12%)" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "0–6% (muebles de madera ~2–6%)" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "0–6% (perfumería/cosmética 0–6%)" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem / algunos TRQ", "valor": "0–12% (cereales 0–5%, frutas/verduras hasta 10–12%)" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem / cuotas", "valor": "0–12% (varía por tipo de carne; requisitos sanitarios fuertes)" },
      { "producto": "Lácteos y derivados", "tipo": "mixto / ad valorem", "valor": "0–29% (queso ≈15%, mantequilla hasta 29%; TRQ existentes para lácteos)" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "0–6% (pescado fresco 0%, conservas/salazones 0–6%)" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "0–10% (aceite de oliva moderado)" },
      { "producto": "Productos alimentarios procesados", "tipo": "ad valorem / mixtos", "valor": "0–12% (pastas, conservas, snacks 0–12%)" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem / específicos", "valor": "0–10% (zumos/cafés más altos, agua/refrescos bajos)" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem / específico", "valor": "0–15% (vino 0%, cervezas/licores hasta 15%)" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–5% (materias primas 0–3%, procesados hasta 5%)" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem / específicos raros", "valor": "0% (petróleo/gas crudo 0%, refinados 0–4%)" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "0–6% (cemento y vidrio bajos)" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "0–8% (madera 0–2%, muebles 2–6%)" }
    ],
    "arancelesPais2ImportandoPais1": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "0–10% (vehículos importados bajos, partes ~5%)" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "0–5% (maquinaria típicamente 0–5%)" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "0–5% (componentes/ordenadores 0–5%)" },
      { "producto": "Electrodomésticos y electrónicos domésticos", "tipo": "ad valorem", "valor": "0–5% (pequeños electrodomésticos ≈0–5%)" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "0–5% (materias primas mayoría 0–5%)" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "0–5% (petroquímicos básicos 0–5%)" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0–5% (medicamentos e insumos médicos 0–5%)" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "0–10% (prendas/tejidos 0–10%)" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "0–10% (calzado importado ≈0–10%)" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "0–5% (muebles y artículos del hogar ≈0–5%)" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "0–5% (cosméticos/detergentes ≈0–5%)" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem / cuotas puntuales", "valor": "0–12% (mayoría bajos, algunos 5–12%; TRQ lácteos puntuales)" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem / controles sanitarios", "valor": "0–5% (carne importada baja; producción local dominante)" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem / cuotas", "valor": "0–10% (moderados; exenciones industriales, cuotas preferenciales)" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "0–5% (marisco importado ≈0–5%)" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "0–5% (aceites vegetales 0–5%)" },
      { "producto": "Productos alimentarios procesados", "tipo": "ad valorem", "valor": "0–10% (procesados importados ~0–10%)" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "0–10% (refrescos y zumos 0–10%; café y té 0–5%)" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem", "valor": "0–20% (vino y licores importados 0–20%)" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–5% (materias primas importadas bajas)" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0% (energía importada con arancel 0%)" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "0–8% (materiales importados 0–8%)" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "0–8% (mobiliario y papel 0–8%)" }
    ]
  },
  {
    "pais1": "Bolivia",
    "pais2": "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia Europea",
    "arancelesPais1ImportandoPais2": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "0–10%" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Electrodomésticos y electrónicos domésticos", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "0–8%" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0–3%" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "0–12%" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "0–12%" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Cosméticos y productos de limpieza", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "0–10%" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "0–15%" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "0–30%" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "0–10%" },
      { "producto": "Productos alimentarios procesados", "tipo": "ad valorem", "valor": "0–12%" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "0–10%" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem", "valor": "0–25%" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0%" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "0–8%" }
    ],
    "arancelesPais2ImportandoPais1": arancelesBaseBolivia
  },
  {
    "pais1": "Emiratos Árabes Unidos",
    "pais2": "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia Europea",
    "arancelesPais1ImportandoPais2": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "0–10%" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Equipos eléctricos y electrónicos domésticos", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0–3%" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "0–12%" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "0–12%" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Cosméticos y productos de limpieza", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "0–15%" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "0–20%" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "0–20%" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "0–10%" },
      { "producto": "Productos alimentarios procesados", "tipo": "ad valorem", "valor": "0–12%" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "0–10%" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem", "valor": "0–25%" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0%" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "0–6%" }
    ],
    "arancelesPais2ImportandoPais1": arancelesBaseEAU
  },
  {
    "pais1": "India",
    "pais2": "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia Europea",
    "arancelesPais1ImportandoPais2": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "0–10%" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Equipos eléctricos y electrónicos domésticos", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0–3%" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "0–12%" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "0–12%" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Cosméticos y productos de limpieza", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "0–15%" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "0–20%" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "0–30%" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "0–10%" },
      { "producto": "Productos alimentarios procesados", "tipo": "ad valorem", "valor": "0–12%" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "0–10%" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem", "valor": "0–25%" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0%" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "0–6%" }
    ],
    "arancelesPais2ImportandoPais1": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "15–100%" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "7,5–10%" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "15–20%" },
      { "producto": "Equipos eléctricos y electrónicos domésticos", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "7,5–12,5%" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "7,5–10%" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0–10%" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "10–25%" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "10–35%" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "10–25%" },
      { "producto": "Cosméticos y productos de limpieza", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "30–100%" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "30–100%" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "35–60%" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "15–30%" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "35–45%" },
      { "producto": "Productos alimentarios procesados", "tipo": "ad valorem", "valor": "20–40%" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "20–40%" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem", "valor": "150% o más" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0–10%" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "10–25%" }
    ]
  },
  {
    "pais1": "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia Europea",
    "pais2": "Indonesia",
    "arancelesPais1ImportandoPais2": arancelesBaseIndonesia,
    "arancelesPais2ImportandoPais1": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "10–50%" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "5–10%" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "10–15%" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "5–15%" },
      { "producto": "Químicos y petroquímicos", "tipo": "ad valorem", "valor": "5–15%" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0–10%" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "10–25%" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "15–25%" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "5–25%" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "20–30%" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "20–40%" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "5–10%" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "5–15%" },
      { "producto": "Alimentos procesados", "tipo": "ad valorem", "valor": "10–25%" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "10–25%" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem", "valor": "90–150% + impuestos especiales" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "5–15%" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "5–15%" }
    ]
  },
  {
    "pais1": "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia Europea",
    "pais2": "Qatar",
    "arancelesPais1ImportandoPais2": arancelesBaseQatar,
    "arancelesPais2ImportandoPais1": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "5% (vehículos y piezas), 10% para lujo" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "5%" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "5%" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "5%" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "5%" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "5%" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0%" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "5%" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "5%" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "5%" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "5–10%" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "0–10%" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "5–15%" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "5–10%" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Productos alimentarios procesados", "tipo": "ad valorem", "valor": "5–10%" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "5% (+ impuesto especial del 50% en bebidas azucaradas)" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem", "valor": "50% + 100% impuesto especial" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0%" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "5%" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "5%" }
    ]
  },
  {
    "pais1": "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia Europea",
    "pais2": "Tailandia",
    "arancelesPais1ImportandoPais2": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "0–10%" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0–3%" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "0–12%" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "0–12%" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "0–15%" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "0–20%" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "0–30%" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "0–10%" },
      { "producto": "Productos alimentarios procesados", "tipo": "ad valorem", "valor": "0–12%" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "0–10%" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem", "valor": "0–25%" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0%" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "0–6%" }
    ],
    "arancelesPais2ImportandoPais1": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "40–80% (vehículos), 10–30% (componentes)" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "5–10%" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "0–10%" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "5–15%" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "5–10%" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "10–30%" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "10–30%" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "5–20%" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "20–40%" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "30–50%, a veces más en aves y porcino" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "30–60%" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "0–10%" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "5–20%" },
      { "producto": "Productos alimentarios procesados", "tipo": "ad valorem", "valor": "10–30%" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "20–40%" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem", "valor": "60–80% + impuestos especiales" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0%" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "5–15%" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "5–20%" }
    ]
  },
  {
    "pais1": "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia Europea",
    "pais2": "Venezuela", 
    "arancelesPais1ImportandoPais2": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "0–10%" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0–3%" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "0–12%" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "0–12%" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "0–15%" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "0–20%" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "0–30%" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "0–10%" },
      { "producto": "Alimentos procesados", "tipo": "ad valorem", "valor": "0–12%" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "0–10%" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem", "valor": "0–25%" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0%" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "0–6%" }
    ],
    "arancelesPais2ImportandoPais1": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "20–40%, hasta 50% en vehículos terminados" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "10–30%" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "20–30%" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "5–15% (plásticos hasta 20%)" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0–10%" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "20–35%" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "20–35%" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "20–30%" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "15–30%" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "15–40%" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "30–50%, según tipo" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "30–50%" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "10–25%" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "10–30%" },
      { "producto": "Alimentos procesados", "tipo": "ad valorem", "valor": "20–40%, especialmente conservas y dulces" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "20–40%" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem", "valor": "40–60% + impuestos específicos" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–10%" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "10–25%" }
    ]
  },
  {
    "pais1": "Arabia Saudita",
    "pais2": "Estados Unidos",
    "arancelesPais1ImportandoPais2": arancelesBaseUSA_MFN,
    "arancelesPais2ImportandoPais1": arancelesBaseArabiaSaudita
  },
  {
    "pais1": "Estados Unidos",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "2.5–10%" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "1–6%" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0–3%" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "10–16%" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "8–10%" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "2–4%" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "2–6%" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "5–20%" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "10–25%" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "15–25%" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "3–10%" },
      { "producto": "Alimentos procesados", "tipo": "ad valorem", "valor": "5–15%" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "5–10%" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem", "valor": "5–25%" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–3%" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0%" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "0–4%" }
    ],
    "arancelesPais2ImportandoPais1": arancelesBaseUSA_MFN
  },
  {
    "pais1": "Argelia",
    "pais2": "Estados Unidos",
    "arancelesPais1ImportandoPais2": arancelesBaseUSA_MFN,
    "arancelesPais2ImportandoPais1": arancelesBaseArgelia
  },
  {
    "pais1": "Estados Unidos",
    "pais2": "Bolivia",
    "arancelesPais1ImportandoPais2": arancelesBaseBolivia,
    "arancelesPais2ImportandoPais1": arancelesBaseUSA_MFN
  },
  {
    "pais1": "Estados Unidos",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBaseUSA_MFN
  },
  {
    "pais1": "Estados Unidos",
    "pais2": "Cuba",
    "arancelesPais1ImportandoPais2": [
      { "producto": "Vehículos y transporte", "tipo": "prohibido", "valor": "Comercio prácticamente prohibido por embargo" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "prohibido", "valor": "Embargo comercial vigente" },
      { "producto": "Electrónica y TI", "tipo": "prohibido", "valor": "Embargo comercial vigente" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "prohibido", "valor": "Embargo comercial vigente" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "prohibido", "valor": "Embargo comercial vigente" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "prohibido", "valor": "Embargo comercial vigente" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "exento (licencias humanitarias)", "valor": "0–3%" },
      { "producto": "Textiles y confección", "tipo": "prohibido", "valor": "Embargo comercial vigente" },
      { "producto": "Calzado y artículos de cuero", "tipo": "prohibido", "valor": "Embargo comercial vigente" },
      { "producto": "Muebles y artículos del hogar", "tipo": "prohibido", "valor": "Embargo comercial vigente" },
      { "producto": "Cosméticos y limpieza", "tipo": "prohibido", "valor": "Embargo comercial vigente" },
      { "producto": "Productos agrícolas primarios", "tipo": "exento parcial", "valor": "0–10% (licencias especiales)" },
      { "producto": "Carne y productos animales", "tipo": "exento parcial", "valor": "0–10% (caso por caso)" },
      { "producto": "Lácteos y derivados", "tipo": "exento parcial", "valor": "0–10% (licencias especiales)" },
      { "producto": "Pescado y marisco", "tipo": "prohibido", "valor": "Embargo comercial vigente" },
      { "producto": "Aceites y grasas vegetales", "tipo": "prohibido", "valor": "Embargo comercial vigente" },
      { "producto": "Alimentos procesados", "tipo": "exento parcial", "valor": "0–10% (productos humanitarios)" },
      { "producto": "Bebidas no alcohólicas", "tipo": "prohibido", "valor": "Embargo comercial vigente" },
      { "producto": "Bebidas alcohólicas", "tipo": "prohibido", "valor": "Embargo comercial vigente" },
      { "producto": "Minerales y productos mineros", "tipo": "prohibido", "valor": "Embargo comercial vigente" },
      { "producto": "Energía y combustibles", "tipo": "prohibido", "valor": "Embargo comercial vigente" },
      { "producto": "Materiales de construcción", "tipo": "prohibido", "valor": "Embargo comercial vigente" },
      { "producto": "Madera y productos forestales", "tipo": "prohibido", "valor": "Embargo comercial vigente" }
    ],
    "arancelesPais2ImportandoPais1": [
      { "producto": "Vehículos y transporte", "tipo": "prohibido", "valor": "Importaciones de EE. UU. prohibidas por embargo" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "prohibido", "valor": "Prohibidas salvo licencias excepcionales" },
      { "producto": "Electrónica y TI", "tipo": "prohibido", "valor": "Prohibidas salvo fines diplomáticos o humanitarios" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "prohibido", "valor": "Embargo total" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "prohibido", "valor": "Embargo total" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "prohibido", "valor": "Embargo total" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "reducido", "valor": "0–5% (importaciones humanitarias permitidas)" },
      { "producto": "Textiles y confección", "tipo": "prohibido", "valor": "Embargo total" },
      { "producto": "Calzado y artículos de cuero", "tipo": "prohibido", "valor": "Embargo total" },
      { "producto": "Muebles y artículos del hogar", "tipo": "prohibido", "valor": "Embargo total" },
      { "producto": "Cosméticos y limpieza", "tipo": "prohibido", "valor": "Embargo total" },
      { "producto": "Productos agrícolas primarios", "tipo": "reducido", "valor": "0–10% (importaciones alimentarias autorizadas)" },
      { "producto": "Carne y productos animales", "tipo": "reducido", "valor": "0–10% (licencias humanitarias)" },
      { "producto": "Lácteos y derivados", "tipo": "reducido", "valor": "0–10% (licencias humanitarias)" },
      { "producto": "Pescado y marisco", "tipo": "prohibido", "valor": "Embargo total" },
      { "producto": "Aceites y grasas vegetales", "tipo": "reducido", "valor": "5–10%" },
      { "producto": "Alimentos procesados", "tipo": "reducido", "valor": "5–10% (importaciones autorizadas puntualmente)" },
      { "producto": "Bebidas no alcohólicas", "tipo": "prohibido", "valor": "Embargo total" },
      { "producto": "Bebidas alcohólicas", "tipo": "prohibido", "valor": "Embargo total" },
      { "producto": "Minerales y productos mineros", "tipo": "prohibido", "valor": "Embargo total" },
      { "producto": "Energía y combustibles", "tipo": "prohibido", "valor": "Embargo total" },
      { "producto": "Materiales de construcción", "tipo": "prohibido", "valor": "Embargo total" },
      { "producto": "Madera y productos forestales", "tipo": "prohibido", "valor": "Embargo total" }
    ]
  },
  {
    "pais1": "Egipto",
    "pais2": "Estados Unidos",
    "arancelesPais1ImportandoPais2": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "2.5–10 %" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "1–6 %" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "0–6 %" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "reducido", "valor": "0–3 %" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "0–6 %" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "8–10 %" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "2–4 %" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "2–6 %" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "5–20 %" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "10–25 %" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "15–25 %" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "0–6 %" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "3–10 %" },
      { "producto": "Alimentos procesados", "tipo": "ad valorem", "valor": "5–15 %" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "5–10 %" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem", "valor": "5–25 %" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–3 %" },
      { "producto": "Energía y combustibles", "tipo": "exento", "valor": "0 %" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "0–4 %" }
    ],
    "arancelesPais2ImportandoPais1": arancelesBaseEgipto
  },
  {
    "pais1": "Estados Unidos",
    "pais2": "Emiratos Árabes Unidos",
    "arancelesPais1ImportandoPais2": arancelesBaseEAU,
    "arancelesPais2ImportandoPais1": arancelesBaseUSA_MFN
  },
  {
    "pais1": "Estados Unidos",
    "pais2": "Filipinas",
    "arancelesPais1ImportandoPais2": arancelesBaseFilipinas,
    "arancelesPais2ImportandoPais1": arancelesBaseUSA_MFN
  },
  {
    "pais1": "Estados Unidos",
    "pais2": "India",
    "arancelesPais1ImportandoPais2": arancelesBaseIndia,
    "arancelesPais2ImportandoPais1": arancelesBaseUSA_MFN
  },
  {
    "pais1": "Estados Unidos",
    "pais2": "Indonesia",
    "arancelesPais1ImportandoPais2": arancelesBaseIndonesia,
    "arancelesPais2ImportandoPais1": arancelesBaseUSA_MFN
  },
  {
    "pais1": "Estados Unidos",
    "pais2": "Japón",
    "arancelesPais1ImportandoPais2": arancelesBaseJapon,
    "arancelesPais2ImportandoPais1": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "exento o preferencial", "valor": "0–5 %" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "0–15 %" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "0–15 %" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "0–20 %" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Alimentos procesados", "tipo": "ad valorem", "valor": "0–15 %" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem + impuestos especiales", "valor": "5–15 % + impuestos adicionales" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Energía y combustibles", "tipo": "exento", "valor": "0 %" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "0–10 %" }
    ]
  },
  {
    "pais1": "Estados Unidos",
    "pais2": "Noruega, Suiza",
    "arancelesPais1ImportandoPais2": arancelesBaseEFTA,
    "arancelesPais2ImportandoPais1": arancelesBaseUSA_MFN
  },
  {
    "pais1": "Estados Unidos",
    "pais2": "Qatar",
    "arancelesPais1ImportandoPais2": arancelesBaseQatar,
    "arancelesPais2ImportandoPais1": arancelesBaseUSA_MFN
  },
  {
    "pais1": "Estados Unidos",
    "pais2": "Rusia",
    "arancelesPais1ImportandoPais2": [
      { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "15–25 %" },
      { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "15–25 %" },
      { producto: "Electrónica y TI", tipo: "ad valorem", valor: "10–20 %" },
      { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "10–20 %" },
      { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "15–25 %" },
      { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "10–20 %" },
      { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "5–10 %" },
      { producto: "Textiles y confección", tipo: "ad valorem", valor: "10–20 %" },
      { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "10–20 %" },
      { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "10–15 %" },
      { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "10–15 %" },
      { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "20–40 %" },
      { producto: "Carne y productos animales", tipo: "ad valorem", valor: "25–50 %" },
      { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "25–50 %" },
      { producto: "Pescado y marisco", tipo: "ad valorem", valor: "15–25 %" },
      { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "20–35 %" },
      { producto: "Alimentos procesados", tipo: "ad valorem", valor: "15–25 %" },
      { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "10–20 %" },
      { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "50–100 %" },
      { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "10–20 %" },
      { producto: "Energía y combustibles", tipo: "ad valorem", valor: "5–15 %" },
      { producto: "Materiales de construcción", tipo: "ad valorem", valor: "10–20 %" },
      { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "10–20 %" }
    ],
    "arancelesPais2ImportandoPais1": [
      { producto: "Vehículos y transporte", tipo: "ad valorem", valor: "25–35 %" },
      { producto: "Maquinaria y equipo industrial", tipo: "ad valorem", valor: "15–30 %" },
      { producto: "Electrónica y TI", tipo: "ad valorem", valor: "10–25 %" },
      { producto: "Equipos eléctricos domésticos", tipo: "ad valorem", valor: "15–25 %" },
      { producto: "Materiales metálicos y siderúrgicos", tipo: "ad valorem", valor: "25–35 %" },
      { producto: "Productos químicos y petroquímicos", tipo: "ad valorem", valor: "15–30 %" },
      { producto: "Farmacéuticos y productos médicos", tipo: "ad valorem", valor: "5–10 %" },
      { producto: "Textiles y confección", tipo: "ad valorem", valor: "10–20 %" },
      { producto: "Calzado y artículos de cuero", tipo: "ad valorem", valor: "10–25 %" },
      { producto: "Muebles y artículos del hogar", tipo: "ad valorem", valor: "10–20 %" },
      { producto: "Cosméticos y limpieza", tipo: "ad valorem", valor: "10–20 %" },
      { producto: "Productos agrícolas primarios", tipo: "ad valorem", valor: "20–40 %" },
      { producto: "Carne y productos animales", tipo: "ad valorem", valor: "25–50 %" },
      { producto: "Lácteos y derivados", tipo: "ad valorem", valor: "20–40 %" },
      { producto: "Pescado y marisco", tipo: "ad valorem", valor: "15–25 %" },
      { producto: "Aceites y grasas vegetales", tipo: "ad valorem", valor: "20–35 %" },
      { producto: "Alimentos procesados", tipo: "ad valorem", valor: "15–25 %" },
      { producto: "Bebidas no alcohólicas", tipo: "ad valorem", valor: "10–20 %" },
      { producto: "Bebidas alcohólicas", tipo: "ad valorem", valor: "50–100 %" },
      { producto: "Minerales y productos mineros", tipo: "ad valorem", valor: "10–25 %" },
      { producto: "Energía y combustibles", tipo: "ad valorem", valor: "5–15 %" },
      { producto: "Materiales de construcción", tipo: "ad valorem", valor: "15–25 %" },
      { producto: "Madera y productos forestales", tipo: "ad valorem", valor: "10–20 %" }
    ]
  }, 
  {
    "pais1": "Estados Unidos",
    "pais2": "Tailandia",
    "arancelesPais1ImportandoPais2": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "2.5–10 %" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "1–6 %" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "0–6 %" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "preferencial", "valor": "0–3 %" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "10–16 %" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "8–10 %" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "2–4 %" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "2–6 %" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "5–20 %" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "10–25 %" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "15–25 %" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "0–6 %" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "3–10 %" },
      { "producto": "Alimentos procesados", "tipo": "ad valorem", "valor": "5–15 %" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "5–10 %" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem", "valor": "5–25 %" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–3 %" },
      { "producto": "Energía y combustibles", "tipo": "exento", "valor": "0 %" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "0–4 %" }
    ],
    "arancelesPais2ImportandoPais1": arancelesBaseUSA_MFN
  },
  {
    "pais1": "Estados Unidos",
    "pais2": "Venezuela",
    "arancelesPais1ImportandoPais2": arancelesBaseVenezuela,
    "arancelesPais2ImportandoPais1": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "20–40 %" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "10–20 %" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "10–30 %" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "20–30 %" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "10–20 %" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "5–15 %" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "exento o preferencial", "valor": "0–10 %" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "20–35 %" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "20–35 %" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "20–30 %" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "15–30 %" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "15–40 %" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "30–50 %" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "30–50 %" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "10–25 %" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "10–30 %" },
      { "producto": "Alimentos procesados", "tipo": "ad valorem", "valor": "20–40 %" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "20–40 %" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem + impuestos especiales", "valor": "40–60 % + impuestos especiales" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "10–20 %" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "10–25 %" }
    ]
  },
  {
    "pais1": "Estados Unidos",
    "pais2": "Vietnam",
    "arancelesPais1ImportandoPais2": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "2.5–10 %" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "1–6 %" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "0–6 %" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "preferencial", "valor": "0–3 %" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "10–16 %" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "8–10 %" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "2–4 %" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "2–6 %" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "5–20 %" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "10–25 %" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "15–25 %" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "0–6 %" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "3–10 %" },
      { "producto": "Alimentos procesados", "tipo": "ad valorem", "valor": "5–15 %" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "5–10 %" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem", "valor": "5–25 %" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–3 %" },
      { "producto": "Energía y combustibles", "tipo": "exento", "valor": "0 %" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "0–4 %" }
    ],
    "arancelesPais2ImportandoPais1": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "25–50 %" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "5–15 %" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "5–15 %" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "10–20 %" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "5–15 %" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "5–15 %" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "exento o preferencial", "valor": "0–10 %" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "10–25 %" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "15–30 %" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "10–20 %" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "10–20 %" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "10–35 %" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "20–30 %" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "20–30 %" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "10–20 %" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "10–20 %" },
      { "producto": "Alimentos procesados", "tipo": "ad valorem", "valor": "15–30 %" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "10–20 %" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem + impuestos especiales", "valor": "30–60 % + impuestos especiales" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "10–20 %" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "5–20 %" }
    ]
  },
  {
    "pais1": "Arabia Saudita",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": arancelesBaseArabiaSaudita
  },
  {
    "pais1": "Australia",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": [
      { "producto": "Vehículos y transporte","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Maquinaria y equipo industrial","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Electrónica y TI","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Equipos eléctricos domésticos","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Materiales metálicos y siderúrgicos","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Productos químicos y petroquímicos","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Farmacéuticos y productos médicos","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Textiles y confección","tipo": "ad valorem", "valor": "5 %" },
      { "producto": "Calzado y artículos de cuero","tipo": "ad valorem", "valor": "5 %" },
      { "producto": "Muebles y artículos del hogar","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Cosméticos y limpieza", "valor": "0–5 %" },
      { "producto": "Productos agrícolas primarios","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Carne y productos animales","tipo": "ad valorem", "valor": "0–10 % (cuotas y licencias sanitarias)" },
      { "producto": "Lácteos y derivados","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Pescado y marisco","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Aceites y grasas vegetales","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Alimentos procesados","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Bebidas no alcohólicas","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Bebidas alcohólicas","tipo": "ad valorem + impuestos internos", "valor": "0–5 %" },
      { "producto": "Minerales y productos mineros","tipo": "ad valorem",  "valor": "0 %" },
      { "producto": "Energía y combustibles","tipo": "ad valorem", "valor": "0 %" },
      { "producto": "Materiales de construcción","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Madera y productos forestales","tipo": "ad valorem", "valor": "0–5 %" }
    ]
  },
  {
    "pais1": "Bosnia y Herzegovina",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": arancelesBaseBosnia
  },
  {
    "pais1": "Canadá",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": [
      { "producto": "Vehículos y transporte","tipo": "ad valorem", "valor": "6–8 %" },
      { "producto": "Maquinaria y equipo industrial","tipo": "ad valorem", "valor": "0–6 %" },
      { "producto": "Electrónica y TI","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Equipos eléctricos domésticos","tipo": "ad valorem", "valor": "0–8 %" },
      { "producto": "Materiales metálicos y siderúrgicos","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Productos químicos y petroquímicos","tipo": "ad valorem", "valor": "0–6 %" },
      { "producto": "Farmacéuticos y productos médicos","tipo": "ad valorem", "valor": "0–6 %" },
      { "producto": "Textiles y confección","tipo": "ad valorem", "valor": "17–18 %" },
      { "producto": "Calzado y artículos de cuero","tipo": "ad valorem", "valor": "18 %" },
      { "producto": "Muebles y artículos del hogar","tipo": "ad valorem", "valor": "8–9 %" },
      { "producto": "Cosméticos y limpieza","tipo": "ad valorem", "valor": "5–8 %" },
      { "producto": "Productos agrícolas primarios","tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Carne y productos animales","tipo": "ad valorem", "valor": "15–25 % (altos por cuotas y sanidad)" },
      { "producto": "Lácteos y derivados","tipo": "ad valorem", "valor": "200–300 % (muy altos, sistema de gestión de suministro)" },
      { "producto": "Pescado y marisco","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Aceites y grasas vegetales","tipo": "ad valorem", "valor": "0–8 %" },
      { "producto": "Alimentos procesados","tipo": "ad valorem", "valor": "5–15 %" },
      { "producto": "Bebidas no alcohólicas","tipo": "ad valorem", "valor": "5–10 %" },
      { "producto": "Bebidas alcohólicas","tipo": "ad valorem + impuestos especiales", "valor": "10–20 %" },
      { "producto": "Minerales y productos mineros","tipo": "ad valorem", "valor": "0 %" },
      { "producto": "Energía y combustibles","tipo": "ad valorem", "valor": "0 %" },
      { "producto": "Materiales de construcción","tipo": "ad valorem", "valor": "0–6 %" },
      { "producto": "Madera y productos forestales","tipo": "ad valorem", "valor": "0–5 %" }
    ]
  },
  {
    "pais1": "China",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": [
      { "producto": "Vehículos y transporte","tipo": "ad valorem", "valor": "15–25 %" },
      { "producto": "Maquinaria y equipo industrial","tipo": "ad valorem", "valor": "5–10 %" },
      { "producto": "Electrónica y TI","tipo": "ad valorem", "valor": "5–8 %" },
      { "producto": "Equipos eléctricos domésticos","tipo": "ad valorem", "valor": "8–10 %" },
      { "producto": "Materiales metálicos y siderúrgicos","tipo": "ad valorem", "valor": "5–8 %" },
      { "producto": "Productos químicos y petroquímicos","tipo": "ad valorem", "valor": "5–10 %" },
      { "producto": "Farmacéuticos y productos médicos","tipo": "ad valorem", "valor": "3–8 %" },
      { "producto": "Textiles y confección","tipo": "ad valorem", "valor": "14–25 %" },
      { "producto": "Calzado y artículos de cuero","tipo": "ad valorem", "valor": "16–24 %" },
      { "producto": "Muebles y artículos del hogar","tipo": "ad valorem", "valor": "10–18 %" },
      { "producto": "Cosméticos y limpieza","tipo": "ad valorem", "valor": "8–15 %" },
      { "producto": "Productos agrícolas primarios","tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Carne y productos animales","tipo": "ad valorem", "valor": "0–12 % (bajo, importación prioritaria de soja, carne vacuna y aviar)" },
      { "producto": "Lácteos y derivados","tipo": "ad valorem", "valor": "10–15 %" },
      { "producto": "Pescado y marisco","tipo": "ad valorem", "valor": "5–12 %" },
      { "producto": "Aceites y grasas vegetales","tipo": "ad valorem", "valor": "3–10 %" },
      { "producto": "Alimentos procesados","tipo": "ad valorem", "valor": "8–20 %" },
      { "producto": "Bebidas no alcohólicas","tipo": "ad valorem", "valor": "10–20 %" },
      { "producto": "Bebidas alcohólicas","tipo": "ad valorem + impuestos internos", "valor": "14–20 %" },
      { "producto": "Minerales y productos mineros","tipo": "ad valorem", "valor": "0–3 %" },
      { "producto": "Energía y combustibles","tipo": "ad valorem", "valor": "0–3 %" },
      { "producto": "Materiales de construcción","tipo": "ad valorem", "valor": "5–10 %" },
      { "producto": "Madera y productos forestales","tipo": "ad valorem", "valor": "5–8 %" }
    ]
  },
  {
    "pais1": "Corea del Sur",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": arancelesBaseCoreaDelSur
  },
  {
    "pais1": "Costa de Marfil",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": arancelesBaseCostaDeMarfil
  },
  {
    "pais1": "Costa Rica",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": arancelesBaseCostaRica
  },
  {
    "pais1": "República Dominicana",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": arancelesBaseRepDominicana
  },
  {
    "pais1": "Emiratos Árabes Unidos",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": arancelesBaseEAU
  },
  {
    "pais1": "El Salvador",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": arancelesBaseElSalvador
  },
  {
    "pais1": "Filipinas",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": arancelesBaseFilipinas
  },
  {
    "pais1": "Guatemala",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": arancelesBaseGuatemala
  },
  {
    "pais1": "Honduras",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": arancelesBaseHonduras
  },
  {
    "pais1": "Indonesia",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": arancelesBaseIndonesia
  },
  {
    "pais1": "Japon",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": arancelesBaseJapon
  },
  {
    "pais1": "Nicaragua",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": arancelesBaseNicaragua
  },
  {
    "pais1": "Nueva Zelanda",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": arancelesBaseNuevaZelanda
  },
  {
    "pais1": "Noruega, Suiza",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": [
      { "producto": "Vehículos y transporte","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Maquinaria y equipo industrial","tipo": "ad valorem", "valor": "0–3 %" },
      { "producto": "Electrónica y TI","tipo": "ad valorem", "valor": "0–3 %" },
      { "producto": "Equipos eléctricos domésticos","tipo": "ad valorem", "valor": "0–3 %" },
      { "producto": "Materiales metálicos y siderúrgicos","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Productos químicos y petroquímicos","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Farmacéuticos y productos médicos","tipo": "ad valorem", "valor": "0–2 %" },
      { "producto": "Textiles y confección","tipo": "ad valorem", "valor": "5–10 %" },
      { "producto": "Calzado y artículos de cuero","tipo": "ad valorem", "valor": "5–10 %" },
      { "producto": "Muebles y artículos del hogar","tipo": "ad valorem", "valor": "5–10 %" },
      { "producto": "Cosméticos y limpieza","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Productos agrícolas primarios","tipo": "ad valorem", "valor": "10–25 %" },
      { "producto": "Carne y productos animales","tipo": "ad valorem", "valor": "20–40 % (altamente sensible)" },
      { "producto": "Lácteos y derivados","tipo": "ad valorem", "valor": "25–50 % (protegido en EFTA)" },
      { "producto": "Pescado y marisco","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Aceites y grasas vegetales","tipo": "ad valorem", "valor": "5–15 %" },
      { "producto": "Alimentos procesados","tipo": "ad valorem", "valor": "10–25 %" },
      { "producto": "Bebidas no alcohólicas","tipo": "ad valorem", "valor": "5–10 %" },
      { "producto": "Bebidas alcohólicas","tipo": "ad valorem + impuestos especiales", "valor": "10–20 %" },
      { "producto": "Minerales y productos mineros","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Energía y combustibles","tipo": "ad valorem", "valor": "0–2 %" },
      { "producto": "Materiales de construcción","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Madera y productos forestales","tipo": "ad valorem", "valor": "0–5 %" }
    ]
  },
  {
    "pais1": "Panamá",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": arancelesBasePanama
  },
  {
    "pais1": "Perú",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": [
      { "producto": "Vehículos y transporte","tipo": "ad valorem", "valor": "0–10 % (preferencial)" },
      { "producto": "Maquinaria y equipo industrial","tipo": "ad valorem", "valor": "0–8 % (preferencial)" },
      { "producto": "Electrónica y TI","tipo": "ad valorem", "valor": "0–8 %" },
      { "producto": "Equipos eléctricos domésticos","tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Materiales metálicos y siderúrgicos","tipo": "ad valorem", "valor": "0–8 %" },
      { "producto": "Productos químicos y petroquímicos","tipo": "ad valorem", "valor": "0–8 %" },
      { "producto": "Farmacéuticos y productos médicos","tipo": "ad valorem (preferencial/exento)", "valor": "0–5 %" },
      { "producto": "Textiles y confección","tipo": "ad valorem", "valor": "10–20 %" },
      { "producto": "Calzado y artículos de cuero","tipo": "ad valorem", "valor": "10–20 %" },
      { "producto": "Muebles y artículos del hogar","tipo": "ad valorem", "valor": "8–15 %" },
      { "producto": "Cosméticos y limpieza","tipo": "ad valorem", "valor": "5–10 %" },
      { "producto": "Productos agrícolas primarios","tipo": "ad valorem", "valor": "5–20 % (algunos excluidos)" },
      { "producto": "Carne y productos animales","tipo": "ad valorem", "valor": "10–20 %" },
      { "producto": "Lácteos y derivados","tipo": "ad valorem", "valor": "15–25 %" },
      { "producto": "Pescado y marisco","tipo": "ad valorem", "valor": "5–12 %" },
      { "producto": "Aceites y grasas vegetales","tipo": "ad valorem", "valor": "5–12 %" },
      { "producto": "Alimentos procesados","tipo": "ad valorem", "valor": "8–15 %" },
      { "producto": "Bebidas no alcohólicas","tipo": "ad valorem", "valor": "5–10 %" },
      { "producto": "Bebidas alcohólicas","tipo": "ad valorem + impuestos especiales", "valor": "15–25 %" },
      { "producto": "Minerales y productos mineros","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Energía y combustibles","tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Materiales de construcción","tipo": "ad valorem", "valor": "5–10 %" },
      { "producto": "Madera y productos forestales","tipo": "ad valorem", "valor": "5–10 %" }
    ],
    "arancelesPais2ImportandoPais1": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "0–10 % (preferencial)" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "0–6 % (preferencial)" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "0–6 %" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "0–8 %" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "0–8 %" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "0–8 %" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0–5 % (preferencial/exento)" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "10–18 %" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "10–20 %" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "8–15 %" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "5–10 %" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "5–25 % (algunos excluidos)" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "10–25 %" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "15–25 %" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "5–10 %" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "5–10 %" },
      { "producto": "Alimentos procesados", "tipo": "ad valorem", "valor": "8–15 %" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "5–10 %" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem", "valor": "15–25 % + impuestos especiales" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "5–10 %" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "5–10 %" }
    ]
  },
  {
    "pais1": "Qatar",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Reino Unido",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": arancelesBaseReinoUnido
  },
  {
    "pais1": "Rusia",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Singapur",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": arancelesBaseSingapur
  },
  {
    "pais1": "Tailandia",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Turquía",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Venezuela",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Vietnam",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": arancelesBaseVietnam
  },
  {
    "pais1": "Marruecos",
    "pais2": "Argentina, Brasil, Uruguay, Paraguay",
    "arancelesPais1ImportandoPais2": arancelesBaseMercosur,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
  {
    "pais1": "Canadá",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseCanada
  },
  {
    "pais1": "China",
    "pais2": "Suiza",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "5–10 %" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "0–6 %" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "0–6 %" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0–3 % (preferencial o exento)" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "8–15 %" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "10–18 %" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "5–10 %" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "0–6 %" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "5–15 %" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "10–25 %" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "20–35 %" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "5–10 %" },
      { "producto": "Alimentos procesados", "tipo": "ad valorem", "valor": "5–15 %" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "5–10 %" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem", "valor": "15–25 % + impuestos especiales" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–3 %" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0–3 %" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "5–10 %" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "5–10 %" }
    ]
  },
  {
    "pais1": "Reino Unido",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseReinoUnido
  },
  {
    "pais1": "Arabia Saudita",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseArabiaSaudita
  },
  {
    "pais1": "Corea del Sur",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseCoreaDelSur
  },
  {
    "pais1": "México",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseMexico
  },
  {
    "pais1": "Argelia",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseArgelia
  },
  {
    "pais1": "Australia",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0–5 % (exento en la mayoría de casos)" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Alimentos procesados", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem", "valor": "5–10 % + impuestos internos" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "0–5 %" }
    ]
  },
  {
    "pais1": "Bolivia",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseBolivia
  },
  {
    "pais1": "Bosnia y Herzegovina",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseBosnia
  },
  {
    "pais1": "Colombia",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseColombia
  },
  {
    "pais1": "Costa de Marfil",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseCostaDeMarfil
  },
  {
    "pais1": "Costa Rica",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseCostaRica
  },
  {
    "pais1": "Cuba",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseCuba
  },
  {
    "pais1": "Egipto",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseEgipto
  },
  {
    "pais1": "Emiratos Árabes Unidos",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseEAU
  },
  {
    "pais1": "El Salvador",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseElSalvador
  },
  {
    "pais1": "Guatemala",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseGuatemala
  },
  {
    "pais1": "Honduras",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseHonduras
  },
  {
    "pais1": "India",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseIndia
  },
  {
    "pais1": "Israel",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseIsrael
  },
  {
    "pais1": "Jamaica",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseJamaica
  },
  {
    "pais1": "Líbano",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseLibano
  },
  {
    "pais1": "Nicaragua",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseNicaragua
  },
  {
    "pais1": "Panamá",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBasePanama
  },
  {
    "pais1": "Perú",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1":[
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0–5 % (muchos exentos)" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "5–11 %" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "5–11 %" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "0–6 %" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "0–6 %" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "0–9 %" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "0–15 %" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "10–25 %" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "0–6 %" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "0–9 %" },
      { "producto": "Alimentos procesados", "tipo": "ad valorem", "valor": "5–15 %" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "5–10 %" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem", "valor": "10–20 % + impuestos selectivos" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–3 %" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0–3 %" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "0–6 %" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "0–6 %" }
    ]
  },
  {
    "pais1": "Qatar",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Rusia",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Turquía",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Venezuela",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Marruecos",
    "pais2": "China",
    "arancelesPais1ImportandoPais2": arancelesBaseChina,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
  {
    "pais1": "Argelia",
    "pais2": "Reino Unido",
    "arancelesPais1ImportandoPais2": arancelesBaseReinoUnido,
    "arancelesPais2ImportandoPais1": arancelesBaseArgelia
  },
  {
    "pais1": "Bolivia",
    "pais2": "Reino Unido",
    "arancelesPais1ImportandoPais2": arancelesBaseReinoUnido,
    "arancelesPais2ImportandoPais1": arancelesBaseBolivia
  },
  {
    "pais1": "Bosnia y Herzegovina",
    "pais2": "Reino Unido",
    "arancelesPais1ImportandoPais2": arancelesBaseReinoUnido,
    "arancelesPais2ImportandoPais1": arancelesBaseBosnia
  },
  {
    "pais1": "Colombia",
    "pais2": "Reino Unido",
    "arancelesPais1ImportandoPais2": arancelesBaseReinoUnido,
    "arancelesPais2ImportandoPais1": arancelesBaseColombia
  },
  {
    "pais1": "Cuba",
    "pais2": "Reino Unido",
    "arancelesPais1ImportandoPais2": arancelesBaseReinoUnido,
    "arancelesPais2ImportandoPais1": arancelesBaseCuba
  },
  {
    "pais1": "Egipto",
    "pais2": "Reino Unido",
    "arancelesPais1ImportandoPais2": arancelesBaseReinoUnido,
    "arancelesPais2ImportandoPais1": arancelesBaseEgipto
  },
  {
    "pais1": "India",
    "pais2": "Reino Unido",
    "arancelesPais1ImportandoPais2": arancelesBaseReinoUnido,
    "arancelesPais2ImportandoPais1": arancelesBaseIndia
  },
  {
    "pais1": "Líbano",
    "pais2": "Reino Unido",
    "arancelesPais1ImportandoPais2": arancelesBaseReinoUnido,
    "arancelesPais2ImportandoPais1": arancelesBaseLibano
  },
  {
    "pais1": "México",
    "pais2": "Reino Unido",
    "arancelesPais1ImportandoPais2": arancelesBaseReinoUnido,
    "arancelesPais2ImportandoPais1": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "0–25 %" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "0–25 %" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Alimentos procesados", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem", "valor": "10–40 %" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "0–10 %" }
    ]
  },
  {
    "pais1": "Nicaragua",
    "pais2": "Reino Unido",
    "arancelesPais1ImportandoPais2": arancelesBaseReinoUnido,
    "arancelesPais2ImportandoPais1": arancelesBaseNicaragua
  },
  {
    "pais1": "Panamá",
    "pais2": "Reino Unido",
    "arancelesPais1ImportandoPais2": arancelesBaseReinoUnido,
    "arancelesPais2ImportandoPais1": arancelesBasePanama
  },
  {
    "pais1": "Perú",
    "pais2": "Reino Unido",
    "arancelesPais1ImportandoPais2": arancelesBaseReinoUnido,
    "arancelesPais2ImportandoPais1": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "0–25 %" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "0–25 %" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Alimentos procesados", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "0–10 %" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem", "valor": "10–40 %" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "0–5 %" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "0–10 %" }
    ]
  },
  {
    "pais1": "Qatar",
    "pais2": "Reino Unido",
    "arancelesPais1ImportandoPais2": arancelesBaseReinoUnido,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Rusia",
    "pais2": "Reino Unido",
    "arancelesPais1ImportandoPais2": arancelesBaseReinoUnido,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Tailandia",
    "pais2": "Reino Unido",
    "arancelesPais1ImportandoPais2": arancelesBaseReinoUnido,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Turquía",
    "pais2": "Reino Unido",
    "arancelesPais1ImportandoPais2": arancelesBaseReinoUnido,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Venezuela",
    "pais2": "Reino Unido",
    "arancelesPais1ImportandoPais2": arancelesBaseReinoUnido,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Marruecos",
    "pais2": "Reino Unido",
    "arancelesPais1ImportandoPais2": arancelesBaseReinoUnido,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
  {
    "pais1": "Arabia Saudita",
    "pais2": "México",
    "arancelesPais1ImportandoPais2": arancelesBaseMexico,
    "arancelesPais2ImportandoPais1": arancelesBaseArabiaSaudita
  },
  {
    "pais1": "Bosnia y Herzegovina",
    "pais2": "México",
    "arancelesPais1ImportandoPais2": arancelesBaseMexico,
    "arancelesPais2ImportandoPais1": arancelesBaseBosnia
  },
  {
    "pais1": "Corea del Sur",
    "pais2": "México",
    "arancelesPais1ImportandoPais2": arancelesBaseMexico,
    "arancelesPais2ImportandoPais1": arancelesBaseCoreaDelSur
  },
  {
    "pais1": "Costa de Marfil",
    "pais2": "México",
    "arancelesPais1ImportandoPais2": arancelesBaseMexico,
    "arancelesPais2ImportandoPais1": arancelesBaseCostaDeMarfil
  },
  {
    "pais1": "República Dominicana",
    "pais2": "México",
    "arancelesPais1ImportandoPais2": arancelesBaseMexico,
    "arancelesPais2ImportandoPais1": arancelesBaseRepDominicana
  },
  {
    "pais1": "Egipto",
    "pais2": "México",
    "arancelesPais1ImportandoPais2": arancelesBaseMexico,
    "arancelesPais2ImportandoPais1": arancelesBaseEgipto
  },
  {
    "pais1": "Emiratos Árabes Unidos",
    "pais2": "México",
    "arancelesPais1ImportandoPais2": arancelesBaseMexico,
    "arancelesPais2ImportandoPais1": arancelesBaseEAU
  },
  {
    "pais1": "Filipinas",
    "pais2": "México",
    "arancelesPais1ImportandoPais2": arancelesBaseMexico,
    "arancelesPais2ImportandoPais1": arancelesBaseFilipinas
  },
  {
    "pais1": "India",
    "pais2": "México",
    "arancelesPais1ImportandoPais2": arancelesBaseMexico,
    "arancelesPais2ImportandoPais1": arancelesBaseIndia
  },
  {
    "pais1": "Indonesia",
    "pais2": "México",
    "arancelesPais1ImportandoPais2": arancelesBaseMexico,
    "arancelesPais2ImportandoPais1": arancelesBaseIndonesia
  },
  {
    "pais1": "Jamaica",
    "pais2": "México",
    "arancelesPais1ImportandoPais2": arancelesBaseMexico,
    "arancelesPais2ImportandoPais1": arancelesBaseJamaica
  },
  {
    "pais1": "Líbano",
    "pais2": "México",
    "arancelesPais1ImportandoPais2": arancelesBaseMexico,
    "arancelesPais2ImportandoPais1": arancelesBaseLibano
  },
  {
    "pais1": "Nicaragua",
    "pais2": "México",
    "arancelesPais1ImportandoPais2": arancelesBaseMexico,
    "arancelesPais2ImportandoPais1": arancelesBaseNicaragua
  },
  {
    "pais1": "Qatar",
    "pais2": "México",
    "arancelesPais1ImportandoPais2": arancelesBaseMexico,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Rusia",
    "pais2": "México",
    "arancelesPais1ImportandoPais2": arancelesBaseMexico,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "México",
    "arancelesPais1ImportandoPais2": arancelesBaseMexico,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Turquía",
    "pais2": "México",
    "arancelesPais1ImportandoPais2": arancelesBaseMexico,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Venezuela",
    "pais2": "México",
    "arancelesPais1ImportandoPais2": arancelesBaseMexico,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Marruecos",
    "pais2": "México",
    "arancelesPais1ImportandoPais2": arancelesBaseMexico,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
  {
    "pais1": "Arabia Saudita",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": arancelesBaseAustralia,
    "arancelesPais2ImportandoPais1": arancelesBaseArabiaSaudita
  },
  {
    "pais1": "Argelia",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": arancelesBaseAustralia,
    "arancelesPais2ImportandoPais1": arancelesBaseArgelia
  },
  {
    "pais1": "Bolivia",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": arancelesBaseAustralia,
    "arancelesPais2ImportandoPais1": arancelesBaseBolivia
  },
  {
    "pais1": "Bosnia y Herzegovina",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": arancelesBaseAustralia,
    "arancelesPais2ImportandoPais1": arancelesBaseBosnia
  },
  {
    "pais1": "Canadá",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": arancelesBaseAustralia,
    "arancelesPais2ImportandoPais1": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "5–10%" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "0–8%" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "0–8%" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "0–8%" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "0–8%" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "15–20%" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "18–22%" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "8–15%" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "0–6%" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "10–25%" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "20–30%" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem + cuotas", "valor": "200–300% (bajo régimen supply-management)" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "0–10%" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "5–12%" },
      { "producto": "Alimentos procesados", "tipo": "ad valorem", "valor": "5–15%" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "0–10%" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem + impuestos internos", "valor": "20–40%" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "5–12%" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "0–10%" }
    ]
  },
  {
    "pais1": "Colombia",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": arancelesBaseAustralia,
    "arancelesPais2ImportandoPais1": arancelesBaseColombia
  },
  {
    "pais1": "Costa de Marfil",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": arancelesBaseAustralia,
    "arancelesPais2ImportandoPais1": arancelesBaseCostaDeMarfil
  },
  {
    "pais1": "Costa Rica",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": arancelesBaseAustralia,
    "arancelesPais2ImportandoPais1": arancelesBaseCostaRica
  },
  {
    "pais1": "Cuba",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": arancelesBaseAustralia,
    "arancelesPais2ImportandoPais1": arancelesBaseCuba
  },
  {
    "pais1": "República Dominicana",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": arancelesBaseAustralia,
    "arancelesPais2ImportandoPais1": arancelesBaseRepDominicana
  },
  {
    "pais1": "Egipto",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": arancelesBaseAustralia,
    "arancelesPais2ImportandoPais1": arancelesBaseEgipto
  },
  {
    "pais1": "Filipinas",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": arancelesBaseAustralia,
    "arancelesPais2ImportandoPais1": arancelesBaseFilipinas
  },
  {
    "pais1": "Guatemala",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": arancelesBaseAustralia,
    "arancelesPais2ImportandoPais1": arancelesBaseGuatemala
  },
  {
    "pais1": "Honduras",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": arancelesBaseAustralia,
    "arancelesPais2ImportandoPais1": arancelesBaseHonduras
  },
  {
    "pais1": "Israel",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": arancelesBaseAustralia,
    "arancelesPais2ImportandoPais1": arancelesBaseIsrael
  },
  {
    "pais1": "Jamaica",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": arancelesBaseAustralia,
    "arancelesPais2ImportandoPais1": arancelesBaseJamaica
  },
  {
    "pais1": "Líbano",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": arancelesBaseAustralia,
    "arancelesPais2ImportandoPais1": arancelesBaseLibano
  },
  {
    "pais1": "Nicaragua",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": arancelesBaseAustralia,
    "arancelesPais2ImportandoPais1": arancelesBaseNicaragua
  },
  {
    "pais1": "Qatar",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": arancelesBaseAustralia,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Panamá",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": arancelesBaseAustralia,
    "arancelesPais2ImportandoPais1": arancelesBasePanama
  },
  {
    "pais1": "Rusia",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": arancelesBaseAustralia,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": arancelesBaseAustralia,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "India",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "10–25%" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "5–15%" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "5–10%" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "5–12%" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "5–12%" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "5–12%" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "15–25%" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "15–30%" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "5–15%" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "25–35%" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "25–40%" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "15–25%" },
      { "producto": "Alimentos procesados", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem + impuestos internos", "valor": "25–45%" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–8%" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "8–15%" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "5–15%" }
    ],
    "arancelesPais2ImportandoPais1": arancelesBaseIndia
  },
  {
    "pais1": "Perú",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "10–25%" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "5–15%" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "5–10%" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "5–12%" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "5–12%" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "5–12%" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "10–25%" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "15–25%" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "5–15%" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "15–30%" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "20–35%" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "20–35%" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "15–30%" },
      { "producto": "Alimentos procesados", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem + impuestos internos", "valor": "25–50%" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–8%" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "8–15%" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "5–15%" }
    ],
    "arancelesPais2ImportandoPais1": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "10–25%" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "5–15%" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "5–10%" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "5–12%" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "5–12%" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "5–12%" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "10–25%" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "15–25%" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "5–15%" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "15–35%" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "25–35%" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "25–35%" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "15–30%" },
      { "producto": "Alimentos procesados", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem + impuestos internos", "valor": "25–50%" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–8%" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "8–15%" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "5–15%" }
    ]
  },
  {
    "pais1": "Venezuela",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "10–25%" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "5–15%" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "5–10%" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "5–12%" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "5–12%" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "5–12%" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "10–25%" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "15–25%" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "5–15%" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "15–25%" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "15–25%" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Alimentos procesados", "tipo": "ad valorem", "valor": "20–35%" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem + impuestos internos", "valor": "50–100%" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–8%" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "8–15%" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "5–15%" }
    ],
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Marruecos",
    "pais2": "Australia",
    "arancelesPais1ImportandoPais2": arancelesBaseAustralia,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
  {
    "pais1": "Arabia Saudita",
    "pais2": "Canadá",
    "arancelesPais1ImportandoPais2": arancelesBaseCanada,
    "arancelesPais2ImportandoPais1": arancelesBaseArabiaSaudita
  },
  {
    "pais1": "Argelia",
    "pais2": "Canadá",
    "arancelesPais1ImportandoPais2": arancelesBaseCanada,
    "arancelesPais2ImportandoPais1": arancelesBaseArgelia
  },
  {
    "pais1": "Bolivia",
    "pais2": "Canadá",
    "arancelesPais1ImportandoPais2": arancelesBaseCanada,
    "arancelesPais2ImportandoPais1": arancelesBaseBolivia
  },
  {
    "pais1": "Bosnia y Herzegovina",
    "pais2": "Canadá",
    "arancelesPais1ImportandoPais2": arancelesBaseCanada,
    "arancelesPais2ImportandoPais1": arancelesBaseBosnia
  },
  {
    "pais1": "Costa de Marfil",
    "pais2": "Canadá",
    "arancelesPais1ImportandoPais2": arancelesBaseCanada,
    "arancelesPais2ImportandoPais1": arancelesBaseCostaDeMarfil
  },
  {
    "pais1": "Egipto",
    "pais2": "Canadá",
    "arancelesPais1ImportandoPais2": arancelesBaseCanada,
    "arancelesPais2ImportandoPais1": arancelesBaseEgipto
  },
  {
    "pais1": "Emiratos Árabes Unidos",
    "pais2": "Canadá",
    "arancelesPais1ImportandoPais2": arancelesBaseCanada,
    "arancelesPais2ImportandoPais1": arancelesBaseEAU
  },
  {
    "pais1": "El Salvador",
    "pais2": "Canadá",
    "arancelesPais1ImportandoPais2": arancelesBaseCanada,
    "arancelesPais2ImportandoPais1": arancelesBaseElSalvador
  },
  {
    "pais1": "Guatemala",
    "pais2": "Canadá",
    "arancelesPais1ImportandoPais2": arancelesBaseCanada,
    "arancelesPais2ImportandoPais1": arancelesBaseGuatemala
  },
  {
    "pais1": "Filipinas",
    "pais2": "Canadá",
    "arancelesPais1ImportandoPais2": arancelesBaseCanada,
    "arancelesPais2ImportandoPais1": arancelesBaseFilipinas
  },
  {
    "pais1": "India",
    "pais2": "Canadá",
    "arancelesPais1ImportandoPais2": arancelesBaseCanada,
    "arancelesPais2ImportandoPais1": arancelesBaseIndia
  },
  {
    "pais1": "Indonesia",
    "pais2": "Canadá",
    "arancelesPais1ImportandoPais2": arancelesBaseCanada,
    "arancelesPais2ImportandoPais1": arancelesBaseIndonesia
  },
  {
    "pais1": "Japón",
    "pais2": "Canadá",
    "arancelesPais1ImportandoPais2": arancelesBaseCanada,
    "arancelesPais2ImportandoPais1": arancelesBaseJapon
  },
  {
    "pais1": "Líbano",
    "pais2": "Canadá",
    "arancelesPais1ImportandoPais2": arancelesBaseCanada,
    "arancelesPais2ImportandoPais1": arancelesBaseLibano
  },
  {
    "pais1": "México",
    "pais2": "Canadá",
    "arancelesPais1ImportandoPais2": arancelesBaseCanada,
    "arancelesPais2ImportandoPais1": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0–5% (preferencial/exento)" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "5–15%" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "10–25%" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "15–30%" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "5–12%" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Alimentos procesados", "tipo": "ad valorem", "valor": "5–15%" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "5–12%" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem", "valor": "20–40% + impuestos internos" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–8%" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "5–12%" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "5–12%" }
    ]
  },
  {
    "pais1": "Nicaragua",
    "pais2": "Canadá",
    "arancelesPais1ImportandoPais2": arancelesBaseCanada,
    "arancelesPais2ImportandoPais1": arancelesBaseNicaragua
  },
  {
    "pais1": "Nueva Zelanda",
    "pais2": "Canadá",
    "arancelesPais1ImportandoPais2": arancelesBaseCanada,
    "arancelesPais2ImportandoPais1": arancelesBaseNuevaZelanda
  },
  {
    "pais1": "Qatar",
    "pais2": "Canadá",
    "arancelesPais1ImportandoPais2": arancelesBaseCanada,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Reino Unido",
    "pais2": "Canadá",
    "arancelesPais1ImportandoPais2": arancelesBaseCanada,
    "arancelesPais2ImportandoPais1": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0–5% (preferencial/exento)" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "5–15%" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "10–25%" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "15–30%" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "5–12%" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Alimentos procesados", "tipo": "ad valorem", "valor": "5–15%" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "5–12%" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem", "valor": "20–40% + impuestos internos" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–8%" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "5–12%" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "5–12%" }
    ]
  },
  {
    "pais1": "Rusia",
    "pais2": "Canadá",
    "arancelesPais1ImportandoPais2": arancelesBaseCanada,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Canadá",
    "arancelesPais1ImportandoPais2": arancelesBaseCanada,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Turquía",
    "pais2": "Canadá",
    "arancelesPais1ImportandoPais2": arancelesBaseCanada,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Vietnam",
    "pais2": "Canadá",
    "arancelesPais1ImportandoPais2": arancelesBaseCanada,
    "arancelesPais2ImportandoPais1": arancelesBaseVietnam
  },
  {
    "pais1": "Cuba",
    "pais2": "Canadá",
    "arancelesPais1ImportandoPais2": arancelesBaseCanada,
    "arancelesPais2ImportandoPais1": arancelesBaseCuba
  },
  {
    "pais1": "Venezuela",
    "pais2": "Canadá",
    "arancelesPais1ImportandoPais2": arancelesBaseCanada,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Arabia Saudita",
    "pais2": "Chile",
    "arancelesPais1ImportandoPais2": arancelesBaseChileGrupo1,
    "arancelesPais2ImportandoPais1": arancelesBaseArabiaSaudita
  },
  {
    "pais1": "Bosnia y Herzegovina",
    "pais2": "Chile",
    "arancelesPais1ImportandoPais2": arancelesBaseChileGrupo1,
    "arancelesPais2ImportandoPais1": arancelesBaseBosnia
  },
  {
    "pais1": "Costa de Marfil",
    "pais2": "Chile",
    "arancelesPais1ImportandoPais2": arancelesBaseChileGrupo1,
    "arancelesPais2ImportandoPais1": arancelesBaseCostaDeMarfil
  },
  {
    "pais1": "Egipto",
    "pais2": "Chile",
    "arancelesPais1ImportandoPais2": arancelesBaseChileGrupo1,
    "arancelesPais2ImportandoPais1": arancelesBaseEgipto
  },
  {
    "pais1": "Emiratos Árabes Unidos",
    "pais2": "Chile",
    "arancelesPais1ImportandoPais2": arancelesBaseChileGrupo1,
    "arancelesPais2ImportandoPais1": arancelesBaseEAU
  },
  {
    "pais1": "Filipinas",
    "pais2": "Chile",
    "arancelesPais1ImportandoPais2": arancelesBaseChileGrupo1,
    "arancelesPais2ImportandoPais1": arancelesBaseFilipinas
  },
  {
    "pais1": "Honduras",
    "pais2": "Chile",
    "arancelesPais1ImportandoPais2": arancelesBaseChileGrupo1,
    "arancelesPais2ImportandoPais1": arancelesBaseHonduras
  },
  {
    "pais1": "Jamaica",
    "pais2": "Chile",
    "arancelesPais1ImportandoPais2": arancelesBaseChileGrupo1,
    "arancelesPais2ImportandoPais1": arancelesBaseJamaica
  },
  {
    "pais1": "Qatar",
    "pais2": "Chile",
    "arancelesPais1ImportandoPais2": arancelesBaseChileGrupo1,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Marruecos",
    "pais2": "Chile",
    "arancelesPais1ImportandoPais2": arancelesBaseChileGrupo1,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
  {
    "pais1": "China",
    "pais2": "Chile",
    "arancelesPais1ImportandoPais2": arancelesBaseChileGrupo2,
    "arancelesPais2ImportandoPais1": [
      { "producto": "Vehículos y transporte", "tipo": "ad valorem", "valor": "10–25%" },
      { "producto": "Maquinaria y equipo industrial", "tipo": "ad valorem", "valor": "5–12%" },
      { "producto": "Electrónica y TI", "tipo": "ad valorem", "valor": "5–10%" },
      { "producto": "Equipos eléctricos domésticos", "tipo": "ad valorem", "valor": "8–15%" },
      { "producto": "Materiales metálicos y siderúrgicos", "tipo": "ad valorem", "valor": "5–12%" },
      { "producto": "Productos químicos y petroquímicos", "tipo": "ad valorem", "valor": "5–12%" },
      { "producto": "Farmacéuticos y productos médicos", "tipo": "ad valorem", "valor": "0–5% (preferencial/exento parcial)" },
      { "producto": "Textiles y confección", "tipo": "ad valorem", "valor": "10–25%" },
      { "producto": "Calzado y artículos de cuero", "tipo": "ad valorem", "valor": "10–25%" },
      { "producto": "Muebles y artículos del hogar", "tipo": "ad valorem", "valor": "8–15%" },
      { "producto": "Cosméticos y limpieza", "tipo": "ad valorem", "valor": "5–12%" },
      { "producto": "Productos agrícolas primarios", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Carne y productos animales", "tipo": "ad valorem", "valor": "15–30%" },
      { "producto": "Lácteos y derivados", "tipo": "ad valorem", "valor": "20–35%" },
      { "producto": "Pescado y marisco", "tipo": "ad valorem", "valor": "8–15%" },
      { "producto": "Aceites y grasas vegetales", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Alimentos procesados", "tipo": "ad valorem", "valor": "10–20%" },
      { "producto": "Bebidas no alcohólicas", "tipo": "ad valorem", "valor": "8–15%" },
      { "producto": "Bebidas alcohólicas", "tipo": "ad valorem", "valor": "25–40% + impuestos internos" },
      { "producto": "Minerales y productos mineros", "tipo": "ad valorem", "valor": "0–8%" },
      { "producto": "Energía y combustibles", "tipo": "ad valorem", "valor": "0–5%" },
      { "producto": "Materiales de construcción", "tipo": "ad valorem", "valor": "8–15%" },
      { "producto": "Madera y productos forestales", "tipo": "ad valorem", "valor": "8–15%" }
    ]
  },
  {
    "pais1": "Rusia",
    "pais2": "Chile",
    "arancelesPais1ImportandoPais2": arancelesBaseChileGrupo2,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Turquía",
    "pais2": "Chile",
    "arancelesPais1ImportandoPais2": arancelesBaseChileGrupo2,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Venezuela",
    "pais2": "Chile",
    "arancelesPais1ImportandoPais2": arancelesBaseChileGrupo2,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Tailandia",
    "pais2": "Chile",
    "arancelesPais1ImportandoPais2": arancelesBaseChileGrupo1,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Arabia Saudita",
    "pais2": "Perú",
    "arancelesPais1ImportandoPais2": arancelesBasePeru,
    "arancelesPais2ImportandoPais1": arancelesBaseArabiaSaudita
  },
  {
    "pais1": "Bolivia",
    "pais2": "Perú",
    "arancelesPais1ImportandoPais2": arancelesBasePeru,
    "arancelesPais2ImportandoPais1": arancelesBaseBolivia
  },
  {
    "pais1": "Bosnia y Herzegovina",
    "pais2": "Perú",
    "arancelesPais1ImportandoPais2": arancelesBasePeru,
    "arancelesPais2ImportandoPais1": arancelesBaseBosnia
  },
  {
    "pais1": "Costa de Marfil",
    "pais2": "Perú",
    "arancelesPais1ImportandoPais2": arancelesBasePeru,
    "arancelesPais2ImportandoPais1": arancelesBaseCostaDeMarfil
  },
  {
    "pais1": "Egipto",
    "pais2": "Perú",
    "arancelesPais1ImportandoPais2": arancelesBasePeru,
    "arancelesPais2ImportandoPais1": arancelesBaseEgipto
  },
  {
    "pais1": "Emiratos Árabes Unidos",
    "pais2": "Perú",
    "arancelesPais1ImportandoPais2": arancelesBasePeru,
    "arancelesPais2ImportandoPais1": arancelesBaseEAU
  },
  {
    "pais1": "Filipinas",
    "pais2": "Perú",
    "arancelesPais1ImportandoPais2": arancelesBasePeru,
    "arancelesPais2ImportandoPais1": arancelesBaseFilipinas
  },
  {
    "pais1": "India",
    "pais2": "Perú",
    "arancelesPais1ImportandoPais2": arancelesBasePeru,
    "arancelesPais2ImportandoPais1": arancelesBaseIndia
  },
  {
    "pais1": "Indonesia",
    "pais2": "Perú",
    "arancelesPais1ImportandoPais2": arancelesBasePeru,
    "arancelesPais2ImportandoPais1": arancelesBaseIndonesia
  },
  {
    "pais1": "Israel",
    "pais2": "Perú",
    "arancelesPais1ImportandoPais2": arancelesBasePeru,
    "arancelesPais2ImportandoPais1": arancelesBaseIsrael
  },
  {
    "pais1": "Jamaica",
    "pais2": "Perú",
    "arancelesPais1ImportandoPais2": arancelesBasePeru,
    "arancelesPais2ImportandoPais1": arancelesBaseJamaica
  },
  {
    "pais1": "Líbano",
    "pais2": "Perú",
    "arancelesPais1ImportandoPais2": arancelesBasePeru,
    "arancelesPais2ImportandoPais1": arancelesBaseLibano
  },
  {
    "pais1": "Qatar",
    "pais2": "Perú",
    "arancelesPais1ImportandoPais2": arancelesBasePeru,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Rusia",
    "pais2": "Perú",
    "arancelesPais1ImportandoPais2": arancelesBasePeru,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Perú",
    "arancelesPais1ImportandoPais2": arancelesBasePeru,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Tailandia",
    "pais2": "Perú",
    "arancelesPais1ImportandoPais2": arancelesBasePeru,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Turquía",
    "pais2": "Perú",
    "arancelesPais1ImportandoPais2": arancelesBasePeru,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Venezuela",
    "pais2": "Perú",
    "arancelesPais1ImportandoPais2": arancelesBasePeru,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Vietnam",
    "pais2": "Perú",
    "arancelesPais1ImportandoPais2": arancelesBasePeru,
    "arancelesPais2ImportandoPais1": arancelesBaseVietnam
  },
  {
    "pais1": "Marruecos",
    "pais2": "Perú",
    "arancelesPais1ImportandoPais2": arancelesBasePeru,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
  {
    "pais1": "Arabia Saudita",
    "pais2": "Colombia",
    "arancelesPais1ImportandoPais2": arancelesBaseColombia,
    "arancelesPais2ImportandoPais1": arancelesBaseArabiaSaudita
  },
  {
    "pais1": "Argelia",
    "pais2": "Colombia",
    "arancelesPais1ImportandoPais2": arancelesBaseColombia,
    "arancelesPais2ImportandoPais1": arancelesBaseArgelia
  },
  {
    "pais1": "Bosnia y Herzegovina",
    "pais2": "Colombia",
    "arancelesPais1ImportandoPais2": arancelesBaseColombia,
    "arancelesPais2ImportandoPais1": arancelesBaseBosnia
  },
  {
    "pais1": "Corea del Sur",
    "pais2": "Colombia",
    "arancelesPais1ImportandoPais2": arancelesBaseColombia,
    "arancelesPais2ImportandoPais1": arancelesBaseCoreaDelSur
  },
  {
    "pais1": "Costa de Marfil",
    "pais2": "Colombia",
    "arancelesPais1ImportandoPais2": arancelesBaseColombia,
    "arancelesPais2ImportandoPais1": arancelesBaseCostaDeMarfil
  },
  {
    "pais1": "Egipto",
    "pais2": "Colombia",
    "arancelesPais1ImportandoPais2": arancelesBaseColombia,
    "arancelesPais2ImportandoPais1": arancelesBaseEgipto
  },
  {
    "pais1": "Emiratos Árabes Unidos",
    "pais2": "Colombia",
    "arancelesPais1ImportandoPais2": arancelesBaseColombia,
    "arancelesPais2ImportandoPais1": arancelesBaseEAU
  },
  {
    "pais1": "Filipinas",
    "pais2": "Colombia",
    "arancelesPais1ImportandoPais2": arancelesBaseColombia,
    "arancelesPais2ImportandoPais1": arancelesBaseFilipinas
  },
  {
    "pais1": "India",
    "pais2": "Colombia",
    "arancelesPais1ImportandoPais2": arancelesBaseColombia,
    "arancelesPais2ImportandoPais1": arancelesBaseIndia
  },
  {
    "pais1": "Indonesia",
    "pais2": "Colombia",
    "arancelesPais1ImportandoPais2": arancelesBaseColombia,
    "arancelesPais2ImportandoPais1": arancelesBaseIndonesia
  },
  {
    "pais1": "Japón",
    "pais2": "Colombia",
    "arancelesPais1ImportandoPais2": arancelesBaseColombia,
    "arancelesPais2ImportandoPais1": arancelesBaseJapon
  },
  {
    "pais1": "Líbano",
    "pais2": "Colombia",
    "arancelesPais1ImportandoPais2": arancelesBaseColombia,
    "arancelesPais2ImportandoPais1": arancelesBaseLibano
  },
  {
    "pais1": "Qatar",
    "pais2": "Colombia",
    "arancelesPais1ImportandoPais2": arancelesBaseColombia,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Rusia",
    "pais2": "Colombia",
    "arancelesPais1ImportandoPais2": arancelesBaseColombia,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Singapur",
    "pais2": "Colombia",
    "arancelesPais1ImportandoPais2": arancelesBaseColombia,
    "arancelesPais2ImportandoPais1": arancelesBaseSingapur
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Colombia",
    "arancelesPais1ImportandoPais2": arancelesBaseColombia,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Tailandia",
    "pais2": "Colombia",
    "arancelesPais1ImportandoPais2": arancelesBaseColombia,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Turquía",
    "pais2": "Colombia",
    "arancelesPais1ImportandoPais2": arancelesBaseColombia,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Venezuela",
    "pais2": "Colombia",
    "arancelesPais1ImportandoPais2": arancelesBaseColombia,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Marruecos",
    "pais2": "Colombia",
    "arancelesPais1ImportandoPais2": arancelesBaseColombia,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
  {
    "pais1": "Argelia",
    "pais2": "Noruega, Suiza",
    "arancelesPais1ImportandoPais2": arancelesBaseEFTA,
    "arancelesPais2ImportandoPais1": arancelesBaseArgelia
  },
  {
    "pais1": "Australia",
    "pais2": "Noruega, Suiza",
    "arancelesPais1ImportandoPais2": arancelesBaseEFTA,
    "arancelesPais2ImportandoPais1": arancelesBaseAustralia
  },
  {
    "pais1": "Cuba",
    "pais2": "Noruega, Suiza",
    "arancelesPais1ImportandoPais2": arancelesBaseEFTA,
    "arancelesPais2ImportandoPais1": arancelesBaseCuba
  },
  {
    "pais1": "República Dominicana",
    "pais2": "Noruega, Suiza",
    "arancelesPais1ImportandoPais2": arancelesBaseEFTA,
    "arancelesPais2ImportandoPais1": arancelesBaseRepDominicana
  },
  {
    "pais1": "El Salvador",
    "pais2": "Noruega, Suiza",
    "arancelesPais1ImportandoPais2": arancelesBaseEFTA,
    "arancelesPais2ImportandoPais1": arancelesBaseElSalvador
  },
  {
    "pais1": "Canada",
    "pais2": "Noruega, Suiza",
    "arancelesPais1ImportandoPais2": arancelesBaseEFTA,
    "arancelesPais2ImportandoPais1": arancelesBaseCanada
  },
  {
    "pais1": "China",
    "pais2": "Noruega, Suiza",
    "arancelesPais1ImportandoPais2": arancelesBaseEFTA,
    "arancelesPais2ImportandoPais1": arancelesBaseChina
  },
  {
    "pais1": "Costa de Marfil",
    "pais2": "Noruega, Suiza",
    "arancelesPais1ImportandoPais2": arancelesBaseEFTA,
    "arancelesPais2ImportandoPais1": arancelesBaseCostaDeMarfil
  },
  {
    "pais1": "India",
    "pais2": "Noruega, Suiza",
    "arancelesPais1ImportandoPais2": arancelesBaseEFTA,
    "arancelesPais2ImportandoPais1": arancelesBaseIndia
  },
  {
    "pais1": "Jamaica",
    "pais2": "Noruega, Suiza",
    "arancelesPais1ImportandoPais2": arancelesBaseEFTA,
    "arancelesPais2ImportandoPais1": arancelesBaseJamaica
  },
  {
    "pais1": "Japón",
    "pais2": "Noruega,",
    "arancelesPais1ImportandoPais2": arancelesBaseEFTA,
    "arancelesPais2ImportandoPais1": arancelesBaseJapon
  },
  {
    "pais1": "Kazajistán",
    "pais2": "Noruega, Suiza",
    "arancelesPais1ImportandoPais2": arancelesBaseEFTA,
    "arancelesPais2ImportandoPais1": arancelesBaseKazajistan
  },
  {
    "pais1": "Líbano",
    "pais2": "Noruega, Suiza",
    "arancelesPais1ImportandoPais2": arancelesBaseEFTA,
    "arancelesPais2ImportandoPais1": arancelesBaseLibano
  },
  {
    "pais1": "México",
    "pais2": "Noruega, Suiza",
    "arancelesPais1ImportandoPais2": arancelesBaseEFTA,
    "arancelesPais2ImportandoPais1": arancelesBaseMexico
  },
  {
    "pais1": "Nicaragua",
    "pais2": "Noruega, Suiza",
    "arancelesPais1ImportandoPais2": arancelesBaseEFTA,
    "arancelesPais2ImportandoPais1": arancelesBaseNicaragua
  },
  {
    "pais1": "Rusia",
    "pais2": "Noruega, Suiza",
    "arancelesPais1ImportandoPais2": arancelesBaseEFTA,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Tailandia",
    "pais2": "Noruega, Suiza",
    "arancelesPais1ImportandoPais2": arancelesBaseEFTA,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Venezuela",
    "pais2": "Noruega, Suiza",
    "arancelesPais1ImportandoPais2": arancelesBaseEFTA,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Arabia Saudita",
    "pais2": "Corea del Sur",
    "arancelesPais1ImportandoPais2": arancelesBaseCoreaDelSur,
    "arancelesPais2ImportandoPais1": arancelesBaseArabiaSaudita
  },
  {
    "pais1": "Bolivia",
    "pais2": "Corea del Sur",
    "arancelesPais1ImportandoPais2": arancelesBaseCoreaDelSur,
    "arancelesPais2ImportandoPais1": arancelesBaseBolivia
  },
  {
    "pais1": "Bosnia y Herzegovina",
    "pais2": "Corea del Sur",
    "arancelesPais1ImportandoPais2": arancelesBaseCoreaDelSur,
    "arancelesPais2ImportandoPais1": arancelesBaseBosnia
  },
  {
    "pais1": "Costa de marfil",
    "pais2": "Corea del Sur",
    "arancelesPais1ImportandoPais2": arancelesBaseCoreaDelSur,
    "arancelesPais2ImportandoPais1": arancelesBaseCostaDeMarfil
  },
  {
    "pais1": "Cuba",
    "pais2": "Corea del Sur",
    "arancelesPais1ImportandoPais2": arancelesBaseCoreaDelSur,
    "arancelesPais2ImportandoPais1": arancelesBaseCuba
  },
  {
    "pais1": "República Dominicana",
    "pais2": "Corea del Sur",
    "arancelesPais1ImportandoPais2": arancelesBaseCoreaDelSur,
    "arancelesPais2ImportandoPais1": arancelesBaseRepDominicana
  },
  {
    "pais1": "Egipto",
    "pais2": "Corea del Sur",
    "arancelesPais1ImportandoPais2": arancelesBaseCoreaDelSur,
    "arancelesPais2ImportandoPais1": arancelesBaseEgipto
  },
  {
    "pais1": "Emiratos Árabes Unidos",
    "pais2": "Corea del Sur",
    "arancelesPais1ImportandoPais2": arancelesBaseCoreaDelSur,
    "arancelesPais2ImportandoPais1": arancelesBaseEAU
  },
  {
    "pais1": "El Salvador",
    "pais2": "Corea del Sur",
    "arancelesPais1ImportandoPais2": arancelesBaseCoreaDelSur,
    "arancelesPais2ImportandoPais1": arancelesBaseElSalvador
  },
  {
    "pais1": "Guatemala",
    "pais2": "Corea del Sur",
    "arancelesPais1ImportandoPais2": arancelesBaseCoreaDelSur,
    "arancelesPais2ImportandoPais1": arancelesBaseGuatemala
  },
  {
    "pais1": "Israel",
    "pais2": "Corea del Sur",
    "arancelesPais1ImportandoPais2": arancelesBaseCoreaDelSur,
    "arancelesPais2ImportandoPais1": arancelesBaseIsrael
  },
  {
    "pais1": "Jamaica",
    "pais2": "Corea del Sur",
    "arancelesPais1ImportandoPais2": arancelesBaseCoreaDelSur,
    "arancelesPais2ImportandoPais1": arancelesBaseJamaica
  },
  {
    "pais1": "Líbano",
    "pais2": "Corea del Sur",
    "arancelesPais1ImportandoPais2": arancelesBaseCoreaDelSur,
    "arancelesPais2ImportandoPais1": arancelesBaseLibano
  },
  {
    "pais1": "Nicaragua",
    "pais2": "Corea del Sur",
    "arancelesPais1ImportandoPais2": arancelesBaseCoreaDelSur,
    "arancelesPais2ImportandoPais1": arancelesBaseNicaragua
  },
  {
    "pais1": "Qatar",
    "pais2": "Corea del Sur",
    "arancelesPais1ImportandoPais2": arancelesBaseCoreaDelSur,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Rusia",
    "pais2": "Corea del Sur",
    "arancelesPais1ImportandoPais2": arancelesBaseCoreaDelSur,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Corea del Sur",
    "arancelesPais1ImportandoPais2": arancelesBaseCoreaDelSur,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Venezuela",
    "pais2": "Corea del Sur",
    "arancelesPais1ImportandoPais2": arancelesBaseCoreaDelSur,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Marruecos",
    "pais2": "Corea del Sur",
    "arancelesPais1ImportandoPais2": arancelesBaseCoreaDelSur,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
  {
    "pais1": "Argelia",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBaseArgelia
  },
  {
    "pais1": "Bolivia",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBaseBolivia
  },
  {
    "pais1": "Bosnia y Herzegovina",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBaseBosnia
  },
  {
    "pais1": "Costa de Marfil",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBaseCostaDeMarfil
  },
  {
    "pais1": "Costa Rica",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBaseCostaRica
  },
  {
    "pais1": "Cuba",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBaseCuba
  },
  {
    "pais1": "República Dominicana",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBaseRepDominicana
  },
  {
    "pais1": "El Salvador",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBaseElSalvador
  },
  {
    "pais1": "Filipinas",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBaseFilipinas
  },
  {
    "pais1": "Guatemala",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBaseGuatemala
  },
  {
    "pais1": "Honduras",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBaseHonduras
  },
  {
    "pais1": "India",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBaseIndia
  },
  {
    "pais1": "Indonesia",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBaseIndonesia
  },
  {
    "pais1": "Israel",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBaseIsrael
  },
  {
    "pais1": "Jamaica",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBaseJamaica
  },
  {
    "pais1": "Japón",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBaseJapon
  },
  {
    "pais1": "Kazajistán",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBaseKazajistan
  },
  {
    "pais1": "Líbano",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBaseLibano
  },
  {
    "pais1": "Nicaragua",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBaseNicaragua
  },
  {
    "pais1": "Nueva Zelanda",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBaseNuevaZelanda
  },
  {
    "pais1": "Panamá",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBasePanama
  },
  {
    "pais1": "Reino Unido",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBaseReinoUnido
  },
  {
    "pais1": "Rusia",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Tailandia",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Turquía",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Venezuela",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Vietnam",
    "pais2": "Arabia Saudita",
    "arancelesPais1ImportandoPais2": arancelesBaseArabiaSaudita,
    "arancelesPais2ImportandoPais1": arancelesBaseVietnam
  },
  {
    "pais1": "Bosnia y Herzegovina",
    "pais2": "Argelia",
    "arancelesPais1ImportandoPais2": arancelesBaseArgelia,
    "arancelesPais2ImportandoPais1": arancelesBaseBosnia
  },
  {
    "pais1": "Costa Rica",
    "pais2": "Argelia",
    "arancelesPais1ImportandoPais2": arancelesBaseArgelia,
    "arancelesPais2ImportandoPais1": arancelesBaseCostaRica
  },
  {
    "pais1": "Cuba",
    "pais2": "Argelia",
    "arancelesPais1ImportandoPais2": arancelesBaseArgelia,
    "arancelesPais2ImportandoPais1": arancelesBaseCuba
  },
  {
    "pais1": "República Dominicana",
    "pais2": "Argelia",
    "arancelesPais1ImportandoPais2": arancelesBaseArgelia,
    "arancelesPais2ImportandoPais1": arancelesBaseRepDominicana
  },
  {
    "pais1": "El Salvador",
    "pais2": "Argelia",
    "arancelesPais1ImportandoPais2": arancelesBaseArgelia,
    "arancelesPais2ImportandoPais1": arancelesBaseElSalvador
  },
  {
    "pais1": "Guatemala",
    "pais2": "Argelia",
    "arancelesPais1ImportandoPais2": arancelesBaseArgelia,
    "arancelesPais2ImportandoPais1": arancelesBaseGuatemala
  },
  {
    "pais1": "Honduras",
    "pais2": "Argelia",
    "arancelesPais1ImportandoPais2": arancelesBaseArgelia,
    "arancelesPais2ImportandoPais1": arancelesBaseHonduras
  },
  {
    "pais1": "Israel",
    "pais2": "Argelia",
    "arancelesPais1ImportandoPais2": arancelesBaseArgelia,
    "arancelesPais2ImportandoPais1": arancelesBaseIsrael
  },
  {
    "pais1": "Japón",
    "pais2": "Argelia",
    "arancelesPais1ImportandoPais2": arancelesBaseArgelia,
    "arancelesPais2ImportandoPais1": arancelesBaseJapon
  },
  {
    "pais1": "Kazajistán",
    "pais2": "Argelia",
    "arancelesPais1ImportandoPais2": arancelesBaseArgelia,
    "arancelesPais2ImportandoPais1": arancelesBaseKazajistan
  },
  {
    "pais1": "Nueva Zelanda",
    "pais2": "Argelia",
    "arancelesPais1ImportandoPais2": arancelesBaseArgelia,
    "arancelesPais2ImportandoPais1": arancelesBaseNuevaZelanda
  },
  {
    "pais1": "Panamá",
    "pais2": "Argelia",
    "arancelesPais1ImportandoPais2": arancelesBaseArgelia,
    "arancelesPais2ImportandoPais1": arancelesBasePanama
  },
  {
    "pais1": "Rusia",
    "pais2": "Argelia",
    "arancelesPais1ImportandoPais2": arancelesBaseArgelia,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Turquía",
    "pais2": "Argelia",
    "arancelesPais1ImportandoPais2": arancelesBaseArgelia,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Bosnia y Herzegovina",
    "pais2": "Bolivia",
    "arancelesPais1ImportandoPais2": arancelesBaseBolivia,
    "arancelesPais2ImportandoPais1": arancelesBaseBosnia
  },
  {
    "pais1": "Costa de Marfil",
    "pais2": "Bolivia",
    "arancelesPais1ImportandoPais2": arancelesBaseBolivia,
    "arancelesPais2ImportandoPais1": arancelesBaseCostaDeMarfil
  },
  {
    "pais1": "Costa Rica",
    "pais2": "Bolivia",
    "arancelesPais1ImportandoPais2": arancelesBaseBolivia,
    "arancelesPais2ImportandoPais1": arancelesBaseCostaRica
  },
  {
    "pais1": "República Dominicana",
    "pais2": "Bolivia",
    "arancelesPais1ImportandoPais2": arancelesBaseBolivia,
    "arancelesPais2ImportandoPais1": arancelesBaseRepDominicana
  },
  {
    "pais1": "Emiratos Árabes Unidos",
    "pais2": "Bolivia",
    "arancelesPais1ImportandoPais2": arancelesBaseBolivia,
    "arancelesPais2ImportandoPais1": arancelesBaseEAU
  },
  {
    "pais1": "El Salvador",
    "pais2": "Bolivia",
    "arancelesPais1ImportandoPais2": arancelesBaseBolivia,
    "arancelesPais2ImportandoPais1": arancelesBaseElSalvador
  },
  {
    "pais1": "Guatemala",
    "pais2": "Bolivia",
    "arancelesPais1ImportandoPais2": arancelesBaseBolivia,
    "arancelesPais2ImportandoPais1": arancelesBaseGuatemala
  },
  {
    "pais1": "Honduras",
    "pais2": "Bolivia",
    "arancelesPais1ImportandoPais2": arancelesBaseBolivia,
    "arancelesPais2ImportandoPais1": arancelesBaseHonduras
  },
  {
    "pais1": "Israel",
    "pais2": "Bolivia",
    "arancelesPais1ImportandoPais2": arancelesBaseBolivia,
    "arancelesPais2ImportandoPais1": arancelesBaseIsrael
  },
  {
    "pais1": "Jamaica",
    "pais2": "Bolivia",
    "arancelesPais1ImportandoPais2": arancelesBaseBolivia,
    "arancelesPais2ImportandoPais1": arancelesBaseJamaica
  },
  {
    "pais1": "Japón",
    "pais2": "Bolivia",
    "arancelesPais1ImportandoPais2": arancelesBaseBolivia,
    "arancelesPais2ImportandoPais1": arancelesBaseJapon
  },
  {
    "pais1": "Kazajistán",
    "pais2": "Bolivia",
    "arancelesPais1ImportandoPais2": arancelesBaseBolivia,
    "arancelesPais2ImportandoPais1": arancelesBaseKazajistan
  },
  {
    "pais1": "Líbano",
    "pais2": "Bolivia",
    "arancelesPais1ImportandoPais2": arancelesBaseBolivia,
    "arancelesPais2ImportandoPais1": arancelesBaseLibano
  },
  {
    "pais1": "Nueva Zelanda",
    "pais2": "Bolivia",
    "arancelesPais1ImportandoPais2": arancelesBaseBolivia,
    "arancelesPais2ImportandoPais1": arancelesBaseNuevaZelanda
  },
  {
    "pais1": "Panamá",
    "pais2": "Bolivia",
    "arancelesPais1ImportandoPais2": arancelesBaseBolivia,
    "arancelesPais2ImportandoPais1": arancelesBasePanama
  },
  {
    "pais1": "Qatar",
    "pais2": "Bolivia",
    "arancelesPais1ImportandoPais2": arancelesBaseBolivia,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Rusia",
    "pais2": "Bolivia",
    "arancelesPais1ImportandoPais2": arancelesBaseBolivia,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Bolivia",
    "arancelesPais1ImportandoPais2": arancelesBaseBolivia,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Tailandia",
    "pais2": "Bolivia",
    "arancelesPais1ImportandoPais2": arancelesBaseBolivia,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Turquía",
    "pais2": "Bolivia",
    "arancelesPais1ImportandoPais2": arancelesBaseBolivia,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Costa de Marfil",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseCostaDeMarfil
  },
  {
    "pais1": "Costa Rica",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseCostaRica
  },
  {
    "pais1": "Cuba",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseCuba
  },
  {
    "pais1": "República Dominicana",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseRepDominicana
  },
  {
    "pais1": "Egipto",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseEgipto
  },
  {
    "pais1": "Emiratos Árabes Unidos",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseEAU
  },
  {
    "pais1": "El Salvador",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseElSalvador
  },
  {
    "pais1": "Estados Unidos",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseUSA_MFN
  },
  {
    "pais1": "Filipinas",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseFilipinas
  },
  {
    "pais1": "Guatemala",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseGuatemala
  },
  {
    "pais1": "Honduras",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseHonduras
  },
  {
    "pais1": "India",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseIndia
  },
  {
    "pais1": "Indonesia",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseIndonesia
  },
  {
    "pais1": "Israel",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseIsrael
  },
  {
    "pais1": "Jamaica",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseJamaica
  },
  {
    "pais1": "Japón",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseJapon
  },
  {
    "pais1": "Kazajistán",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseKazajistan
  },
  {
    "pais1": "Líbano",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseLibano
  },
  {
    "pais1": "Nicaragua",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseNicaragua
  },
  {
    "pais1": "Nueva Zelanda",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseNuevaZelanda
  },
  {
    "pais1": "Panamá",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBasePanama
  },
  {
    "pais1": "Qatar",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Rusia",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Singapur",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseSingapur
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Tailandia",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Venezuela",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Vietnam",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseVietnam
  },
  {
    "pais1": "Marruecos",
    "pais2": "Bosnia y Herzegovina",
    "arancelesPais1ImportandoPais2": arancelesBaseBosnia,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
  {
    "pais1": "Costa Rica",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBaseCostaRica
  },
  {
    "pais1": "Cuba",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBaseCuba
  },
  {
    "pais1": "República Dominicana",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBaseRepDominicana
  },
  {
    "pais1": "Emiratos Árabes Unidos",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBaseEAU
  },
  {
    "pais1": "El Salvador",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBaseElSalvador
  },
  {
    "pais1": "Filipinas",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBaseFilipinas
  },
  {
    "pais1": "Guatemala",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBaseGuatemala
  },
  {
    "pais1": "Honduras",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBaseHonduras
  },
  {
    "pais1": "India",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBaseIndia
  },
  {
    "pais1": "Indonesia",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBaseIndonesia
  },
  {
    "pais1": "Israel",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBaseIsrael
  },
  {
    "pais1": "Jamaica",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBaseJamaica
  },
  {
    "pais1": "Japón",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBaseJapon
  },
  {
    "pais1": "Kazajistán",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBaseKazajistan
  },
  {
    "pais1": "Líbano",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBaseCuba
  },
  {
    "pais1": "Nicaragua",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBaseNicaragua
  },
  {
    "pais1": "Nueva Zelanda",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBaseNuevaZelanda
  },
  {
    "pais1": "Panamá",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBasePanama
  },
  {
    "pais1": "Qatar",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Rusia",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Singapur",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBaseSingapur
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Tailandia",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Turquía",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Venezuela",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Vietnam",
    "pais2": "Costa de Marfil",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaDeMarfil,
    "arancelesPais2ImportandoPais1": arancelesBaseVietnam
  },
  {
    "pais1": "Cuba",
    "pais2": "Costa Rica",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaRica,
    "arancelesPais2ImportandoPais1": arancelesBaseCuba
  },
  {
    "pais1": "Emiratos Árabes Unidos",
    "pais2": "Costa Rica",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaRica,
    "arancelesPais2ImportandoPais1": arancelesBaseEAU
  },
  {
    "pais1": "Filipinas",
    "pais2": "Costa Rica",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaRica,
    "arancelesPais2ImportandoPais1": arancelesBaseFilipinas
  },
  {
    "pais1": "India",
    "pais2": "Costa Rica",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaRica,
    "arancelesPais2ImportandoPais1": arancelesBaseIndia
  },
  {
    "pais1": "Indonesia",
    "pais2": "Costa Rica",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaRica,
    "arancelesPais2ImportandoPais1": arancelesBaseIndonesia
  },
  {
    "pais1": "Israel",
    "pais2": "Costa Rica",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaRica,
    "arancelesPais2ImportandoPais1": arancelesBaseIsrael
  },
  {
    "pais1": "Japón",
    "pais2": "Costa Rica",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaRica,
    "arancelesPais2ImportandoPais1": arancelesBaseJapon
  },
  {
    "pais1": "Kazajistán",
    "pais2": "Costa Rica",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaRica,
    "arancelesPais2ImportandoPais1": arancelesBaseKazajistan
  },
  {
    "pais1": "Líbano",
    "pais2": "Costa Rica",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaRica,
    "arancelesPais2ImportandoPais1": arancelesBaseCuba
  },
  {
    "pais1": "Nueva Zelanda",
    "pais2": "Costa Rica",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaRica,
    "arancelesPais2ImportandoPais1": arancelesBaseNuevaZelanda
  },
  {
    "pais1": "Qatar",
    "pais2": "Costa Rica",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaRica,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Rusia",
    "pais2": "Costa Rica",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaRica,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Costa Rica",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaRica,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Tailandia",
    "pais2": "Costa Rica",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaRica,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Turquía",
    "pais2": "Costa Rica",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaRica,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Venezuela",
    "pais2": "Costa Rica",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaRica,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Vietnam",
    "pais2": "Costa Rica",
    "arancelesPais1ImportandoPais2": arancelesBaseCostaRica,
    "arancelesPais2ImportandoPais1": arancelesBaseVietnam
  },
  {
    "pais1": "Emiratos Árabes Unidos",
    "pais2": "Cuba",
    "arancelesPais1ImportandoPais2": arancelesBaseCuba,
    "arancelesPais2ImportandoPais1": arancelesBaseEAU
  },
  {
    "pais1": "Israel",
    "pais2": "Cuba",
    "arancelesPais1ImportandoPais2": arancelesBaseCuba,
    "arancelesPais2ImportandoPais1": arancelesBaseIsrael
  },
  {
    "pais1": "Japón",
    "pais2": "Cuba",
    "arancelesPais1ImportandoPais2": arancelesBaseCuba,
    "arancelesPais2ImportandoPais1": arancelesBaseJapon
  },
  {
    "pais1": "Kazajistán",
    "pais2": "Cuba",
    "arancelesPais1ImportandoPais2": arancelesBaseCuba,
    "arancelesPais2ImportandoPais1": arancelesBaseKazajistan
  },
  {
    "pais1": "Líbano",
    "pais2": "Cuba",
    "arancelesPais1ImportandoPais2": arancelesBaseCuba,
    "arancelesPais2ImportandoPais1": arancelesBaseCuba
  },
  {
    "pais1": "Nueva Zelanda",
    "pais2": "Cuba",
    "arancelesPais1ImportandoPais2": arancelesBaseCuba,
    "arancelesPais2ImportandoPais1": arancelesBaseNuevaZelanda
  },
  {
    "pais1": "Qatar",
    "pais2": "Cuba",
    "arancelesPais1ImportandoPais2": arancelesBaseCuba,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Rusia",
    "pais2": "Cuba",
    "arancelesPais1ImportandoPais2": arancelesBaseCuba,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Cuba",
    "arancelesPais1ImportandoPais2": arancelesBaseCuba,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Tailandia",
    "pais2": "Cuba",
    "arancelesPais1ImportandoPais2": arancelesBaseCuba,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Turquía",
    "pais2": "Cuba",
    "arancelesPais1ImportandoPais2": arancelesBaseCuba,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Vietnam",
    "pais2": "Cuba",
    "arancelesPais1ImportandoPais2": arancelesBaseCuba,
    "arancelesPais2ImportandoPais1": arancelesBaseVietnam
  },
  {
    "pais1": "Emiratos Árabes Unidos",
    "pais2": "República Dominicana",
    "arancelesPais1ImportandoPais2": arancelesBaseRepDominicana,
    "arancelesPais2ImportandoPais1": arancelesBaseEAU
  },
  {
    "pais1": "Israel",
    "pais2": "República Dominicana",
    "arancelesPais1ImportandoPais2": arancelesBaseRepDominicana,
    "arancelesPais2ImportandoPais1": arancelesBaseIsrael
  },
  {
    "pais1": "Japón",
    "pais2": "República Dominicana",
    "arancelesPais1ImportandoPais2": arancelesBaseRepDominicana,
    "arancelesPais2ImportandoPais1": arancelesBaseJapon
  },
  {
    "pais1": "Kazajistán",
    "pais2": "República Dominicana",
    "arancelesPais1ImportandoPais2": arancelesBaseRepDominicana,
    "arancelesPais2ImportandoPais1": arancelesBaseKazajistan
  },
  {
    "pais1": "Líbano",
    "pais2": "República Dominicana",
    "arancelesPais1ImportandoPais2": arancelesBaseRepDominicana,
    "arancelesPais2ImportandoPais1": arancelesBaseRepDominicana
  },
  {
    "pais1": "Nueva Zelanda",
    "pais2": "República Dominicana",
    "arancelesPais1ImportandoPais2": arancelesBaseRepDominicana,
    "arancelesPais2ImportandoPais1": arancelesBaseNuevaZelanda
  },
  {
    "pais1": "Qatar",
    "pais2": "República Dominicana",
    "arancelesPais1ImportandoPais2": arancelesBaseRepDominicana,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Rusia",
    "pais2": "República Dominicana",
    "arancelesPais1ImportandoPais2": arancelesBaseRepDominicana,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "República Dominicana",
    "arancelesPais1ImportandoPais2": arancelesBaseRepDominicana,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Tailandia",
    "pais2": "República Dominicana",
    "arancelesPais1ImportandoPais2": arancelesBaseRepDominicana,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Turquía",
    "pais2": "República Dominicana",
    "arancelesPais1ImportandoPais2": arancelesBaseRepDominicana,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Vietnam",
    "pais2": "República Dominicana",
    "arancelesPais1ImportandoPais2": arancelesBaseRepDominicana,
    "arancelesPais2ImportandoPais1": arancelesBaseVietnam
  },
  {
    "pais1": "Bolivia",
    "pais2": "Egipto",
    "arancelesPais1ImportandoPais2": arancelesBaseEgipto,
    "arancelesPais2ImportandoPais1": arancelesBaseBolivia
  },
  {
    "pais1": "Costa Rica",
    "pais2": "Egipto",
    "arancelesPais1ImportandoPais2": arancelesBaseEgipto,
    "arancelesPais2ImportandoPais1": arancelesBaseCostaRica
  },
  {
    "pais1": "Bolivia",
    "pais2": "Egipto",
    "arancelesPais1ImportandoPais2": arancelesBaseEgipto,
    "arancelesPais2ImportandoPais1": arancelesBaseBolivia
  },
  {
    "pais1": "Cuba",
    "pais2": "Egipto",
    "arancelesPais1ImportandoPais2": arancelesBaseEgipto,
    "arancelesPais2ImportandoPais1": arancelesBaseCuba
  },
  {
    "pais1": "República Dominicana",
    "pais2": "Egipto",
    "arancelesPais1ImportandoPais2": arancelesBaseEgipto,
    "arancelesPais2ImportandoPais1": arancelesBaseRepDominicana
  },
  {
    "pais1": "El Salvador",
    "pais2": "Egipto",
    "arancelesPais1ImportandoPais2": arancelesBaseEgipto,
    "arancelesPais2ImportandoPais1": arancelesBaseElSalvador
  },
  {
    "pais1": "Filipinas",
    "pais2": "Egipto",
    "arancelesPais1ImportandoPais2": arancelesBaseEgipto,
    "arancelesPais2ImportandoPais1": arancelesBaseFilipinas
  },
  {
    "pais1": "Guatemala",
    "pais2": "Egipto",
    "arancelesPais1ImportandoPais2": arancelesBaseEgipto,
    "arancelesPais2ImportandoPais1": arancelesBaseGuatemala
  },
  {
    "pais1": "Honduras",
    "pais2": "Egipto",
    "arancelesPais1ImportandoPais2": arancelesBaseEgipto,
    "arancelesPais2ImportandoPais1": arancelesBaseHonduras
  },
  {
    "pais1": "India",
    "pais2": "Egipto",
    "arancelesPais1ImportandoPais2": arancelesBaseEgipto,
    "arancelesPais2ImportandoPais1": arancelesBaseIndia
  },
  {
    "pais1": "Indonesia",
    "pais2": "Egipto",
    "arancelesPais1ImportandoPais2": arancelesBaseEgipto,
    "arancelesPais2ImportandoPais1": arancelesBaseBolivia
  },
  {
    "pais1": "Israel",
    "pais2": "Egipto",
    "arancelesPais1ImportandoPais2": arancelesBaseEgipto,
    "arancelesPais2ImportandoPais1": arancelesBaseIsrael
  },
  {
    "pais1": "Jamaica",
    "pais2": "Egipto",
    "arancelesPais1ImportandoPais2": arancelesBaseEgipto,
    "arancelesPais2ImportandoPais1": arancelesBaseJamaica
  },
  {
    "pais1": "Japón",
    "pais2": "Egipto",
    "arancelesPais1ImportandoPais2": arancelesBaseEgipto,
    "arancelesPais2ImportandoPais1": arancelesBaseJapon
  },
  {
    "pais1": "Kazajistán",
    "pais2": "Egipto",
    "arancelesPais1ImportandoPais2": arancelesBaseEgipto,
    "arancelesPais2ImportandoPais1": arancelesBaseKazajistan
  },
  {
    "pais1": "Nicaragua",
    "pais2": "Egipto",
    "arancelesPais1ImportandoPais2": arancelesBaseEgipto,
    "arancelesPais2ImportandoPais1": arancelesBaseNicaragua
  },
  {
    "pais1": "Nueva Zelanda",
    "pais2": "Egipto",
    "arancelesPais1ImportandoPais2": arancelesBaseEgipto,
    "arancelesPais2ImportandoPais1": arancelesBaseNuevaZelanda
  },
  {
    "pais1": "Panamá",
    "pais2": "Egipto",
    "arancelesPais1ImportandoPais2": arancelesBaseEgipto,
    "arancelesPais2ImportandoPais1": arancelesBasePanama
  },
  {
    "pais1": "Perú",
    "pais2": "Egipto",
    "arancelesPais1ImportandoPais2": arancelesBaseEgipto,
    "arancelesPais2ImportandoPais1": arancelesBasePeru
  },
  {
    "pais1": "Singapur",
    "pais2": "Egipto",
    "arancelesPais1ImportandoPais2": arancelesBaseEgipto,
    "arancelesPais2ImportandoPais1": arancelesBaseSingapur
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Egipto",
    "arancelesPais1ImportandoPais2": arancelesBaseEgipto,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Tailandia",
    "pais2": "Egipto",
    "arancelesPais1ImportandoPais2": arancelesBaseEgipto,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Venezuela",
    "pais2": "Egipto",
    "arancelesPais1ImportandoPais2": arancelesBaseEgipto,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Vietnam",
    "pais2": "Egipto",
    "arancelesPais1ImportandoPais2": arancelesBaseEgipto,
    "arancelesPais2ImportandoPais1": arancelesBaseVietnam
  },
  {
    "pais1": "El Salvador",
    "pais2": "Emiratos Árabes Unidos",
    "arancelesPais1ImportandoPais2": arancelesBaseEAU,
    "arancelesPais2ImportandoPais1": arancelesBaseElSalvador
  },
  {
    "pais1": "Filipinas",
    "pais2": "Emiratos Árabes Unidos",
    "arancelesPais1ImportandoPais2": arancelesBaseEAU,
    "arancelesPais2ImportandoPais1": arancelesBaseFilipinas
  },
  {
    "pais1": "Guatemala",
    "pais2": "Emiratos Árabes Unidos",
    "arancelesPais1ImportandoPais2": arancelesBaseEAU,
    "arancelesPais2ImportandoPais1": arancelesBaseGuatemala
  },
  {
    "pais1": "Honduras",
    "pais2": "Emiratos Árabes Unidos",
    "arancelesPais1ImportandoPais2": arancelesBaseEAU,
    "arancelesPais2ImportandoPais1": arancelesBaseHonduras
  },
  {
    "pais1": "Jamaica",
    "pais2": "Emiratos Árabes Unidos",
    "arancelesPais1ImportandoPais2": arancelesBaseEAU,
    "arancelesPais2ImportandoPais1": arancelesBaseJamaica
  },
  {
    "pais1": "Japón",
    "pais2": "Emiratos Árabes Unidos",
    "arancelesPais1ImportandoPais2": arancelesBaseEAU,
    "arancelesPais2ImportandoPais1": arancelesBaseJapon
  },
  {
    "pais1": "Kazajistán",
    "pais2": "Emiratos Árabes Unidos",
    "arancelesPais1ImportandoPais2": arancelesBaseEAU,
    "arancelesPais2ImportandoPais1": arancelesBaseKazajistan
  },
  {
    "pais1": "Líbano",
    "pais2": "Emiratos Árabes Unidos",
    "arancelesPais1ImportandoPais2": arancelesBaseEAU,
    "arancelesPais2ImportandoPais1": arancelesBaseLibano
  },
  {
    "pais1": "Nicaragua",
    "pais2": "Emiratos Árabes Unidos",
    "arancelesPais1ImportandoPais2": arancelesBaseEAU,
    "arancelesPais2ImportandoPais1": arancelesBaseNicaragua
  },
  {
    "pais1": "Panamá",
    "pais2": "Emiratos Árabes Unidos",
    "arancelesPais1ImportandoPais2": arancelesBaseEAU,
    "arancelesPais2ImportandoPais1": arancelesBasePanama
  },
  {
    "pais1": "Rusia",
    "pais2": "Emiratos Árabes Unidos",
    "arancelesPais1ImportandoPais2": arancelesBaseEAU,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Emiratos Árabes Unidos",
    "arancelesPais1ImportandoPais2": arancelesBaseEAU,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Tailandia",
    "pais2": "Emiratos Árabes Unidos",
    "arancelesPais1ImportandoPais2": arancelesBaseEAU,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Venezuela",
    "pais2": "Emiratos Árabes Unidos",
    "arancelesPais1ImportandoPais2": arancelesBaseEAU,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Vietnam",
    "pais2": "Emiratos Árabes Unidos",
    "arancelesPais1ImportandoPais2": arancelesBaseEAU,
    "arancelesPais2ImportandoPais1": arancelesBaseVietnam
  },
  {
    "pais1": "Australia",
    "pais2": "El Salvador",
    "arancelesPais1ImportandoPais2": arancelesBaseElSalvador,
    "arancelesPais2ImportandoPais1": arancelesBaseAustralia
  },
  {
    "pais1": "Filipinas",
    "pais2": "El Salvador",
    "arancelesPais1ImportandoPais2": arancelesBaseElSalvador,
    "arancelesPais2ImportandoPais1": arancelesBaseFilipinas
  },
  {
    "pais1": "India",
    "pais2": "El Salvador",
    "arancelesPais1ImportandoPais2": arancelesBaseElSalvador,
    "arancelesPais2ImportandoPais1": arancelesBaseIndia
  },
  {
    "pais1": "Indonesia",
    "pais2": "El Salvador",
    "arancelesPais1ImportandoPais2": arancelesBaseElSalvador,
    "arancelesPais2ImportandoPais1": arancelesBaseIndonesia
  },
  {
    "pais1": "Israel",
    "pais2": "El Salvador",
    "arancelesPais1ImportandoPais2": arancelesBaseElSalvador,
    "arancelesPais2ImportandoPais1": arancelesBaseIsrael
  },
  {
    "pais1": "Jamaica",
    "pais2": "El Salvador",
    "arancelesPais1ImportandoPais2": arancelesBaseElSalvador,
    "arancelesPais2ImportandoPais1": arancelesBaseJamaica
  },
  {
    "pais1": "Japón",
    "pais2": "El Salvador",
    "arancelesPais1ImportandoPais2": arancelesBaseElSalvador,
    "arancelesPais2ImportandoPais1": arancelesBaseJapon
  },
  {
    "pais1": "Kazajistán",
    "pais2": "El Salvador",
    "arancelesPais1ImportandoPais2": arancelesBaseElSalvador,
    "arancelesPais2ImportandoPais1": arancelesBaseKazajistan
  },
  {
    "pais1": "Líbano",
    "pais2": "El Salvador",
    "arancelesPais1ImportandoPais2": arancelesBaseElSalvador,
    "arancelesPais2ImportandoPais1": arancelesBaseLibano
  },
  {
    "pais1": "Nueva Zelanda",
    "pais2": "El Salvador",
    "arancelesPais1ImportandoPais2": arancelesBaseElSalvador,
    "arancelesPais2ImportandoPais1": arancelesBaseNuevaZelanda
  },
  {
    "pais1": "Panamá",
    "pais2": "El Salvador",
    "arancelesPais1ImportandoPais2": arancelesBaseElSalvador,
    "arancelesPais2ImportandoPais1": arancelesBasePanama
  },
  {
    "pais1": "Qatar",
    "pais2": "El Salvador",
    "arancelesPais1ImportandoPais2": arancelesBaseElSalvador,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Reino Unido",
    "pais2": "El Salvador",
    "arancelesPais1ImportandoPais2": arancelesBaseElSalvador,
    "arancelesPais2ImportandoPais1": arancelesBaseReinoUnido
  },
  {
    "pais1": "Rusia",
    "pais2": "El Salvador",
    "arancelesPais1ImportandoPais2": arancelesBaseElSalvador,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Singapur",
    "pais2": "El Salvador",
    "arancelesPais1ImportandoPais2": arancelesBaseElSalvador,
    "arancelesPais2ImportandoPais1": arancelesBaseSingapur
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "El Salvador",
    "arancelesPais1ImportandoPais2": arancelesBaseElSalvador,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Tailandia",
    "pais2": "El Salvador",
    "arancelesPais1ImportandoPais2": arancelesBaseElSalvador,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Turquía",
    "pais2": "El Salvador",
    "arancelesPais1ImportandoPais2": arancelesBaseElSalvador,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Venezuela",
    "pais2": "El Salvador",
    "arancelesPais1ImportandoPais2": arancelesBaseElSalvador,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Vietnam",
    "pais2": "El Salvador",
    "arancelesPais1ImportandoPais2": arancelesBaseElSalvador,
    "arancelesPais2ImportandoPais1": arancelesBaseVietnam
  },
  {
    "pais1": "Marruecos",
    "pais2": "El Salvador",
    "arancelesPais1ImportandoPais2": arancelesBaseElSalvador,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
  {
    "pais1": "Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia Europea",
    "pais2": "Filipinas",
    "arancelesPais1ImportandoPais2": arancelesBaseFilipinas,
    "arancelesPais2ImportandoPais1": arancelesBaseUE_MFN
  },
  {
    "pais1": "Guatemala",
    "pais2": "Filipinas",
    "arancelesPais1ImportandoPais2": arancelesBaseFilipinas,
    "arancelesPais2ImportandoPais1": arancelesBaseGuatemala
  },
  {
    "pais1": "Honduras",
    "pais2": "Filipinas",
    "arancelesPais1ImportandoPais2": arancelesBaseFilipinas,
    "arancelesPais2ImportandoPais1": arancelesBaseHonduras
  },
  {
    "pais1": "Israel",
    "pais2": "Filipinas",
    "arancelesPais1ImportandoPais2": arancelesBaseFilipinas,
    "arancelesPais2ImportandoPais1": arancelesBaseIsrael
  },
  {
    "pais1": "Jamaica",
    "pais2": "Filipinas",
    "arancelesPais1ImportandoPais2": arancelesBaseFilipinas,
    "arancelesPais2ImportandoPais1": arancelesBaseJamaica
  },
  {
    "pais1": "Kazajistán",
    "pais2": "Filipinas",
    "arancelesPais1ImportandoPais2": arancelesBaseFilipinas,
    "arancelesPais2ImportandoPais1": arancelesBaseKazajistan
  },
  {
    "pais1": "Líbano",
    "pais2": "Filipinas",
    "arancelesPais1ImportandoPais2": arancelesBaseFilipinas,
    "arancelesPais2ImportandoPais1": arancelesBaseLibano
  },
  {
    "pais1": "Nicaragua",
    "pais2": "Filipinas",
    "arancelesPais1ImportandoPais2": arancelesBaseFilipinas,
    "arancelesPais2ImportandoPais1": arancelesBaseNicaragua
  },
  {
    "pais1": "Panamá",
    "pais2": "Filipinas",
    "arancelesPais1ImportandoPais2": arancelesBaseFilipinas,
    "arancelesPais2ImportandoPais1": arancelesBasePanama
  },
  {
    "pais1": "Qatar",
    "pais2": "Filipinas",
    "arancelesPais1ImportandoPais2": arancelesBaseFilipinas,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Rusia",
    "pais2": "Filipinas",
    "arancelesPais1ImportandoPais2": arancelesBaseFilipinas,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Filipinas",
    "arancelesPais1ImportandoPais2": arancelesBaseFilipinas,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Turquía",
    "pais2": "Filipinas",
    "arancelesPais1ImportandoPais2": arancelesBaseFilipinas,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Venezuela",
    "pais2": "Filipinas",
    "arancelesPais1ImportandoPais2": arancelesBaseFilipinas,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Marruecos",
    "pais2": "Filipinas",
    "arancelesPais1ImportandoPais2": arancelesBaseFilipinas,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
  {
    "pais1": "India",
    "pais2": "Guatemala",
    "arancelesPais1ImportandoPais2": arancelesBaseGuatemala,
    "arancelesPais2ImportandoPais1": arancelesBaseIndia
  },
  {
    "pais1": "Indonesia",
    "pais2": "Guatemala",
    "arancelesPais1ImportandoPais2": arancelesBaseGuatemala,
    "arancelesPais2ImportandoPais1": arancelesBaseIndonesia
  },
  {
    "pais1": "Jamaica",
    "pais2": "Guatemala",
    "arancelesPais1ImportandoPais2": arancelesBaseGuatemala,
    "arancelesPais2ImportandoPais1": arancelesBaseJamaica
  },
  {
    "pais1": "Japón",
    "pais2": "Guatemala",
    "arancelesPais1ImportandoPais2": arancelesBaseGuatemala,
    "arancelesPais2ImportandoPais1": arancelesBaseJapon
  },
  {
    "pais1": "Kazajistán",
    "pais2": "Guatemala",
    "arancelesPais1ImportandoPais2": arancelesBaseGuatemala,
    "arancelesPais2ImportandoPais1": arancelesBaseKazajistan
  },
  {
    "pais1": "Líbano",
    "pais2": "Guatemala",
    "arancelesPais1ImportandoPais2": arancelesBaseGuatemala,
    "arancelesPais2ImportandoPais1": arancelesBaseLibano
  },
  {
    "pais1": "Nicaragua",
    "pais2": "Guatemala",
    "arancelesPais1ImportandoPais2": arancelesBaseGuatemala,
    "arancelesPais2ImportandoPais1": arancelesBaseNicaragua
  },
  {
    "pais1": "Nueva Zelanda",
    "pais2": "Guatemala",
    "arancelesPais1ImportandoPais2": arancelesBaseGuatemala,
    "arancelesPais2ImportandoPais1": arancelesBaseNuevaZelanda
  },
  {
    "pais1": "Qatar",
    "pais2": "Guatemala",
    "arancelesPais1ImportandoPais2": arancelesBaseGuatemala,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Reino Unido",
    "pais2": "Guatemala",
    "arancelesPais1ImportandoPais2": arancelesBaseGuatemala,
    "arancelesPais2ImportandoPais1": arancelesBaseReinoUnido
  },
  {
    "pais1": "Rusia",
    "pais2": "Guatemala",
    "arancelesPais1ImportandoPais2": arancelesBaseGuatemala,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Singapur",
    "pais2": "Guatemala",
    "arancelesPais1ImportandoPais2": arancelesBaseGuatemala,
    "arancelesPais2ImportandoPais1": arancelesBaseSingapur
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Guatemala",
    "arancelesPais1ImportandoPais2": arancelesBaseGuatemala,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Tailandia",
    "pais2": "Guatemala",
    "arancelesPais1ImportandoPais2": arancelesBaseGuatemala,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Turquía",
    "pais2": "Guatemala",
    "arancelesPais1ImportandoPais2": arancelesBaseGuatemala,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Venezuela",
    "pais2": "Guatemala",
    "arancelesPais1ImportandoPais2": arancelesBaseGuatemala,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Vietnam",
    "pais2": "Guatemala",
    "arancelesPais1ImportandoPais2": arancelesBaseGuatemala,
    "arancelesPais2ImportandoPais1": arancelesBaseVietnam
  },
  {
    "pais1": "Marruecos",
    "pais2": "Guatemala",
    "arancelesPais1ImportandoPais2": arancelesBaseGuatemala,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
  {
    "pais1": "India",
    "pais2": "Honduras",
    "arancelesPais1ImportandoPais2": arancelesBaseHonduras,
    "arancelesPais2ImportandoPais1": arancelesBaseIndia
  },
  {
    "pais1": "Indonesia",
    "pais2": "Honduras",
    "arancelesPais1ImportandoPais2": arancelesBaseHonduras,
    "arancelesPais2ImportandoPais1": arancelesBaseIndonesia
  },
  {
    "pais1": "Israel",
    "pais2": "Honduras",
    "arancelesPais1ImportandoPais2": arancelesBaseHonduras,
    "arancelesPais2ImportandoPais1": arancelesBaseIsrael
  },
  {
    "pais1": "Jamaica",
    "pais2": "Honduras",
    "arancelesPais1ImportandoPais2": arancelesBaseHonduras,
    "arancelesPais2ImportandoPais1": arancelesBaseJamaica
  },
  {
    "pais1": "Japón",
    "pais2": "Honduras",
    "arancelesPais1ImportandoPais2": arancelesBaseHonduras,
    "arancelesPais2ImportandoPais1": arancelesBaseJapon
  },
  {
    "pais1": "Kazajistán",
    "pais2": "Honduras",
    "arancelesPais1ImportandoPais2": arancelesBaseHonduras,
    "arancelesPais2ImportandoPais1": arancelesBaseKazajistan
  },
  {
    "pais1": "Líbano",
    "pais2": "Honduras",
    "arancelesPais1ImportandoPais2": arancelesBaseHonduras,
    "arancelesPais2ImportandoPais1": arancelesBaseLibano
  },
  {
    "pais1": "Nueva Zelanda",
    "pais2": "Honduras",
    "arancelesPais1ImportandoPais2": arancelesBaseHonduras,
    "arancelesPais2ImportandoPais1": arancelesBaseNuevaZelanda
  },
  {
    "pais1": "Noruega, Suiza",
    "pais2": "Honduras",
    "arancelesPais1ImportandoPais2": arancelesBaseHonduras,
    "arancelesPais2ImportandoPais1": arancelesBaseEFTA
  },
  {
    "pais1": "Qatar",
    "pais2": "Honduras",
    "arancelesPais1ImportandoPais2": arancelesBaseHonduras,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Rusia",
    "pais2": "Honduras",
    "arancelesPais1ImportandoPais2": arancelesBaseHonduras,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Singapur",
    "pais2": "Honduras",
    "arancelesPais1ImportandoPais2": arancelesBaseHonduras,
    "arancelesPais2ImportandoPais1": arancelesBaseSingapur
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Honduras",
    "arancelesPais1ImportandoPais2": arancelesBaseHonduras,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Tailandia",
    "pais2": "Honduras",
    "arancelesPais1ImportandoPais2": arancelesBaseHonduras,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Turquía",
    "pais2": "Honduras",
    "arancelesPais1ImportandoPais2": arancelesBaseHonduras,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Venezuela",
    "pais2": "Honduras",
    "arancelesPais1ImportandoPais2": arancelesBaseHonduras,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Vietnam",
    "pais2": "Honduras",
    "arancelesPais1ImportandoPais2": arancelesBaseHonduras,
    "arancelesPais2ImportandoPais1": arancelesBaseVietnam
  },
  {
    "pais1": "Marruecos",
    "pais2": "Honduras",
    "arancelesPais1ImportandoPais2": arancelesBaseHonduras,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
  {
    "pais1": "Israel",
    "pais2": "India",
    "arancelesPais1ImportandoPais2": arancelesBaseIndia,
    "arancelesPais2ImportandoPais1": arancelesBaseIsrael
  },
  {
    "pais1": "Jamaica",
    "pais2": "India",
    "arancelesPais1ImportandoPais2": arancelesBaseIndia,
    "arancelesPais2ImportandoPais1": arancelesBaseJamaica
  },
  {
    "pais1": "Kazajistán",
    "pais2": "India",
    "arancelesPais1ImportandoPais2": arancelesBaseIndia,
    "arancelesPais2ImportandoPais1": arancelesBaseKazajistan
  },
  {
    "pais1": "Líbano",
    "pais2": "India",
    "arancelesPais1ImportandoPais2": arancelesBaseIndia,
    "arancelesPais2ImportandoPais1": arancelesBaseLibano
  },
  {
    "pais1": "Nicaragua",
    "pais2": "India",
    "arancelesPais1ImportandoPais2": arancelesBaseIndia,
    "arancelesPais2ImportandoPais1": arancelesBaseNicaragua
  },
  {
    "pais1": "Nueva Zelanda",
    "pais2": "India",
    "arancelesPais1ImportandoPais2": arancelesBaseIndia,
    "arancelesPais2ImportandoPais1": arancelesBaseNuevaZelanda
  },
  {
    "pais1": "Panamá",
    "pais2": "India",
    "arancelesPais1ImportandoPais2": arancelesBaseIndia,
    "arancelesPais2ImportandoPais1": arancelesBasePanama
  },
  {
    "pais1": "Perú",
    "pais2": "India",
    "arancelesPais1ImportandoPais2": arancelesBaseIndia,
    "arancelesPais2ImportandoPais1": arancelesBasePeru
  },
  {
    "pais1": "Qatar",
    "pais2": "India",
    "arancelesPais1ImportandoPais2": arancelesBaseIndia,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Rusia",
    "pais2": "India",
    "arancelesPais1ImportandoPais2": arancelesBaseIndia,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "India",
    "arancelesPais1ImportandoPais2": arancelesBaseIndia,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Turquía",
    "pais2": "India",
    "arancelesPais1ImportandoPais2": arancelesBaseIndia,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Venezuela",
    "pais2": "India",
    "arancelesPais1ImportandoPais2": arancelesBaseIndia,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Marruecos",
    "pais2": "India",
    "arancelesPais1ImportandoPais2": arancelesBaseIndia,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
  {
    "pais1": "Israel",
    "pais2": "Indonesia",
    "arancelesPais1ImportandoPais2": arancelesBaseIndonesia,
    "arancelesPais2ImportandoPais1": arancelesBaseIsrael
  },
  {
    "pais1": "Jamaica",
    "pais2": "Indonesia",
    "arancelesPais1ImportandoPais2": arancelesBaseIndonesia,
    "arancelesPais2ImportandoPais1": arancelesBaseJamaica
  },
  {
    "pais1": "Kazajistán",
    "pais2": "Indonesia",
    "arancelesPais1ImportandoPais2": arancelesBaseIndonesia,
    "arancelesPais2ImportandoPais1": arancelesBaseKazajistan
  },
  {
    "pais1": "Líbano",
    "pais2": "Indonesia",
    "arancelesPais1ImportandoPais2": arancelesBaseIndonesia,
    "arancelesPais2ImportandoPais1": arancelesBaseLibano
  },
  {
    "pais1": "Nicaragua",
    "pais2": "Indonesia",
    "arancelesPais1ImportandoPais2": arancelesBaseIndonesia,
    "arancelesPais2ImportandoPais1": arancelesBaseNicaragua
  },
  {
    "pais1": "Panamá",
    "pais2": "Indonesia",
    "arancelesPais1ImportandoPais2": arancelesBaseIndonesia,
    "arancelesPais2ImportandoPais1": arancelesBasePanama
  },
  {
    "pais1": "Qatar",
    "pais2": "Indonesia",
    "arancelesPais1ImportandoPais2": arancelesBaseIndonesia,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Rusia",
    "pais2": "Indonesia",
    "arancelesPais1ImportandoPais2": arancelesBaseIndonesia,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Indonesia",
    "arancelesPais1ImportandoPais2": arancelesBaseIndonesia,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Venezuela",
    "pais2": "Indonesia",
    "arancelesPais1ImportandoPais2": arancelesBaseIndonesia,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Jamaica",
    "pais2": "Israel",
    "arancelesPais1ImportandoPais2": arancelesBaseIsrael,
    "arancelesPais2ImportandoPais1": arancelesBaseJamaica
  },
  {
    "pais1": "Japón",
    "pais2": "Israel",
    "arancelesPais1ImportandoPais2": arancelesBaseIsrael,
    "arancelesPais2ImportandoPais1": arancelesBaseJapon
  },
  {
    "pais1": "Kazajistán",
    "pais2": "Israel",
    "arancelesPais1ImportandoPais2": arancelesBaseIsrael,
    "arancelesPais2ImportandoPais1": arancelesBaseKazajistan
  },
  {
    "pais1": "Líbano",
    "pais2": "Israel",
    "arancelesPais1ImportandoPais2": arancelesBaseIsrael,
    "arancelesPais2ImportandoPais1": arancelesBaseLibano
  },
  {
    "pais1": "Nicaragua",
    "pais2": "Israel",
    "arancelesPais1ImportandoPais2": arancelesBaseIsrael,
    "arancelesPais2ImportandoPais1": arancelesBaseNicaragua
  },
  {
    "pais1": "Nueva Zelanda",
    "pais2": "Israel",
    "arancelesPais1ImportandoPais2": arancelesBaseIsrael,
    "arancelesPais2ImportandoPais1": arancelesBaseNuevaZelanda
  },
  {
    "pais1": "Qatar",
    "pais2": "Israel",
    "arancelesPais1ImportandoPais2": arancelesBaseIsrael,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Rusia",
    "pais2": "Israel",
    "arancelesPais1ImportandoPais2": arancelesBaseIsrael,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Singapur",
    "pais2": "Israel",
    "arancelesPais1ImportandoPais2": arancelesBaseIsrael,
    "arancelesPais2ImportandoPais1": arancelesBaseSingapur
  },
  {
    "pais1": "Tailandia",
    "pais2": "Israel",
    "arancelesPais1ImportandoPais2": arancelesBaseIsrael,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Venezuela",
    "pais2": "Israel",
    "arancelesPais1ImportandoPais2": arancelesBaseIsrael,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Vietnam",
    "pais2": "Israel",
    "arancelesPais1ImportandoPais2": arancelesBaseIsrael,
    "arancelesPais2ImportandoPais1": arancelesBaseVietnam
  },
  {
    "pais1": "Japón",
    "pais2": "Jamaica",
    "arancelesPais1ImportandoPais2": arancelesBaseJamaica,
    "arancelesPais2ImportandoPais1": arancelesBaseJapon
  },
  {
    "pais1": "Kazajistán",
    "pais2": "Jamaica",
    "arancelesPais1ImportandoPais2": arancelesBaseJamaica,
    "arancelesPais2ImportandoPais1": arancelesBaseKazajistan
  },
  {
    "pais1": "Líbano",
    "pais2": "Jamaica",
    "arancelesPais1ImportandoPais2": arancelesBaseJamaica,
    "arancelesPais2ImportandoPais1": arancelesBaseLibano
  },
  {
    "pais1": "Nicaragua",
    "pais2": "Jamaica",
    "arancelesPais1ImportandoPais2": arancelesBaseJamaica,
    "arancelesPais2ImportandoPais1": arancelesBaseNicaragua
  },
  {
    "pais1": "Nueva Zelanda",
    "pais2": "Jamaica",
    "arancelesPais1ImportandoPais2": arancelesBaseJamaica,
    "arancelesPais2ImportandoPais1": arancelesBaseNuevaZelanda
  },
  {
    "pais1": "Panamá",
    "pais2": "Jamaica",
    "arancelesPais1ImportandoPais2": arancelesBaseJamaica,
    "arancelesPais2ImportandoPais1": arancelesBasePanama
  },
  {
    "pais1": "Qatar",
    "pais2": "Jamaica",
    "arancelesPais1ImportandoPais2": arancelesBaseJamaica,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Rusia",
    "pais2": "Jamaica",
    "arancelesPais1ImportandoPais2": arancelesBaseJamaica,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Singapur",
    "pais2": "Jamaica",
    "arancelesPais1ImportandoPais2": arancelesBaseJamaica,
    "arancelesPais2ImportandoPais1": arancelesBaseSingapur
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Jamaica",
    "arancelesPais1ImportandoPais2": arancelesBaseJamaica,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Tailandia",
    "pais2": "Jamaica",
    "arancelesPais1ImportandoPais2": arancelesBaseJamaica,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Turquía",
    "pais2": "Jamaica",
    "arancelesPais1ImportandoPais2": arancelesBaseJamaica,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Vietnam",
    "pais2": "Jamaica",
    "arancelesPais1ImportandoPais2": arancelesBaseJamaica,
    "arancelesPais2ImportandoPais1": arancelesBaseVietnam
  },
  {
    "pais1": "Marruecos",
    "pais2": "Jamaica",
    "arancelesPais1ImportandoPais2": arancelesBaseJamaica,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
  {
    "pais1": "Kazajistán",
    "pais2": "Japón",
    "arancelesPais1ImportandoPais2": arancelesBaseJapon,
    "arancelesPais2ImportandoPais1": arancelesBaseKazajistan
  },
  {
    "pais1": "Líbano",
    "pais2": "Japón",
    "arancelesPais1ImportandoPais2": arancelesBaseJapon,
    "arancelesPais2ImportandoPais1": arancelesBaseLibano
  },
  {
    "pais1": "Nicaragua",
    "pais2": "Japón",
    "arancelesPais1ImportandoPais2": arancelesBaseJapon,
    "arancelesPais2ImportandoPais1": arancelesBaseNicaragua
  },
  {
    "pais1": "Nueva Zelanda",
    "pais2": "Japón",
    "arancelesPais1ImportandoPais2": arancelesBaseJapon,
    "arancelesPais2ImportandoPais1": arancelesBaseNuevaZelanda
  },
  {
    "pais1": "Panamá",
    "pais2": "Japón",
    "arancelesPais1ImportandoPais2": arancelesBaseJapon,
    "arancelesPais2ImportandoPais1": arancelesBasePanama
  },
  {
    "pais1": "Qatar",
    "pais2": "Japón",
    "arancelesPais1ImportandoPais2": arancelesBaseJapon,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Rusia",
    "pais2": "Japón",
    "arancelesPais1ImportandoPais2": arancelesBaseJapon,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Japón",
    "arancelesPais1ImportandoPais2": arancelesBaseJapon,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Turquía",
    "pais2": "Japón",
    "arancelesPais1ImportandoPais2": arancelesBaseJapon,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Venezuela",
    "pais2": "Japón",
    "arancelesPais1ImportandoPais2": arancelesBaseJapon,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Marruecos",
    "pais2": "Japón",
    "arancelesPais1ImportandoPais2": arancelesBaseJapon,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
  {
    "pais1": "Estados Unidos",
    "pais2": "Kazajistán",
    "arancelesPais1ImportandoPais2": arancelesBaseKazajistan,
    "arancelesPais2ImportandoPais1": arancelesBaseUSA_MFN
  },
  {
    "pais1": "México",
    "pais2": "Kazajistán",
    "arancelesPais1ImportandoPais2": arancelesBaseKazajistan,
    "arancelesPais2ImportandoPais1": arancelesBaseMexico
  },
  {
    "pais1": "Canadá",
    "pais2": "Kazajistán",
    "arancelesPais1ImportandoPais2": arancelesBaseKazajistan,
    "arancelesPais2ImportandoPais1": arancelesBaseCanada
  },
  {
    "pais1": "Líbano",
    "pais2": "Kazajistán",
    "arancelesPais1ImportandoPais2": arancelesBaseKazajistan,
    "arancelesPais2ImportandoPais1": arancelesBaseLibano
  },
  {
    "pais1": "Nicaragua",
    "pais2": "Kazajistán",
    "arancelesPais1ImportandoPais2": arancelesBaseKazajistan,
    "arancelesPais2ImportandoPais1": arancelesBaseNicaragua
  },
  {
    "pais1": "Nueva Zelanda",
    "pais2": "Kazajistán",
    "arancelesPais1ImportandoPais2": arancelesBaseKazajistan,
    "arancelesPais2ImportandoPais1": arancelesBaseNuevaZelanda
  },
  {
    "pais1": "Noreuga, Suiza",
    "pais2": "Kazajistán",
    "arancelesPais1ImportandoPais2": arancelesBaseKazajistan,
    "arancelesPais2ImportandoPais1": arancelesBaseEFTA
  },
  {
    "pais1": "Panamá",
    "pais2": "Kazajistán",
    "arancelesPais1ImportandoPais2": arancelesBaseKazajistan,
    "arancelesPais2ImportandoPais1": arancelesBasePanama
  },
  {
    "pais1": "Perú",
    "pais2": "Kazajistán",
    "arancelesPais1ImportandoPais2": arancelesBaseKazajistan,
    "arancelesPais2ImportandoPais1": arancelesBasePeru
  },
  {
    "pais1": "Qatar",
    "pais2": "Kazajistán",
    "arancelesPais1ImportandoPais2": arancelesBaseKazajistan,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Reino Unido",
    "pais2": "Kazajistán",
    "arancelesPais1ImportandoPais2": arancelesBaseKazajistan,
    "arancelesPais2ImportandoPais1": arancelesBaseReinoUnido
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Kazajistán",
    "arancelesPais1ImportandoPais2": arancelesBaseKazajistan,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Tilandia",
    "pais2": "Kazajistán",
    "arancelesPais1ImportandoPais2": arancelesBaseKazajistan,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Turquía",
    "pais2": "Kazajistán",
    "arancelesPais1ImportandoPais2": arancelesBaseKazajistan,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Venezuela",
    "pais2": "Kazajistán",
    "arancelesPais1ImportandoPais2": arancelesBaseKazajistan,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Marruecos",
    "pais2": "Kazajistán",
    "arancelesPais1ImportandoPais2": arancelesBaseKazajistan,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
  {
    "pais1": "Nicaragua",
    "pais2": "Líbano",
    "arancelesPais1ImportandoPais2": arancelesBaseLibano,
    "arancelesPais2ImportandoPais1": arancelesBaseNicaragua
  },
  {
    "pais1": "Nueva Zelanda",
    "pais2": "Líbano",
    "arancelesPais1ImportandoPais2": arancelesBaseLibano,
    "arancelesPais2ImportandoPais1": arancelesBaseNuevaZelanda  
  },
  {
    "pais1": "Panamá",
    "pais2": "Líbano",
    "arancelesPais1ImportandoPais2": arancelesBaseLibano,
    "arancelesPais2ImportandoPais1": arancelesBasePanama
  },
  {
    "pais1": "Rusia",
    "pais2": "Líbano",
    "arancelesPais1ImportandoPais2": arancelesBaseLibano,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Singapur",
    "pais2": "Líbano",
    "arancelesPais1ImportandoPais2": arancelesBaseLibano,
    "arancelesPais2ImportandoPais1": arancelesBaseSingapur
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Líbano",
    "arancelesPais1ImportandoPais2": arancelesBaseLibano,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Tailandia",
    "pais2": "Líbano",
    "arancelesPais1ImportandoPais2": arancelesBaseLibano,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Turquía",
    "pais2": "Líbano",
    "arancelesPais1ImportandoPais2": arancelesBaseLibano,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },  
  {
    "pais1": "Venezuela",
    "pais2": "Líbano",
    "arancelesPais1ImportandoPais2": arancelesBaseLibano,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Vietnam",
    "pais2": "Líbano",
    "arancelesPais1ImportandoPais2": arancelesBaseLibano,
    "arancelesPais2ImportandoPais1": arancelesBaseVietnam
  },
  {
    "pais1": "Marruecos",
    "pais2": "Líbano",
    "arancelesPais1ImportandoPais2": arancelesBaseLibano,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
  {
    "pais1": "Nueva Zelanda",
    "pais2": "Nicaragua",
    "arancelesPais1ImportandoPais2": arancelesBaseNicaragua,
    "arancelesPais2ImportandoPais1": arancelesBaseNuevaZelanda
  },
  {
    "pais1": "Qatar",
    "pais2": "Nicaragua",
    "arancelesPais1ImportandoPais2": arancelesBaseNicaragua,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Reino Unido",
    "pais2": "Nicaragua",
    "arancelesPais1ImportandoPais2": arancelesBaseNicaragua,
    "arancelesPais2ImportandoPais1": arancelesBaseReinoUnido
  },
  {
    "pais1": "Rusia",
    "pais2": "Nicaragua",
    "arancelesPais1ImportandoPais2": arancelesBaseNicaragua,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Singapur",
    "pais2": "Nicaragua",
    "arancelesPais1ImportandoPais2": arancelesBaseNicaragua,
    "arancelesPais2ImportandoPais1": arancelesBaseSingapur
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Nicaragua",
    "arancelesPais1ImportandoPais2": arancelesBaseNicaragua,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Tailandia",
    "pais2": "Nicaragua",
    "arancelesPais1ImportandoPais2": arancelesBaseNicaragua,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Turquía",
    "pais2": "Nicaragua",
    "arancelesPais1ImportandoPais2": arancelesBaseNicaragua,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Vietnam",
    "pais2": "Nicaragua",
    "arancelesPais1ImportandoPais2": arancelesBaseNicaragua,
    "arancelesPais2ImportandoPais1": arancelesBaseVietnam
  },
  {
    "pais1": "Marruecos",
    "pais2": "Nicaragua",
    "arancelesPais1ImportandoPais2": arancelesBaseNicaragua,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
  {
    "pais1": "Panamá",
    "pais2": "Nueva Zelanda",
    "arancelesPais1ImportandoPais2": arancelesBaseNuevaZelanda,
    "arancelesPais2ImportandoPais1": arancelesBasePanama
  },
  {
    "pais1": "Qatar",
    "pais2": "Nueva Zelanda",
    "arancelesPais1ImportandoPais2": arancelesBaseNuevaZelanda,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Rusia",
    "pais2": "Nueva Zelanda",
    "arancelesPais1ImportandoPais2": arancelesBaseNuevaZelanda,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Nueva Zelanda",
    "arancelesPais1ImportandoPais2": arancelesBaseNuevaZelanda,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Marruecos",
    "pais2": "Nueva Zelanda",
    "arancelesPais1ImportandoPais2": arancelesBaseNuevaZelanda,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
  {
    "pais1": "Qatar",
    "pais2": "Panamá",
    "arancelesPais1ImportandoPais2": arancelesBasePanama,
    "arancelesPais2ImportandoPais1": arancelesBaseQatar
  },
  {
    "pais1": "Rusia",
    "pais2": "Panamá",
    "arancelesPais1ImportandoPais2": arancelesBasePanama,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Panamá",
    "arancelesPais1ImportandoPais2": arancelesBasePanama,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Tailandia",
    "pais2": "Panamá",
    "arancelesPais1ImportandoPais2": arancelesBasePanama,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Turquía",
    "pais2": "Panamá",
    "arancelesPais1ImportandoPais2": arancelesBasePanama,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Venezuela",
    "pais2": "Panamá",
    "arancelesPais1ImportandoPais2": arancelesBasePanama,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Vietnam",
    "pais2": "Panamá",
    "arancelesPais1ImportandoPais2": arancelesBasePanama,
    "arancelesPais2ImportandoPais1": arancelesBaseVietnam
  },
  {
    "pais1": "Marruecos",
    "pais2": "Panamá",
    "arancelesPais1ImportandoPais2": arancelesBasePanama,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
  {
    "pais1": "Rusia",
    "pais2": "Qatar",
    "arancelesPais1ImportandoPais2": arancelesBaseQatar,
    "arancelesPais2ImportandoPais1": arancelesBaseRusia
  },
  {
    "pais1": "Singapur",
    "pais2": "Qatar",
    "arancelesPais1ImportandoPais2": arancelesBaseQatar,
    "arancelesPais2ImportandoPais1": arancelesBaseSingapur
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Qatar",
    "arancelesPais1ImportandoPais2": arancelesBaseQatar,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Tailandia",
    "pais2": "Qatar",
    "arancelesPais1ImportandoPais2": arancelesBaseQatar,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Venezuela",
    "pais2": "Qatar",
    "arancelesPais1ImportandoPais2": arancelesBaseQatar,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Vietnam",
    "pais2": "Qatar",
    "arancelesPais1ImportandoPais2": arancelesBaseQatar,
    "arancelesPais2ImportandoPais1": arancelesBaseVietnam
  },
  {
    "pais1": "Singapur",
    "pais2": "Rusia",
    "arancelesPais1ImportandoPais2": arancelesBaseRusia,
    "arancelesPais2ImportandoPais1": arancelesBaseSingapur
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Rusia",
    "arancelesPais1ImportandoPais2": arancelesBaseRusia,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Tailandia",
    "pais2": "Rusia",
    "arancelesPais1ImportandoPais2": arancelesBaseRusia,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Turquía",
    "pais2": "Rusia",
    "arancelesPais1ImportandoPais2": arancelesBaseRusia,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Venezuela",
    "pais2": "Rusia",
    "arancelesPais1ImportandoPais2": arancelesBaseRusia,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Marruecos",
    "pais2": "Rusia",
    "arancelesPais1ImportandoPais2": arancelesBaseRusia,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Singapur",
    "arancelesPais1ImportandoPais2": arancelesBaseSingapur,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Venezuela",
    "pais2": "Singapur",
    "arancelesPais1ImportandoPais2": arancelesBaseSingapur,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Sudáfrica",
    "pais2": "Singapur",
    "arancelesPais1ImportandoPais2": arancelesBaseSingapur,
    "arancelesPais2ImportandoPais1": arancelesBaseSudafrica
  },
  {
    "pais1": "Marruecos",
    "pais2": "Singapur",
    "arancelesPais1ImportandoPais2": arancelesBaseSingapur,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
  {
    "pais1": "Estados Unidos",
    "pais2": "Sudáfrica",
    "arancelesPais1ImportandoPais2": arancelesBaseSudafrica,
    "arancelesPais2ImportandoPais1": arancelesBaseUSA_MFN
  },
  {
    "pais1": "Tailandia",
    "pais2": "Sudáfrica",
    "arancelesPais1ImportandoPais2": arancelesBaseSudafrica,
    "arancelesPais2ImportandoPais1": arancelesBaseTailandia
  },
  {
    "pais1": "Turquía",
    "pais2": "Sudáfrica",
    "arancelesPais1ImportandoPais2": arancelesBaseSudafrica,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Venezuela",
    "pais2": "Sudáfrica",
    "arancelesPais1ImportandoPais2": arancelesBaseSudafrica,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Vietnam",
    "pais2": "Sudáfrica",
    "arancelesPais1ImportandoPais2": arancelesBaseSudafrica,
    "arancelesPais2ImportandoPais1": arancelesBaseVietnam
  },
  {
    "pais1": "Turquía",
    "pais2": "Tailandia",
    "arancelesPais1ImportandoPais2": arancelesBaseTailandia,
    "arancelesPais2ImportandoPais1": arancelesBaseTurquia
  },
  {
    "pais1": "Venezuela",
    "pais2": "Tailandia",
    "arancelesPais1ImportandoPais2": arancelesBaseTailandia,
    "arancelesPais2ImportandoPais1": arancelesBaseVenezuela
  },
  {
    "pais1": "Marruecos",
    "pais2": "Tailandia",
    "arancelesPais1ImportandoPais2": arancelesBaseTailandia,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
  {
    "pais1": "Estados Unidos",
    "pais2": "Turquía",
    "arancelesPais1ImportandoPais2": arancelesBaseTurquia,
    "arancelesPais2ImportandoPais1": arancelesBaseUSA_MFN
  },
  {
    "pais1": "Vietnam",
    "pais2": "Turquía",
    "arancelesPais1ImportandoPais2": arancelesBaseTurquia,
    "arancelesPais2ImportandoPais1": arancelesBaseVietnam
  },
  {
    "pais1": "Marruecos",
    "pais2": "Vietnam",
    "arancelesPais1ImportandoPais2": arancelesBaseVietnam,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
  {
    "pais1": "Marruecos",
    "pais2": "Canadá",
    "arancelesPais1ImportandoPais2": arancelesBaseCanada,
    "arancelesPais2ImportandoPais1": arancelesBaseMarruecos
  },
];

function buscarAranceles(paisOrigen, paisDestino) {
  const acuerdo = arancelesComunes.find(a => {
    // Convertimos pais1 y pais2 en arrays (por si hay más de uno)
    const paises1 = a.pais1.split(',').map(p => p.trim());
    const paises2 = a.pais2.split(',').map(p => p.trim());

    // Comprobamos todas las combinaciones posibles
    return (
      (paises1.includes(paisOrigen) && paises2.includes(paisDestino)) ||
      (paises1.includes(paisDestino) && paises2.includes(paisOrigen))
    );
  });

  if (!acuerdo) return null;

  const paises1 = acuerdo.pais1.split(',').map(p => p.trim());
  const paises2 = acuerdo.pais2.split(',').map(p => p.trim());

  // Determinar la dirección correcta del flujo comercial
  if (paises1.includes(paisOrigen) && paises2.includes(paisDestino)) {
    return { aranceles: acuerdo.arancelesPais1ImportandoPais2 };
  } else if (paises1.includes(paisDestino) && paises2.includes(paisOrigen)) {
    return { aranceles: acuerdo.arancelesPais2ImportandoPais1 };
  } else {
    return null;
  }
}