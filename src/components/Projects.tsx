"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, Layers, Terminal, Database, Activity, Target, ArrowRight } from "lucide-react";
import React, { useRef } from "react";
import { TiltCard } from "./ui/TiltCard";

const projects = [
    {
        title: "PedeUai",
        id: "PRJ-001",
        category: "FOOD DELIVERY SAAS",
        description: "Enterprise scalability with real-time sync and predictive demand analysis.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1000&q=80",
        tech: ["Next.js 14", "Supabase", "Redis"],
        specs: {
            latency: "< 50ms",
            uptime: "99.99%",
            ops: "10k+"
        },
        color: "venture-cyan"
    },
    {
        title: "Nutri-CRM",
        id: "PRJ-002",
        category: "HEALTHCARE INTELLIGENCE",
        description: "Advanced patient management system with AI-driven meal planning and biometric tracking.",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1000&q=80",
        tech: ["React", "PyTorch", "Node.js"],
        specs: {
            accuracy: "98.2%",
            users: "5k+",
            analysis: "Instant"
        },
        color: "ios-blue"
    },
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="mb-32 last:mb-0"
        >
            <TiltCard
                tiltDegree={3}
                className="overflow-hidden border-white/5 bg-white/[0.01]"
                glowColor={project.color === "venture-cyan" ? "rgba(0, 255, 85, 0.1)" : "rgba(0, 122, 255, 0.1)"}
            >
                <div className="flex flex-col lg:grid lg:grid-cols-12 min-h-[500px]">

                    {/* Main Showcase Area */}
                    <div className="lg:col-span-8 relative group overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
                        {/* Parallax Image */}
                        <motion.div
                            style={{ y: imageY }}
                            className="absolute inset-0 scale-110"
                        >
                            <img
                                src={project.image}
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 grayscale-[40%] group-hover:grayscale-0"
                                alt={project.title}
                            />
                        </motion.div>

                        {/* Scanline Effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-venture-cyan/10 to-transparent h-1/2 w-full animate-[scanline_4s_linear_infinite] pointer-events-none" />

                        {/* UI Overlays */}
                        <div className="absolute top-0 left-0 w-full p-6 flex flex-col sm:flex-row justify-between items-start gap-4">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black text-white/40 tracking-[.5em] mb-1">DATA_SOURCE: STABLE</span>
                                <span className="text-2xl font-black text-white tracking-widest leading-none">{project.id}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t: string) => (
                                    <span key={t} className="px-2 py-1 bg-white/5 backdrop-blur-md rounded border border-white/10 text-[8px] font-bold text-white/60">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-black to-transparent">
                            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
                                {project.title.toUpperCase()}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                <button className="flex items-center gap-2 text-xs font-black text-venture-cyan tracking-[.2em] hover:text-white transition-colors">
                                    <Terminal size={14} /> INITIALIZE_SHOWCASE
                                </button>
                                <button className="flex items-center gap-2 text-xs font-black text-white/40 tracking-[.2em] hover:text-white transition-colors">
                                    <Github size={14} /> REPO_ACCESS
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Spec Sidebar */}
                    <div className="lg:col-span-4 p-8 flex flex-col justify-between bg-white/[0.02]">
                        <div className="space-y-8">
                            <div>
                                <span className="text-[10px] font-black text-venture-cyan tracking-[.3em] uppercase block mb-4">Project Overview</span>
                                <p className="text-gray-400 text-sm leading-relaxed font-medium">
                                    {project.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                {Object.entries(project.specs).map(([key, val]) => (
                                    <div key={key} className="p-4 rounded-xl border border-white/5 bg-white/5 flex justify-between items-center group/spec hover:border-venture-cyan/30 transition-colors">
                                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{key}</span>
                                        <span className="text-lg font-bold text-white group-hover/spec:text-venture-cyan transition-colors">{String(val)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                            <div className="flex flex-col gap-1">
                                <div className="flex gap-1">
                                    <div className="w-1 h-1 bg-venture-cyan rounded-full animate-pulse" />
                                    <div className="w-1 h-1 bg-venture-cyan/40 rounded-full" />
                                    <div className="w-1 h-1 bg-venture-cyan/20 rounded-full" />
                                </div>
                                <span className="text-[8px] font-black text-gray-600 tracking-widest">ENCRYPTION: ACTIVE</span>
                            </div>
                            <button className="w-12 h-12 rounded-xl bg-venture-cyan/10 border border-venture-cyan/20 flex items-center justify-center text-venture-cyan hover:bg-venture-cyan hover:text-black transition-all">
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>

                </div>
            </TiltCard>
        </motion.div>
    );
};

export const Projects = () => {
    return (
        <section id="projects" className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Background elements */}
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-[1px] w-12 bg-venture-cyan" />
                        <span className="text-[12px] font-black text-venture-cyan tracking-[.4em] uppercase">Showcase Registry</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                        ENGINEERING <br />
                        <span className="text-gray-800">ARTIFACTS</span>
                    </h2>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
