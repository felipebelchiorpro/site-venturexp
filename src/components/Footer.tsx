"use client";

import { Github, Linkedin, Twitter, Terminal } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-black pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="p-1.5 rounded bg-venture-cyan/10 border border-venture-cyan/30">
                                <Terminal className="w-5 h-5 text-venture-cyan" />
                            </div>
                            <span className="text-lg font-bold text-white">VENTURE</span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Software House especializada em criar o futuro através de código, design e inteligência artificial.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Empresa</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-venture-cyan transition-colors">Sobre Nós</Link></li>
                            <li><Link href="#" className="hover:text-venture-cyan transition-colors">Carreiras</Link></li>
                            <li><Link href="#" className="hover:text-venture-cyan transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Serviços</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-venture-cyan transition-colors">SaaS Development</Link></li>
                            <li><Link href="#" className="hover:text-venture-cyan transition-colors">Automations</Link></li>
                            <li><Link href="#" className="hover:text-venture-cyan transition-colors">Consulting</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Social</h4>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-venture-cyan hover:text-black transition-all">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-venture-cyan hover:text-black transition-all">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-venture-cyan hover:text-black transition-all">
                                <Twitter className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
                    <div className="flex flex-col gap-1">
                        <p>© {new Date().getFullYear()} VENTURE. Todos os direitos reservados.</p>
                        <p className="text-xs text-gray-700">Powered by Venture Systems | Built with Next.js & Supabase.</p>
                    </div>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-gray-400">Privacidade</Link>
                        <Link href="#" className="hover:text-gray-400">Termos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
