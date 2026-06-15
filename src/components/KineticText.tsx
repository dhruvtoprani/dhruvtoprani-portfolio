"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type ClipLineProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

type StaggerWordsProps = {
  className?: string;
  delay?: number;
  text: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function ClipLine({
  children,
  className = "",
  delay = 0
}: ClipLineProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className="block overflow-hidden px-[0.04em] pb-[0.16em]"
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <motion.span
        className={`block origin-left ${className}`}
        variants={{
          hidden: { opacity: 0, rotate: 1.5, y: "112%" },
          visible: {
            opacity: 1,
            rotate: 0,
            transition: { delay, duration: 0.72, ease },
            y: 0
          }
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

export function StaggerWords({
  className = "",
  delay = 0,
  text
}: StaggerWordsProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <motion.span
      aria-label={text}
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: 0.045
          }
        }
      }}
      viewport={{ once: true, margin: "-60px" }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          aria-hidden="true"
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: "0.55em" },
            visible: {
              opacity: 1,
              transition: { duration: 0.45, ease },
              y: 0
            }
          }}
        >
          {word}
          {index < words.length - 1 ? "\u00a0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
