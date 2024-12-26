const virtualFileSystem = {
    '/': ['/home', '/projects', '/photos', '/skills'],
    '/home': ['education.txt'],
    '/projects': ['portfolio.txt'],
    '/photos/dogs': ['dog1.jpg', 'dog2.jpg'],
    '/skills': ['backend.txt', 'frontend.txt']
  };
  
  let currentPath = '/'; // Track the current directory
  
  const processCommand = (command) => {
    const [cmd, ...args] = command.split(' ');
    let response = { output: '' };
  
    switch (cmd) {
      case 'ls':
        const path = args[0] ? `${currentPath}/${args[0]}` : currentPath;
        response.output = virtualFileSystem[path] 
          ? virtualFileSystem[path].join('\n') 
          : 'No such directory';
        break;
  
      case 'cat':
        const file = args[0];
        if (file === 'education.txt') {
          response.output = "Systems Analyst, Bachelor's Degree - GPA: 8,10.\nInstituto Superior de Formación Técnica N° 151";
        } else if (file && virtualFileSystem[currentPath].includes(file)) {
          response.output = `Displaying contents of ${file}`;
        } else {
          response.output = 'File not found';
        }
        break;
  
      case 'cd':
        const newPath = args[0];
        if (newPath === '..') {
          // Go back to the parent directory
          const parentPath = currentPath.split('/').slice(0, -1).join('/') || '/';
          currentPath = parentPath;
          response.output = `Changed to ${currentPath}`;
        } else if (virtualFileSystem[newPath]) {
          currentPath = newPath; // Change the current directory
          response.output = `Changed to ${newPath}`;
        } else {
          response.output = 'No such directory';
        }
        break;
  
      case '/help':
        response.output = 'Available commands: ls, cat, cd, /help';
        break;
  
      default:
        response.output = `Command not found: ${cmd}`;
    }
  
    return response;
  };
  
  module.exports = { processCommand };
  