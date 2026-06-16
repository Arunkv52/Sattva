import { motion } from "framer-motion";

export default function BlueShapes() {
  const nodes = [
    { x: 170, y: 170 },
    { x: 275, y: 170 },
    { x: 380, y: 170 },

    { x: 170, y: 275 },
    { x: 380, y: 275 },

    { x: 170, y: 380 },
    { x: 275, y: 380 },
    { x: 380, y: 380 },
  ];

  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-[#0D47FF] overflow-hidden">
      <svg
        viewBox="0 0 550 550"
        className="absolute inset-0 w-full h-full"
      >
        {/* TOP LEFT */}
        <motion.path
          d="M20 20 H90 Q110 20 110 40 V80 L170 140 V170"
          stroke="#D9FFC7"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* TOP CENTER */}
        <motion.path
          d="M235 20 H315 Q335 20 335 40 V170"
          stroke="#D9FFC7"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* TOP RIGHT */}
        <motion.path
          d="M460 20 H530 Q550 20 550 40 V80 L380 250 V170"
          stroke="#D9FFC7"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* LEFT */}
        <motion.path
          d="M20 220 H90 Q110 220 110 240 V275 H170"
          stroke="#D9FFC7"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* RIGHT */}
        <motion.path
          d="M530 220 H460 Q440 220 440 240 V275 H380"
          stroke="#D9FFC7"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* BOTTOM LEFT */}
        <motion.path
          d="M20 530 H90 Q110 530 110 510 V470 L170 410 V380"
          stroke="#D9FFC7"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* BOTTOM CENTER */}
        <motion.path
          d="M235 530 H315 Q335 530 335 510 V380"
          stroke="#D9FFC7"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* BOTTOM RIGHT */}
        <motion.path
          d="M460 530 H530 Q550 530 550 510 V470 L380 410 V380"
          stroke="#D9FFC7"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* NODES */}
        {nodes.map((node, i) => (
          <motion.rect
            key={i}
            x={node.x - 6}
            y={node.y - 6}
            width="12"
            height="12"
            fill="#D9FFC7"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </svg>

      <motion.h2
        className="relative z-10 text-white text-4xl font-medium"
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        Keep lines running.
      </motion.h2>
    </div>
  );
}