export const profile = {
  name: "Pablo Contreras López",
  handle: "@pablo-contreras-dev",
  email: "pablo.contreras.dev@gmail.com",
  github: "https://github.com/pablo-contreras-dev",
  linkedin: "https://www.linkedin.com/in/pablo-contreras-dev/",
  cv: `${import.meta.env.BASE_URL}CV-Pablo_Contreras.pdf`,
  photo: `${import.meta.env.BASE_URL}portrait.png`,
  location: "Granada",
}

export type Lang = "es" | "en"

export type Copy = {
  role: string
  nav: Record<string, string>
  skip: string
  bootLines: string[]
  access: string
  openToWork: string
  dossier: string
  pathHome: string
  meta: { label: string; value: string }[]
  bio: string
  stats: { value: string; label: string }[]
  focusTitle: string
  workingOn: string
  current: { name: string; blurb: string; href: string }[]
  downloadCv: string
  cvMeta: string
  projectsTitle: string
  projectsIntro: string
  viewRepo: string
  whatIDid: string
  projects: {
    id: string
    tag: string
    title: string
    summary: string
    did: string
    stack: string[]
    repo: string
  }[]
  stackTitle: string
  stack: { group: string; items: string[] }[]
  experienceEducationTitle: string
  experienceTitle: string
  educationTitle: string
  jobs: {
    title: string
    place: string
    time: string
    location: string
    employment: string
    summary: string
    points: string[]
  }[]
  education: { title: string; place: string; time: string }[]
  contactTitle: string
  contactBody: string
  available: string
  terminalHint: string
  notFoundTitle: string
  notFoundBody: string
  goHome: string
  langToggle: string
  terminal: {
    welcome: string
    unknown: string
    help: string
  }
}

export const copy: Record<Lang, Copy> = {
  es: {
    role: "Junior Backend Developer",
    nav: {
      about: "SOBRE MÍ",
      projects: "PROYECTOS",
      stack: "STACK",
      contact: "CONTACTO",
    },
    skip: "[ SKIP ]",
    bootLines: [
      "montando expediente // backend",
      "perfil: pablo contreras lópez",
      "stack: java · spring boot · laravel · docker",
      "ubicación: granada · es/en b2",
      "estado: disponible para trabajar",
    ],
    access: "ACCESO CONCEDIDO",
    openToWork: "DISPONIBLE",
    dossier: "DEV PROFILE",
    pathHome: "DOSSIER://HOME",
    meta: [
      { label: "ROL", value: "JUNIOR BACKEND DEVELOPER" },
      { label: "FORMACIÓN", value: "2º DAM · DAW COMPLETADO" },
      { label: "UBICACIÓN", value: "GRANADA, ESPAÑA" },
      { label: "IDIOMAS", value: "ES · EN (B2)" },
      { label: "ESTADO", value: "DISPONIBLE PARA TRABAJAR" },
    ],
    bio: "Soy desarrollador backend junior y estoy terminando DAM, después de completar DAW. Construyo APIs y aplicaciones con Java, Spring Boot, PHP y Laravel, conectadas a bases de datos SQL. Mi experiencia en soporte técnico y servidores me ayuda a entender también cómo se despliegan y mantienen las aplicaciones.",
    stats: [
      { value: "DAW+DAM", label: "CICLOS FP" },
      { value: "3", label: "LENGUAJES BACKEND" },
      { value: "5", label: "PROYECTOS DESTACADOS" },
      { value: "B2", label: "NIVEL DE INGLÉS" },
    ],
    focusTitle: "TECNOLOGÍAS PRINCIPALES",
    workingOn: "TRABAJANDO EN",
    current: [
      {
        name: "MOVIELOG",
        blurb: "API REST de películas con Spring Boot, MySQL y Docker.",
        href: "https://github.com/pablo-contreras-dev/MovieLog",
      },
      {
        name: "LIBROLOOP",
        blurb: "Backend de biblioteca: préstamos, roles y PostgreSQL.",
        href: "https://github.com/pablo-contreras-dev/libroloop",
      },      {
        name: "MATEO",
        blurb: "Asistente de voz local para Windows con conversación, búsqueda por nombre y memoria opcional.",
        href: "https://github.com/pablo-contreras-dev/asistentedeVoz/tree/feature/local-ai",
      },
    ],
    downloadCv: "DESCARGAR CV",
    cvMeta: "PDF · 1 PÁGINA",
    projectsTitle: "PROYECTOS",
    projectsIntro: "Proyectos propios y académicos. Mira qué resuelve cada uno, cómo lo construí y qué tecnologías usé.",
    viewRepo: "VER REPO →",
    whatIDid: "Mi aportación",
    projects: [
      {
        id: "01",
        tag: "APP WEB · LARAVEL",
        title: "HELPDESK",
        summary:
          "Aplicación para registrar y seguir incidencias de soporte. Cada ticket tiene responsable, prioridad, estado e historial de cambios.",
        did: "Diseñé la base de datos y construí el acceso de usuarios, la gestión de tickets y su historial con Laravel y MySQL.",
        stack: ["LARAVEL", "PHP", "MYSQL", "BLADE"],
        repo: "https://github.com/pablo-contreras-dev/Helpdesk",
      },
      {
        id: "02",
        tag: "PELÍCULAS · SPRING",
        title: "MOVIELOG",
        summary:
          "API para organizar películas y series. Permite guardar títulos, cambiar su estado, añadir valoraciones y consultar estadísticas; obtiene información de OMDb.",
        did: "Separé la API en controladores, servicios y acceso a datos. Añadí conexión a OMDb, respuestas de error comunes y arranque con Docker Compose.",
        stack: ["JAVA 21", "SPRING BOOT", "MYSQL", "DOCKER"],
        repo: "https://github.com/pablo-contreras-dev/MovieLog",
      },
      {
        id: "03",
        tag: "BIBLIOTECA · SPRING",
        title: "LIBROLOOP",
        summary:
          "Sistema para una biblioteca: organiza libros y socios, registra préstamos y reservas, y calcula retrasos y multas. Hay permisos distintos para socios y bibliotecarios.",
        did: "Construí las reglas de préstamos y reservas con Spring Boot. Protegí las rutas según el tipo de usuario y usé PostgreSQL para guardar los datos.",
        stack: ["JAVA 21", "SPRING BOOT", "POSTGRESQL", "SECURITY"],
        repo: "https://github.com/pablo-contreras-dev/libroloop",
      },
      {
        id: "04",
        tag: "EMPLEO · AUTOMATIZACIÓN",
        title: "BACKEND AGENTE",
        summary:
          "Herramienta que recoge ofertas de empleo, las analiza y ayuda a encontrar las más adecuadas. Procesa las tareas en segundo plano para no bloquear la web.",
        did: "Programé el procesamiento en segundo plano, la detección de ofertas repetidas, el análisis por palabras clave y las notificaciones.",
        stack: ["LARAVEL 11", "QUEUES", "SQLITE", "API"],
        repo: "https://github.com/pablo-contreras-dev/backend-agente",
      },
      {
        id: "05",
        tag: "IA LOCAL · ASISTENTE DE VOZ",
        title: "MATEO",
        summary:
          "Asistente personal de voz para Windows que escucha una frase de activación, mantiene conversaciones habladas y permite abrir aplicaciones, carpetas y archivos por nombre. Usa modelos locales para transcribir, responder y sintetizar voz.",
        did: "Integré Vosk y faster-whisper para reconocer la voz, Ollama con Qwen3 para generar respuestas y Piper para sintetizar audio. Construí el widget de escritorio con Tkinter, controles de privacidad para la memoria local, búsqueda por nombre e instalación automática en Windows.",
        stack: ["PYTHON", "OLLAMA · QWEN3", "VOSK", "FASTER-WHISPER", "PIPER", "TKINTER"],
        repo: "https://github.com/pablo-contreras-dev/asistentedeVoz/tree/feature/local-ai",
      },
      {
        id: "06",
        tag: "GESTIÓN FINANCIERA · SPRING + REACT",
        title: "SUSCRIPCIONES",
        summary:
          "Aplicación personal para tener bajo control las suscripciones y los movimientos del día a día: estima el gasto mensual y anual, muestra próximos cobros flexibles y permite analizar ingresos y gastos por categoría.",
        did: "Desarrollé la aplicación de extremo a extremo: API REST con Spring Boot, persistencia en PostgreSQL con migraciones Flyway e interfaz React con TypeScript. Añadí importación revisable de CSV (incluidos extractos personales de Revolut), copias de seguridad JSON y pruebas de integración con Testcontainers. Empaqueté el backend y el frontend en una imagen Docker.",
        stack: ["JAVA 25", "SPRING BOOT", "REACT", "TYPESCRIPT", "POSTGRESQL", "FLYWAY", "TESTCONTAINERS", "DOCKER"],
        repo: "https://github.com/pablo-contreras-dev/subscription-tracker",
      },
    ],
    stackTitle: "STACK",
    stack: [
      { group: "BACKEND", items: ["Java 21", "Spring Boot", "PHP", "Laravel", "Python"] },
      { group: "BASES DE DATOS", items: ["PostgreSQL", "MySQL", "SQLite", "JPA / Hibernate"] },
      { group: "APIS Y ARQUITECTURA", items: ["REST", "DTOs", "Validación", "Queues", "Auth / Roles"] },
      { group: "SISTEMAS Y DEVOPS", items: ["Docker", "Docker Compose", "Linux básico", "Windows", "Servidores"] },
      { group: "HERRAMIENTAS", items: ["Git", "GitHub", "Maven / Composer", "Cursor", "IntelliJ IDEA", "OpenCode", "IA local"] },
    ],
    experienceEducationTitle: "EXPERIENCIA Y FORMACIÓN",
    experienceTitle: "EXPERIENCIA",
    educationTitle: "FORMACIÓN",
    jobs: [
      {
        title: "Desarrollador Web (Prácticas)",
        place: "GES Formación",
        time: "ENE 2026 — ABR 2026 · 4 MESES",
        location: "Granada, Andalucía, España · Presencial",
        employment: "Contrato de prácticas",
        summary: "Prácticas de Formación Profesional (DAW) desarrollando funcionalidades web con PHP y Laravel.",
        points: [
          "Desarrollo y mantenimiento de módulos siguiendo el patrón MVC de Laravel.",
          "Trabajo con Eloquent ORM y bases de datos MySQL.",
          "Creación de vistas dinámicas con Blade y control de rutas.",
          "Uso de Git y aplicación de buenas prácticas de código y estructura de proyecto.",
        ],
      },
      {
        title: "Desarrollador Web (Prácticas)",
        place: "TROFLEX",
        time: "MAY 2025 — SEP 2025 · 5 MESES",
        location: "Alcalá la Real, Andalucía, España · Presencial",
        employment: "Contrato de prácticas",
        summary: "Prácticas de Formación Profesional (DAW) desarrollando funcionalidades web con PHP y Laravel.",
        points: [
          "Desarrollo de funcionalidades backend siguiendo el patrón MVC.",
          "Trabajo con bases de datos MySQL y Eloquent ORM.",
          "Control de versiones con Git y colaboración en equipo en un entorno profesional.",
        ],
      },
      {
        title: "Técnico de Soporte Informático",
        place: "Insytec Telecomunicaciones",
        time: "SEP 2023 — SEP 2024 · 1 AÑO",
        location: "Alcalá la Real, Andalucía, España · Presencial",
        employment: "Jornada completa",
        summary: "Mantenimiento y reparación de equipos, asistencia técnica a clientes y soporte informático a empresas.",
        points: [
          "Reparación de ordenadores, portátiles, tablets e impresoras.",
          "Diagnóstico y resolución de averías de hardware y software.",
          "Mantenimiento informático en farmacias y ayuntamientos, incluido soporte in situ.",
          "Instalación y mantenimiento de redes locales: cableado, routers y switches.",
          "Atención a usuarios no técnicos con explicaciones claras y adaptadas.",
        ],
      },
    ],
    education: [
      {
        title: "2º DAM — en curso",
        place: "Mercedarias FP · Granada",
        time: "Grado superior · Desarrollo de Aplicaciones Multiplataforma",
      },
      {
        title: "2º DAW — completado",
        place: "IES Francisco Ayala · Granada",
        time: "Grado superior · Desarrollo de Aplicaciones Web",
      },
      {
        title: "1º DAW · Grado medio SMR",
        place: "IES Alfonso XI · Alcalá la Real",
        time: "Desarrollo web y Sistemas Microinformáticos y Redes",
      },
    ],
    contactTitle: "¿TRABAJAMOS JUNTOS?",
    contactBody:
      "Busco mi primer puesto como Junior Backend Developer. Si tienes una oferta o un proyecto, escríbeme y te respondo rápido.",
    available: "DISPONIBLE PARA EMPLEO Y PROYECTOS",
    terminalHint: "TERMINAL",
    notFoundTitle: "SEÑAL PERDIDA",
    notFoundBody: "Esta parte del expediente no existe o fue borrada.",
    goHome: "VOLVER AL PERFIL",
    langToggle: "ES / EN · Cambiar idioma / Change language",
    terminal: {
      welcome: "terminal del expediente. escribe help.",
      unknown: "comando no reconocido. prueba help.",
      help: "comandos: help, about, projects, stack, contact, cv, github, linkedin, whoami, clear",
    },
  },
  en: {
    role: "Junior Backend Developer",
    nav: {
      about: "ABOUT",
      projects: "PROJECTS",
      stack: "STACK",
      contact: "CONTACT",
    },
    skip: "[ SKIP ]",
    bootLines: [
      "mounting dossier // backend",
      "profile: pablo contreras lópez",
      "stack: java · spring boot · laravel · docker",
      "location: granada · es/en b2",
      "status: open to work",
    ],
    access: "ACCESS GRANTED",
    openToWork: "OPEN TO WORK",
    dossier: "DEV PROFILE",
    pathHome: "DOSSIER://HOME",
    meta: [
      { label: "ROLE", value: "JUNIOR BACKEND DEVELOPER" },
      { label: "EDUCATION", value: "2ND DAM · DAW COMPLETED" },
      { label: "LOCATION", value: "GRANADA, SPAIN" },
      { label: "LANGUAGES", value: "ES · EN (B2)" },
      { label: "STATUS", value: "AVAILABLE FOR WORK" },
    ],
    bio: "I am a junior backend developer finishing my DAM degree after completing DAW. I build APIs and applications with Java, Spring Boot, PHP and Laravel, backed by SQL databases. My previous work in technical support and server maintenance also helps me understand how applications are deployed and kept running.",
    stats: [
      { value: "DAW+DAM", label: "VOCATIONAL DEGREES" },
      { value: "3", label: "BACKEND LANGUAGES" },
      { value: "5", label: "FEATURED PROJECTS" },
      { value: "B2", label: "ENGLISH LEVEL" },
    ],
    focusTitle: "CORE TECHNOLOGIES",
    workingOn: "WORKING ON",
    current: [
      {
        name: "MOVIELOG",
        blurb: "Movie REST API with Spring Boot, MySQL and Docker.",
        href: "https://github.com/pablo-contreras-dev/MovieLog",
      },
      {
        name: "LIBROLOOP",
        blurb: "Library backend: loans, roles and PostgreSQL.",
        href: "https://github.com/pablo-contreras-dev/libroloop",
      },      {
        name: "MATEO",
        blurb: "Local Windows voice assistant with conversation, name-based search and optional memory.",
        href: "https://github.com/pablo-contreras-dev/asistentedeVoz/tree/feature/local-ai",
      },
    ],
    downloadCv: "DOWNLOAD CV",
    cvMeta: "PDF · 1 PAGE",
    projectsTitle: "PROJECTS",
    projectsIntro: "Personal and academic work. See what each project does, how I built it, and which tools I used.",
    viewRepo: "VIEW REPO →",
    whatIDid: "My contribution",
    projects: [
      {
        id: "01",
        tag: "WEB APP · LARAVEL",
        title: "HELPDESK",
        summary:
          "An app for reporting and tracking support issues. Each ticket has an owner, priority, status and change history.",
        did: "Designed the database and built user access, ticket management and status history with Laravel and MySQL.",
        stack: ["LARAVEL", "PHP", "MYSQL", "BLADE"],
        repo: "https://github.com/pablo-contreras-dev/Helpdesk",
      },
      {
        id: "02",
        tag: "MOVIES · SPRING",
        title: "MOVIELOG",
        summary:
          "An API for organizing movies and series. Save titles, update their status, add ratings and view statistics, with details from OMDb.",
        did: "Separated request handling, business logic and database access. Added the OMDb connection, consistent error responses and Docker Compose setup.",
        stack: ["JAVA 21", "SPRING BOOT", "MYSQL", "DOCKER"],
        repo: "https://github.com/pablo-contreras-dev/MovieLog",
      },
      {
        id: "03",
        tag: "LIBRARY · SPRING",
        title: "LIBROLOOP",
        summary:
          "A library system for books and members, loans and reservations, including overdue tracking and fines. Members and librarians have different permissions.",
        did: "Built loan and reservation rules with Spring Boot, protected routes by user role and stored data in PostgreSQL.",
        stack: ["JAVA 21", "SPRING BOOT", "POSTGRESQL", "SECURITY"],
        repo: "https://github.com/pablo-contreras-dev/libroloop",
      },
      {
        id: "04",
        tag: "JOBS · AUTOMATION",
        title: "JOB AGENT",
        summary:
          "A tool that collects job listings, analyzes them and helps find suitable roles. It processes work in the background so the website stays responsive.",
        did: "Built background processing, duplicate detection, keyword matching and notifications.",
        stack: ["LARAVEL 11", "QUEUES", "SQLITE", "API"],
        repo: "https://github.com/pablo-contreras-dev/backend-agente",
      },
      {
        id: "05",
        tag: "LOCAL AI · VOICE ASSISTANT",
        title: "MATEO",
        summary:
          "A Windows voice assistant that listens for a wake phrase, holds spoken conversations and opens applications, folders and files by name. It uses local models for speech recognition, responses and speech synthesis.",
        did: "Integrated Vosk and faster-whisper for speech recognition, Ollama with Qwen3 for responses and Piper for speech synthesis. Built the Tkinter desktop widget, privacy controls for local memory, name-based search and Windows startup setup.",
        stack: ["PYTHON", "OLLAMA · QWEN3", "VOSK", "FASTER-WHISPER", "PIPER", "TKINTER"],
        repo: "https://github.com/pablo-contreras-dev/asistentedeVoz/tree/feature/local-ai",
      },
      {
        id: "06",
        tag: "PERSONAL FINANCE · SPRING + REACT",
        title: "SUBSCRIPTION TRACKER",
        summary:
          "A personal finance app for tracking subscriptions and everyday transactions. It estimates monthly and yearly costs, shows flexible upcoming charges and breaks income and spending down by category.",
        did: "Built the application end to end: a Spring Boot REST API, PostgreSQL persistence with Flyway migrations and a React/TypeScript interface. Added reviewed CSV imports (including personal Revolut statements), JSON backups and integration tests with Testcontainers. Packaged the backend and frontend together in one Docker image.",
        stack: ["JAVA 25", "SPRING BOOT", "REACT", "TYPESCRIPT", "POSTGRESQL", "FLYWAY", "TESTCONTAINERS", "DOCKER"],
        repo: "https://github.com/pablo-contreras-dev/subscription-tracker",
      },
    ],
    stackTitle: "STACK",
    stack: [
      { group: "BACKEND", items: ["Java 21", "Spring Boot", "PHP", "Laravel", "Python"] },
      { group: "DATABASES", items: ["PostgreSQL", "MySQL", "SQLite", "JPA / Hibernate"] },
      { group: "APIS & ARCHITECTURE", items: ["REST", "DTOs", "Validation", "Queues", "Auth / Roles"] },
      { group: "SYSTEMS & DEVOPS", items: ["Docker", "Docker Compose", "Basic Linux", "Windows", "Servers"] },
      { group: "TOOLS", items: ["Git", "GitHub", "Maven / Composer", "Cursor", "IntelliJ IDEA", "OpenCode", "Local AI"] },
    ],
    experienceEducationTitle: "EXPERIENCE & EDUCATION",
    experienceTitle: "EXPERIENCE",
    educationTitle: "EDUCATION",
    jobs: [
      {
        title: "Web Developer Intern",
        place: "GES Formación",
        time: "JAN 2026 — APR 2026 · 4 MONTHS",
        location: "Granada, Andalusia, Spain · On-site",
        employment: "Internship contract",
        summary: "Vocational training placement (DAW), building web features with PHP and Laravel.",
        points: [
          "Developed and maintained modules following Laravel's MVC pattern.",
          "Worked with Eloquent ORM and MySQL databases.",
          "Created dynamic Blade views and managed routes.",
          "Used Git and followed code quality and project structure practices.",
        ],
      },
      {
        title: "Web Developer Intern",
        place: "TROFLEX",
        time: "MAY 2025 — SEP 2025 · 5 MONTHS",
        location: "Alcalá la Real, Andalusia, Spain · On-site",
        employment: "Internship contract",
        summary: "Vocational training placement (DAW), building web features with PHP and Laravel.",
        points: [
          "Developed backend features using the MVC pattern.",
          "Worked with MySQL databases and Eloquent ORM.",
          "Used Git for version control and collaborated in a professional team.",
        ],
      },
      {
        title: "IT Support Technician",
        place: "Insytec Telecomunicaciones",
        time: "SEP 2023 — SEP 2024 · 1 YEAR",
        location: "Alcalá la Real, Andalusia, Spain · On-site",
        employment: "Full-time",
        summary: "Maintained and repaired equipment, supported customers and provided IT support to local businesses.",
        points: [
          "Repaired desktop computers, laptops, tablets and printers.",
          "Diagnosed and resolved hardware and software issues.",
          "Provided on-site IT maintenance for pharmacies and town halls.",
          "Installed and maintained local networks, cabling, routers and switches.",
          "Helped non-technical users with clear, practical explanations.",
        ],
      },
    ],
    education: [
      {
        title: "2nd year DAM — in progress",
        place: "Mercedarias FP · Granada",
        time: "Higher vocational · Multiplatform Applications",
      },
      {
        title: "2nd year DAW — completed",
        place: "IES Francisco Ayala · Granada",
        time: "Higher vocational · Web Applications",
      },
      {
        title: "1st year DAW · Intermediate SMR",
        place: "IES Alfonso XI · Alcalá la Real",
        time: "Web development and microcomputer systems & networks",
      },
    ],
    contactTitle: "LET'S WORK TOGETHER",
    contactBody:
      "I am looking for my first role as a Junior Backend Developer. If you have an offer or a project, write to me and I will reply quickly.",
    available: "AVAILABLE FOR JOBS AND PROJECTS",
    terminalHint: "TERMINAL",
    notFoundTitle: "SIGNAL LOST",
    notFoundBody: "This part of the dossier does not exist or was wiped.",
    goHome: "BACK TO PROFILE",
    langToggle: "ES / EN · Cambiar idioma / Change language",
    terminal: {
      welcome: "dossier terminal. type help.",
      unknown: "unknown command. try help.",
      help: "commands: help, about, projects, stack, contact, cv, github, linkedin, whoami, clear",
    },
  },
}
