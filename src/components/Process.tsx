"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket, ChevronRight, Zap } from "lucide-react";
import { TiltCard } from "./ui/TiltCard";

const steps = [
    {
        icon: <Search className="w-8 h-8" />,
        title: "Discovery",
        desc: "Mapeamento profundo do core business e oportunidades de escala.",
        color: "from-ios-blue to-cyan-400",
        glow: "rgba(0, 122, 255, 0.3)"
    },
    {
        icon: <PenTool className="w-8 h-8" />,
        title: "Strategy",
        desc: "Arquitetura de sistemas e design focado em conversão e UX de elite.",
        color: "from-ios-yellow to-orange-400",
        glow: "rgba(255, 204, 0, 0.3)"
    },
    {
        icon: <Code className="w-8 h-8" />,
        title: "Execution",
        desc: "Desenvolvimento ágil com código limpo e infraestrutura resiliente.",
        color: "from-ios-green to-emerald-400",
        glow: "rgba(52, 199, 89, 0.3)"
    },
    {
        icon: <Rocket className="w-8 h-8" />,
        title: "Expansion",
        desc: "Lançamento estratégico e monitoramento para escala explosiva.",
        color: "from-ios-red to-pink-500",
        glow: "rgba(255, 59, 48, 0.3)"
    },
];

export const Process = () => {
    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Dynamic Background Noise/Glow */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-[1px] w-12 bg-venture-cyan" />
                            <span className="text-[12px] font-black text-venture-cyan tracking-[.4em] uppercase">Pipeline Workflow</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                            ENGINEERING <br />
                            <span className="text-gray-800">PIPELINE</span>
                        </h2>
                    </div>
                    <div className="max-w-md text-right md:text-left">
                        <p className="text-gray-500 font-medium leading-relaxed">
                            Nossa linha de montagem digital foi projetada para transformar complexidade em sistemas de alta performance com previsibilidade total.
                        </p>
                    </div>
                </motion.div>

                <div className="relative">
                    {/* Energy Path Connection (Hidden on mobile) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-white/5 -translate-y-1/2 overflow-hidden">
                        <motion.div
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="h-full w-1/3 bg-gradient-to-r from-transparent via-venture-cyan to-transparent shadow-[0_0_15px_rgba(0,255,85,0.6)]"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15, duration: 0.6 }}
                            >
                                <TiltCard
                                    glowColor={step.glow}
                                    className="p-8 h-full flex flex-col items-center text-center group border-white/5 active:scale-95"
                                >
                                    <div className={`w-20 h-20 rounded-[2rem] bg-gradient-to-br ${step.color} p-5 shadow-2xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative`}>
                                        <div className="text-white drop-shadow-xl flex items-center justify-center h-full w-full">
                                            {step.icon}
                                        </div>
                                        {/* Pulse effect */}
                                        <span className={`absolute -inset-1 rounded-[2rem] bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-40 animate-ping duration-1000`} />
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-[10px] font-black text-white/20 tracking-widest uppercase">Phase</span>
                                            <span className="text-[10px] font-black text-venture-cyan tracking-widest">0{idx + 1}</span>
                                        </div>
                                        <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-glow transition-all">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm font-medium leading-relaxed group-hover:text-gray-400 transition-colors">
                                            {step.desc}
                                        </p>
                                    </div>

                                    {/* Arrow Indicator for flow */}
                                    {idx < steps.length - 1 && (
                                        <div className="hidden lg:flex absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/5 border border-white/10 items-center justify-center text-white/20 z-20 group-hover:text-venture-cyan group-hover:border-venture-cyan/30 transition-all">
                                            <ChevronRight size={16} />
                                        </div>
                                    )}

                                    <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Zap className="w-4 h-4 text-venture-cyan animate-pulse" />
                                    </div>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom decorative bar */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 p-8 crystal-card border-venture-cyan/10 flex flex-wrap items-center justify-center gap-12"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-ios-blue animate-pulse" />
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Real-time collaboration</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-ios-green animate-pulse" />
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">High Uptime Deployment</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-ios-red animate-pulse" />
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Enterprise Grade Security</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
