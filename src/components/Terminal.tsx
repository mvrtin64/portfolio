import styled from '@emotion/styled';
import { motion } from 'motion/react';
import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { useLanguage } from '../i18n/context';
import { complete, formatPath, run, type Effect, type Line } from '../terminal/commands';
import { reveal, scrollToSection, Section, SectionTitle } from './ui';

// Absolute paths so they work no matter where the visitor has cd'd to.
const SUGGESTIONS = ['help', 'ls', 'cat ~/about.txt', 'ls ~/projects', 'cat ~/projects/gym-tracker.txt', 'open gym-tracker'];

type Entry = { prompt: string; input: string; lines: Line[] };

const Subtitle = styled(motion.p)`
  color: var(--muted);
  text-align: center;
  max-width: 560px;
  margin: -1.5rem 0 1rem;
`;

const Suggestions = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  max-width: 800px;
  margin-bottom: 1.5rem;

  button {
    font-family: var(--mono);
    font-size: 0.8rem;
    color: var(--green);
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 0.25rem 0.75rem;
    transition: border-color 0.2s ease;

    &:hover {
      border-color: var(--green);
    }
  }
`;

const Window = styled(motion.div)`
  width: 100%;
  max-width: 800px;
  background: rgba(30, 30, 30, 0.95);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-family: var(--mono);
  font-size: 0.875rem;
  overflow: hidden;
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  border-bottom: 1px solid var(--border);
  color: var(--muted);
  font-size: 0.8rem;

  i {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #555;
  }

  span {
    margin-left: 0.5rem;
  }
`;

const Screen = styled.div`
  height: 420px;
  overflow-y: auto;
  padding: 1rem;
  line-height: 1.5;
  cursor: text;

  @media (max-width: 600px) {
    height: 360px;
  }
`;

const Output = styled.div<{ tone?: Line['tone'] }>`
  white-space: pre-wrap;
  word-break: break-word;
  min-height: 1.5em;
  color: ${({ tone }) => (tone === 'error' ? 'var(--red)' : tone === 'accent' ? 'var(--accent)' : 'var(--fg)')};
`;

const Prompt = styled.span`
  color: var(--green);
  white-space: nowrap;
`;

const InputRow = styled.form`
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.5rem;
`;

const Input = styled.input`
  flex: 1;
  min-width: 8rem;
  background: none;
  border: none;
  outline: none;
  color: var(--fg);
  font: inherit;
  caret-color: var(--green);
`;

const promptFor = (cwd: string[]) => `martin@portfolio:${formatPath(cwd)}$`;

const Terminal = () => {
  const { lang, setLang, t } = useLanguage();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [cwd, setCwd] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [input, setInput] = useState('');
  const screenRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const screen = screenRef.current;
    if (screen) screen.scrollTop = screen.scrollHeight;
  }, [entries]);

  const applyEffect = (effect?: Effect) => {
    if (!effect) return;
    if (effect.type === 'clear') setEntries([]);
    if (effect.type === 'open') window.open(effect.url, '_blank', 'noopener,noreferrer');
    if (effect.type === 'scroll') scrollToSection(effect.section);
    if (effect.type === 'lang') setLang(effect.lang);
  };

  const execute = (command: string) => {
    const nextHistory = command.trim() ? [...history, command.trim()] : history;
    const result = run(command, { cwd, lang, history: nextHistory });
    setEntries((prev) => [...prev, { prompt: promptFor(cwd), input: command, lines: result.lines }]);
    setCwd(result.cwd);
    setHistory(nextHistory);
    setHistoryIndex(null);
    setInput('');
    applyEffect(result.effect);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const { input: completed, options } = complete(input, { cwd, lang, history });
      if (options.length > 0) {
        setEntries((prev) => [...prev, { prompt: promptFor(cwd), input, lines: [{ text: options.join('  ') }] }]);
      }
      setInput(completed);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
      if (history.length === 0) return;
      const current = historyIndex ?? history.length;
      const next = e.key === 'ArrowUp' ? Math.max(0, current - 1) : current + 1;
      if (next >= history.length) {
        setHistoryIndex(null);
        setInput('');
      } else {
        setHistoryIndex(next);
        setInput(history[next]);
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setEntries([]);
    }
  };

  const welcome =
    lang === 'en'
      ? "Welcome! Type 'help' to see the available commands."
      : "¡Bienvenido! Escribí 'help' para ver los comandos disponibles.";

  return (
    <Section id="terminal">
      <SectionTitle {...reveal()}>{t.terminal.title}</SectionTitle>
      <Subtitle {...reveal(0.1)}>{t.terminal.subtitle}</Subtitle>
      <Suggestions {...reveal(0.15)}>
        {SUGGESTIONS.map((command) => (
          <button key={command} onClick={() => execute(command)}>
            {command}
          </button>
        ))}
      </Suggestions>
      <Window {...reveal(0.2)}>
        <TitleBar>
          <i />
          <i />
          <i />
          <span>martin@portfolio: {formatPath(cwd)}</span>
        </TitleBar>
        <Screen ref={screenRef} onClick={() => inputRef.current?.focus({ preventScroll: true })}>
          <Output>{welcome}</Output>
          {entries.map((entry, i) => (
            <div key={i}>
              <Output>
                <Prompt>{entry.prompt}</Prompt> {entry.input}
              </Output>
              {entry.lines.map((line, j) => (
                <Output key={j} tone={line.tone}>
                  {line.text}
                </Output>
              ))}
            </div>
          ))}
          <InputRow
            onSubmit={(e) => {
              e.preventDefault();
              execute(input);
            }}
          >
            <Prompt>{promptFor(cwd)}</Prompt>
            <Input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              aria-label={lang === 'en' ? 'Terminal command' : 'Comando de la terminal'}
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
            />
          </InputRow>
        </Screen>
      </Window>
    </Section>
  );
};

export default Terminal;
