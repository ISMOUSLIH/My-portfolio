import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration (for stars)
// id, size, x, y, delay, animationDuration, content (for code snippets)

export const CodeBackground = () => {
  const [stars, setStars] = useState([]);
  const [codeSnippets, setCodeSnippets] = useState([]);

  useEffect(() => {
    generateStars();
    generateCodeSnippets();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 19000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateCodeSnippets = () => {
    const numberOfSnippets = 4;
    const newSnippets = [];
    // const codeOptions = ["hh1", "hho", "dfs", "dsfsd", "kidc", ".,l"];
    // const codeOptions = ["</>", "< >", "{};", "[];", "//", "=>"];
    const codeOptions = ["</>"];

    for (let i = 0; i < numberOfSnippets; i++) {
      newSnippets.push({
        id: i,
        size: Math.random() * 0.5 + 0.7, // Smaller range for font size
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
        content: codeOptions[Math.floor(Math.random() * codeOptions.length)],
      });
    }

    setCodeSnippets(newSnippets);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {codeSnippets.map((snippet) => (
        <div
          key={snippet.id}
          className="code-snippet animate-meteor"
          style={{
            fontSize: snippet.size + "rem",
            left: snippet.x + "%",
            top: snippet.y + "%",
            animationDelay: snippet.delay + "s",
            animationDuration: snippet.animationDuration + "s",
          }}
        >
          {snippet.content}
        </div>
      ))}
    </div>
  );
};