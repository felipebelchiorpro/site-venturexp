"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
    words: { text: string; className?: string }[];
    delay?: number;
}

export const Typewriter = ({ words, delay = 3000 }: TypewriterProps) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor
    useEffect(() => {
        const timeout2 = setInterval(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearInterval(timeout2);
    }, []);

    // Typing logic
    useEffect(() => {
        if (!words || words.length === 0) return;

        const currentWord = words[index].text;

        if (subIndex === currentWord.length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 75 : subIndex === currentWord.length ? delay : 120);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, delay]);

    if (!words || words.length === 0) return null;

    return (
        <span className="inline-flex items-center font-mono">
            <span className={words[index].className}>
                {words[index].text.substring(0, subIndex)}
            </span>
            <motion.span
                animate={{ opacity: blink ? 1 : 0 }}
                className="ml-1 w-[3px] h-[1em] bg-venture-cyan block"
            />
        </span>
    );
};
