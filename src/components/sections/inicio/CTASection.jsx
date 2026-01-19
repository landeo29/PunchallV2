import { useRef, useEffect, useState } from 'react';

const CTASection = () => {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

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

    return (
        <section
            ref={sectionRef}
            className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
            aria-labelledby="cta-heading"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-indigo-900 to-slate-900" />

            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
                     style={{ animationDuration: '8s' }} />
                <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"
                     style={{ animationDuration: '10s', animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-3xl animate-pulse"
                     style={{ animationDuration: '12s', animationDelay: '4s' }} />
            </div>

            <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="ctaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#ffffff" />
                    </linearGradient>
                </defs>
                <line x1="0%" y1="30%" x2="100%" y2="30%" stroke="url(#ctaGradient)" strokeWidth="1" />
                <line x1="0%" y1="70%" x2="100%" y2="70%" stroke="url(#ctaGradient)" strokeWidth="1" />
                <line x1="30%" y1="0%" x2="30%" y2="100%" stroke="url(#ctaGradient)" strokeWidth="1" />
                <line x1="70%" y1="0%" x2="70%" y2="100%" stroke="url(#ctaGradient)" strokeWidth="1" />
            </svg>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-3 mb-8">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/50" />
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <span className="text-sm font-bold tracking-wider uppercase text-white">
                Únete a la Revolución
              </span>
                        </div>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/50" />
                    </div>

                    <h2 id="cta-heading" className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6">
                        ¿Listo para Transformar
                        <span className="block mt-2 bg-gradient-to-r from-blue-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent">
              tu Visión en Realidad?
            </span>
                    </h2>

                    <p className="text-xl sm:text-2xl text-white/90 font-light leading-relaxed mb-16 max-w-3xl mx-auto">
                        Construyamos juntos soluciones tecnológicas inclusivas que marquen la diferencia.
                        Tu proyecto merece un equipo diverso y comprometido.
                    </p>

                    <div className={`flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-5 transition-all duration-1000 delay-600
                         ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                        <a
                            href="/contacto"
                            className="group relative overflow-hidden"
                            aria-label="Contáctanos ahora para iniciar tu proyecto"
                        >
                            {/* Glow effect suave */}
                            <div className="absolute -inset-2 bg-indigo-300 blur-2xl opacity-20 group-hover:opacity-40
                            transition-opacity duration-500 rounded-2xl"
                                 aria-hidden="true" />

                            <div className="relative flex items-center justify-center gap-3 px-10 py-5
                            bg-gradient-to-r from-indigo-500 to-blue-600 text-white
                            font-black text-lg rounded-2xl
                            shadow-2xl
                            transform transition-all duration-300
                            group-hover:scale-105 group-hover:shadow-[0_20px_60px_rgba(99,102,241,0.3)]
                            group-active:scale-95
                            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300/50">

                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                              -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                                     aria-hidden="true" />

                                <svg className="relative w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>

                                <span className="relative">Contáctanos Ahora</span>

                                <svg className="relative w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                     fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                                          d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </a>

                        <a
                            href="/colaboracion"
                            className="group relative overflow-hidden"
                            aria-label="Únete como colaborador y sé parte del cambio"
                        >
                            {/* Glow effect suave */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-400 to-violet-400 blur-2xl
                            opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"
                                 aria-hidden="true" />

                            <div className="relative flex items-center justify-center gap-3 px-10 py-5
                            bg-white/10 backdrop-blur-sm text-white
                            border-2 border-white/20
                            font-bold text-lg rounded-2xl
                            shadow-lg
                            transform transition-all duration-300
                            group-hover:scale-105 group-hover:bg-white/15 group-hover:border-white/30
                            group-active:scale-95
                            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300/30">

                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>

                                <span>Sé Parte del Cambio</span>

                                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                     fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                                          d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </a>
                    </div>

                    <div className={`mt-12 transition-all duration-1000 delay-800
                         ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl
                          bg-white/10 backdrop-blur-sm border border-white/20">
                            <svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <p className="text-sm font-semibold text-white/90">
                                Construimos tecnología accesible, creamos oportunidades reales
                            </p>
                        </div>
                    </div>

                    <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-16 max-w-4xl mx-auto transition-all duration-1000 delay-1000
                         ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                         role="list"
                         aria-label="Características principales">
                        <div className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/5 backdrop-blur-sm
                          hover:bg-white/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                             role="listitem">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500
                            flex items-center justify-center shadow-lg group-hover:shadow-xl
                            transition-shadow duration-300"
                                 aria-hidden="true">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="text-sm font-bold text-white">Calidad Garantizada</p>
                        </div>

                        <div className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/5 backdrop-blur-sm
                          hover:bg-white/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                             role="listitem">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500
                            flex items-center justify-center shadow-lg group-hover:shadow-xl
                            transition-shadow duration-300"
                                 aria-hidden="true">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <p className="text-sm font-bold text-white">Inclusión Real</p>
                        </div>

                        <div className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/5 backdrop-blur-sm
                          hover:bg-white/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                             role="listitem">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500
                            flex items-center justify-center shadow-lg group-hover:shadow-xl
                            transition-shadow duration-300"
                                 aria-hidden="true">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <p className="text-sm font-bold text-white">Innovación Constante</p>
                        </div>

                        <div className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/5 backdrop-blur-sm
                          hover:bg-white/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                             role="listitem">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500
                            flex items-center justify-center shadow-lg group-hover:shadow-xl
                            transition-shadow duration-300"
                                 aria-hidden="true">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <p className="text-sm font-bold text-white">Entrega Rápida</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;