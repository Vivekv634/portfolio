import { useEffect, useState } from "react";

interface TypeWriterProps {
  texts: string[];
  typingSpeed: number;
  deleteSpeed: number;
  delay: number;
}
export default function TypeWriter({
  texts,
  typingSpeed = 100,
  deleteSpeed = 50,
  delay = 1000,
}: TypeWriterProps) {
  const [currentText, setCurrentText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDeleting, setisDeleting] = useState<boolean>(false);
  const [charIndex, setCharIndex] = useState<number>(0);

  useEffect(() => {
    function handleTyping() {
      const fullText = texts[currentIndex];

      if (!isDeleting && charIndex < fullText.length) {
        setCurrentText((prev) => prev + fullText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (charIndex == fullText.length && !isDeleting) {
        setTimeout(() => setisDeleting(true), delay);
      } else if (isDeleting && charIndex === 0) {
        setisDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    }

    const speed = isDeleting ? deleteSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [
    charIndex,
    currentIndex,
    delay,
    deleteSpeed,
    isDeleting,
    texts,
    typingSpeed,
  ]);

  return (
    <div>
      {currentText}
      <span>|</span>
    </div>
  );
}
