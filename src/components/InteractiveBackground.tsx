"use client";

import { useEffect, useRef } from "react";

export const InteractiveBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;
        let mouse = { x: 0, y: 0 };
        let targetRotationX = 0;
        let targetRotationY = 0;

        const colors = ["#00FF55", "#10B981", "#22C55E", "#4ADE80", "#84CC16"];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            z: number;
            initialX: number;
            initialY: number;
            initialZ: number;
            color: string;
            radius: number;

            constructor() {
                // Spread particles across a wide 3D volume ("espalhadas")
                // Using a range relative to screen size for better responsiveness
                this.x = (Math.random() - 0.5) * window.innerWidth * 1.5;
                this.y = (Math.random() - 0.5) * window.innerHeight * 1.5;
                this.z = (Math.random() - 0.5) * 1000; // Deep Z-space

                this.initialX = this.x;
                this.initialY = this.y;
                this.initialZ = this.z;

                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.radius = Math.random() * 2;
            }

            draw(rotationX: number, rotationY: number) {
                if (!ctx || !canvas) return;

                // 3D Rotation Math
                let x = this.x;
                let y = this.y;
                let z = this.z;

                // Rotate Y
                let tempX = x * Math.cos(rotationY) - z * Math.sin(rotationY);
                let tempZ = x * Math.sin(rotationY) + z * Math.cos(rotationY);
                x = tempX;
                z = tempZ;

                // Rotate X
                let tempY = y * Math.cos(rotationX) - z * Math.sin(rotationX);
                z = y * Math.sin(rotationX) + z * Math.cos(rotationX);
                y = tempY;

                // Perspective Projection
                const fov = 600;
                const scale = fov / (fov + z + 500); // 500 is camera distance

                if (scale < 0) return; // Behind camera

                const screenX = canvas.width / 2 + x * scale;
                const screenY = canvas.height / 2 + y * scale;

                // Mouse Interaction: Particles flee from mouse position
                const dx = screenX - mouse.x;
                const dy = screenY - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const interactionRadius = 150;

                let drawX = screenX;
                let drawY = screenY;

                if (dist < interactionRadius) {
                    const force = (interactionRadius - dist) / interactionRadius;
                    const angle = Math.atan2(dy, dx);
                    drawX += Math.cos(angle) * force * 50; // Push away
                    drawY += Math.sin(angle) * force * 50;
                }

                const size = this.radius * scale;

                ctx.beginPath();
                ctx.fillStyle = this.color;

                // Add glow
                ctx.shadowBlur = 10;
                ctx.shadowColor = this.color;

                ctx.arc(drawX, drawY, Math.max(0, size), 0, Math.PI * 2);
                ctx.fill();

                ctx.shadowBlur = 0; // Reset
            }
        }

        const initParticles = () => {
            particles = [];
            const particleCount = 400; // Adjusted density so it's not too cluttered
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;

            // Calculate rotation based on mouse position relative to center
            targetRotationY = (mouse.x - canvas.width / 2) * 0.0005;
            targetRotationX = (mouse.y - canvas.height / 2) * 0.0005;
        };

        let currentRotationX = 0;
        let currentRotationY = 0;

        const animate = () => {
            if (!canvas || !ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Smooth rotation interpolation
            currentRotationX += (targetRotationX - currentRotationX) * 0.05;
            currentRotationY += (targetRotationY - currentRotationY) * 0.05;

            // Add a slight constant drift so it's never completely static
            currentRotationY += 0.001;

            particles.forEach((particle) => {
                particle.draw(currentRotationX, currentRotationY);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);

        resize();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none opacity-80"
        />
    );
};
