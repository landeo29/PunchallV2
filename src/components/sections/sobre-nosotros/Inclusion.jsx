import { useRef, useEffect, useState } from 'react';
import imagenInclusivo from '../../../assets/images/nosotros/Inclusion/inclusivo.webp';

const Inclusion = () => {
    const [isInView, setIsInView] = useState(false);
    const [scrollY, setScrollY] = useState(0);
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

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const principles = [
        {
            text: 'La inclusión está en el núcleo de todo lo que hacemos en Punchay.',
            highlight: 'inclusión',
        },
        {
            text: 'Reconocemos que la diversidad en nuestro equipo no solo enriquece nuestras soluciones tecnológicas.',
            highlight: 'diversidad',
        },
        {
            text: 'Nos comprometemos a crear un espacio donde todas las personas puedan prosperar.',
            highlight: 'prosperar',
        },
        {
            text: 'Cada proyecto es una oportunidad para demostrar que integrando diferentes perspectivas, producimos resultados más innovadores.',
            highlight: 'perspectivas',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50" />

            <div
                className="absolute inset-0 opacity-40"
                style={{
                    transform: `translateY(${scrollY * 0.3}px)`,
                }}
            >
                <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-teal-300/40 to-cyan-300/40 rounded-full blur-[100px] animate-pulse"
                     style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-emerald-300/40 to-teal-300/40 rounded-full blur-[100px] animate-pulse"
                     style={{ animationDuration: '10s', animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-300/30 to-teal-300/30 rounded-full blur-[120px] animate-pulse"
                     style={{ animationDuration: '12s', animationDelay: '2s' }} />
            </div>

            <div className="absolute inset-0">
                <svg className="w-full h-full opacity-[0.04]">
                    <defs>
                        <pattern id="warm-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <circle cx="50" cy="50" r="1" fill="#14b8a6" />
                            <circle cx="0" cy="0" r="1" fill="#06b6d4" />
                            <circle cx="100" cy="0" r="1" fill="#10b981" />
                            <circle cx="0" cy="100" r="1" fill="#14b8a6" />
                            <circle cx="100" cy="100" r="1" fill="#06b6d4" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#warm-pattern)" />
                </svg>
            </div>

            <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 6 + 2}px`,
                            height: `${Math.random() * 6 + 2}px`,
                            background: `radial-gradient(circle, 
                         ${['rgba(20, 184, 166, 0.3)', 'rgba(6, 182, 212, 0.3)', 'rgba(16, 185, 129, 0.3)'][Math.floor(Math.random() * 3)]}, 
                         transparent)`,
                            animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            <div className="absolute inset-0 opacity-10">
                <div
                    style={{
                        backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 35px,
                rgba(20, 184, 166, 0.1) 35px,
                rgba(20, 184, 166, 0.1) 70px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 35px,
                rgba(6, 182, 212, 0.1) 35px,
                rgba(6, 182, 212, 0.1) 70px
              )
            `,
                    }}
                    className="absolute inset-0"
                />
            </div>

            <div className="container-custom relative z-10 py-20 sm:py-24 lg:py-32">

                <div className={`text-center mb-16 transition-all duration-1000 delay-100
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-xl border border-teal-200/50 shadow-lg">
                        <div className="flex gap-1">
                            {[0, 1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="w-1 rounded-full bg-gradient-to-b from-teal-500 to-cyan-600"
                                    style={{
                                        height: `${28 - i * 5}px`,
                                        opacity: 0.4 + (i * 0.15)
                                    }}
                                />
                            ))}
                        </div>
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-teal-700">
              Diversidad e Inclusión
            </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">

                    <div className={`transition-all duration-[1.2s] delay-200
                         ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-8">
                                    <span className="text-slate-900">Fomentando la</span>
                                    <br />
                                    <span className="relative inline-block mt-3">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600">
                      Inclusión
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-4 bg-teal-400/30 blur-xl" />
                  </span>
                                </h2>
                            </div>

                            <div className="space-y-6">
                                {principles.map((principle, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-start gap-4 transition-all duration-700
                              ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                                        style={{ transitionDelay: `${400 + index * 150}ms` }}
                                    >
                                        <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex-shrink-0 mt-0.5 flex items-center justify-center shadow-lg shadow-teal-500/30">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-lg text-slate-700 leading-relaxed">
                                            {principle.text.split(principle.highlight).map((part, i, arr) => (
                                                i < arr.length - 1 ? (
                                                    <span key={i}>
                            {part}
                                                        <span className="font-bold text-teal-700">{principle.highlight}</span>
                          </span>
                                                ) : part
                                            ))}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className={`pt-8 transition-all duration-700 delay-1000
                            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-teal-200/50 shadow-xl">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 flex-shrink-0">
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-900 mb-1">Nuestra dedicación a la inclusión</div>
                                        <div className="text-slate-700 text-sm">se refleja en nuestros productos, nuestro equipo y nuestra visión de un futuro donde la tecnología esté al servicio de todos.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`relative transition-all duration-[1.2s] delay-500
                         ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>

                        <div className="relative">
                            <div className="absolute -inset-8 bg-gradient-to-r from-teal-400/40 via-cyan-400/40 to-emerald-400/40 rounded-[3rem] blur-3xl" />

                            <div className="relative">
                                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-3xl" />

                                <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white/70 shadow-2xl">
                                    <img
                                        src={imagenInclusivo}
                                        alt="Equipo inclusivo en Punchay"
                                        className="w-full h-auto"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                                    <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                                        <div className="space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-1 h-full bg-gradient-to-b from-teal-400 to-transparent rounded-full" />
                                                <div>
                                                    <p className="text-white text-xl sm:text-2xl font-light leading-relaxed mb-4">
                                                        "La inclusión en Punchay no solo impulsa nuestra innovación, sino que también fomenta la creatividad y el crecimiento de cada miembro del equipo."
                                                    </p>
                                                    <div className="flex items-center gap-3">
                                                        <div className="h-px flex-1 bg-gradient-to-r from-white/40 to-transparent" />
                                                        <span className="text-sm font-semibold text-white/80">Equipo PUNCHALL</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute top-8 right-8 flex flex-col gap-3">
                                        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-xl">
                                            <span className="text-2xl">♿</span>
                                        </div>
                                        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-xl">
                                            <span className="text-2xl">🤝</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-3xl bg-gradient-to-br from-teal-500 to-cyan-600 shadow-2xl shadow-teal-500/40 flex items-center justify-center transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                                    <div className="text-center">
                                        <div className="text-4xl font-black text-white">30%</div>
                                        <div className="text-xs font-bold text-white/80 uppercase tracking-wider">Diverso</div>
                                    </div>
                                </div>

                                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-2xl shadow-emerald-500/40 flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform duration-500">
                                    <div className="text-center">
                                        <div className="text-4xl font-black text-white">100%</div>
                                        <div className="text-xs font-bold text-white/80 uppercase tracking-wider">Inclusivo</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Inclusion;