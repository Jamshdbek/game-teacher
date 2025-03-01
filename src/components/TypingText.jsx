import { useState, useEffect } from "react";

const TypingText = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1)); // Update with substring
        index += 1;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [text, speed]);

  return (
    <div className=" text-2xl font-mono max-w-80%">
      {displayedText}
      {displayedText.length !== text.length && (
        <span className="animate-pulse">|</span>
      )}
    </div>
  );
};

export default TypingText;
