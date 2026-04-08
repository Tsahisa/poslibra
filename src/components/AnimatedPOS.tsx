import { motion } from "motion/react";

export default function AnimatedPOS() {
  return (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
      {/* Background Decorative Circles */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[80%] h-[80%] bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[60%] h-[60%] bg-secondary/5 rounded-full blur-2xl"
      />

      {/* Main SVG Illustration */}
      <motion.svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Tablet/Screen Frame */}
        <motion.rect
          x="50"
          y="80"
          width="300"
          height="220"
          rx="20"
          fill="#1F2937"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect
          x="65"
          y="95"
          width="270"
          height="190"
          rx="10"
          fill="#F9FAFB"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* POS UI Elements */}
        {/* Header */}
        <motion.rect
          x="80"
          y="110"
          width="240"
          height="20"
          rx="4"
          fill="#E5E7EB"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Items List */}
        {[0, 1, 2].map((i) => (
          <motion.g 
            key={i}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.1 * i }}
          >
            <rect x="80" y={145 + i * 35} width="160" height="12" rx="4" fill="#F3F4F6" />
            <rect x="260" y={145 + i * 35} width="60" height="12" rx="4" fill="#4F46E5" fillOpacity="0.2" />
          </motion.g>
        ))}

        {/* Total Section */}
        <motion.rect
          x="80"
          y="250"
          width="240"
          height="25"
          rx="6"
          fill="#4F46E5"
          animate={{ y: [0, -10, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <rect x="95" y="258" width="80" height="8" rx="4" fill="white" fillOpacity="0.5" />
        <rect x="250" y="258" width="50" height="8" rx="4" fill="white" />

        {/* Floating Icons */}
        {/* Chart Icon */}
        <motion.g
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="drop-shadow-lg"
        >
          <circle cx="340" cy="100" r="35" fill="#22C55E" />
          <path d="M325 115V100M340 115V90M355 115V105" stroke="white" strokeWidth="4" strokeLinecap="round" />
        </motion.g>

        {/* Cart Icon */}
        <motion.g
          animate={{ 
            y: [0, 15, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="drop-shadow-lg"
        >
          <circle cx="60" cy="280" r="30" fill="#4F46E5" />
          <path d="M50 275H70L68 290H52L50 275Z" fill="white" fillOpacity="0.3" />
          <path d="M50 275L48 270H45" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </motion.g>

        {/* Success Check */}
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ delay: 1, duration: 0.5 }}
          className="drop-shadow-lg"
        >
          <circle cx="350" cy="270" r="25" fill="#F59E0B" />
          <path d="M340 270L347 277L360 263" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </motion.g>
      </motion.svg>
    </div>
  );
}
