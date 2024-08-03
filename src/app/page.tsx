"use client"
import { motion } from "framer-motion" 

export default function Home() {
  return (
    <main>
      <h1>Hello framer motion...</h1>
      <motion.div 
        className="w-96 h-96 bg-red-500 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      <motion.div
        className="w-11 h-11 bg-blue-500"
        initial={{ x: 0 }}
        animate={{ x: 500 }}
        transition={{ ease: "linear", duration: 1, repeat: 3 }}
      />
    </main>
  );
}
