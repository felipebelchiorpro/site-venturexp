"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-venture-black relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="ios-widget p-10 md:p-16 flex flex-col justify-center bg-ios-blue shadow-[0_30px_60px_rgba(0,122,255,0.2)]"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">START SEU <br />PROJECT <span className="text-white/40">NOW.</span></h2>
                        <p className="text-lg text-white/80 leading-relaxed mb-12 font-medium">
                            Pronto para levar seu workflow ao próximo nível? Entre em contato e vamos construir o futuro juntos.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-white">
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <span className="font-bold">hello@venturexp.com</span>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <span className="font-bold">+55 (11) 99999-9999</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="ios-widget p-10 md:p-16"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Seu Nome</label>
                                    <input
                                        type="text"
                                        placeholder="Steve Jobs"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 focus:border-ios-blue outline-none transition-all placeholder:text-gray-600"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Seu Email</label>
                                    <input
                                        type="email"
                                        placeholder="steve@apple.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 focus:border-ios-blue outline-none transition-all placeholder:text-gray-600"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Mensagem</label>
                                <textarea
                                    rows={4}
                                    placeholder="Como podemos ajudar sua empresa?"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:bg-white/10 focus:border-ios-blue outline-none transition-all resize-none placeholder:text-gray-600"
                                />
                            </div>

                            <button className="w-full py-5 rounded-2xl bg-white text-black font-black text-lg flex items-center justify-center gap-3 hover:bg-ios-blue hover:text-white transition-all shadow-xl active:scale-[0.98]">
                                ENVIAR MESSAGE <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
