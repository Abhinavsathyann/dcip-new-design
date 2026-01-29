"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, HTMLMotionProps, useSpring, useMotionValue, useInView, Variants } from "framer-motion";
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

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
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
      initial={priority ? "visible" : "hidden"}
      whileInView={priority ? undefined : "visible"}
      animate={priority ? "visible" : undefined}
      viewport={{ once: true }}
      className={clsx(className, "will-change-transform")}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="mr-1.5 md:mr-2 will-change-transform">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

// 2. Mask Text Reveal (Editorial Style - Upward Reveal)
export const MaskText: React.FC<{ text: string | string[]; className?: string; delay?: number }> = ({ text, className, delay = 0 }) => {
  const body = Array.isArray(text) ? text : [text];
  
  const animation: Variants = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: "0",
      transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] as [number, number, number, number], delay: delay + (i * 0.1) }
    })
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className={clsx(className)}>
      {body.map((phrase, index) => (
        <div key={index} className="overflow-hidden">
          <motion.div
            custom={index}
            variants={animation}
            initial="initial"
            animate={isInView ? "enter" : ""}
            className="will-change-transform"
          >
            {phrase}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

// 3. Parallax Image Container
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
      <motion.div style={{ y }} className="w-full h-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
};

// 4. Fade In Up (General Purpose)
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
      initial={priority ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      whileInView={priority ? undefined : { opacity: 1, y: 0 }}
      animate={priority ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={clsx(className, "will-change-transform")}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// 5. Magnetic Button Wrapper
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
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
};

// 6. Animated Counter
export const Counter: React.FC<{ value: number; duration?: number; className?: string }> = ({ value, duration = 2, className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest));
      }
    });
  }, [springValue]);

  return <span ref={ref} className={className}>0</span>;
};

// 7. 3D Tilt Card
export const TiltCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={clsx("relative will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
};

// 8. Stagger Container
export const StaggerContainer: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className, delay = 0 }) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={item} className="will-change-transform">{child}</motion.div>
      ))}
    </motion.div>
  );
};