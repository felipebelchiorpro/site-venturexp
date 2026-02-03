"use client";

import { motion } from "framer-motion";
import { Bot, Code, LineChart, Cpu, Cloud, MousePointer2 } from "lucide-react";
import React from "react";
import { TiltCard } from "./ui/TiltCard";

const solutions = [
    {
        title: "SaaS Development",
        description: "Arquitetura robusta e escalável para produtos de elite.",
        icon: <Code className="w-6 h-6" />,
        color: "from-ios-blue to-blue-400",
        size: "col-span-1 md:col-span-2",
    },
    {
        title: "AI Automation",
        description: "Flows inteligentes com IA.",
        icon: <Bot className="w-6 h-6" />,
        color: "from-ios-green to-emerald-400",
        size: "col-span-1",
    },
    {
        title: "Cloud Native",
        description: "Engenharia de alta disponibilidade.",
        icon: <Cloud className="w-6 h-6" />,
        color: "from-ios-yellow to-orange-400",
        size: "col-span-1",
    },
    {
        title: "Data Intelligence",
        description: "Decisões baseadas em real data.",
        icon: <LineChart className="w-6 h-6" />,
        color: "from-ios-red to-pink-500",
        size: "col-span-1",
    },
    {
        title: "Custom Solutions",
        description: "O business core do seu jeito.",
        icon: <Cpu className="w-6 h-6" />,
        color: "from-purple-500 to-indigo-400",
        size: "col-span-1 md:col-span-2",
    },
];

export const Solutions = () => {
    return (
        <section id="solutions" className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Background Lighting */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-ios-blue/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ios-green/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-20 flex items-center justify-between flex-wrap gap-6"
                >
                    <div>
                        <span className="text-[12px] font-black text-ios-blue tracking-[.4em] uppercase mb-4 block">Product Engineering</span>
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
                            SOLUÇÕES <span className="text-gray-800">01.</span>
                        </h2>
                    </div>
                    <div className="ios-widget px-6 py-3 flex items-center gap-3 bg-white/5 border-white/10">
                        <MousePointer2 className="w-4 h-4 text-ios-blue" />
                        <span className="text-xs font-bold text-gray-500">EXPERIÊNCIA 3D ATIVA</span>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective-1000">
                    {solutions.map((item, index) => (
                        <TiltCard
                            key={index}
                            className={`p-10 ${item.size}`}
                        >
                            <div className="flex flex-col h-full">
                                <div className={`w-14 h-14 rounded-3xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl mb-12 group-hover:scale-110 transition-transform duration-500`}>
                                    <div className="text-white drop-shadow-lg">{item.icon}</div>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-glow transition-all">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 font-medium text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="mt-auto pt-10">
                                    <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
                                        <motion.div
                                            initial={{ x: "-100%" }}
                                            whileInView={{ x: "0%" }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                                            className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-40`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
