import { motion } from "framer-motion";

type RootProps = {
  children: React.ReactNode;
};

export default function HeroSectionRoot({ children }: RootProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.9 }}>
      {children}
    </motion.div>
  );
}
