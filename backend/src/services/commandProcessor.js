const virtualFileSystem = {
  '/': {
    type: 'dir',
    contents: {
      home: { 
        type: 'dir', 
        contents: { 
          'education.txt': { 
            type: 'file',
            content: `Education:
- Systems Analyst, Bachelor's Degree (2022-2024)
  Instituto Superior de Formación Técnica N° 151, Mar del Plata.`
          }
        } 
      },
      projects: { 
        type: 'dir', 
        contents: { 
          'portfolio.txt': { 
            type: 'file',
            content: `Portfolio Project:
- Built with React, TypeScript, and Node.js
- Features a Linux-like terminal interface
- Responsive design with smooth animations
- Clean and modern UI/UX
- GitHub: https://github.com/mvrtin64/portfolio`
          },
          'sushi_chatbot.txt': {
            type: 'file',
            content: `Interactive Sushi Ordering Chatbot:
- AI-powered web application for ordering sushi
- Built with Voiceflow, React, Node.js, and MongoDB
- Features fuzzy matching and dynamic order validation
- Seamless user experience with real-time updates
- GitHub: https://github.com/mvrtin64/sushi_chatbot`
          },
          'rps_game.txt': {
            type: 'file',
            content: `Rock, Paper, Scissors 2D Web Game:
- 2D multiplayer game with real-time communication
- Built with Node.js and Socket.IO
- Implements MVC architecture
- Interactive and responsive gaming experience
- GitHub: https://github.com/MrLoadex/RPS-WAR/tree/MVC`
          },
          'secure_chat.txt': {
            type: 'file',
            content: `Secure Client-Server Messaging Application:
- Secure web chat with message encryption
- User authentication and SMS/Telegram bot verification
- Built with SQLite, bcrypt, and Socket.IO
- Focus on security and scalability
- GitHub: https://github.com/MrLoadex/Chat_Seguro__Seminario`
          },
          'todo_list.txt': {
            type: 'file',
            content: `To-Do List Application:
- First React project
- Built with React and TypeScript
- Focus on state management
- Component-based architecture
- GitHub: https://github.com/mvrtin64/react-projects/tree/master/to-do-list`
          },
          'hangman.txt': {
            type: 'file',
            content: `Hangman Game:
- First web game project
- Built with HTML, CSS, JavaScript, and Node.js
- Focus on client-server communication
- Simple and interactive gameplay
- GitHub: https://github.com/mvrtin64/ahorcado-game`
          }
        } 
      },
      skills: { 
        type: 'dir', 
        contents: {
          'backend.txt': { 
            type: 'file',
            content: `Backend Skills:
- Node.js & Express
- RESTful APIs
- MongoDB & MySQL
- Authentication & Security
- Testing (Jest)
- Docker basics`
          },
          'frontend.txt': { 
            type: 'file',
            content: `Frontend Skills:
- React & TypeScript
- HTML & CSS
- Responsive Design
- State Management
- UI/UX Principles
- Web Accessibility`
          }
        }
      }
    }
  }
};

let currentPath = '/';

const getDirectoryContents = (path) => {
  let current = virtualFileSystem['/'];
  if (path === '/') {
    return Object.keys(current.contents);
  }

  const parts = path.split('/').filter(Boolean);
  for (const part of parts) {
    if (current.contents && current.contents[part]) {
      current = current.contents[part];
    } else {
      return null;
    }
  }
  
  return current.type === 'dir' ? Object.keys(current.contents) : null;
};

const getFile = (path) => {
  let current = virtualFileSystem['/'];
  const parts = path.split('/').filter(Boolean);
  
  for (const part of parts) {
    if (current.contents && current.contents[part]) {
      current = current.contents[part];
    } else {
      return null;
    }
  }
  
  return current.type === 'file' ? current : null;
};

const processCommand = (command) => {
  const [cmd, ...args] = command.split(' ');
  let response = { output: '', currentPath };

  switch (cmd) {
    case 'ls':
      const contents = getDirectoryContents(currentPath);
      response.output = contents ? contents.join('\n') : 'No such directory';
      break;

    case 'cd':
      const newPath = args[0];
      if (!newPath || newPath === '/') {
        currentPath = '/';
        response.output = `Changed to ${currentPath}`;
      } else if (newPath === '..') {
        if (currentPath !== '/') {
          currentPath = currentPath.split('/').slice(0, -1).join('/') || '/';
          response.output = `Changed to ${currentPath}`;
        }
      } else {
        const targetPath = currentPath === '/' ? 
          `/${newPath}` : 
          `${currentPath}/${newPath}`;
        
        const contents = getDirectoryContents(targetPath);
        if (contents !== null) {
          currentPath = targetPath;
          response.output = `Changed to ${currentPath}`;
        } else {
          response.output = 'No such directory';
        }
      }
      break;

    case 'cat':
      if (!args[0]) {
        response.output = 'Usage: cat <filename>';
        break;
      }
      
      const filePath = currentPath === '/' ? 
        `/${args[0]}` : 
        `${currentPath}/${args[0]}`;
      
      const file = getFile(filePath);
      if (file) {
        response.output = file.content;
      } else {
        response.output = `cat: ${args[0]}: No such file`;
      }
      break;

    case '/help':
      response.output = 'Available commands:\nls - List directory contents\ncd [dir] - Change directory\ncat [file] - Display file contents\n/help - Show this help message';
      break;

    default:
      response.output = `Command not found: ${cmd}`;
  }

  response.currentPath = currentPath;
  return response;
};

module.exports = { processCommand };
  