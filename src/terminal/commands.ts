import { education, profile, projects, sections, skills, type Lang, type Section } from '../content';

type FileNode = { type: 'file'; content: string };
type DirNode = { type: 'dir'; children: Record<string, Node> };
type Node = FileNode | DirNode;

export type Line = { text: string; tone?: 'error' | 'accent' };

export type Effect =
  | { type: 'clear' }
  | { type: 'open'; url: string }
  | { type: 'scroll'; section: Section }
  | { type: 'lang'; lang: Lang };

export type Context = { cwd: string[]; lang: Lang; history: string[] };
export type Result = { lines: Line[]; cwd: string[]; effect?: Effect };

const file = (content: string): FileNode => ({ type: 'file', content });
const dir = (children: Record<string, Node>): DirNode => ({ type: 'dir', children });

export const buildFileSystem = (lang: Lang): DirNode =>
  dir({
    'about.txt': file(profile.about.map((p) => p[lang]).join('\n\n')),
    'contact.txt': file(
      [`email:    ${profile.email}`, `github:   ${profile.github}`, `linkedin: ${profile.linkedin}`].join('\n'),
    ),
    'education.txt': file(education[lang]),
    'skills.txt': file(skills.map((s) => `${s.area[lang]}: ${s.items.join(', ')}`).join('\n')),
    projects: dir(
      Object.fromEntries(
        projects.map((p) => [
          `${p.id}.txt`,
          file([p.title[lang], '', p.description[lang], '', `stack:  ${p.tech.join(', ')}`, `github: ${p.github}`].join('\n')),
        ]),
      ),
    ),
  });

export const formatPath = (cwd: string[]) => ['~', ...cwd].join('/');

// Resolves a path relative to cwd. Both "~" and "/" mean home, the root of this file system.
export const resolvePath = (cwd: string[], path: string): string[] => {
  const absolute = path.startsWith('~') || path.startsWith('/');
  const parts = absolute ? [] : [...cwd];
  for (const segment of path.replace(/^~/, '').split('/')) {
    if (segment === '' || segment === '.') continue;
    if (segment === '..') parts.pop();
    else parts.push(segment);
  }
  return parts;
};

const getNode = (root: DirNode, path: string[]): Node | null => {
  let node: Node = root;
  for (const segment of path) {
    if (node.type !== 'dir' || !(segment in node.children)) return null;
    node = node.children[segment];
  }
  return node;
};

const messages = {
  en: {
    notFound: (cmd: string) => `command not found: ${cmd}. Type 'help' to see what you can do.`,
    noSuchFile: (path: string) => `${path}: no such file or directory`,
    notADir: (path: string) => `${path}: not a directory`,
    isADir: (path: string) => `${path}: is a directory. Try 'ls ${path}'.`,
    catUsage: "usage: cat <file>. Try 'cat about.txt'.",
    openUsage: `usage: open <project | github | linkedin | resume | email>. Projects: ${projects.map((p) => p.id).join(', ')}`,
    opening: (what: string) => `opening ${what}...`,
    gotoUsage: `usage: goto <${sections.join(' | ')}>`,
    scrolling: (section: string) => `scrolling to ${section}...`,
    langUsage: 'usage: lang <en | es>',
    langSet: 'language set to english.',
    sudo: 'nice try :]',
    help: [
      'navigate',
      '  ls [dir]          list files',
      '  cd <dir>          change directory (cd .. goes back)',
      '  cat <file>        print a file',
      '  pwd               show where you are',
      'portfolio',
      '  whoami            who I am, in one line',
      '  open <name>       open a project, github, linkedin, resume or email',
      '  goto <section>    scroll the page to a section',
      '  lang <en|es>      switch language',
      'other',
      '  clear, history, echo, date',
      '',
      'tip: Tab autocompletes, ↑ and ↓ go through your history.',
    ],
  },
  es: {
    notFound: (cmd: string) => `comando no encontrado: ${cmd}. Escribí 'help' para ver qué podés hacer.`,
    noSuchFile: (path: string) => `${path}: no existe el archivo o directorio`,
    notADir: (path: string) => `${path}: no es un directorio`,
    isADir: (path: string) => `${path}: es un directorio. Probá 'ls ${path}'.`,
    catUsage: "uso: cat <archivo>. Probá 'cat about.txt'.",
    openUsage: `uso: open <proyecto | github | linkedin | resume | email>. Proyectos: ${projects.map((p) => p.id).join(', ')}`,
    opening: (what: string) => `abriendo ${what}...`,
    gotoUsage: `uso: goto <${sections.join(' | ')}>`,
    scrolling: (section: string) => `yendo a ${section}...`,
    langUsage: 'uso: lang <en | es>',
    langSet: 'idioma cambiado a español.',
    sudo: 'buen intento :]',
    help: [
      'navegar',
      '  ls [dir]          listar archivos',
      '  cd <dir>          cambiar de directorio (cd .. vuelve atrás)',
      '  cat <archivo>     mostrar un archivo',
      '  pwd               mostrar dónde estás',
      'portfolio',
      '  whoami            quién soy, en una línea',
      '  open <nombre>     abrir un proyecto, github, linkedin, resume o email',
      '  goto <sección>    mover la página a una sección',
      '  lang <en|es>      cambiar el idioma',
      'otros',
      '  clear, history, echo, date',
      '',
      'tip: Tab autocompleta, ↑ y ↓ recorren el historial.',
    ],
  },
};

export const commandNames = ['help', 'ls', 'cd', 'cat', 'pwd', 'whoami', 'open', 'goto', 'lang', 'clear', 'history', 'echo', 'date'];

const openTargets = (lang: Lang): Record<string, string> => ({
  github: profile.github,
  linkedin: profile.linkedin,
  resume: profile.resume[lang],
  email: `mailto:${profile.email}`,
  ...Object.fromEntries(projects.map((p) => [p.id, p.github])),
});

const text = (lines: string[]): Line[] => lines.map((t) => ({ text: t }));
const error = (t: string): Line[] => [{ text: t, tone: 'error' }];

export const run = (input: string, { cwd, lang, history }: Context): Result => {
  const [cmd, ...args] = input.trim().split(/\s+/);
  const arg = args[0];
  const m = messages[lang];
  const root = buildFileSystem(lang);
  const result = (lines: Line[], effect?: Effect): Result => ({ lines, cwd, effect });

  switch (cmd) {
    case '':
      return result([]);

    case 'help':
      return result(text(m.help));

    case 'ls': {
      const node = getNode(root, arg ? resolvePath(cwd, arg) : cwd);
      if (!node) return result(error(m.noSuchFile(arg)));
      if (node.type === 'file') return result(text([arg]));
      return result(
        Object.entries(node.children).map(([name, child]) =>
          child.type === 'dir' ? { text: `${name}/`, tone: 'accent' } : { text: name },
        ),
      );
    }

    case 'cd': {
      const target = resolvePath(cwd, arg ?? '~');
      const node = getNode(root, target);
      if (!node) return result(error(m.noSuchFile(arg)));
      if (node.type !== 'dir') return result(error(m.notADir(arg)));
      return { lines: [], cwd: target };
    }

    case 'cat': {
      if (!arg) return result(error(m.catUsage));
      const node = getNode(root, resolvePath(cwd, arg));
      if (!node) return result(error(m.noSuchFile(arg)));
      if (node.type === 'dir') return result(error(m.isADir(arg)));
      return result(text(node.content.split('\n')));
    }

    case 'pwd':
      return result(text([formatPath(cwd)]));

    case 'whoami':
      return result(text([`${profile.fullName} — ${profile.role[lang]}`]));

    case 'open': {
      const url = arg && openTargets(lang)[arg.replace(/\.txt$/, '')];
      if (!url) return result(error(m.openUsage));
      return result(text([m.opening(arg)]), { type: 'open', url });
    }

    case 'goto': {
      const section = sections.find((s) => s === arg);
      if (!section) return result(error(m.gotoUsage));
      return result(text([m.scrolling(section)]), { type: 'scroll', section });
    }

    case 'lang': {
      if (arg !== 'en' && arg !== 'es') return result(error(m.langUsage));
      return result(text([messages[arg].langSet]), { type: 'lang', lang: arg });
    }

    case 'clear':
      return result([], { type: 'clear' });

    case 'history':
      return result(text(history.map((h, i) => `${String(i + 1).padStart(4)}  ${h}`)));

    case 'echo':
      return result(text([args.join(' ')]));

    case 'date':
      return result(text([new Date().toString()]));

    case 'sudo':
      return result(text([m.sudo]));

    default:
      return result(error(m.notFound(cmd)));
  }
};

const commonPrefix = (words: string[]) =>
  words.reduce((prefix, word) => {
    let i = 0;
    while (i < prefix.length && prefix[i] === word[i]) i++;
    return prefix.slice(0, i);
  });

// Tab completion: returns the completed input and, when ambiguous, the candidates to show.
export const complete = (input: string, { cwd, lang }: Context): { input: string; options: string[] } => {
  const tokens = input.split(' ');
  const last = tokens[tokens.length - 1];
  const before = tokens.slice(0, -1);

  let candidates: string[];
  let prefix = '';
  let partial = last;

  if (before.length === 0) {
    candidates = commandNames;
  } else if (before[0] === 'open') {
    candidates = Object.keys(openTargets(lang));
  } else if (before[0] === 'goto') {
    candidates = [...sections];
  } else if (before[0] === 'lang') {
    candidates = ['en', 'es'];
  } else {
    const slash = last.lastIndexOf('/');
    prefix = last.slice(0, slash + 1);
    partial = last.slice(slash + 1);
    const node = getNode(buildFileSystem(lang), resolvePath(cwd, prefix));
    candidates =
      node?.type === 'dir'
        ? Object.entries(node.children).map(([name, child]) => (child.type === 'dir' ? `${name}/` : name))
        : [];
  }

  const matches = candidates.filter((c) => c.startsWith(partial));
  if (matches.length === 0) return { input, options: [] };

  const completed = matches.length === 1 ? matches[0] + (matches[0].endsWith('/') ? '' : ' ') : commonPrefix(matches);
  return {
    input: [...before, prefix + completed].join(' '),
    options: matches.length > 1 ? matches : [],
  };
};
