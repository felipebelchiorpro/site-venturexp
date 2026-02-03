"use client";

import { motion } from "framer-motion";

const technologies = [
    "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Supabase", "Firebase", "n8n", "OpenAI", "React", "Docker"
];

export const TechStack = () => {
    return (
        <section id="tech" className="py-20 border-y border-white/5 bg-black/50 overflow-hidden">
            <div className="container mx-auto px-6 mb-10 text-center">
                <p className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase">Powering Your Future</p>
            </div>

            <div className="flex relative items-center">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                        <span key={index} className="px-8 text-2xl md:text-3xl font-bold text-white/20 hover:text-bundle-cyan hover:text-white hover:text-glow transition-all cursor-default select-none">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </section>
    );
};
