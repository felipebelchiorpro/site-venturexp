"use client";

import { motion } from "framer-motion";
import { Target, Eye, Zap, ShieldCheck, TrendingUp } from "lucide-react";
import { TiltCard } from "./ui/TiltCard";

export const About = () => {
    return (
        <section id="about" className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Heavy Green Glows */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-venture-cyan/10 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2 animate-pulse-slow" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-venture-cyan/5 rounded-full blur-[100px] translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Main Info Module */}
                    <div className="lg:col-span-7">
                        <TiltCard
                            glowColor="rgba(0, 255, 85, 0.2)"
                            className="p-10 md:p-16 border-venture-cyan/20"
                        >
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-[12px] font-black text-venture-cyan tracking-[.4em] uppercase mb-6 block"
                            >
                                About Venture
                            </motion.span>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-none"
                            >
                                CODE IS OUR <br />
                                <span className="text-venture-cyan text-glow animate-pulse">DNA.</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-gray-400 leading-relaxed mb-12 max-w-2xl"
                            >
                                Nascemos para transformar a complexidade tecnológica em vantagem competitiva massiva.
                                Nossos sistemas não apenas funcionam; eles dominam.
                            </motion.p>

                            <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-12">
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-2">
                                        <TrendingUp className="text-venture-cyan w-5 h-5" />
                                        <span className="text-4xl font-black text-white">50+</span>
                                    </div>
                                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-[.3em]">Success Cases</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="text-venture-cyan w-5 h-5" />
                                        <span className="text-4xl font-black text-white">100%</span>
                                    </div>
                                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-[.3em]">Cloud Engineering</span>
                                </div>
                            </div>
                        </TiltCard>
                    </div>

                    {/* Side Modules (Mission/Vision) */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <TiltCard
                            glowColor="rgba(0, 122, 255, 0.2)"
                            className="p-8 flex items-center gap-8 border-ios-blue/20"
                        >
                            <div className="w-20 h-20 rounded-3xl bg-ios-blue shadow-[0_0_30px_rgba(0,122,255,0.3)] flex items-center justify-center shrink-0">
                                <Target className="text-white w-10 h-10 drop-shadow-lg" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Missão</h3>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed">Engenharia de software de classe mundial para o seu business core.</p>
                            </div>
                        </TiltCard>

                        <TiltCard
                            glowColor="rgba(255, 204, 0, 0.2)"
                            className="p-8 flex items-center gap-8 border-ios-yellow/20"
                        >
                            <div className="w-20 h-20 rounded-3xl bg-ios-yellow shadow-[0_0_30px_rgba(255,204,0,0.3)] flex items-center justify-center shrink-0">
                                <Eye className="text-white w-10 h-10 drop-shadow-lg" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Visão</h3>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed">Referência global em automação inteligente e SaaS escalável.</p>
                            </div>
                        </TiltCard>

                        <TiltCard
                            glowColor="rgba(0, 255, 85, 0.2)"
                            className="p-8 flex items-center gap-8 border-venture-cyan/20 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Zap className="w-20 h-20 text-venture-cyan" />
                            </div>
                            <div className="flex flex-col gap-1 relative z-10 w-full">
                                <span className="text-[10px] font-black text-venture-cyan tracking-[.4em] uppercase">Venture OS v2.0</span>
                                <div className="h-1 w-full bg-white/5 rounded-full mt-2 overflow-hidden">
                                    <motion.div
                                        animate={{ x: ["-100%", "100%"] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                        className="h-full w-1/3 bg-venture-cyan"
                                    />
                                </div>
                            </div>
                        </TiltCard>
                    </div>

                </div>
            </div>
        </section>
    );
};
