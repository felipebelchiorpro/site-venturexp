"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Cpu, Globe, Zap, Shield, Rocket, Activity, ChevronRight } from "lucide-react";
import Link from "next/link";
import { InteractiveBackground } from "./InteractiveBackground";
import { Typewriter } from "./Typewriter";
import { TiltCard } from "./ui/TiltCard";

export const Hero = () => {
    return (
        <section className="relative min-h-[100vh] flex items-center justify-center pt-24 pb-32 overflow-hidden bg-[#050505]">
            <InteractiveBackground />

            {/* Intense Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-venture-cyan/10 rounded-full blur-[150px] animate-pulse-slow pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-ios-blue/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-stretch">

                    {/* Main Content Module (Left/Top) */}
                    <div className="lg:col-span-8">
                        <TiltCard
                            tiltDegree={5}
                            glowColor="rgba(0, 255, 85, 0.15)"
                            className="p-6 sm:p-10 md:p-16 flex flex-col justify-center h-full border-venture-cyan/20 overflow-hidden"
                        >
                            {/* Animated Badges */}
                            <div className="flex flex-wrap gap-3 mb-10">
                                {["HIGH SCALABILITY", "CLOUD NATIVE", "FAST DEPLOY"].map((tag, i) => (
                                    <motion.span
                                        key={tag}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * i }}
                                        className="px-4 py-1.5 rounded-full bg-venture-cyan/10 border border-venture-cyan/30 text-[10px] font-black text-venture-cyan tracking-[.2em] shadow-[0_0_15px_rgba(0,255,85,0.1)]"
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="block text-purple-400 font-mono text-xl md:text-3xl mb-4 font-bold">
                                    const <span className="text-white">future</span> = <span className="text-yellow-300">await</span>
                                </span>

                                <h1 className="text-[clamp(2.5rem,12vw,5.5rem)] lg:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8">
                                    SISTEMAS QUE <br />
                                    <Typewriter
                                        words={[
                                            { text: "build(SaaS);", className: "text-venture-cyan text-glow" },
                                            { text: "scale(AI);", className: "text-ios-blue text-glow" },
                                            { text: "deploy(Power);", className: "text-ios-red text-glow" },
                                            { text: "run(Future);", className: "text-ios-green text-glow" },
                                        ]}
                                        delay={2500}
                                    />
                                </h1>

                                <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed mb-12 max-w-2xl">
                                    Engenharia de software de <span className="text-white">alta performance</span> e automações inteligentes para escalar seu business core com eficiência massiva.
                                </p>

                                <div className="flex flex-wrap gap-6 items-center">
                                    <Link
                                        href="#contact"
                                        className="h-16 px-10 rounded-2xl bg-venture-cyan text-black font-black text-lg flex items-center gap-3 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(0,255,85,0.4)]"
                                    >
                                        START SEU PROJECT <ArrowRight className="w-6 h-6" />
                                    </Link>
                                    <button className="h-16 px-10 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all active:scale-95 group">
                                        Nossas Soluções <ChevronRight className="inline-block transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </motion.div>
                        </TiltCard>
                    </div>

                    {/* Dashboard Widgets (Right/Bottom) */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                        <TiltCard glowColor="rgba(0, 122, 255, 0.2)" className="p-6 aspect-square flex flex-col justify-between border-ios-blue/20">
                            <div className="w-12 h-12 rounded-2xl bg-ios-blue flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <Shield className="text-white w-6 h-6" />
                            </div>
                            <div>
                                <span className="text-[10px] font-black text-gray-500 tracking-[.2em] uppercase">Security</span>
                                <h3 className="text-2xl font-bold text-white text-glow">MIL-SPEC</h3>
                            </div>
                        </TiltCard>

                        <TiltCard glowColor="rgba(52, 199, 89, 0.2)" className="p-6 aspect-square flex flex-col justify-between border-ios-green/20">
                            <div className="w-12 h-12 rounded-2xl bg-ios-green flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <Zap className="text-white w-6 h-6" />
                            </div>
                            <div>
                                <span className="text-[10px] font-black text-gray-500 tracking-[.2em] uppercase">Speed</span>
                                <h3 className="text-2xl font-bold text-white">OPTIMIZED</h3>
                            </div>
                        </TiltCard>

                        <TiltCard glowColor="rgba(255, 59, 48, 0.2)" className="col-span-2 p-8 flex items-center justify-between border-ios-red/20 group">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-ios-red flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                                    <Rocket className="text-white w-7 h-7" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black text-gray-500 tracking-[.2em] uppercase">Performance</span>
                                    <h3 className="text-2xl font-bold text-white">SCALE UP</h3>
                                </div>
                            </div>
                            <div className="flex gap-1 items-end h-8">
                                {[40, 70, 45, 90, 65, 80].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        animate={{ height: `${h}%` }}
                                        transition={{ delay: 0.5 + i * 0.1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                                        className="w-1.5 bg-ios-red/40 rounded-t-sm"
                                    />
                                ))}
                            </div>
                        </TiltCard>

                        <TiltCard glowColor="rgba(255, 255, 255, 0.1)" className="col-span-2 p-6 flex flex-col gap-4 border-white/5 bg-white/[0.02]">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Activity className="w-4 h-4 text-venture-cyan" />
                                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Network Status</span>
                                </div>
                                <span className="text-[10px] font-black text-venture-cyan uppercase">Stable</span>
                            </div>
                            <div className="grid grid-cols-4 gap-2">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="h-1 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            animate={{ x: ["-100%", "100%"] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                            className="h-full w-1/2 bg-venture-cyan/30"
                                        />
                                    </div>
                                ))}
                            </div>
                        </TiltCard>
                    </div>
                </div>
            </div>
        </section>
    );
};
