import { useRef, useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const CTASoluciones = () => {
    const [isInView, setIsInView] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
    const sectionRef = useRef(null);

    const stars = useMemo(() =>
            Array.from({ length: 30 }, (_, i) => ({
                id: i,
                left: Math.random() * 100,
                top: Math.random() * 100,
                size: Math.random() * 4 + 1,
                duration: Math.random() * 5 + 3,
                delay: Math.random() * 5,
                opacity: Math.random() * 0.7 + 0.3,
            }))
        , []);

    const floatingShapes = useMemo(() =>
            Array.from({ length: 8 }, (_, i) => ({
                id: i,
                left: 10 + (i * 12),
                top: 20 + (i % 2) * 50,
                color: ['#6366f120', '#a855f720', '#ec489920'][i % 3],
                duration: 15 + i * 2,
                delay: i * 0.5,
            }))
        , []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            setMousePos({
                x: ((e.clientX - rect.left) / rect.width) * 100,
                y: ((e.clientY - rect.top) / rect.height) * 100,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);


    return (
        <section
            ref={sectionRef}
            className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-fuchsia-950" />

            <div
                className="absolute inset-0 opacity-40 transition-opacity duration-700"
                style={{
                    background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, 
                      rgba(99, 102, 241, 0.3) 0%, 
                      rgba(168, 85, 247, 0.2) 30%, 
                      rgba(236, 72, 153, 0.15) 60%, 
                      transparent 80%)`,
                }}
            />

            <div className="absolute inset-0">
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="absolute rounded-full bg-white"
                        style={{
                            left: `${star.left}%`,
                            top: `${star.top}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            animation: `twinkle ${star.duration}s ease-in-out infinite`,
                            animationDelay: `${star.delay}s`,
                            opacity: star.opacity,
                        }}
                    />
                ))}
            </div>

            <div className="absolute inset-0 opacity-[0.03]">
                <svg className="w-full h-full">
                    <defs>
                        <pattern id="cta-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <circle cx="50" cy="50" r="1" fill="#a855f7" />
                            <path d="M0 50 L100 50 M50 0 L50 100" stroke="#ec4899" strokeWidth="0.5" opacity="0.3" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#cta-pattern)" />
                </svg>
            </div>

            <div className="absolute inset-0 pointer-events-none">
                {floatingShapes.map((shape) => (
                    <div
                        key={shape.id}
                        className="absolute"
                        style={{
                            left: `${shape.left}%`,
                            top: `${shape.top}%`,
                            width: '150px',
                            height: '150px',
                            background: `radial-gradient(circle, ${shape.color}, transparent)`,
                            borderRadius: '40% 60% 50% 50% / 60% 40% 60% 40%',
                            animation: `float ${shape.duration}s ease-in-out infinite`,
                            animationDelay: `${shape.delay}s`,
                        }}
                    />
                ))}
            </div>

            <div className="container-custom relative z-10">

                <div className="max-w-5xl mx-auto">

                    <div className={`text-center mb-16 transition-all duration-1000 delay-200
                         ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                        <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20">
                            <div className="flex gap-1">
                                {[0, 1, 2].map((i) => (
                                    <div
                                        key={i}
                                        className="w-1.5 h-1.5 rounded-full bg-white"
                                        style={{
                                            animation: 'pulse 2s infinite',
                                            animationDelay: `${i * 0.3}s`,
                                            opacity: 0.5 + (i * 0.2)
                                        }}
                                    />
                                ))}
                            </div>
                            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/80">
                Comienza Hoy
              </span>
                            <div className="flex gap-1">
                                {[0, 1, 2].map((i) => (
                                    <div
                                        key={i}
                                        className="w-1.5 h-1.5 rounded-full bg-white"
                                        style={{
                                            animation: 'pulse 2s infinite',
                                            animationDelay: `${i * 0.3 + 0.15}s`,
                                            opacity: 0.5 + (i * 0.2)
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-8">
                            Transforma tu Futuro con
                            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400">
                Soluciones PUNCHALL
              </span>
                        </h2>

                        <p className="text-2xl text-neutral-200 leading-relaxed max-w-3xl mx-auto mb-12">
                            En Punchay creemos en un mundo más inclusivo. Déjanos ayudarte a desarrollar tu próximo proyecto tecnológico.
                        </p>

                        <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 transition-all duration-1000 delay-400
                           ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                            <Link
                                to="/contacto"
                                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-105 transition-all duration-300"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative">Contáctanos Ahora</span>
                                <svg className="relative w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>

                            <Link
                                to="/soluciones"
                                className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white font-bold text-lg hover:bg-white/20 transition-all duration-300"
                            >
                                <span>Conoce Nuestras Soluciones</span>
                                <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>
                    </div>


                    <div className={`mt-16 text-center transition-all duration-1000 delay-800
                         ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <div className="text-left">
                                <div className="text-sm font-bold text-white mb-1">Garantía de Accesibilidad</div>
                                <div className="text-xs text-neutral-300">Cumplimos con WCAG 2.1 AAA en todos nuestros proyectos</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASoluciones;