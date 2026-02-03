"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Cpu, Globe, Zap, Box, Hexagon } from "lucide-react";

export const ParallaxAssets = () => {
    const { scrollYProgress } = useScroll();

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const r1 = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Asset 1: Floating Hexagon */}
            <motion.div
                style={{ y: y1, rotate: r1 }}
                className="absolute top-[20%] right-[10%] text-venture-cyan/10 opacity-40 blur-sm"
            >
                <Hexagon size={180} strokeWidth={0.5} />
            </motion.div>

            {/* Asset 2: Floating Code Icon */}
            <motion.div
                style={{ y: y2 }}
                className="absolute top-[50%] left-[5%] text-ios-blue/10 opacity-30 blur-[2px]"
            >
                <Code2 size={120} strokeWidth={0.5} />
            </motion.div>

            {/* Asset 3: Floating Box */}
            <motion.div
                style={{ y: y3, rotate: -45 }}
                className="absolute bottom-[20%] right-[15%] text-ios-green/10 opacity-30"
            >
                <Box size={140} strokeWidth={0.5} />
            </motion.div>

            {/* Asset 4: Floating Zap */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-[80%] left-[20%] text-ios-red/10 opacity-40 blur-sm"
            >
                <Zap size={100} strokeWidth={0.5} />
            </motion.div>

            {/* Neon Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-venture-cyan/5 rounded-full blur-[150px]"
            />
        </div>
    );
};
