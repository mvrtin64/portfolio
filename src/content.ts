// Single source of truth: the page sections and the terminal's file system are both built from here.

export type Lang = 'en' | 'es';
export type Localized = Record<Lang, string>;

export type Project = {
  id: string;
  title: Localized;
  description: Localized;
  tech: string[];
  github: string;
  images: string[];
  featured?: boolean;
};

export const profile = {
  name: 'martín',
  fullName: 'Martín T.',
  email: 'mvrtingrzsk@gmail.com',
  github: 'https://github.com/mvrtin64',
  linkedin: 'https://linkedin.com/in/martint64',
  resume: { en: 'cv-en.pdf', es: 'cv-es.pdf' } satisfies Localized,
  photo: 'marto.jpeg',
  location: 'Mar del Plata, Argentina',
  role: {
    en: 'systems analyst · software development & IT support.',
    es: 'analista de sistemas · desarrollo y soporte IT.',
  },
  about: [
    {
      en: "I graduated as a Systems Analyst in 2024. On the development side, I build full-stack products end to end: the domain model, the API, the database and the interface people actually use. On the support side, I've been doing first- and second-level IT support since 2022: hardware, Windows and Linux, networks, and helping users solve their problems.",
      es: 'Me recibí de Analista de Sistemas en 2024. Del lado del desarrollo, construyo productos full-stack de punta a punta: el modelo de dominio, la API, la base de datos y la interfaz que la gente usa. Del lado del soporte, hago soporte técnico de primer y segundo nivel desde 2022: hardware, Windows y Linux, redes y ayudar a los usuarios a resolver sus problemas.',
    },
    {
      en: "I'm also a gym coach, which is how my latest project started: a mobile app that applies my own training rules to plan each user's next session.",
      es: 'También soy coach de gimnasio, y de ahí salió mi último proyecto: una app mobile que aplica mis propias reglas de entrenamiento para planificar la próxima sesión de cada usuario.',
    },
    {
      en: "I'm looking for my first opportunity in IT, in development or in support. If you think I could be a good fit, I'd love to hear from you.",
      es: 'Estoy buscando mi primera oportunidad en IT, en desarrollo o en soporte. Si creés que puedo sumar a tu equipo, me encantaría que hablemos.',
    },
  ] satisfies Localized[],
};

export const skills: { area: Localized; items: string[] }[] = [
  { area: { en: 'backend', es: 'backend' }, items: ['Node.js', 'NestJS', 'Express', 'REST APIs', 'Prisma', 'PostgreSQL', 'MySQL', 'MongoDB'] },
  { area: { en: 'frontend', es: 'frontend' }, items: ['React', 'TypeScript', 'HTML & CSS', 'Responsive design'] },
  { area: { en: 'mobile', es: 'mobile' }, items: ['React Native', 'Expo', 'TanStack Query'] },
  { area: { en: 'tooling', es: 'herramientas' }, items: ['Git & GitHub Actions', 'Docker', 'Vitest', 'Jest'] },
  { area: { en: 'IT support', es: 'soporte IT' }, items: ['Windows 10/11', 'Linux', 'Hardware', 'LAN & Wi-Fi', 'Active Directory', 'AnyDesk / TeamViewer', 'Jira & ticketing'] },
];

export const education: Localized = {
  en: 'Systems Analyst — Instituto Superior de Formación Técnica N° 151, Mar del Plata (2022–2024).',
  es: 'Analista de Sistemas — Instituto Superior de Formación Técnica N° 151, Mar del Plata (2022–2024).',
};

export const projects: Project[] = [
  {
    id: 'gym-tracker',
    featured: true,
    title: { en: 'Gym Tracker', es: 'Gym Tracker' },
    description: {
      en: 'A strength training mobile app that handles progressive overload for you: after every session it tells you what weight and how many reps to do next time. Level-based onboarding, per-set effort and joint-pain feedback, automatic deloads and a progress chart for each exercise. The training rules live in a framework-free domain package shared by the app and the API, covered by unit and integration tests in CI.',
      es: 'Una app mobile de entrenamiento de fuerza que maneja la sobrecarga progresiva por vos: después de cada sesión te dice qué peso y cuántas repeticiones hacer la próxima vez. Onboarding según nivel, feedback de esfuerzo y dolor articular por serie, descargas automáticas y un gráfico de progreso por ejercicio. Las reglas de entrenamiento viven en un paquete de dominio sin frameworks, compartido por la app y la API, con tests unitarios y de integración en CI.',
    },
    tech: ['React Native', 'Expo', 'NestJS', 'Prisma', 'PostgreSQL', 'TypeScript', 'Docker', 'GitHub Actions'],
    github: 'https://github.com/mvrtin64/gym-tracker',
    images: ['projects/gym-tracker/hoy.jpg', 'projects/gym-tracker/entrenamiento.jpg', 'projects/gym-tracker/progreso.jpg'],
  },
  {
    id: 'sushi-chatbot',
    title: { en: 'Sushi Ordering Chatbot', es: 'Chatbot para pedir sushi' },
    description: {
      en: 'A web app for ordering sushi through a chatbot built with Voiceflow, with fuzzy matching of menu items and order validation against a Node.js + MongoDB backend.',
      es: 'Una app web para pedir sushi a través de un chatbot hecho con Voiceflow, con coincidencia aproximada de productos del menú y validación de pedidos contra un backend en Node.js + MongoDB.',
    },
    tech: ['Voiceflow', 'React', 'Node.js', 'Express', 'MongoDB', 'Jest'],
    github: 'https://github.com/mvrtin64/sushi_chatbot',
    images: ['projects/sushi_chatbot.webp'],
  },
  {
    id: 'secure-chat',
    title: { en: 'Secure Messaging App', es: 'Mensajería segura' },
    description: {
      en: 'A client-server web chat with message encryption, user authentication and SMS/Telegram bot verification.',
      es: 'Un chat web cliente-servidor con mensajes cifrados, autenticación de usuarios y verificación por bots de SMS/Telegram.',
    },
    tech: ['Node.js', 'Socket.IO', 'SQLite', 'bcrypt'],
    github: 'https://github.com/MrLoadex/Chat_Seguro__Seminario',
    images: ['projects/sms.jpg'],
  },
  {
    id: 'rps-war',
    title: { en: 'Rock, Paper, Scissors 2D', es: 'Piedra, Papel o Tijera 2D' },
    description: {
      en: 'A real-time multiplayer 2D game built with Node.js and Socket.IO, structured with an MVC architecture.',
      es: 'Un juego 2D multijugador en tiempo real hecho con Node.js y Socket.IO, con arquitectura MVC.',
    },
    tech: ['Node.js', 'Socket.IO', 'JavaScript', 'MVC'],
    github: 'https://github.com/MrLoadex/RPS-WAR/tree/MVC',
    images: ['projects/rps.jpg'],
  },
  {
    id: 'todo-list',
    title: { en: 'To-Do List', es: 'Lista de tareas' },
    description: {
      en: 'My first React project, where I learned state management and component-based architecture.',
      es: 'Mi primer proyecto en React, donde aprendí manejo de estado y arquitectura basada en componentes.',
    },
    tech: ['React', 'TypeScript'],
    github: 'https://github.com/mvrtin64/react-projects/tree/master/to-do-list',
    images: ['projects/todo.jpg'],
  },
  {
    id: 'hangman',
    title: { en: 'Hangman', es: 'Ahorcado' },
    description: {
      en: 'My first web game, where I learned the basics of client-server communication.',
      es: 'Mi primer juego web, donde aprendí lo básico de la comunicación cliente-servidor.',
    },
    tech: ['Node.js', 'HTML', 'CSS'],
    github: 'https://github.com/mvrtin64/ahorcado-game',
    images: ['projects/hangman.jpg'],
  },
];

export const sections = ['home', 'about', 'projects', 'terminal', 'contact'] as const;
export type Section = (typeof sections)[number];

export const ui = {
  en: {
    nav: { home: 'home', about: 'about', projects: 'projects', terminal: 'terminal', contact: 'contact' },
    hero: { intro: "hey, i'm" },
    about: { title: 'about me :]', skills: 'skills', education: 'education' },
    projects: { title: 'projects', featured: 'latest project', code: 'view code' },
    terminal: {
      title: 'terminal',
      subtitle: 'The same portfolio, Linux style. Type a command or click one of these:',
    },
    contact: {
      title: "let's talk",
      text: "I'm open to junior roles in software development or IT support. The fastest way to reach me is by email.",
      resume: 'resume',
    },
    footer: 'Built with React, TypeScript and Vite.',
  },
  es: {
    nav: { home: 'inicio', about: 'sobre mí', projects: 'proyectos', terminal: 'terminal', contact: 'contacto' },
    hero: { intro: 'hola, soy' },
    about: { title: 'sobre mí :]', skills: 'skills', education: 'estudios' },
    projects: { title: 'proyectos', featured: 'último proyecto', code: 'ver código' },
    terminal: {
      title: 'terminal',
      subtitle: 'El mismo portfolio, estilo Linux. Escribí un comando o hacé click en alguno de estos:',
    },
    contact: {
      title: 'hablemos',
      text: 'Estoy abierto a puestos junior de desarrollo o de soporte IT. La forma más rápida de contactarme es por email.',
      resume: 'cv',
    },
    footer: 'Hecho con React, TypeScript y Vite.',
  },
};
