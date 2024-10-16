"use client";
import React, { useState, useEffect } from "react";

export const Typewriter = ({
  texts,
  typingSpeed = 100,
  deleteSpeed = 50,
  delay = 1000,
}) => {
  const [currentText, setCurrentText] = useState(""); // Current displayed text
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the current string index
  const [isDeleting, setIsDeleting] = useState(false); // Indicates if we are backspacing
  const [charIndex, setCharIndex] = useState(0); // Tracks the character index of the current string

  // Handles the typing and backspacing
  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentIndex];

      if (!isDeleting && charIndex < fullText.length) {
        // Typing mode: add one character at a time
        setCurrentText((prev) => prev + fullText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting mode: remove one character at a time
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (charIndex === fullText.length && !isDeleting) {
        // Wait for a while before starting to delete
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && charIndex === 0) {
        // After deleting, move to the next text in the array
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length); // Loop back to the start
      }
    };

    // Set the appropriate speed for typing and deleting
    const speed = isDeleting ? deleteSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, speed);

    // Clean up the timeout
    return () => clearTimeout(timer);
  }, [
    charIndex,
    isDeleting,
    currentIndex,
    texts,
    typingSpeed,
    deleteSpeed,
    delay,
  ]);

  return (
    <div>
      {currentText}
      <span className="animate-blink">|</span>
    </div>
  );
};

export default Typewriter;
