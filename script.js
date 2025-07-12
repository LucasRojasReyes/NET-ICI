// Créditos oficiales de cada ramo
const creditos = {
  'fundamentos_matematicas': 8,
  'algebra': 8,
  'quimica_general': 4,
  'desarrollo_personal1': 4,
  'introduccion_ingenieria_informatica': 4,
  'fundamentos_programacion': 4,
  'calculo_diferencial': 8,
  'algebra_lineal': 6,
  'fundamentos_fisica': 6,
  'desarrollo_personal2': 4,
  'programacion1': 4,
  'calculo_integral': 8,
  'fisica_mecanica': 7,
  'ingles1': 2,
  'programacion2': 6,
  'hardware_digital': 4,
  'calculo_varias_variables': 8,
  'fisica_calor_ondas': 7,
  'redes_computadores1': 4,
  'matematicas_discretas': 4,
  'tipe1': 2,
  'fisica_electromagnetismo': 7,
  'ingles2': 2,
  'estructuras_datos': 4,
  'arquitectura_computadores': 4,
  'bases_datos1': 6,
  'fundamentos_ingenieria_sw': 5,
  'laboratorio_redes': 2,
  'ingles3': 4,
  'analisis_diseno_algoritmos': 4,
  'sistemas_operativos': 5,
  'bases_datos_programacion_web': 5,
  'metodologia_analisis': 4,
  'interaccion_persona_computador': 4,
  'tipe2': 2,
  'ingles4': 4,
  'probabilidades_y_estadisticas': 6,
  'lenguajes_y_automatas': 5,
  'metodologia_de_diseño': 4,
  'sistemas_de_información': 4,
  'bases_de_datos2': 5,
  'tipe3': 2,
  'innovacion_y_emprendimiento': 4,
  'etica_y_legislacion': 3,
  'pruebas_de_sistemas': 4,
  'redes_de_computadores2': 4,
  'lenguajes_de_programacion': 4,
  'bases_de_datos3': 5,
  'taller_de_integracion_tecnologica1': 6,
  'administracion_general': 3,
  'contabilidad_y_finanzas': 4,
  'gestion_de_proyectos_informaticos': 5,
  'optimizacion_computacional': 4,
  'simulacion': 4,
  'seguridad_de_sistemas': 4,
  'electivo_profesional1': 5,
  'evaluacion_de_proyectos': 4,
  'economia': 4,
  'inteligencia_de_negocios': 5,
  'electivo_profesional2': 5,
  'electivo_profesional3': 5,
  'taller_de_integracion_tecnologica2': 8,
  'seminario_de_titulo1': 25,
  'electivo_profesional4': 5,
  'seminario_de_titulo2': 30
};

// Prerrequisitos de cada ramo (ramos que deben estar aprobados para desbloquear este)
const prerequisitos = {
  'calculo_diferencial': ['fundamentos_matematicas', 'algebra'],
  'algebra_lineal': ['algebra'],
  'desarrollo_personal2': ['desarrollo_personal1'],
  'ingles1': ['desarrollo_personal2'],
  'programacion1': ['introduccion_ingenieria_informatica'],
  'calculo_integral': ['calculo_diferencial'],
  'fisica_mecanica': ['calculo_diferencial', 'fundamentos_fisica'],
  'programacion2': ['programacion1'],
  'hardware_digital': ['introduccion_ingenieria_informatica'],
  'calculo_varias_variables': ['algebra_lineal', 'calculo_integral', 'fisica_mecanica'],
  'ecuaciones_diferenciales': ['algebra_lineal', 'calculo_integral'],
  'fisica_calor_ondas': ['calculo_integral', 'fisica_mecanica'],
  'redes_computadores1': ['programacion2', 'hardware_digital'],
  'matematicas_discretas': ['fundamentos_matematicas', 'introduccion_ingenieria_informatica'],
  'tipe1': ['desarrollo_personal2'],
  'fisica_electromagnetismo': ['calculo_varias_variables'],
  'ingles2': ['ingles1'],
  'estructuras_datos': ['programacion2', 'matematicas_discretas'],
  'arquitectura_computadores': ['hardware_digital'],
  'bases_datos1': ['programacion2'],
  'fundamentos_ingenieria_sw': ['programacion2'],
  'laboratorio_redes': ['redes_computadores1'],
  'ingles3': ['ingles2'],
  'analisis_diseno_algoritmos': ['calculo_integral', 'estructuras_datos'],
  'sistemas_operativos': ['programacion1', 'arquitectura_computadores'],
  'bases_datos_programacion_web': ['fundamentos_ingenieria_sw', 'bases_datos1'],
  'metodologia_analisis': ['fundamentos_ingenieria_sw'],
  'interaccion_persona_computador': ['fundamentos_ingenieria_sw'],
  'tipe2': ['tipe1'],
  'ingles4': ['ingles3'],
  'probabilidades_y_estadisticas': ['calculo_varias_variables'],
  'lenguajes_y_automatas': ['estructuras_datos'],
  'metodologia_de_diseño': ['metodologia_analisis'],
  'sistemas_de_información': ['fundamentos_ingenieria_sw'],
  'bases_de_datos2': ['bases_datos_programacion_web'],
  'tipe3': ['tipe2'],
  'etica_y_legislacion': ['desarrollo_personal2'],
  'pruebas_de_sistemas': ['fundamentos_ingenieria_sw', 'sistemas_operativos', 'bases_datos_programacion_web'],
  'redes_de_computadores2': ['laboratorio_redes', 'sistemas_operativos'],
  'lenguajes_de_programacion': ['lenguajes_y_automatas'],
  'bases_de_datos3': ['bases_de_datos2'],
  'taller_de_integracion_tecnologica1': ['Sexto semestre aprobado incluido'],
  'administracion_general': ['fundamentos_matematicas', 'desarrollo_personal2'],
  'contabilidad_y_finanzas': ['fundamentos_matematicas', 'etica_y_legislacion'],
  'gestion_de_proyectos_informaticos': ['metodologia_de_diseño'],
  'optimizacion_computacional': ['analisis_diseno_algoritmos', 'probabilidades_y_estadisticas'],
  'simulacion': ['programacion2', 'probabilidades_y_estadisticas'],
  'seguridad_de_sistemas': ['fundamentos_ingenieria_sw', 'sistemas_operativos', 'bases_datos_programacion_web'],
  'electivo_profesional1': ['Séptimo semestre aprobado'],
  'evaluacion_de_proyectos': ['administracion_general', 'contabilidad_y_finanzas'],
  'economia': ['fundamentos_matematicas', 'administracion_general'],
  'inteligencia_de_negocios': ['bases_de_datos3'],
  'electivo_profesional2': ['Séptimo semestre aprobado'],
  'electivo_profesional3': ['Séptimo semestre aprobado'],
  'taller_de_integracion_tecnologica2': ['taller_de_integracion_tecnologica1', 'lenguajes_de_programacion'],
  'seminario_de_titulo1': ['Octavo semestre aprobado incluido'],
  'electivo_profesional4': ['Séptimo semestre aprobado'],
  'seminario_de_titulo2': ['seminario_de_titulo1']
};  

// Funciones para guardar y cargar progreso en localStorage
function obtenerAprobados() {
  const data = localStorage.getItem('mallaAprobados');
  return data ? JSON.parse(data) : [];
}

function guardarAprobados(aprobados) {
  localStorage.setItem('mallaAprobados', JSON.stringify(aprobados));
}

// Calcula el total de créditos de ramos aprobados
function calcularCreditosAprobados() {
  const aprobados = obtenerAprobados();
  return aprobados.reduce((sum, ramo) => sum + (creditos[ramo] || 0), 0);
}

// Actualiza qué ramos están desbloqueados o bloqueados según prerrequisitos y créditos especiales
function actualizarDesbloqueos() {
  const aprobados = obtenerAprobados();
  const totalCreditos = calcularCreditosAprobados();

  for (const [destino, reqs] of Object.entries(prerequisitos)) {
    const elem = document.getElementById(destino);
    if (!elem) continue;

    // Verificar si se cumplen prerrequisitos normales
    let puedeDesbloquear = reqs.every(r => aprobados.includes(r));

    // Reglas especiales con créditos para ciertos módulos
    if (destino === 'modulo1') {
      puedeDesbloquear = totalCreditos >= 90;
    }
    if (destino === 'modulo2') {
      puedeDesbloquear = aprobados.includes('modulo1') && totalCreditos >= 170;
    }
    if (destino === 'internado_electivo' || destino === 'internado_electivo1') {
      puedeDesbloquear = totalCreditos >= 240;
    }

    if (!elem.classList.contains('aprobado')) {
      if (puedeDesbloquear) elem.classList.remove('bloqueado');
      else elem.classList.add('bloqueado');
    } else {
      // Si está aprobado, no debe estar bloqueado
      elem.classList.remove('bloqueado');
    }
  }
}

// Maneja el clic para aprobar o desaprobar un ramo (solo si no está bloqueado)
function aprobar(e) {
  const ramo = e.currentTarget;
  if (ramo.classList.contains('bloqueado')) return;

  ramo.classList.toggle('aprobado');

  const aprobados = obtenerAprobados();
  if (ramo.classList.contains('aprobado')) {
    if (!aprobados.includes(ramo.id)) aprobados.push(ramo.id);
  } else {
    const idx = aprobados.indexOf(ramo.id);
    if (idx > -1) aprobados.splice(idx, 1);
  }
  guardarAprobados(aprobados);

  actualizarDesbloqueos();
}

// Al cargar la página, asignar eventos, cargar progreso y actualizar desbloqueos
window.addEventListener('DOMContentLoaded', () => {
  const todosRamos = document.querySelectorAll('.ramo');

  const aprobados = obtenerAprobados();
  todosRamos.forEach(ramo => {
    if (aprobados.includes(ramo.id)) {
      ramo.classList.add('aprobado');
    }
  });

  todosRamos.forEach(ramo => {
    ramo.addEventListener('click', aprobar);
  });

  actualizarDesbloqueos();
});