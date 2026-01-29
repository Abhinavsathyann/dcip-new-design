"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, HTMLMotionProps } from "framer-motion";
import { clsx } from "clsx";

// 1. Reveal Text (Word by Word)
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  priority?: boolean;
}

export const TextReveal: React.FC<TextRevealProps> = ({ text, className, delay = 0, priority = false }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      style={{ display: "inline-flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      whileInView={priority ? undefined : "visible"}
      animate={priority ? "visible" : undefined}
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="mr-1.5 md:mr-2">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

// 2. Parallax Image Container
interface ParallaxProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export const Parallax: React.FC<ParallaxProps> = ({ children, offset = 50, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={clsx("overflow-hidden", className)}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
};

// 3. Fade In Up (General Purpose)
interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  priority?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  className,
  priority = false,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={priority ? undefined : { opacity: 1, y: 0 }}
      animate={priority ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// 4. Magnetic Button Wrapper
export const Magnetic: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};