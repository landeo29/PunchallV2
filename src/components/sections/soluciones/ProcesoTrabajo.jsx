import { useRef, useEffect, useState } from 'react';
import imgProceso from '../../../assets/images/soluciones/Proceso/proces.webp';

const ProcesoTrabajo = () => {
    const [isInView, setIsInView] = useState(false);
    const [activeStep, setActiveStep] = useState(null);
    const [scrollProgress, setScrollProgress] = useState(0);
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
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionTop = rect.top;
            const sectionHeight = rect.height;

            if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
                const progress = Math.max(0, Math.min(1,
                    (windowHeight - sectionTop) / (windowHeight + sectionHeight)
                ));
                setScrollProgress(progress);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const pasos = [
        {
            id: 1,
            numero: '01',
            title: 'Análisis de Necesidades',
            description: 'Identificamos tus necesidades específicas para ofrecer soluciones personalizadas.',
            color: '#3b82f6',
        },
        {
            id: 2,
            numero: '02',
            title: 'Desarrollo Personalizado',
            description: 'Creamos soluciones a medida que se adaptan a tu negocio.',
            color: '#8b5cf6',
        },
        {
            id: 3,
            numero: '03',
            title: 'Implementación y Soporte',
            description: 'Implementamos las soluciones y brindamos soporte continuo.',
            color: '#ec4899',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50" />

            <div className="absolute inset-0 opacity-40">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${20 * i}%`,
                            top: `${10 + (i % 2) * 50}%`,
                            width: `${200 + i * 30}px`,
                            height: `${200 + i * 30}px`,
                            background: `radial-gradient(circle, ${['#f59e0b30', '#f97316', '#fb923c30'][i % 3]}, transparent)`,
                            borderRadius: '50%',
                            transform: `scale(${scrollProgress * 1.5})`,
                            opacity: scrollProgress,
                            transition: 'all 0.3s ease-out',
                        }}
                    />
                ))}
            </div>

            <div className="absolute inset-0 opacity-[0.015]">
                <svg className="w-full h-full">
                    <defs>
                        <pattern id="process-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                            <path d="M0 100 Q50 80, 100 100 T200 100" stroke="#f59e0b" strokeWidth="2" fill="none" />
                            <circle cx="100" cy="100" r="3" fill="#f97316" />
                            <path d="M100 0 L100 200" stroke="#fb923c" strokeWidth="1" opacity="0.3" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#process-pattern)" />
                </svg>
            </div>

            <div className="container-custom relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">

                    <div className={`transition-all duration-1000 delay-200
                         ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>

                        <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-white/70 backdrop-blur-xl border border-orange-200/50 shadow-lg">
                            <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                            <span className="text-xs font-bold tracking-[0.3em] uppercase text-orange-700">
                Nuestro Proceso
              </span>
                        </div>

                        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] mb-6">
                            <span className="text-slate-900">Cómo</span>
                            <br />
                            <span className="relative inline-block mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
                  Funciona
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-orange-400/30 blur-lg" />
              </span>
                        </h2>

                        <p className="text-xl text-slate-700 leading-relaxed mb-12">
                            Descubre el proceso paso a paso para aprovechar al máximo nuestros servicios.
                        </p>

                        <div className="space-y-6">
                            {pasos.map((paso, index) => (
                                <div
                                    key={paso.id}
                                    onMouseEnter={() => setActiveStep(paso.id)}
                                    onMouseLeave={() => setActiveStep(null)}
                                    className={`group relative transition-all duration-700
                            ${isInView
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 -translate-x-10'
                                    }`}
                                    style={{ transitionDelay: `${400 + index * 200}ms` }}
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="relative flex-shrink-0">
                                            <div
                                                className="w-20 h-20 rounded-2xl flex items-center justify-center font-black text-3xl text-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                                                style={{
                                                    background: `linear-gradient(135deg, ${paso.color}, ${paso.color}CC)`,
                                                    boxShadow: activeStep === paso.id ? `0 0 40px ${paso.color}80` : 'none'
                                                }}
                                            >
                                                {paso.numero}
                                            </div>

                                            {index < pasos.length - 1 && (
                                                <div
                                                    className="absolute left-10 top-24 w-0.5 bg-gradient-to-b from-orange-300 to-transparent rounded-full transition-all duration-700"
                                                    style={{
                                                        height: activeStep === paso.id ? '60px' : '40px',
                                                    }}
                                                />
                                            )}

                                            <div
                                                className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
                                                style={{ background: `${paso.color}40` }}
                                            />
                                        </div>

                                        <div className="flex-1 pt-2">
                                            <h3 className="text-2xl font-black text-slate-900 mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
                                                style={{
                                                    backgroundImage: activeStep === paso.id ? `linear-gradient(135deg, ${paso.color}, ${paso.color}CC)` : 'none'
                                                }}>
                                                {paso.title}
                                            </h3>

                                            <p className="text-lg text-slate-600 leading-relaxed">
                                                {paso.description}
                                            </p>

                                            <div className="mt-4 flex items-center gap-2">
                                                <div
                                                    className="h-1 rounded-full transition-all duration-500"
                                                    style={{
                                                        width: activeStep === paso.id ? '100%' : '60px',
                                                        background: paso.color
                                                    }}
                                                />
                                                <div
                                                    className="w-2 h-2 rounded-full transition-all duration-300"
                                                    style={{
                                                        background: paso.color,
                                                        transform: activeStep === paso.id ? 'scale(1.5)' : 'scale(1)'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`relative transition-all duration-1000 delay-500
                         ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>

                        <div className="relative">
                            <div className="absolute -inset-8 bg-gradient-to-r from-orange-400/40 via-amber-400/40 to-yellow-400/40 rounded-[3rem] blur-3xl"
                                 style={{
                                     transform: `scale(${0.8 + scrollProgress * 0.2})`,
                                     opacity: 0.6 + scrollProgress * 0.4,
                                 }}
                            />

                            <div className="relative">
                                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-orange-500/10 to-amber-500/10 backdrop-blur-3xl" />

                                <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white/70 shadow-2xl">
                                    <img
                                        src={imgProceso}
                                        alt="Proceso de trabajo PUNCHALL"
                                        className="w-full h-auto"
                                        style={{
                                            transform: `scale(${1 + scrollProgress * 0.05})`,
                                            transition: 'transform 0.3s ease-out'
                                        }}
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                                    <div className="absolute top-8 right-8 flex flex-col gap-3">
                                        {pasos.map((paso, i) => (
                                            <div
                                                key={paso.id}
                                                className="w-12 h-12 rounded-2xl backdrop-blur-xl border-2 border-white/40 flex items-center justify-center font-bold text-white shadow-xl transition-all duration-500"
                                                style={{
                                                    background: `${paso.color}${activeStep === paso.id ? 'CC' : '60'}`,
                                                    transform: activeStep === paso.id ? 'scale(1.2) rotate(10deg)' : 'scale(1)',
                                                    transitionDelay: `${i * 100}ms`
                                                }}
                                            >
                                                {paso.numero}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-8">
                                        <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-white mb-1">Proceso Garantizado</div>
                                                <div className="text-xs text-neutral-200">3 pasos para el éxito</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-3xl bg-gradient-to-br from-orange-500 to-amber-600 shadow-2xl shadow-orange-500/50 flex flex-col items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                                    <div className="text-5xl font-black text-white">{pasos.length}</div>
                                    <div className="text-xs font-bold text-white uppercase tracking-wider">Pasos</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcesoTrabajo;