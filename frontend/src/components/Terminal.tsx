import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';



const TerminalContainer = styled.div`
  background-color: rgba(30, 30, 30, 0.95);
  width: 800px;
  padding: 1.5rem;
  font-family: 'Courier New', Courier, monospace;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TerminalHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  span {
    color: #fff;
    opacity: 0.7;
    font-size: 0.9rem;
  }
`;

const TerminalOutput = styled.div`
  color: #fff;
  white-space: pre-wrap;
  margin-bottom: 1rem;
  min-height: 300px;
  max-height: 500px;
  overflow-y: auto;
  font-size: 0.9rem;
  line-height: 1.4;

  div {
    margin: 0.2rem 0;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }
`;

const TerminalPrompt = styled.div`
  display: flex;
  align-items: center;
  color: #50fa7b;
`;

const TerminalInput = styled.input`
  background: none;
  border: none;
  color: #50fa7b;
  font-family: inherit;
  font-size: 0.9rem;
  flex: 1;
  padding: 0;
  margin-left: 0.5rem;

  &:focus {
    outline: none;
  }
`;

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>(['Welcome to portfolio terminal', 'Type "/help" for available commands.']);
  const [currentPath, setCurrentPath] = useState('/');
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const handleCommand = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setOutput(prev => [...prev, `[user@portfolio ${currentPath}]$ ${input}`]);

    try {
      const res = await axios.post(`http://localhost:5000/api/terminal`, {
        command: input
      });
      
      setOutput(prev => [...prev, res.data.output]);
      setCurrentPath(res.data.currentPath);
    } catch (err) {
      console.error('Error connecting to backend:', err);
      setOutput(prev => [...prev, 'Error: Could not connect to server']);
    }

    setInput('');
  };

  return (
    <TerminalContainer>
      <TerminalHeader>
        <span>terminal - portfolio@github.io:~</span>
      </TerminalHeader>
      <TerminalOutput ref={outputRef}>
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </TerminalOutput>
      <form onSubmit={handleCommand}>
        <TerminalPrompt>
          <span>[user@portfolio {currentPath}]$ </span>
          <TerminalInput
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
        </TerminalPrompt>
      </form>
    </TerminalContainer>
  );
};

export default Terminal;
