import { useRef, useEffect, useState } from 'react';

import inclusividad from "../../../assets/images/nosotros/Valores/13.webp";
import compromiso from "../../../assets/images/nosotros/Valores/14.webp";
import innovacion from "../../../assets/images/nosotros/Valores/15.webp";
import accesibilidad from "../../../assets/images/nosotros/Valores/16.webp";
import colaboracion from "../../../assets/images/nosotros/Valores/17.webp";
import responsabilidad from "../../../assets/images/nosotros/Valores/18.webp";


const ValoresCultura = () => {
    const [isInView, setIsInView] = useState(false);
    const [activeCard, setActiveCard] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
        const handleMouseMove = (e) => {
            const rect = sectionRef.current?.getBoundingClientRect();
            if (rect) {
                setMousePosition({
                    x: ((e.clientX - rect.left) / rect.width) * 100,
                    y: ((e.clientY - rect.top) / rect.height) * 100,
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const valores = [
        {
            id: 1,
            title: 'Inclusividad en Acción',
            description: 'Valoramos profundamente las contribuciones únicas de cada miembro, especialmente aquellos con habilidades diversas.',
            image: inclusividad,
            color: '#3b82f6',
            icon: '👥',
        },
        {
            id: 2,
            title: 'Compromiso con la Calidad',
            description: 'Nos esforzamos por superar estándares y expectativas, ofreciendo productos excepcionales.',
            image: compromiso,
            color: '#8b5cf6',
            icon: '✨',
        },
        {
            id: 3,
            title: 'Innovación Sin Fronteras',
            description: 'Fomentamos ideas frescas y desafiamos el status quo con creatividad y audacia.',
            image: innovacion,
            color: '#ec4899',
            icon: '💡',
        },
        {
            id: 4,
            title: 'Accesibilidad como Prioridad',
            description: 'Diseñamos soluciones accesibles, asegurando que nuestras tecnologías sirvan a una audiencia diversa.',
            image: accesibilidad,
            color: '#06b6d4',
            icon: '♿',
        },
        {
            id: 5,
            title: 'Colaboración Respetuosa',
            description: 'Promovemos un entorno donde cada voz es escuchada y valorada.',
            image: colaboracion,
            color: '#10b981',
            icon: '🤝',
        },
        {
            id: 6,
            title: 'Responsabilidad Social',
            description: 'Apoyamos causas que resuenen con nuestra misión, marcando una diferencia positiva en la comunidad.',
            image: responsabilidad,
            color: '#f59e0b',
            icon: '🌍',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-24 sm:py-32 lg:py-40 overflow-hidden bg-neutral-950"
        >
            <div
                className="absolute inset-0 opacity-30 transition-opacity duration-700"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                      rgba(59, 130, 246, 0.15) 0%, 
                      rgba(139, 92, 246, 0.1) 25%, 
                      rgba(236, 72, 153, 0.05) 50%, 
                      transparent 70%)`,
                }}
            />

            <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`,
                            opacity: Math.random() * 0.5,
                        }}
                    />
                ))}
            </div>

            <div className="container-custom relative z-10">

                <div className={`text-center mb-20 transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-block mb-6">
                        <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
                            <div className="flex gap-1">
                                {[0, 1, 2].map((i) => (
                                    <div
                                        key={i}
                                        className="w-1.5 h-1.5 rounded-full bg-blue-400"
                                        style={{
                                            animation: 'pulse 2s infinite',
                                            animationDelay: `${i * 0.3}s`
                                        }}
                                    />
                                ))}
                            </div>
                            <span className="text-sm font-bold tracking-[0.2em] uppercase text-blue-400">
                Cultura PUNCHALL
              </span>
                            <div className="flex gap-1">
                                {[0, 1, 2].map((i) => (
                                    <div
                                        key={i}
                                        className="w-1.5 h-1.5 rounded-full bg-purple-400"
                                        style={{
                                            animation: 'pulse 2s infinite',
                                            animationDelay: `${i * 0.3 + 0.15}s`
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight">
                        Los Principios que
                        <br />
                        <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Nos Definen
              </span>
              <svg className="absolute -bottom-4 left-0 w-full" height="12" viewBox="0 0 300 12">
                <path
                    d="M5,7 Q150,2 295,7"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
                    </h2>

                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                        Cada valor representa nuestro compromiso inquebrantable con la{' '}
                        <span className="text-blue-400 font-semibold">inclusión</span>,{' '}
                        <span className="text-purple-400 font-semibold">innovación</span> y{' '}
                        <span className="text-pink-400 font-semibold">excelencia</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {valores.map((valor, index) => (
                        <div
                            key={valor.id}
                            onMouseEnter={() => setActiveCard(valor.id)}
                            onMouseLeave={() => setActiveCard(null)}
                            className={`group relative transition-all duration-1000
                        ${isInView
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${300 + index * 100}ms` }}
                        >
                            <div className="relative h-full">
                                <div
                                    className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
                                    style={{
                                        background: `linear-gradient(135deg, ${valor.color}40, ${valor.color}20)`
                                    }}
                                />

                                <div className="relative h-full rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10
                              group-hover:border-white/20 transition-all duration-500
                              transform group-hover:scale-[1.02]">

                                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative h-56 overflow-hidden">
                                        <div className="absolute inset-0">
                                            <img
                                                src={valor.image}
                                                alt={valor.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
                                        </div>

                                        <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
                                            <div
                                                className="relative w-14 h-14 rounded-2xl flex items-center justify-center text-3xl backdrop-blur-xl border border-white/20
                                 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                                                style={{
                                                    background: `linear-gradient(135deg, ${valor.color}30, ${valor.color}10)`,
                                                    boxShadow: activeCard === valor.id ? `0 0 30px ${valor.color}60` : 'none'
                                                }}
                                            >
                                                {valor.icon}
                                            </div>

                                            <div className="flex flex-col items-end gap-2">
                                                <div className="w-12 h-0.5 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors duration-300" />
                                                <div className="w-8 h-0.5 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors duration-300" />
                                            </div>
                                        </div>

                                        <div className="absolute bottom-6 left-6 right-6">
                                            <div className="text-9xl font-black text-white/[0.03] leading-none group-hover:text-white/[0.06] transition-colors duration-500">
                                                0{valor.id}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <h3 className="text-2xl font-black text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
                                            style={{
                                                backgroundImage: activeCard === valor.id ? `linear-gradient(135deg, ${valor.color}, ${valor.color}CC)` : 'none'
                                            }}>
                                            {valor.title}
                                        </h3>

                                        <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                                            {valor.description}
                                        </p>

                                        <div className="mt-6 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div
                                                className="h-full rounded-full transition-all duration-700 ease-out"
                                                style={{
                                                    width: activeCard === valor.id ? '100%' : '0%',
                                                    background: `linear-gradient(90deg, ${valor.color}, ${valor.color}80)`
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 rounded-3xl border border-white/0 group-hover:border-white/10 transition-all duration-500" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`mt-20 flex flex-col items-center gap-8 transition-all duration-1000 delay-1000
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-2xl" />
                        <div className="relative flex items-center gap-6 px-10 py-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                            <div>
                                <div className="text-4xl font-black text-white mb-1">6 Valores Fundamentales</div>
                                <div className="text-neutral-400">Que impulsan cada decisión que tomamos</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {valores.map((valor) => (
                            <div
                                key={valor.id}
                                className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
                                style={{
                                    boxShadow: `0 0 20px ${valor.color}20`
                                }}
                            >
                                <span className="text-sm font-semibold text-neutral-300">{valor.icon} {valor.title.split(' ')[0]}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValoresCultura;