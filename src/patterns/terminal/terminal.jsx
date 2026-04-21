"use client";

import React from "react";
import Section from "@/components/section/section.jsx";
import profileData from "@/data/profile/profile.js";
import projects from "@/data/projects/projects.js";
import styles from "./terminal.module.css";

const featuredProjects = projects.slice(0, 4).map((project, index) => `${index + 1}. ${project.title}`);

const commandsHelp = [
  "Available commands:",
  "help        Show available commands",
  "about       About me",
  "projects    List featured projects",
  "skills      Show technologies",
  "experience  Career timeline",
  "github      Open GitHub",
  "linkedin    Open LinkedIn",
  "contact     Contact info",
  "clear       Clear terminal",
  "whoami      Quick intro",
  "coffee      Request coffee",
  "sudo hire-richard  Easter egg",
];

const skillGroups = [
  "Backend: Java, Spring, Python, Django",
  "Frontend: React, Next.js, JavaScript, TypeScript",
  "Database: PostgreSQL, MySQL, MongoDB",
  "Tools: Git, Docker, Linux, GitHub",
];

const careerTimeline = [
  "2024 - Computer Science",
  "2025 - Banking systems / Microservices",
  "2026 - Scalable systems & AI studies",
];

const startupLogs = [
  "[12:01] Deploy successful",
  "[12:03] Loading projects...",
  "[12:05] Backend systems online",
  "Type \"help\" to list all commands.",
];

const prompt = "richard@portfolio:~$";

function createOutput(lines) {
  return {
    type: "output",
    lines,
  };
}

export default function Terminal() {
  const inputRef = React.useRef(null);
  const outputRef = React.useRef(null);

  const [inputValue, setInputValue] = React.useState("");
  const [history, setHistory] = React.useState([createOutput(startupLogs)]);
  const [commandHistory, setCommandHistory] = React.useState([]);
  const [historyIndex, setHistoryIndex] = React.useState(-1);

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  React.useEffect(() => {
    outputRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [history]);

  const appendEntries = React.useCallback((entries) => {
    setHistory((previous) => [...previous, ...entries]);
  }, []);

  const runCommand = React.useCallback(
    (rawCommand) => {
      const command = rawCommand.trim();
      if (!command) {
        return;
      }

      const normalizedCommand = command.toLowerCase();

      if (normalizedCommand === "clear") {
        setHistory([]);
        return;
      }

      appendEntries([{ type: "command", value: command }]);

      switch (normalizedCommand) {
        case "help":
          appendEntries([createOutput(commandsHelp)]);
          break;
        case "about":
          appendEntries([createOutput([profileData.about])]);
          break;
        case "projects":
          appendEntries([createOutput(featuredProjects)]);
          break;
        case "skills":
          appendEntries([createOutput(skillGroups)]);
          break;
        case "experience":
          appendEntries([createOutput(careerTimeline)]);
          break;
        case "github":
          window.open("https://github.com/Richke2005", "_blank", "noopener,noreferrer");
          appendEntries([createOutput(["Opening GitHub profile..."])]);
          break;
        case "linkedin":
          window.open("https://www.linkedin.com/in/richard-anjos/", "_blank", "noopener,noreferrer");
          appendEntries([createOutput(["Opening LinkedIn profile..."])]);
          break;
        case "contact":
          appendEntries([createOutput(["Email: richardke18@gmail.com", "Let\'s build something impactful together."])]);
          break;
        case "whoami":
          appendEntries([createOutput(["richard -> software engineer focused on backend, APIs and AI products."])]);
          break;
        case "coffee":
          appendEntries([createOutput(["☕ Brewing motivation..."])]);
          break;
        case "sudo hire-richard":
          appendEntries([createOutput(["Permission granted. Richard hired successfully."])]);
          break;
        default:
          appendEntries([createOutput([`Command not found: ${command}`, 'Type "help" to list available commands.'])]);
          break;
      }
    },
    [appendEntries],
  );

  function handleSubmit(event) {
    event.preventDefault();

    const command = inputValue.trim();
    if (!command) {
      return;
    }

    runCommand(command);
    setCommandHistory((previous) => [...previous, command]);
    setHistoryIndex(-1);
    setInputValue("");
  }

  function handleKeyDown(event) {
    if (!commandHistory.length) {
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setHistoryIndex((current) => {
        const nextIndex = current < 0 ? commandHistory.length - 1 : Math.max(0, current - 1);
        setInputValue(commandHistory[nextIndex]);
        return nextIndex;
      });
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHistoryIndex((current) => {
        if (current < 0) {
          return -1;
        }

        const nextIndex = Math.min(commandHistory.length - 1, current + 1);

        if (nextIndex === current && current === commandHistory.length - 1) {
          setInputValue("");
          return -1;
        }

        setInputValue(commandHistory[nextIndex]);
        return nextIndex;
      });
    }
  }

  return (
    <Section title={"Interactive Terminal"} isAnimated>
      <div className={styles.terminal} onClick={() => inputRef.current?.focus()} role="presentation">
        <div className={styles.output}>
          {history.map((entry, index) => {
            if (entry.type === "command") {
              return (
                <div className={styles.line} key={`${entry.value}-${index}`}>
                  <span className={styles.prompt}>{prompt}</span> {entry.value}
                </div>
              );
            }

            return (
              <div className={styles.outputBlock} key={`output-${index}`}>
                {entry.lines.map((line, lineIndex) => (
                  <div className={styles.line} key={`${line}-${lineIndex}`}>
                    {line}
                  </div>
                ))}
              </div>
            );
          })}

          <form className={styles.inputForm} onSubmit={handleSubmit}>
            <span className={styles.prompt}>{prompt}</span>
            <input
              ref={inputRef}
              className={styles.input}
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              spellCheck={false}
              aria-label="Terminal command"
            />
            <span className={styles.caret} aria-hidden="true" />
          </form>

          <div ref={outputRef} />
        </div>
      </div>
    </Section>
  );
}
