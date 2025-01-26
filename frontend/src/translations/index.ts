// Define or update the project type to include the 'github' property
// interface Project {
//   title: string;
//   description: string;
//   github: string;
//   live?: string;
//   tech: string[];
//   thumbnail: string;
// }

export const translations = {
  en: {
    nav: {
      about: 'about',
      projects: 'projects',
      terminal: 'terminal',
      contact: 'contact'
    },
    hero: {
      intro: "hey, i'm",
      role: 'systems analyst & full-stack developer.',
      location: 'Mar del Plata, Argentina'
    },
    about: {
      title: 'about me :]',
      p1: "Hey there! I'm a full-stack developer with a strong focus on backend development. Currently, I'm expanding my knowledge towards frontend development and software engineering. I have a bachelor's degree as a systems analyst, finished in 2024.",
      p2: "I'm looking for my first opportunity in this awesome industry. My main focus these days is full stack development, although I can learn and adapt easily to anything.",
      p3: "When I'm not coding, you'll find me playing with my dogs or at the gym. I'm always interested in hearing about new projects, so feel free to drop me a line."
    },
    projects: {
      title: 'projects',
      items: [
        {
          title: 'Portfolio',
          description: 'A personal portfolio to showcase my work and skills in full-stack development.',
          github: 'https://github.com/user/portfolio',
          live: '',
          tech: ['React', 'TypeScript', 'Node.js'],
          thumbnail: 'portfolio.png'
        },
        {
          title: 'Interactive Sushi Ordering Chatbot',
          description: 'An AI-powered web application for ordering sushi, featuring a chatbot built with Voiceflow, React, Node.js, and MongoDB. It supports fuzzy matching, dynamic order validation, and a seamless user experience.',
          github: 'https://github.com/mvrtin64/sushi_chatbot',
          tech: ['Voiceflow', 'React', 'Node.js', 'Express.js', 'Jest', 'MongoDB'],
          thumbnail: 'sushi_chatbot.png'
        },
        {
          title: 'Rock, Paper, Scissors 2D Web Game',
          description: 'A 2D multiplayer Rock, Paper, Scissors game built with Node.js and Socket.IO for real-time communication. Designed with an MVC architecture and modern web technologies to deliver an interactive and responsive gaming experience.',
          github: 'https://github.com/MrLoadex/RPS-WAR/tree/MVC',
          tech: ['Node.js', 'Socket.IO', 'MVC', 'Javascript','HTML', 'CSS'],
          thumbnail: 'rps.jpg'
        },
        {
          title: 'Secure client-server messaging application',
          description: 'A secure web chat application featuring message encryption, user authentication, and integration with SMS/Telegram bots for verification. Leveraging SQLite, bcrypt, and Socket.IO, this project emphasizes security, scalability, and real-time communication.',
          github: 'https://github.com/MrLoadex/Chat_Seguro__Seminario',
          tech: ['SQLite', 'Bcrypt', 'Socket.IO', 'Node.js', 'HTML'],
          thumbnail: 'sms.jpg'
        },
        {
          title: 'To-Do list',
          description: 'A simple To-Do List application and my first React project. Built with React and TypeScript, this project helped me understand state management and component-based architecture in modern web development.',
          github: 'https://github.com/mvrtin64/react-projects/tree/master/to-do-list',
          tech: ['React', 'TypeScript'],
          thumbnail: 'todo.jpg'
        },
        {
          title: 'Hangman Game',
          description: 'My first web game. It helped me learn the fundamentals of client-server communication.',
          github: 'https://github.com/mvrtin64/ahorcado-game',
          tech: ['Node.js', 'HTML', 'CSS'],
          thumbnail: 'hangman.jpg'
        }
      ]
    }
  },
  es: {
    nav: {
      about: 'sobre mí',
      projects: 'proyectos',
      terminal: 'terminal',
      contact: 'contacto'
    },
    hero: {
      intro: 'hola, soy',
      role: 'analista de sistemas & desarrollador full-stack.',
      location: 'Mar del Plata, Argentina'
    },
    about: {
      title: 'sobre mí :]',
      p1: '¡Hola! Soy un desarrollador full-stack con un fuerte enfoque en el desarrollo backend. Actualmente, estoy expandiendo mis conocimientos hacia el desarrollo frontend e ingeniería de software. Tengo una licenciatura como analista de sistemas, finalizada en 2024.',
      p2: 'Estoy buscando mi primera oportunidad en esta increíble industria. Mi enfoque principal estos días es el desarrollo full stack, aunque puedo aprender y adaptarme fácilmente a cualquier cosa.',
      p3: 'Cuando no estoy programando, me encontrarás jugando con mis perros o en el gimnasio. Estoy interesado en escuchar sobre nuevos proyectos, así que no dudes en contactarme.'
    },
    projects: {
      title: 'proyectos',
      items: [
        {
          title: 'Portafolio',
          description: 'Un portafolio personal para mostrar mi trabajo y habilidades en desarrollo full-stack.',
          github: 'https://github.com/mvrtin64/portfolio',
          live: '',
          tech: ['React', 'TypeScript', 'Node.js'],
          thumbnail: 'portfolio.png'
        },
        {
          title: 'Chatbot de Pedido de Sushi Interactivo',
          description: 'Una aplicación web impulsada por IA para pedir sushi, que presenta un chatbot construido con Voiceflow, React, Node.js y MongoDB. Soporta coincidencias difusas, validación dinámica de pedidos y una experiencia de usuario fluida.',
          github: 'https://github.com/mvrtin64/sushi_chatbot',
          tech: ['Voiceflow', 'React', 'Node.js', 'Express.js', 'Jest', 'MongoDB'],
          thumbnail: 'sushi_chatbot.png'
        },
        {
          title: 'Juego de Piedra, Papel, Tijera 2D',
          description: 'Un juego multijugador de Piedra, Papel, Tijera construido con Node.js y Socket.IO para comunicación en tiempo real. Diseñado con una arquitectura MVC y tecnologías web modernas para ofrecer una experiencia de juego interactiva y receptiva.',
          github: 'https://github.com/MrLoadex/RPS-WAR/tree/MVC',
          tech: ['Node.js', 'Socket.IO', 'MVC', 'Javascript','HTML', 'CSS'],
          thumbnail: 'rps.jpg'
        },
        {
          title: 'Aplicación de mensajería cliente-servidor segura',
          description: 'Una aplicación de chat web segura que presenta cifrado de mensajes, autenticación de usuarios e integración con bots de SMS/Telégrama para verificación. Aprovechando SQLite, la biblioteca bcrypt y Socket.IO, este proyecto enfatiza la seguridad, escalabilidad y comunicación en tiempo real.',
          github: 'https://github.com/MrLoadex/Chat_Seguro__Seminario',
          tech: ['SQLite', 'Bcrypt', 'Socket.IO', 'Node.js', 'HTML'],
          thumbnail: 'sms.jpg'
        },
        {
          title: 'Lista de Tareas',
          description: 'Una simple aplicación de Lista de Tareas y mi primer proyecto en React. Construido con React y TypeScript, este proyecto me ayudó a entender la gestión del estado y la arquitectura basada en componentes en el desarrollo web moderno.',
          github: 'https://github.com/mvrtin64/react-projects/tree/master/to-do-list',
          tech: ['React', 'TypeScript'],
          thumbnail: 'todo.jpg'
        },
        {
          title: 'Juego del Ahorcado',
          description: 'Mi primer juego web. Me ayudó a aprender los fundamentos de la comunicación cliente-servidor.',
          github: 'https://github.com/mvrtin64/ahorcado-game',
          tech: ['Node.js', 'HTML', 'CSS'],
          thumbnail: 'hangman.jpg'
        }
      ]
    }
  }
}; 