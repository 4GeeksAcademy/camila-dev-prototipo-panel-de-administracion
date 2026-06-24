const NAV_ITEMS = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "index.html",
    icon: '<svg viewBox="0 0 24 24" class="h-5 w-5" aria-hidden="true"><path fill="currentColor" d="M3 13h8V3H3v10Zm0 8h8v-6H3v6Zm10 0h8V11h-8v10Zm0-18v6h8V3h-8Z"/></svg>'
  },
  {
    key: "usuarios",
    label: "Usuarios",
    href: "gestion-de-usuarios.html",
    icon: '<svg viewBox="0 0 24 24" class="h-5 w-5" aria-hidden="true"><path fill="currentColor" d="M16 11c1.66 0 2.99-1.79 2.99-4S17.66 3 16 3s-3 1.79-3 4 1.34 4 3 4ZM8 11c1.66 0 2.99-1.79 2.99-4S9.66 3 8 3 5 4.79 5 7s1.34 4 3 4Zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.93 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5Z"/></svg>'
  },
  {
    key: "agentes",
    label: "Agentes",
    href: "gestion-de-agentes.html",
    icon: '<svg viewBox="0 0 24 24" class="h-5 w-5" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7v3a3 3 0 0 0-2 2.83V18a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-3.17A3 3 0 0 0 19 12V9a7 7 0 0 0-7-7Zm0 2a5 5 0 0 1 5 5v3H7V9a5 5 0 0 1 5-5Zm-3 11h6v2H9v-2Z"/></svg>'
  },
  {
    key: "skills",
    label: "Skills",
    href: "skills.html",
    icon: '<svg viewBox="0 0 24 24" class="h-5 w-5" aria-hidden="true"><path fill="currentColor" d="m22.7 19.3-7.4-7.4c.5-1.8 0-3.8-1.4-5.2a5.5 5.5 0 0 0-5.6-1.3l3.2 3.2-2.8 2.8-3.2-3.2a5.5 5.5 0 0 0 1.3 5.6c1.4 1.4 3.4 1.9 5.2 1.4l7.4 7.4a2 2 0 1 0 2.8-2.8Z"/></svg>'
  },
  {
    key: "contratos",
    label: "Contratos",
    href: "contrataciones-de-agentes.html",
    icon: '<svg viewBox="0 0 24 24" class="h-5 w-5" aria-hidden="true"><path fill="currentColor" d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 1.5V8h4.5L14 3.5ZM8 13h8v-2H8v2Zm0 4h8v-2H8v2Z"/></svg>'
  },
  {
    key: "errores",
    label: "Errores",
    href: "log-de-errores.html",
    icon: '<svg viewBox="0 0 24 24" class="h-5 w-5" aria-hidden="true"><path fill="currentColor" d="M1 21h22L12 2 1 21Zm12-3h-2v2h2v-2Zm0-8h-2v6h2v-6Z"/></svg>'
  }
];

const PAGE_META = {
  dashboard: {
    title: "Panel de Control",
    subtitle: "Vista operativa y financiera de AgentHub"
  },
  usuarios: {
    title: "Gestion de Usuarios",
    subtitle: "Registros, planes y estado comercial"
  },
  agentes: {
    title: "Gestion de Agentes",
    subtitle: "Estado, skills y prompts de sistema"
  },
  skills: {
    title: "Catalogo de Skills",
    subtitle: "Capacidades disponibles para agentes"
  },
  contratos: {
    title: "Contrataciones de Agentes",
    subtitle: "Contratos activos, historicos y costos"
  },
  errores: {
    title: "Log de Errores",
    subtitle: "Incidencias en ejecucion y resolucion"
  }
};

const USERS = [
  {
    id: "u1",
    nombre: "Camila",
    apellido: "Rojas",
    fechaNacimiento: "1992-04-17",
    direccion: "Av. Libertad 451",
    email: "camila.rojas@nova.ai",
    telefono: "+54 11 5555-1201",
    ciudad: "Buenos Aires",
    pais: "Argentina",
    planNombre: "Growth AI",
    planContratacion: "2026-01-10",
    planVencimiento: "2027-01-10",
    metodoPago: "Tarjeta corporativa",
    planEstado: "Activo",
    estado: "Activo"
  },
  {
    id: "u2",
    nombre: "Diego",
    apellido: "Paz",
    fechaNacimiento: "1988-10-09",
    direccion: "Calle 93 #14-20",
    email: "diego.paz@retailflow.co",
    telefono: "+57 300 221 0090",
    ciudad: "Bogota",
    pais: "Colombia",
    planNombre: "Starter",
    planContratacion: "2025-11-02",
    planVencimiento: "2026-11-02",
    metodoPago: "Transferencia",
    planEstado: "Inactivo",
    estado: "Inactivo"
  },
  {
    id: "u3",
    nombre: "Valeria",
    apellido: "Molina",
    fechaNacimiento: "1995-07-26",
    direccion: "Rua das Flores 221",
    email: "valeria.molina@smartdesk.io",
    telefono: "+55 21 99210-8800",
    ciudad: "Rio de Janeiro",
    pais: "Brasil",
    planNombre: "Enterprise",
    planContratacion: "2026-03-15",
    planVencimiento: "2027-03-15",
    metodoPago: "Debito automatico",
    planEstado: "Activo",
    estado: "Activo"
  },
  {
    id: "u4",
    nombre: "Lucia",
    apellido: "Gomez",
    fechaNacimiento: "1990-12-03",
    direccion: "Calle Serrano 88",
    email: "lucia.gomez@orbitallabs.es",
    telefono: "+34 611 222 390",
    ciudad: "Madrid",
    pais: "Espana",
    planNombre: "Scale",
    planContratacion: "2026-02-01",
    planVencimiento: "2027-02-01",
    metodoPago: "Factura mensual",
    planEstado: "Activo",
    estado: "Activo"
  },
  {
    id: "u5",
    nombre: "Martin",
    apellido: "Salas",
    fechaNacimiento: "1986-06-14",
    direccion: "Av. Reforma 130",
    email: "martin.salas@finbolt.mx",
    telefono: "+52 55 8000 1123",
    ciudad: "Ciudad de Mexico",
    pais: "Mexico",
    planNombre: "Growth AI",
    planContratacion: "2025-09-20",
    planVencimiento: "2026-09-20",
    metodoPago: "Tarjeta empresarial",
    planEstado: "Inactivo",
    estado: "Inactivo"
  },
  {
    id: "u6",
    nombre: "Ines",
    apellido: "Duarte",
    fechaNacimiento: "1998-01-31",
    direccion: "Rua da Boavista 510",
    email: "ines.duarte@atlasops.pt",
    telefono: "+351 912 443 110",
    ciudad: "Porto",
    pais: "Portugal",
    planNombre: "Enterprise",
    planContratacion: "2026-04-08",
    planVencimiento: "2027-04-08",
    metodoPago: "SEPA",
    planEstado: "Activo",
    estado: "Activo"
  }
];

const AGENTS = [
  {
    id: "a1",
    nombre: "Atenea Support",
    propietario: "Nova AI",
    estado: "Activo",
    skills: ["Navegacion web", "Lectura de PDFs", "Gestion de calendarios"],
    prompt: "Eres Atenea Support. Prioriza resolver tickets en menos de 5 pasos. Consulta base interna antes de escalar." 
  },
  {
    id: "a2",
    nombre: "Pulse Sales",
    propietario: "RetailFlow",
    estado: "Inactivo",
    skills: ["CRM sync", "Email drafting", "Analisis de objeciones"],
    prompt: "Eres Pulse Sales. Resume oportunidades por etapa del funnel y propone acciones comerciales semanales."
  },
  {
    id: "a3",
    nombre: "Sentinel Ops",
    propietario: "SmartDesk",
    estado: "Fallando",
    skills: ["Monitorizacion", "Alertas Slack", "Analisis de logs"],
    prompt: "Eres Sentinel Ops. Detecta anomalias de latencia y errores 5xx. Responde con severidad, impacto y siguiente accion." 
  },
  {
    id: "a4",
    nombre: "Horizon Legal",
    propietario: "Orbitallabs",
    estado: "Activo",
    skills: ["Lectura de contratos", "Extraccion de clausulas", "Resumir riesgos"],
    prompt: "Eres Horizon Legal. Identifica clausulas sensibles y genera resumen ejecutivo para equipo legal en 8 puntos maximo." 
  },
  {
    id: "a5",
    nombre: "Nexo Planner",
    propietario: "AtlasOps",
    estado: "Activo",
    skills: ["Gestion de calendarios", "Priorizacion", "Notificaciones"],
    prompt: "Eres Nexo Planner. Coordina agendas entre zonas horarias y sugiere franjas con menor friccion operativa." 
  }
];

const SKILLS = [
  {
    id: "s1",
    nombre: "Navegacion web",
    descripcion: "Consulta fuentes publicas y extrae informacion relevante en tiempo real.",
    habilitadaEn: 41,
    detalle: "Incluye crawling liviano, resumen semantico y trazabilidad de fuentes consultadas."
  },
  {
    id: "s2",
    nombre: "Lectura de documentos",
    descripcion: "Procesa PDF, DOCX y planillas para responder preguntas de negocio.",
    habilitadaEn: 56,
    detalle: "Soporta OCR basico, indexacion por secciones y respuestas con referencia documental."
  },
  {
    id: "s3",
    nombre: "Gestion de calendarios",
    descripcion: "Busca disponibilidad, agenda reuniones y evita conflictos entre equipos.",
    habilitadaEn: 28,
    detalle: "Sincroniza calendarios corporativos y sugiere ventanas optimas por prioridad."
  },
  {
    id: "s4",
    nombre: "Analisis de logs",
    descripcion: "Clasifica eventos de error y detecta patrones de falla recurrentes.",
    habilitadaEn: 22,
    detalle: "Etiqueta severidad, agrupa por servicio y propone pasos de mitigacion."
  },
  {
    id: "s5",
    nombre: "Integracion CRM",
    descripcion: "Lee y actualiza contactos, oportunidades y estado de negociaciones.",
    habilitadaEn: 19,
    detalle: "Conecta con CRM externos y valida cambios antes de persistirlos."
  },
  {
    id: "s6",
    nombre: "Generacion de reportes",
    descripcion: "Construye reportes ejecutivos con KPIs y recomendaciones accionables.",
    habilitadaEn: 14,
    detalle: "Exporta a formatos tabulares y resalta variaciones frente al periodo anterior."
  }
];

const CONTRACTS = [
  {
    id: "c1",
    cliente: "Nova AI",
    agente: "Atenea Support",
    skills: [
      { nombre: "Navegacion web", precio: 320 },
      { nombre: "Lectura de documentos", precio: 450 },
      { nombre: "Gestion de calendarios", precio: 190 }
    ],
    inicio: "2026-05-01",
    fin: "2026-10-31",
    total: 18100
  },
  {
    id: "c2",
    cliente: "RetailFlow",
    agente: "Pulse Sales",
    skills: [
      { nombre: "Integracion CRM", precio: 510 },
      { nombre: "Generacion de reportes", precio: 260 }
    ],
    inicio: "2026-02-01",
    fin: "2026-08-01",
    total: 14640
  },
  {
    id: "c3",
    cliente: "SmartDesk",
    agente: "Sentinel Ops",
    skills: [
      { nombre: "Analisis de logs", precio: 590 },
      { nombre: "Navegacion web", precio: 280 }
    ],
    inicio: "2025-12-10",
    fin: "2026-06-10",
    total: 13980
  },
  {
    id: "c4",
    cliente: "Orbitallabs",
    agente: "Horizon Legal",
    skills: [
      { nombre: "Lectura de documentos", precio: 460 },
      { nombre: "Generacion de reportes", precio: 320 }
    ],
    inicio: "2026-03-12",
    fin: "2027-03-12",
    total: 22350
  },
  {
    id: "c5",
    cliente: "FinBolt",
    agente: "Pulse Sales",
    skills: [
      { nombre: "Integracion CRM", precio: 500 },
      { nombre: "Navegacion web", precio: 290 }
    ],
    inicio: "2026-01-15",
    fin: "2026-12-15",
    total: 19820
  },
  {
    id: "c6",
    cliente: "AtlasOps",
    agente: "Nexo Planner",
    skills: [
      { nombre: "Gestion de calendarios", precio: 230 },
      { nombre: "Generacion de reportes", precio: 280 }
    ],
    inicio: "2026-04-20",
    fin: "2026-10-20",
    total: 12670
  }
];

const ERRORS = [
  {
    id: "e1",
    timestamp: "2026-06-22 09:15:12",
    agente: "Sentinel Ops",
    tipo: "Timeout",
    severidad: "Alta",
    descripcion: "La consulta supero el tiempo maximo en extraccion de logs.",
    traza: "Error: ETIMEDOUT at logWorker.fetchBatch (worker.js:88) -> pipeline.run (pipeline.js:142)"
  },
  {
    id: "e2",
    timestamp: "2026-06-22 11:44:40",
    agente: "Atenea Support",
    tipo: "Validacion",
    severidad: "Media",
    descripcion: "Entrada invalida en campo de identificacion del cliente.",
    traza: "ValidationError: customerId expected UUID at validator.ts:51"
  },
  {
    id: "e3",
    timestamp: "2026-06-22 14:03:07",
    agente: "Pulse Sales",
    tipo: "Autorizacion",
    severidad: "Baja",
    descripcion: "Token vencido durante sincronizacion con CRM.",
    traza: "AuthError: refresh token expired at sync-crm.js:203"
  },
  {
    id: "e4",
    timestamp: "2026-06-22 16:22:54",
    agente: "Horizon Legal",
    tipo: "Parsing",
    severidad: "Media",
    descripcion: "No se pudo parsear clausula numerada en contrato escaneado.",
    traza: "ParseError: clause token mismatch at legal-parser.js:87"
  },
  {
    id: "e5",
    timestamp: "2026-06-22 18:47:11",
    agente: "Nexo Planner",
    tipo: "Integracion",
    severidad: "Alta",
    descripcion: "Webhook de calendario devolvio codigo 503 en lote de eventos.",
    traza: "ServiceUnavailable: calendar-webhook 503 at connector.js:121"
  },
  {
    id: "e6",
    timestamp: "2026-06-22 20:09:02",
    agente: "Atenea Support",
    tipo: "Rate limit",
    severidad: "Baja",
    descripcion: "Limite de peticiones alcanzado en API de conocimiento.",
    traza: "TooManyRequests: 429 at kb-client.ts:44"
  }
];

const DASHBOARD_METRICS = [
  {
    titulo: "Ingresos totales generados (mes)",
    valor: "$284,900",
    tendencia: "+12.4%",
    chip: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/25 dark:text-emerald-100",
    colorA: "bg-emerald-400 dark:bg-emerald-400",
    colorB: "bg-emerald-600 dark:bg-emerald-300",
    legendA: "Renovaciones",
    legendB: "Nuevos contratos"
  },
  {
    titulo: "Perdida por descuentos y cupones",
    valor: "$18,320",
    tendencia: "-2.1%",
    chip: "bg-orange-100 text-orange-700 dark:bg-orange-500/25 dark:text-orange-100",
    colorA: "bg-orange-400 dark:bg-orange-400",
    colorB: "bg-orange-600 dark:bg-orange-300",
    legendA: "Descuento programado",
    legendB: "Promociones activas"
  },
  {
    titulo: "Agentes activos en clientes",
    valor: "1,286",
    tendencia: "+8.2%",
    chip: "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/25 dark:text-cyan-100",
    colorA: "bg-cyan-400 dark:bg-cyan-400",
    colorB: "bg-cyan-600 dark:bg-cyan-300",
    legendA: "Alta semanal",
    legendB: "Base estable"
  },
  {
    titulo: "Agentes marcados como fallando",
    valor: "47",
    tendencia: "+1.6%",
    chip: "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-500/25 dark:text-fuchsia-100",
    colorA: "bg-fuchsia-400 dark:bg-fuchsia-400",
    colorB: "bg-fuchsia-600 dark:bg-fuchsia-300",
    legendA: "Incidentes recuperados",
    legendB: "Incidentes abiertos"
  }
];

const WEEK_ACTIVITY_CLASSES = ["h-8", "h-14", "h-10", "h-16", "h-12", "h-20", "h-11"];
const WEEK_ACTIVITY_COLORS = [
  "bg-cyan-500 dark:bg-cyan-300",
  "bg-blue-500 dark:bg-blue-300",
  "bg-indigo-500 dark:bg-indigo-300",
  "bg-violet-500 dark:bg-violet-300",
  "bg-fuchsia-500 dark:bg-fuchsia-300",
  "bg-pink-500 dark:bg-pink-300",
  "bg-orange-500 dark:bg-orange-300"
];

function formatMoney(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function getStatusBadge(status) {
  const lower = status.toLowerCase();
  if (lower.includes("fall") || lower.includes("alta")) {
    return "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-200";
  }
  if (lower.includes("inact") || lower.includes("media")) {
    return "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-200";
  }
  if (lower.includes("baja")) {
    return "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-200";
  }
  return "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200";
}

function renderNav(activeKey, mobile = false) {
  return NAV_ITEMS.map((item) => {
    const active = item.key === activeKey;
    const base = mobile
      ? "flex flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 text-[11px] font-semibold transition hover:bg-slate-100 dark:hover:bg-slate-800"
      : "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold";
    const state = active
      ? "bg-[#0A2540] text-white shadow-sm dark:bg-[#2463EB]"
      : "text-[#1A1F26] dark:text-[#F3F4F6]";

    return `
      <a href="${item.href}" class="${base} ${state}" ${active ? 'aria-current="page"' : ""}>
        ${item.icon}
        <span>${item.label}</span>
      </a>
    `;
  }).join("");
}

function renderLayout(pageKey, pageContent) {
  const meta = PAGE_META[pageKey];
  return `
    <div class="min-h-screen bg-[#F8F9FA] font-['Plus_Jakarta_Sans','Avenir_Next','Segoe_UI',sans-serif] text-[#1A1F26] transition-colors duration-500 ease-out dark:bg-[#0B0F17] dark:text-[#F3F4F6]">
      <div aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div class="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#0A2540]/10 blur-3xl dark:bg-[#2463EB]/20"></div>
        <div class="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#0A2540]/10 blur-3xl dark:bg-[#2463EB]/15"></div>
      </div>

      <div class="flex pb-20 lg:pb-0">
        <aside class="hidden transition-colors duration-500 ease-out lg:flex lg:w-72 lg:flex-col lg:border-r lg:border-[#697386]/25 lg:bg-white/85 lg:px-5 lg:py-6 lg:backdrop-blur dark:lg:border-[#2D3748] dark:lg:bg-[#161C2A]/85" aria-label="Navegacion principal">
          <div class="mb-6 rounded-2xl border border-[#697386]/25 bg-gradient-to-br from-[#0A2540] to-[#13375e] p-4 text-white dark:border-[#2D3748] dark:from-[#2463EB] dark:to-[#173f8a]">
            <p class="text-xs uppercase tracking-[0.18em] text-white/75">AgentHub SaaS</p>
            <p class="mt-2 text-lg font-bold">Admin Panel</p>
          </div>
          <nav class="space-y-2" aria-label="Secciones del panel">
            ${renderNav(pageKey)}
          </nav>
        </aside>

        <div class="flex min-h-screen flex-1 flex-col">
          <header class="border-b border-[#697386]/25 bg-white/85 px-4 py-4 backdrop-blur transition-colors duration-500 ease-out dark:border-[#2D3748] dark:bg-[#161C2A]/85 sm:px-6 lg:px-10">
            <div class="flex items-center justify-between gap-4">
              <div>
                <p class="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#697386] dark:text-[#9CA3AF]">Control center</p>
                <h1 class="mt-1 text-xl font-black tracking-tight sm:text-3xl">${meta.title}</h1>
                <p class="mt-1 text-sm text-[#697386] dark:text-[#9CA3AF]">${meta.subtitle}</p>
              </div>
              <div class="flex items-center gap-3 rounded-2xl border border-[#697386]/25 bg-[#F8F9FA] px-3 py-2 shadow-sm dark:border-[#2D3748] dark:bg-[#0B0F17]">
                <button
                  id="theme-toggle"
                  type="button"
                  class="rounded-lg border border-[#697386]/35 px-3 py-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2463EB] dark:border-[#2D3748]"
                  aria-label="Cambiar entre modo claro y oscuro"
                  aria-pressed="false"
                >
                  Modo oscuro
                </button>
                <div class="hidden text-right sm:block">
                  <p class="text-sm font-bold">Camila Admin</p>
                  <p class="text-xs text-[#697386] dark:text-[#9CA3AF]">Operaciones AgentHub</p>
                </div>
                <div class="grid h-10 w-10 place-items-center rounded-full bg-[#0A2540] text-sm font-bold text-white dark:bg-[#2463EB]" aria-label="Foto de perfil de usuario">CA</div>
              </div>
            </div>
          </header>

          <main id="main-content" class="flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10" tabindex="-1">
            ${pageContent}
          </main>

          <footer class="border-t border-[#697386]/25 bg-white/85 px-4 py-4 text-xs text-[#697386] backdrop-blur transition-colors duration-500 ease-out dark:border-[#2D3748] dark:bg-[#161C2A]/85 dark:text-[#9CA3AF] sm:px-6 lg:px-10">
            <p>Copyright 2026 AgentHub · Soporte: soporte@agenthub.ai · Politicas Legales · Creditos de Desarrollo: Equipo Frontend AgentHub</p>
          </footer>
        </div>
      </div>

      <nav class="fixed inset-x-0 bottom-0 z-40 border-t border-[#697386]/25 bg-white/90 px-2 py-2 backdrop-blur transition-colors duration-500 ease-out dark:border-[#2D3748] dark:bg-[#161C2A]/90 lg:hidden" aria-label="Navegacion inferior">
        <div class="grid grid-cols-6 gap-1">${renderNav(pageKey, true)}</div>
      </nav>

      <div id="modal-overlay" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/55 p-4" role="presentation">
        <div class="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-2xl border border-[#697386]/30 bg-white p-6 shadow-2xl dark:border-[#2D3748] dark:bg-[#161C2A]" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div class="mb-4 flex items-start justify-between gap-4">
            <h2 id="modal-title" class="text-lg font-bold tracking-tight"></h2>
            <button id="modal-close" type="button" class="rounded-md px-2 py-1 text-sm font-medium text-[#697386] hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2463EB] dark:text-[#9CA3AF] dark:hover:bg-slate-800" aria-label="Cerrar modal">Cerrar</button>
          </div>
          <div id="modal-body" class="space-y-4 text-sm"></div>
        </div>
      </div>
    </div>
  `;
}

function renderMetricCard(metric) {
  return `
    <article class="group relative overflow-hidden rounded-2xl border border-[#697386]/20 bg-white p-6 shadow-sm transition-colors duration-500 ease-out dark:border-[#2D3748] dark:bg-[#161C2A]">
      <div aria-hidden="true" class="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#0A2540]/10 blur-2xl dark:bg-[#2463EB]/15"></div>
      <header class="mb-4 flex items-start justify-between gap-4">
        <h3 class="text-xs font-bold uppercase tracking-[0.16em] text-[#697386] dark:text-[#9CA3AF]">${metric.titulo}</h3>
        <span class="rounded-full px-3 py-1 text-xs font-semibold ${metric.chip}">${metric.tendencia}</span>
      </header>
      <p class="mb-4 text-4xl font-black tracking-tight">${metric.valor}</p>
      <div class="mb-4 grid h-24 grid-cols-12 items-end gap-2 rounded-xl bg-[#F8F9FA] p-3 dark:bg-[#0B0F17]" aria-label="Grafico de comportamiento de la metrica">
        <div class="col-span-3 h-8 rounded-md ${metric.colorA}"></div>
        <div class="col-span-4 h-14 rounded-md ${metric.colorB}"></div>
        <div class="col-span-2 h-7 rounded-md ${metric.colorA}"></div>
        <div class="col-span-3 h-20 rounded-md ${metric.colorB}"></div>
      </div>
      <ul class="space-y-2 text-xs text-[#697386] dark:text-[#9CA3AF]">
        <li class="flex items-center gap-2"><span class="h-3 w-3 rounded-full ${metric.colorA}"></span>${metric.legendA}</li>
        <li class="flex items-center gap-2"><span class="h-3 w-3 rounded-full ${metric.colorB}"></span>${metric.legendB}</li>
      </ul>
    </article>
  `;
}

function renderDashboard() {
  return `
    <section class="space-y-6" aria-labelledby="dashboard-metricas">
      <h2 id="dashboard-metricas" class="sr-only">Metricas del dashboard</h2>
      <div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
        ${DASHBOARD_METRICS.map(renderMetricCard).join("")}
      </div>

      <section class="rounded-2xl border border-dashed border-[#697386]/40 bg-white p-7 transition-colors duration-500 ease-out dark:border-[#2D3748] dark:bg-[#161C2A]" aria-labelledby="actividad-semanal">
        <h3 id="actividad-semanal" class="text-xl font-black tracking-tight">Actividad semanal</h3>
        <p class="mt-2 text-sm text-[#697386] dark:text-[#9CA3AF]">Marcador de posicion para grafico de volumen de operaciones por dia.</p>
        <div class="mt-6 grid grid-cols-7 items-end gap-2" aria-hidden="true">
          ${WEEK_ACTIVITY_CLASSES.map((heightClass, index) => `<div class="${heightClass} rounded-md ${WEEK_ACTIVITY_COLORS[index]}"></div>`).join("")}
        </div>
      </section>
    </section>
  `;
}

function dropdownButton(id, label = "Abrir acciones") {
  return `
    <div class="relative inline-block text-left">
      <button type="button" data-dropdown-toggle="${id}" class="rounded-md border border-[#697386]/30 px-3 py-1.5 text-sm font-semibold dark:border-[#2D3748]" aria-haspopup="menu" aria-expanded="false" aria-label="${label}">...</button>
      <div id="${id}" class="absolute right-0 z-20 mt-1 hidden w-44 rounded-xl border border-[#697386]/25 bg-white p-1 shadow-lg dark:border-[#2D3748] dark:bg-[#161C2A]" role="menu"></div>
    </div>
  `;
}

function renderUsuarios() {
  const rows = USERS.map((user, idx) => `
    <tr data-user-row="${user.id}" class="border-b border-[#697386]/20 dark:border-[#2D3748]">
      <td class="px-4 py-3 font-semibold">${user.nombre} ${user.apellido}</td>
      <td class="px-4 py-3">${user.email}</td>
      <td class="px-4 py-3">${user.planNombre}</td>
      <td class="px-4 py-3"><span class="rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusBadge(user.estado)}">${user.estado}</span></td>
      <td class="px-4 py-3 text-right">${dropdownButton(`user-actions-${idx}`, `Acciones para ${user.nombre} ${user.apellido}`)}</td>
    </tr>
  `).join("");

  return `
    <section class="rounded-2xl border border-[#697386]/20 bg-white shadow-sm dark:border-[#2D3748] dark:bg-[#161C2A]">
      <header class="border-b border-[#697386]/20 px-4 py-4 dark:border-[#2D3748] sm:px-6">
        <h2 class="text-xl font-black tracking-tight">Usuarios registrados</h2>
      </header>
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm" aria-label="Tabla de usuarios">
          <thead class="bg-[#F8F9FA] text-left text-xs uppercase tracking-[0.14em] text-[#697386] dark:bg-[#0B0F17] dark:text-[#9CA3AF]">
            <tr>
              <th class="px-4 py-3">Nombre</th><th class="px-4 py-3">Email</th><th class="px-4 py-3">Plan</th><th class="px-4 py-3">Estado</th><th class="px-4 py-3 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </section>
  `;
}

function renderAgentes() {
  return `
    <section class="space-y-5" aria-label="Listado de agentes">
      ${AGENTS.map((agent, idx) => `
        <article data-agent-row="${agent.id}" class="rounded-2xl border border-[#697386]/20 bg-white p-6 shadow-sm dark:border-[#2D3748] dark:bg-[#161C2A]">
          <div class="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 class="text-xl font-black tracking-tight">${agent.nombre}</h2>
              <p class="text-sm text-[#697386] dark:text-[#9CA3AF]">Propietario: ${agent.propietario}</p>
            </div>
            <div class="flex items-center gap-3">
              <span class="rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusBadge(agent.estado)}">${agent.estado}</span>
              ${dropdownButton(`agent-actions-${idx}`, `Acciones para ${agent.nombre}`)}
            </div>
          </div>
          <div class="mt-4 rounded-xl bg-[#F8F9FA] p-3 dark:bg-[#0B0F17]">
            <button type="button" class="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2463EB]" data-skill-toggle="skills-${agent.id}" aria-expanded="false" aria-controls="skills-${agent.id}">
              Skills asociadas
              <span aria-hidden="true">▾</span>
            </button>
            <div id="skills-${agent.id}" class="max-h-0 overflow-hidden transition-all duration-300">
              <ul class="mt-2 space-y-2 px-3 pb-2 text-sm text-[#697386] dark:text-[#9CA3AF]">
                ${agent.skills.map((skill) => `<li>- ${skill}</li>`).join("")}
              </ul>
            </div>
          </div>
        </article>
      `).join("")}
    </section>
  `;
}

function renderSkills() {
  return `
    <section class="space-y-4">
      <article class="rounded-2xl border border-[#697386]/20 bg-white p-5 shadow-sm dark:border-[#2D3748] dark:bg-[#161C2A]">
        <h2 class="text-xl font-black tracking-tight">Que es una skill en AgentHub?</h2>
        <p class="mt-2 text-sm text-[#697386] dark:text-[#9CA3AF]">Una skill es una capacidad modular que se adjunta a un agente para ampliar su comportamiento. Por ejemplo: navegar por la web, leer documentos o analizar logs operativos.</p>
      </article>

      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2" aria-label="Catalogo de skills">
        ${SKILLS.map((skill, idx) => `
          <article data-skill-row="${skill.id}" class="rounded-2xl border border-[#697386]/20 bg-white p-5 shadow-sm dark:border-[#2D3748] dark:bg-[#161C2A]">
            <div class="flex items-start justify-between gap-3">
              <div>
                <h3 class="text-lg font-black tracking-tight">${skill.nombre}</h3>
                <p class="mt-2 text-sm text-[#697386] dark:text-[#9CA3AF]">${skill.descripcion}</p>
                <p class="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#697386] dark:text-[#9CA3AF]">Habilitada en ${skill.habilitadaEn} agentes</p>
              </div>
              ${dropdownButton(`skill-actions-${idx}`, `Acciones para skill ${skill.nombre}`)}
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderContratos() {
  const rows = CONTRACTS.map((contract, idx) => `
    <tr data-contract-row="${contract.id}" class="border-b border-[#697386]/20 dark:border-[#2D3748]">
      <td class="px-4 py-3 font-semibold">${contract.cliente}</td>
      <td class="px-4 py-3">${contract.agente}</td>
      <td class="px-4 py-3">${contract.skills.map((skill) => skill.nombre).join(", ")}</td>
      <td class="px-4 py-3">${contract.inicio} - ${contract.fin}</td>
      <td class="px-4 py-3 font-bold">${formatMoney(contract.total)}</td>
      <td class="px-4 py-3 text-right">${dropdownButton(`contract-actions-${idx}`, `Acciones para contrato ${contract.id}`)}</td>
    </tr>
  `).join("");

  return `
    <section class="rounded-2xl border border-[#697386]/20 bg-white shadow-sm dark:border-[#2D3748] dark:bg-[#161C2A]">
      <header class="border-b border-[#697386]/20 px-4 py-4 dark:border-[#2D3748] sm:px-6">
        <h2 class="text-xl font-black tracking-tight">Historial de contrataciones</h2>
      </header>
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm" aria-label="Tabla de contrataciones">
          <thead class="bg-[#F8F9FA] text-left text-xs uppercase tracking-[0.14em] text-[#697386] dark:bg-[#0B0F17] dark:text-[#9CA3AF]">
            <tr>
              <th class="px-4 py-3">Cliente</th><th class="px-4 py-3">Agente</th><th class="px-4 py-3">Skills</th><th class="px-4 py-3">Fechas</th><th class="px-4 py-3">Importe total</th><th class="px-4 py-3 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </section>
  `;
}

function renderErrores() {
  const rows = ERRORS.map((error, idx) => `
    <tr data-error-row="${error.id}" class="border-b border-[#697386]/20 dark:border-[#2D3748]">
      <td class="px-4 py-3">${error.timestamp}</td>
      <td class="px-4 py-3 font-semibold">${error.agente}</td>
      <td class="px-4 py-3">${error.tipo}</td>
      <td class="px-4 py-3"><span class="rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusBadge(error.severidad)}">${error.severidad}</span></td>
      <td class="px-4 py-3">${error.descripcion}</td>
      <td class="px-4 py-3 text-right">${dropdownButton(`error-actions-${idx}`, `Acciones para error ${error.id}`)}</td>
    </tr>
  `).join("");

  return `
    <section class="rounded-2xl border border-[#697386]/20 bg-white shadow-sm dark:border-[#2D3748] dark:bg-[#161C2A]">
      <header class="border-b border-[#697386]/20 px-4 py-4 dark:border-[#2D3748] sm:px-6">
        <h2 class="text-xl font-black tracking-tight">Registro de errores de ejecucion</h2>
      </header>
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm" aria-label="Tabla de errores">
          <thead class="bg-[#F8F9FA] text-left text-xs uppercase tracking-[0.14em] text-[#697386] dark:bg-[#0B0F17] dark:text-[#9CA3AF]">
            <tr>
              <th class="px-4 py-3">Timestamp</th><th class="px-4 py-3">Agente</th><th class="px-4 py-3">Tipo</th><th class="px-4 py-3">Gravedad</th><th class="px-4 py-3">Descripcion</th><th class="px-4 py-3 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </section>
  `;
}

function getPageContent(pageKey) {
  if (pageKey === "dashboard") return renderDashboard();
  if (pageKey === "usuarios") return renderUsuarios();
  if (pageKey === "agentes") return renderAgentes();
  if (pageKey === "skills") return renderSkills();
  if (pageKey === "contratos") return renderContratos();
  return renderErrores();
}

function openModal(title, bodyHtml) {
  const overlay = document.getElementById("modal-overlay");
  const titleEl = document.getElementById("modal-title");
  const bodyEl = document.getElementById("modal-body");
  if (!overlay || !titleEl || !bodyEl) return;

  titleEl.textContent = title;
  bodyEl.innerHTML = bodyHtml;
  overlay.classList.remove("hidden");
  overlay.classList.add("flex");
  const closeButton = document.getElementById("modal-close");
  if (closeButton) closeButton.focus();
}

function closeModal() {
  const overlay = document.getElementById("modal-overlay");
  if (!overlay) return;
  overlay.classList.add("hidden");
  overlay.classList.remove("flex");
}

function closeAllDropdowns() {
  document.querySelectorAll("[id^='user-actions-'], [id^='agent-actions-'], [id^='skill-actions-'], [id^='contract-actions-'], [id^='error-actions-']")
    .forEach((menu) => menu.classList.add("hidden"));

  document.querySelectorAll("[data-dropdown-toggle]").forEach((button) => {
    button.setAttribute("aria-expanded", "false");
  });
}

function populateMenus(pageKey) {
  if (pageKey === "usuarios") {
    USERS.forEach((user, idx) => {
      const menu = document.getElementById(`user-actions-${idx}`);
      if (!menu) return;
      menu.innerHTML = `
        <button type="button" data-user-view="${user.id}" class="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-800" role="menuitem">Ver detalle</button>
        <button type="button" data-user-delete="${user.id}" class="block w-full rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 dark:text-red-300 dark:hover:bg-red-500/10" role="menuitem">Eliminar</button>
      `;
    });
  }

  if (pageKey === "agentes") {
    AGENTS.forEach((agent, idx) => {
      const menu = document.getElementById(`agent-actions-${idx}`);
      if (!menu) return;
      menu.innerHTML = `
        <button type="button" data-agent-configure="${agent.id}" class="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-800" role="menuitem">Configurar</button>
        <button type="button" data-agent-delete="${agent.id}" class="block w-full rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 dark:text-red-300 dark:hover:bg-red-500/10" role="menuitem">Eliminar</button>
      `;
    });
  }

  if (pageKey === "skills") {
    SKILLS.forEach((skill, idx) => {
      const menu = document.getElementById(`skill-actions-${idx}`);
      if (!menu) return;
      menu.innerHTML = `
        <button type="button" data-skill-view="${skill.id}" class="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-800" role="menuitem">Ver detalle</button>
        <button type="button" data-skill-delete="${skill.id}" class="block w-full rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 dark:text-red-300 dark:hover:bg-red-500/10" role="menuitem">Eliminar</button>
      `;
    });
  }

  if (pageKey === "contratos") {
    CONTRACTS.forEach((contract, idx) => {
      const menu = document.getElementById(`contract-actions-${idx}`);
      if (!menu) return;
      menu.innerHTML = `
        <button type="button" data-contract-view="${contract.id}" class="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-800" role="menuitem">Ver detalle</button>
        <button type="button" data-contract-delete="${contract.id}" class="block w-full rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 dark:text-red-300 dark:hover:bg-red-500/10" role="menuitem">Eliminar</button>
      `;
    });
  }

  if (pageKey === "errores") {
    ERRORS.forEach((error, idx) => {
      const menu = document.getElementById(`error-actions-${idx}`);
      if (!menu) return;
      menu.innerHTML = `
        <button type="button" data-error-view="${error.id}" class="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-800" role="menuitem">Ver detalle</button>
        <button type="button" data-error-resolve="${error.id}" class="block w-full rounded-lg px-3 py-2 text-left text-sm text-emerald-700 hover:bg-emerald-50 dark:text-emerald-300 dark:hover:bg-emerald-500/10" role="menuitem">Marcar como resuelto</button>
      `;
    });
  }
}

function userDetailMarkup(user) {
  return `
    <section class="space-y-5">
      <section>
        <h3 class="mb-3 text-base font-bold tracking-tight">Informacion personal</h3>
        <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <p><strong>Nombre:</strong> ${user.nombre}</p>
          <p><strong>Apellido:</strong> ${user.apellido}</p>
          <p><strong>Fecha de nacimiento:</strong> ${user.fechaNacimiento}</p>
          <p><strong>Direccion:</strong> ${user.direccion}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Telefono:</strong> ${user.telefono}</p>
          <p><strong>Ciudad:</strong> ${user.ciudad}</p>
          <p><strong>Pais:</strong> ${user.pais}</p>
        </div>
      </section>
      <section>
        <h3 class="mb-3 text-base font-bold tracking-tight">Informacion del plan</h3>
        <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <p><strong>Nombre del plan:</strong> ${user.planNombre}</p>
          <p><strong>Fecha de contratacion:</strong> ${user.planContratacion}</p>
          <p><strong>Fecha de vencimiento:</strong> ${user.planVencimiento}</p>
          <p><strong>Metodo de pago:</strong> ${user.metodoPago}</p>
          <p><strong>Estado del plan:</strong> ${user.planEstado}</p>
        </div>
      </section>
    </section>
  `;
}

function contractDetailMarkup(contract) {
  return `
    <section class="space-y-4">
      <p><strong>Cliente:</strong> ${contract.cliente}</p>
      <p><strong>Agente alquilado:</strong> ${contract.agente}</p>
      <p><strong>Periodo:</strong> ${contract.inicio} a ${contract.fin}</p>
      <section>
        <h3 class="mb-2 text-base font-bold tracking-tight">Desglose de skills contratadas</h3>
        <ul class="space-y-2">
          ${contract.skills.map((skill) => `<li class="flex items-center justify-between rounded-lg bg-[#F8F9FA] px-3 py-2 dark:bg-[#0B0F17]"><span>${skill.nombre}</span><span class="font-semibold">${formatMoney(skill.precio)}</span></li>`).join("")}
        </ul>
      </section>
      <p class="text-base font-bold">Importe total pagado: ${formatMoney(contract.total)}</p>
    </section>
  `;
}

function applyTheme(theme) {
  const root = document.documentElement;
  const body = document.body;
  const isDark = theme === "dark";
  root.classList.toggle("dark", isDark);
  if (body) body.classList.toggle("dark", isDark);
  const toggleButton = document.getElementById("theme-toggle");
  if (toggleButton) {
    toggleButton.textContent = isDark ? "Modo claro" : "Modo oscuro";
    toggleButton.setAttribute("aria-pressed", String(isDark));
  }
}

function toggleTheme() {
  const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
  localStorage.setItem("agenthub-theme", next);
  applyTheme(next);
}

function initTheme() {
  const stored = localStorage.getItem("agenthub-theme");
  const systemPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = stored || (systemPrefersDark ? "dark" : "light");
  applyTheme(initial);

  const toggleButton = document.getElementById("theme-toggle");
  if (!toggleButton) return;
  toggleButton.addEventListener("click", toggleTheme);
}

function handleActions(pageKey) {
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const toggle = target.closest("[data-dropdown-toggle]");
    if (toggle instanceof HTMLElement) {
      const menuId = toggle.getAttribute("data-dropdown-toggle");
      const menu = menuId ? document.getElementById(menuId) : null;
      if (menu) {
        const willOpen = menu.classList.contains("hidden");
        closeAllDropdowns();
        if (willOpen) {
          menu.classList.remove("hidden");
          toggle.setAttribute("aria-expanded", "true");
        }
      }
      return;
    }

    const modalOverlay = document.getElementById("modal-overlay");
    if (target.id === "modal-close" || target === modalOverlay) {
      closeModal();
      return;
    }

    if (target.closest("[data-user-view]")) {
      const id = target.closest("[data-user-view]")?.getAttribute("data-user-view");
      const user = USERS.find((item) => item.id === id);
      if (user) openModal("Informacion del Usuario", userDetailMarkup(user));
      closeAllDropdowns();
      return;
    }

    if (target.closest("[data-user-delete]")) {
      const id = target.closest("[data-user-delete]")?.getAttribute("data-user-delete");
      const row = id ? document.querySelector(`[data-user-row='${id}']`) : null;
      if (row) row.remove();
      closeAllDropdowns();
      return;
    }

    if (target.closest("[data-agent-configure]")) {
      const id = target.closest("[data-agent-configure]")?.getAttribute("data-agent-configure");
      const agent = AGENTS.find((item) => item.id === id);
      if (agent) {
        openModal(
          `Prompt del agente: ${agent.nombre}`,
          `<section class="space-y-3"><p class="text-sm text-[#697386] dark:text-[#9CA3AF]">Configuracion del sistema del agente seleccionado.</p><pre class="overflow-auto rounded-xl bg-[#F8F9FA] p-4 text-sm dark:bg-[#0B0F17]">${agent.prompt}</pre></section>`
        );
      }
      closeAllDropdowns();
      return;
    }

    if (target.closest("[data-agent-delete]")) {
      const id = target.closest("[data-agent-delete]")?.getAttribute("data-agent-delete");
      const row = id ? document.querySelector(`[data-agent-row='${id}']`) : null;
      if (row) row.remove();
      closeAllDropdowns();
      return;
    }

    if (target.closest("[data-skill-view]")) {
      const id = target.closest("[data-skill-view]")?.getAttribute("data-skill-view");
      const skill = SKILLS.find((item) => item.id === id);
      if (skill) {
        openModal(
          `Detalle de skill: ${skill.nombre}`,
          `<section class="space-y-3"><p>${skill.descripcion}</p><p><strong>Agentes con esta skill:</strong> ${skill.habilitadaEn}</p><p><strong>Detalle:</strong> ${skill.detalle}</p></section>`
        );
      }
      closeAllDropdowns();
      return;
    }

    if (target.closest("[data-skill-delete]")) {
      const id = target.closest("[data-skill-delete]")?.getAttribute("data-skill-delete");
      const row = id ? document.querySelector(`[data-skill-row='${id}']`) : null;
      if (row) row.remove();
      closeAllDropdowns();
      return;
    }

    if (target.closest("[data-contract-view]")) {
      const id = target.closest("[data-contract-view]")?.getAttribute("data-contract-view");
      const contract = CONTRACTS.find((item) => item.id === id);
      if (contract) openModal(`Detalle del contrato ${contract.id.toUpperCase()}`, contractDetailMarkup(contract));
      closeAllDropdowns();
      return;
    }

    if (target.closest("[data-contract-delete]")) {
      const id = target.closest("[data-contract-delete]")?.getAttribute("data-contract-delete");
      const row = id ? document.querySelector(`[data-contract-row='${id}']`) : null;
      if (row) row.remove();
      closeAllDropdowns();
      return;
    }

    if (target.closest("[data-error-view]")) {
      const id = target.closest("[data-error-view]")?.getAttribute("data-error-view");
      const error = ERRORS.find((item) => item.id === id);
      if (error) {
        openModal(
          `Traza completa: ${error.agente}`,
          `<section class="space-y-3"><p><strong>Tipo:</strong> ${error.tipo}</p><p><strong>Descripcion:</strong> ${error.descripcion}</p><pre class="overflow-auto rounded-xl bg-[#F8F9FA] p-4 text-sm dark:bg-[#0B0F17]">${error.traza}</pre></section>`
        );
      }
      closeAllDropdowns();
      return;
    }

    if (target.closest("[data-error-resolve]")) {
      const id = target.closest("[data-error-resolve]")?.getAttribute("data-error-resolve");
      const row = id ? document.querySelector(`[data-error-row='${id}']`) : null;
      if (row) {
        row.classList.add("opacity-55");
        const badge = row.querySelector("td:nth-child(4) span");
        if (badge) {
          badge.textContent = "Resuelto";
          badge.className = "rounded-full px-2.5 py-1 text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200";
        }
      }
      closeAllDropdowns();
      return;
    }

    if (!target.closest("[data-dropdown-toggle]") && !target.closest("[role='menu']")) {
      closeAllDropdowns();
    }

    if (pageKey === "agentes") {
      const skillsToggle = target.closest("[data-skill-toggle]");
      if (skillsToggle instanceof HTMLElement) {
        const panelId = skillsToggle.getAttribute("data-skill-toggle");
        const panel = panelId ? document.getElementById(panelId) : null;
        if (panel) {
          const expanded = skillsToggle.getAttribute("aria-expanded") === "true";
          skillsToggle.setAttribute("aria-expanded", String(!expanded));
          panel.classList.toggle("max-h-0", expanded);
          panel.classList.toggle("max-h-40", !expanded);
        }
      }
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
      closeAllDropdowns();
    }
  });
}

function bootstrapPanel() {
  const body = document.body;
  const pageKey = body.getAttribute("data-page") || "dashboard";
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = renderLayout(pageKey, getPageContent(pageKey));
  populateMenus(pageKey);
  initTheme();
  handleActions(pageKey);
}

bootstrapPanel();
