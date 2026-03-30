"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";

interface WordData {
  text: string;
  duration: number;
  delay: number;
  blur: number;
  scale?: number;
}

interface BlurTextAnimationProps {
  text?: string;
  words?: WordData[];
  className?: string;
  fontSize?: string;
  fontFamily?: string;
  textColor?: string;
  animationDelay?: number;
}

export default function BlurTextAnimation({
  text = "Elegant blur animation that brings your words to life with cinematic transitions.",
  words,
  className = "",
  fontSize = "text-4xl md:text-5xl lg:text-6xl",
  fontFamily = "font-['Avenir_Next',_'Avenir',_system-ui,_sans-serif]",
  textColor = "text-white",
  animationDelay = 4000
}: BlurTextAnimationProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const animationTimeoutRef = useRef<NodeJS.Timeout>();
  const resetTimeoutRef = useRef<NodeJS.Timeout>();

  const textWords = useMemo(() => {
    if (words) return words;

    const splitWords = text.split(" ");
    const totalWords = splitWords.length;

    return splitWords.map((word, index) => {
      const progress = index / totalWords;

      return {
        text: word,
        duration: 2.2 + Math.cos(index * 0.3) * 0.3,
        delay:
          index * 0.06 +
          Math.pow(progress, 0.8) * 0.5 +
          (Math.random() - 0.5) * 0.05,
        blur: 12 + Math.floor(Math.random() * 8),
        scale: 0.9 + Math.sin(index * 0.2) * 0.05
      };
    });
  }, [text, words]);

  useEffect(() => {
    const startAnimation = () => {
      setTimeout(() => setIsAnimating(true), 200);

      let maxTime = 0;
      textWords.forEach(word => {
        maxTime = Math.max(maxTime, word.delay + word.duration);
      });

      animationTimeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
        resetTimeoutRef.current = setTimeout(startAnimation, animationDelay);
      }, (maxTime + 1) * 1000);
    };

    startAnimation();

    return () => {
      if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    };
  }, [textWords, animationDelay]);

  return (
    <p className={`${textColor} ${fontSize} ${fontFamily} font-light leading-relaxed tracking-wide`}>
      {textWords.map((word, index) => (
        <span
          key={index}
          className={`inline-block transition-all ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transitionDuration: `${word.duration}s`,
            transitionDelay: `${word.delay}s`,
            filter: isAnimating
              ? "blur(0px)"
              : `blur(${word.blur}px)`,
            transform: isAnimating
              ? "translateY(0)"
              : "translateY(20px)",
            marginRight: "0.35em"
          }}
        >
          {word.text}
        </span>
      ))}
    </p>
  );
}

export function Component() {
  return <BlurTextAnimation />;
}