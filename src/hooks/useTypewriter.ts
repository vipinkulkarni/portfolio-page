import { useState, useEffect } from "react";

/**
 * Cycles through an array of phrases with a typing/deleting animation.
 *
 * How it works:
 * 1. Types out the current phrase one character at a time (typingSpeed)
 * 2. Pauses at the fully typed phrase (pauseDuration)
 * 3. Deletes the phrase one character at a time (deletingSpeed)
 * 4. Moves to the next phrase in the array and repeats
 *
 * Returns the current visible text to render.
 */
export default function useTypewriter(
  phrases: string[],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000
): string {
  // Index of the current phrase in the array
  const [phraseIndex, setPhraseIndex] = useState(0);
  // How many characters of the current phrase are visible
  const [charIndex, setCharIndex] = useState(0);
  // Whether we're currently deleting (true) or typing (false)
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // TYPING: add one more character
          if (charIndex < currentPhrase.length) {
            setCharIndex((prev) => prev + 1);
          } else {
            // Fully typed — pause, then start deleting
            setIsDeleting(true);
          }
        } else {
          // DELETING: remove one character
          if (charIndex > 0) {
            setCharIndex((prev) => prev - 1);
          } else {
            // Fully deleted — move to next phrase
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      // Timing: pause when fully typed, otherwise use typing/deleting speed
      !isDeleting && charIndex === currentPhrase.length
        ? pauseDuration
        : isDeleting
          ? deletingSpeed
          : typingSpeed
    );

    // Cleanup: clear the timeout if the component unmounts or dependencies change
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  // Return the visible portion of the current phrase
  return phrases[phraseIndex].substring(0, charIndex);
}
