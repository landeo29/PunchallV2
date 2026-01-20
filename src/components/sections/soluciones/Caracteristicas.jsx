import { useRef, useEffect, useState } from 'react';

const Caracteristicas = () => {
    const [isInView, setIsInView] = useState(false);
    const [hoveredId, setHoveredId] = useState(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.15 }
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

    const caracteristicas = [
        {
            id: 1,
            title: 'Innovación Continua',
            description: 'Nos mantenemos a la vanguardia con las últimas tendencias tecnológicas.',
            icon: (
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            color: '#3b82f6',
        },
        {
            id: 2,
            title: 'Eficiencia Operativa',
            description: 'Optimizamos procesos para maximizar la productividad.',
            icon: (
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            color: '#8b5cf6',
        },
        {
            id: 3,
            title: 'Seguridad Integral',
            description: 'Protegemos tus datos con las mejores prácticas de seguridad.',
            icon: (
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            color: '#10b981',
        },
        {
            id: 4,
            title: 'Crecimiento Empresarial',
            description: 'Impulsamos el crecimiento de tu negocio con soluciones tecnológicas.',
            icon: (
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            color: '#f59e0b',
        },
        {
            id: 5,
            title: 'Adaptabilidad Móvil',
            description: 'Nuestras soluciones son completamente móviles y accesibles.',
            icon: (
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            color: '#06b6d4',
        },
        {
            id: 6,
            title: 'Rendimiento Óptimo',
            description: 'Aseguramos un rendimiento excepcional en todas nuestras plataformas.',
            icon: (
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            color: '#ec4899',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" />

            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-gradient-to-br from-emerald-300/30 to-teal-300/30 rounded-full blur-[100px] animate-pulse"
                     style={{ animationDuration: '10s' }} />
                <div className="absolute bottom-1/4 -right-20 w-[450px] h-[450px] bg-gradient-to-br from-cyan-300/30 to-teal-300/30 rounded-full blur-[100px] animate-pulse"
                     style={{ animationDuration: '12s', animationDelay: '2s' }} />
            </div>

            <div className="absolute inset-0 opacity-[0.02]">
                <svg className="w-full h-full">
                    <defs>
                        <pattern id="feat-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M0 50 L100 50 M50 0 L50 100" stroke="#10b981" strokeWidth="1" />
                            <circle cx="50" cy="50" r="2" fill="#14b8a6" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#feat-grid)" />
                </svg>
            </div>

            <div className="absolute inset-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${10 + (i * 10)}%`,
                            top: `${15 + (i % 2) * 40}%`,
                            width: '120px',
                            height: '120px',
                            background: `radial-gradient(circle, ${['#10b98120', '#14b8a620', '#06b6d420'][i % 3]}, transparent)`,
                            borderRadius: '35% 65% 55% 45% / 45% 55% 45% 55%',
                            animation: `morph ${10 + i * 2}s ease-in-out infinite`,
                            animationDelay: `${i * 0.5}s`,
                        }}
                    />
                ))}
            </div>

            <div className="container-custom relative z-10">

                <div className={`text-center mb-16 max-w-3xl mx-auto transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-xl border border-emerald-200/50 shadow-lg">
                        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-700">
              Nuestras Ventajas
            </span>
                    </div>

                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-tight mb-6">
                        Características
                        <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              Excepcionales
            </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {caracteristicas.map((feature, index) => (
                        <div
                            key={feature.id}
                            onMouseEnter={() => setHoveredId(feature.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className={`group relative transition-all duration-1000
                        ${isInView
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${300 + index * 100}ms` }}
                        >
                            <div
                                className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-500"
                                style={{ background: `${feature.color}50` }}
                            />

                            <div className="relative h-full p-8 rounded-2xl bg-white/90 backdrop-blur-xl border-2 border-white/60 shadow-lg group-hover:shadow-2xl transition-all duration-500">

                                <div className="relative mb-6">
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                                        style={{
                                            background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                                        }}
                                    >
                                        <div
                                            className="w-8 h-8 transition-all duration-500 group-hover:scale-110"
                                            style={{ color: feature.color }}
                                        >
                                            {feature.icon}
                                        </div>
                                    </div>

                                    <div
                                        className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                                        style={{ background: `${feature.color}30` }}
                                    />
                                </div>

                                <h3 className="text-2xl font-black text-slate-900 mb-3 leading-tight">
                                    {feature.title}
                                </h3>

                                <p className="text-slate-600 leading-relaxed">
                                    {feature.description}
                                </p>

                                <div className="mt-6 flex items-center gap-2">
                                    <div
                                        className="h-1 rounded-full transition-all duration-500"
                                        style={{
                                            width: hoveredId === feature.id ? '100%' : '40px',
                                            background: feature.color
                                        }}
                                    />
                                    <div
                                        className="w-2 h-2 rounded-full transition-all duration-300"
                                        style={{
                                            background: feature.color,
                                            transform: hoveredId === feature.id ? 'scale(1.5)' : 'scale(1)'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Caracteristicas;