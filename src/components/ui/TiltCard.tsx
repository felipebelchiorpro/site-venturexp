"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: string;
    tiltDegree?: number;
}

export const TiltCard = ({
    children,
    className = "",
    glowColor = "rgba(255,255,255,0.1)",
    tiltDegree = 10
}: TiltCardProps) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${tiltDegree}deg`, `-${tiltDegree}deg`]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${tiltDegree}deg`, `${tiltDegree}deg`]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
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

    const shine = useTransform(
        [mouseXSpring, mouseYSpring],
        ([mx, my]) => `radial-gradient(circle at ${50 + (mx as number) * 100}% ${50 + (my as number) * 100}%, ${glowColor} 0%, transparent 70%)`
    );

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className={`crystal-card group relative ${className}`}
        >
            <div
                style={{ transform: "translateZ(50px)" }}
                className="relative z-10 h-full w-full"
            >
                {children}
            </div>

            {/* Dynamic Shine Effect */}
            <motion.div
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 rounded-[inherit]"
                style={{ background: shine }}
            />
        </motion.div>
    );
};
