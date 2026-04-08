import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Metrics from "./components/Metrics";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen selection:bg-primary/20 selection:text-primary"
      >
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Metrics />
          <CTA />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
