"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Quote, MapPin, Calendar, Sparkles } from "lucide-react";

const founder = {
    name: "Felipe Belchior",
    role: "Founder & COO",
    bio: "Liderando a fronteira da inovação tecnológica na Venture. Especialista em escala de operações e arquitetura de negócios digitais com foco em performance massiva e eficiência operacional. Transformamos ideias komplexas em sistemas resilientes que dominam mercados.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    color: "from-venture-cyan to-emerald-500",
    location: "Brasil",
    experience: "10+ Anos de Exp"
};

export const Team = () => {
    return (
        <section id="team" className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Background Glows & Particles */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-venture-cyan/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2 animate-pulse" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-ios-blue/5 rounded-full blur-[120px] translate-x-1/4" />

            {/* Ambient Grid Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-24 text-center"
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-[1px] w-12 bg-venture-cyan" />
                        <span className="text-[12px] font-black text-venture-cyan tracking-[.4em] uppercase">Leadership</span>
                        <div className="h-[1px] w-12 bg-venture-cyan" />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                        THE <span className="text-gray-800">FOUNDER</span>
                    </h2>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative p-[1px] rounded-[3rem] overflow-hidden"
                    >
                        {/* Rotating Neon Border */}
                        <div className="absolute inset-[-100%] spin-slow bg-[conic-gradient(from_0deg,transparent_0deg,transparent_200deg,#00ff55_250deg,transparent_310deg)]" />

                        <div className="relative crystal-card bg-[#080808]/90 p-8 md:p-16 border-none overflow-hidden h-full">
                            {/* Internal Glow */}
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-venture-cyan/5 to-transparent pointer-events-none" />

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

                                {/* Image Side */}
                                <div className="lg:col-span-5 relative group">
                                    <div className={`aspect-[4/5] rounded-[2.5rem] bg-gradient-to-br ${founder.color} p-0.5 shadow-2xl overflow-hidden relative`}>
                                        <img
                                            src="/felipe.jpg"
                                            alt={founder.name}
                                            className="w-full h-full object-cover object-top rounded-[2.4rem] grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    </div>

                                    {/* Floating Specs */}
                                    <div className="absolute -bottom-6 -right-6 flex flex-col gap-2">
                                        <div className="ios-widget px-4 py-2 bg-venture-cyan text-black font-black text-[10px] tracking-widest shadow-2xl border-none">
                                            FOUNDER & COO
                                        </div>
                                        <div className="ios-widget px-4 py-2 bg-white/5 backdrop-blur-md text-white/60 font-bold text-[9px] tracking-widest shadow-xl border-white/10 flex items-center gap-2">
                                            <MapPin size={10} /> {founder.location}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="lg:col-span-7 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 mb-6">
                                        <Quote className="text-venture-cyan/40 w-10 h-10" />
                                        <div className="flex-1 flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Sparkles key={i} className={`w-3 h-3 text-venture-cyan/20 animate-pulse delay-${i * 200}`} />
                                            ))}
                                        </div>
                                    </div>

                                    <h3 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter">
                                        {founder.name}
                                    </h3>

                                    <div className="flex items-center gap-6 mb-8 mt-2">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-gray-600" />
                                            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{founder.experience}</span>
                                        </div>
                                        <div className="h-4 w-[1px] bg-white/10" />
                                        <span className="text-[10px] font-black text-venture-cyan uppercase tracking-[.3em]">Chief Operations</span>
                                    </div>

                                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 font-medium">
                                        {founder.bio}
                                    </p>

                                    <div className="flex flex-wrap gap-4">
                                        <button className="h-14 px-8 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 text-white hover:bg-ios-blue hover:text-white hover:border-ios-blue transition-all shadow-lg group">
                                            <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                                            <span className="text-xs font-black tracking-widest">LINKEDIN</span>
                                        </button>
                                        <button className="h-14 px-8 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 text-white hover:bg-white hover:text-black hover:border-white transition-all shadow-lg group">
                                            <Github size={20} className="group-hover:scale-110 transition-transform" />
                                            <span className="text-xs font-black tracking-widest">GITHUB</span>
                                        </button>
                                        <button className="h-14 px-8 rounded-2xl bg-venture-cyan/10 border border-venture-cyan/30 flex items-center gap-3 text-venture-cyan hover:bg-venture-cyan hover:text-black hover:border-venture-cyan transition-all shadow-[0_0_20px_rgba(0,255,85,0.2)] group">
                                            <Mail size={18} className="group-hover:scale-110 transition-transform" />
                                            <span className="text-xs font-black tracking-widest">GET_IN_TOUCH</span>
                                        </button>
                                    </div>

                                    {/* Operational Status Bar */}
                                    <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between opacity-40">
                                        <div className="flex gap-1.5">
                                            {[...Array(3)].map((_, i) => (
                                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-venture-cyan" />
                                            ))}
                                        </div>
                                        <span className="text-[9px] font-black text-gray-500 tracking-[.5em] uppercase">Status: Operating</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
