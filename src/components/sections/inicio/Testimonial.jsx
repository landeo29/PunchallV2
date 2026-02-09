import { useRef, useEffect, useState } from 'react';

import ceoImage from '../../../assets/images/index/Testimonial/test.jpeg';

const Testimonial = () => {
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
            className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white"
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl animate-pulse"
                     style={{ animationDuration: '10s' }} />
                <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-3xl animate-pulse"
                     style={{ animationDuration: '12s', animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-100/30 rounded-full blur-3xl animate-pulse"
                     style={{ animationDuration: '14s', animationDelay: '4s' }} />

                {/* Patrón de puntos */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="container-custom relative z-10 py-20 sm:py-28 lg:py-32">

                <div className={`text-center mb-16 transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-600" />
                        <span className="text-sm font-bold tracking-[0.3em] uppercase text-blue-700">
              Visión de Liderazgo
            </span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-600" />
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 leading-tight">
                        Construyendo <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              el Futuro
            </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">

                    <div className={`order-2 lg:order-1 flex justify-center lg:justify-end transition-all duration-1000 delay-400
                         ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>

                        <div className="relative">

                            <div className="absolute -inset-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-3xl opacity-30 animate-pulse"
                                 style={{ animationDuration: '4s' }} />

                            <div className="absolute -inset-4 rounded-full border-2 border-blue-200/50 animate-pulse"
                                 style={{ animationDuration: '3s' }} />

                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden
                            border-8 border-white shadow-2xl">

                                <img
                                    src={ceoImage}
                                    alt="Ivan Borjas - CEO de Punchay"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        // Fallback si la imagen no carga
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = `
                    `;
                                    }}
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent" />
                            </div>




                            <div className="mt-8 text-center">
                                <h3 className="text-3xl sm:text-4xl font-black text-neutral-900 mb-2">
                                    Ivan Borjas
                                </h3>
                                <p className="text-blue-600 font-semibold text-base uppercase tracking-wider mb-4">
                                    CEO & Fundador
                                </p>

                                <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto" />
                            </div>
                        </div>
                    </div>

                    <div className={`order-1 lg:order-2 transition-all duration-1000 delay-600
                         ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>

                        <div className="space-y-8">

                            <div className="flex flex-wrap gap-4">
                                <div className="group flex items-center gap-3 px-4 py-3 rounded-xl
                              bg-white/80 backdrop-blur-sm border border-blue-100
                              hover:shadow-lg hover:scale-105 transition-all duration-300">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500
                                flex items-center justify-center shadow-md">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-bold text-neutral-800">Inclusivo</span>
                                </div>

                                <div className="group flex items-center gap-3 px-4 py-3 rounded-xl
                              bg-white/80 backdrop-blur-sm border border-indigo-100
                              hover:shadow-lg hover:scale-105 transition-all duration-300">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500
                                flex items-center justify-center shadow-md">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-bold text-neutral-800">Innovador</span>
                                </div>

                                <div className="group flex items-center gap-3 px-4 py-3 rounded-xl
                              bg-white/80 backdrop-blur-sm border border-cyan-100
                              hover:shadow-lg hover:scale-105 transition-all duration-300">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500
                                flex items-center justify-center shadow-md">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-bold text-neutral-800">Accesible</span>
                                </div>
                            </div>

                            <div className="relative p-8 sm:p-10 rounded-3xl bg-white/60 backdrop-blur-xl
                            border border-white/80 shadow-2xl">

                                <svg className="w-10 h-10 text-blue-400/40 mb-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>

                                <blockquote className="space-y-6">
                                    <p className="text-2xl sm:text-3xl text-neutral-800 font-light leading-relaxed">
                                        En Punchay creemos que la tecnología no solo conecta,
                                        <span className="font-semibold text-neutral-900"> también transforma</span>.
                                    </p>

                                    <p className="text-lg text-neutral-700 leading-relaxed">
                                        Nuestra misión es abrir caminos hacia un futuro más inclusivo, donde cada
                                        solución tecnológica sea una oportunidad para crecer y marcar la diferencia.
                                    </p>

                                    <div className="pt-4 flex items-center gap-3">
                                        <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
                                        <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                            ¡Construyendo innovación con propósito!
                                        </p>
                                    </div>
                                </blockquote>

                                <div className="absolute -bottom-2 -right-2 flex gap-1">
                                    <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
                                    <div className="w-3 h-3 rounded-full bg-indigo-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
                                    <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: '0.6s' }} />
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-4">
                                <a
                                    href="/sobre-nosotros"
                                    className="group inline-flex items-center gap-2 text-blue-600 font-semibold
                           hover:text-blue-700 transition-colors duration-300"
                                >
                                    <span>Conoce nuestra historia</span>
                                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;