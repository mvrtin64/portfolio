import { describe, expect, it } from 'vitest';
import { complete, formatPath, resolvePath, run, type Context } from './commands';

const ctx = (overrides: Partial<Context> = {}): Context => ({ cwd: [], lang: 'en', history: [], ...overrides });
const texts = (input: string, c = ctx()) => run(input, c).lines.map((l) => l.text);

describe('resolvePath', () => {
  it('resolves relative, parent and home paths', () => {
    expect(resolvePath(['projects'], '..')).toEqual([]);
    expect(resolvePath([], 'projects/./gym-tracker.txt')).toEqual(['projects', 'gym-tracker.txt']);
    expect(resolvePath(['projects'], '~')).toEqual([]);
    expect(resolvePath(['projects'], '/projects')).toEqual(['projects']);
    expect(resolvePath([], '..')).toEqual([]);
  });

  it('formats the prompt path from home', () => {
    expect(formatPath([])).toBe('~');
    expect(formatPath(['projects'])).toBe('~/projects');
  });
});

describe('run', () => {
  it('lists home with directories marked', () => {
    const { lines } = run('ls', ctx());
    expect(lines).toContainEqual({ text: 'projects/', tone: 'accent' });
    expect(lines).toContainEqual({ text: 'about.txt' });
  });

  it('changes directory and rejects files and missing paths', () => {
    expect(run('cd projects', ctx()).cwd).toEqual(['projects']);
    expect(run('cd ..', ctx({ cwd: ['projects'] })).cwd).toEqual([]);
    expect(run('cd', ctx({ cwd: ['projects'] })).cwd).toEqual([]);
    expect(run('cd about.txt', ctx()).lines[0].tone).toBe('error');
    expect(run('cd nope', ctx({ cwd: ['projects'] }))).toMatchObject({ cwd: ['projects'], lines: [{ tone: 'error' }] });
  });

  it('prints files relative to the current directory', () => {
    expect(texts('cat gym-tracker.txt', ctx({ cwd: ['projects'] }))[0]).toBe('Gym Tracker');
    expect(texts('cat ../education.txt', ctx({ cwd: ['projects'] }))[0]).toContain('Systems Analyst');
    expect(texts('cat ~/projects/gym-tracker.txt', ctx({ cwd: ['projects'] }))[0]).toBe('Gym Tracker');
    expect(run('cat projects', ctx()).lines[0].tone).toBe('error');
  });

  it('serves the file contents in the current language', () => {
    expect(texts('cat about.txt', ctx({ lang: 'es' }))[0]).toMatch(/^Me recibí de Analista de Sistemas/);
  });

  it('returns effects for the page instead of touching the DOM', () => {
    expect(run('open gym-tracker', ctx()).effect).toEqual({ type: 'open', url: 'https://github.com/mvrtin64/gym-tracker' });
    expect(run('goto projects', ctx()).effect).toEqual({ type: 'scroll', section: 'projects' });
    expect(run('lang es', ctx()).effect).toEqual({ type: 'lang', lang: 'es' });
    expect(run('clear', ctx()).effect).toEqual({ type: 'clear' });
    expect(run('open nothing', ctx()).effect).toBeUndefined();
  });

  it('opens the resume in the current language', () => {
    expect(run('open resume', ctx()).effect).toEqual({ type: 'open', url: 'cv-en.pdf' });
    expect(run('open resume', ctx({ lang: 'es' })).effect).toEqual({ type: 'open', url: 'cv-es.pdf' });
  });

  it('points unknown commands to help', () => {
    expect(texts('rm -rf /')[0]).toContain("'help'");
    expect(texts('   ')).toEqual([]);
  });
});

describe('complete', () => {
  it('completes commands, paths and arguments', () => {
    expect(complete('wh', ctx()).input).toBe('whoami ');
    expect(complete('cd pro', ctx()).input).toBe('cd projects/');
    expect(complete('cat projects/gym', ctx()).input).toBe('cat projects/gym-tracker.txt ');
    expect(complete('open gym', ctx()).input).toBe('open gym-tracker ');
    expect(complete('goto ab', ctx()).input).toBe('goto about ');
  });

  it('extends to the common prefix and lists options when ambiguous', () => {
    expect(complete('c', ctx())).toEqual({ input: 'c', options: ['cd', 'cat', 'clear'] });
    expect(complete('h', ctx())).toEqual({ input: 'h', options: ['help', 'history'] });
    expect(complete('cat s', ctx({ cwd: ['projects'] })).input).toBe('cat s');
  });
});
