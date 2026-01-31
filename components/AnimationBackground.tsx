"use client";
import { motion } from "framer-motion";

export function AnimatedBackground({ isDark }: { isDark: boolean }) {
  // Stylish colors: Deep Indigos for dark, Soft Sky/Lavender for light
  const colors = isDark 
    ? ["#1e2a44", "#312e81", "#1e1b4b", "#0f172a"] 
    : ["#f3f8ff", "#dbeafe", "#e0e7ff", "#faf5ff"];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#f3f8ff] dark:bg-[#0b1220] transition-colors duration-1000">
      {/* Aurora Layer 1 */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
          backgroundColor: colors[0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-1/4 -left-1/4 w-full h-full rounded-[40%] blur-[100px] opacity-60"
      />

      {/* Aurora Layer 2 */}
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 60, 0],
          backgroundColor: colors[1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -right-1/4 w-full h-full rounded-[40%] blur-[100px] opacity-50"
      />

      {/* Aurora Layer 3 */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          backgroundColor: colors[2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-1/4 left-1/4 w-full h-full rounded-[40%] blur-[100px] opacity-40"
      />
    </div>
  );
}