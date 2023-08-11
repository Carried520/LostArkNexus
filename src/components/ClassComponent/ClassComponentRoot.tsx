"use client";

import { motion } from "framer-motion";

type ClassComponentRootProps = {
  selectedClass: string;
  children : React.ReactNode;
};

export default function ClassComponentRoot({selectedClass , children} : ClassComponentRootProps) {
    return <motion.div
    key={selectedClass}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.9 }}>
    {children}
  </motion.div>

}
