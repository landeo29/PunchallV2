import { useRef, useEffect, useState } from 'react';
import imagenEquipo1 from '../../../assets/images/nosotros/NuestroEquipo/2.webp';
import imagenEquipo2 from '../../../assets/images/nosotros/NuestroEquipo/3.webp';
import imagenEquipo3 from '../../../assets/images/nosotros/NuestroEquipo/4.webp';
import imagenEquipo4 from '../../../assets/images/nosotros/NuestroEquipo/5.webp';
import imagenEquipo5 from '../../../assets/images/nosotros/NuestroEquipo/6.webp';

const NuestroEquipo = () => {
    const [isInView, setIsInView] = useState(false);
    const [activeCard, setActiveCard] = useState(null);
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

    const miembros = [
        {
            id: 1,
            title: 'Diversidad de Talentos',
            description: 'Nuestro equipo está compuesto por profesionales con profundo conocimiento en desarrollo de software, diseño web, aplicaciones móviles y más.',
            image: imagenEquipo1,
            color: '#f59e0b',
        },
        {
            id: 2,
            title: 'Compromiso con la Inclusión',
            description: 'La mayoría de nuestros miembros son personas con habilidades diversas que lideran con su talento y dedicación.',
            image: imagenEquipo2,
            color: '#ec4899',
        },
        {
            id: 3,
            title: 'Pasión por la Tecnología',
            description: 'Compartimos la pasión por impactar vidas a través de soluciones que generan un cambio positivo.',
            image: imagenEquipo3,
            color: '#8b5cf6',
        },
        {
            id: 4,
            title: 'Trabajo en Equipo',
            description: 'Valoramos la colaboración y el apoyo mutuo, construyendo una cultura basada en respeto y comunicación.',
            image: imagenEquipo4,
            color: '#06b6d4',
        },
        {
            id: 5,
            title: 'Innovación Constante',
            description: 'Estamos a la vanguardia de las últimas tendencias tecnológicas, asegurando soluciones efectivas y actuales.',
            image: imagenEquipo5,
            color: '#10b981',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50" />

            <div
                className="absolute inset-0 opacity-50"
                style={{
                    transform: `translateY(${scrollY * 0.2}px)`,
                }}
            >
                <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-gradient-to-br from-amber-200/40 to-orange-200/40 rounded-full blur-[100px] animate-pulse"
                     style={{ animationDuration: '10s' }} />
                <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-gradient-to-br from-rose-200/40 to-pink-200/40 rounded-full blur-[100px] animate-pulse"
                     style={{ animationDuration: '12s', animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-orange-200/30 to-amber-200/30 rounded-full blur-[120px] animate-pulse"
                     style={{ animationDuration: '14s', animationDelay: '4s' }} />
            </div>

            <div className="absolute inset-0">
                <svg className="w-full h-full opacity-[0.02]">
                    <defs>
                        <pattern id="team-waves" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                            <path d="M0 100 Q50 50, 100 100 T200 100" fill="none" stroke="#f59e0b" strokeWidth="2" />
                            <path d="M0 120 Q50 70, 100 120 T200 120" fill="none" stroke="#ec4899" strokeWidth="2" />
                            <path d="M0 140 Q50 90, 100 140 T200 140" fill="none" stroke="#8b5cf6" strokeWidth="2" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#team-waves)" />
                </svg>
            </div>

            <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${15 + (i * 8)}%`,
                            top: `${10 + (i % 3) * 30}%`,
                            width: '120px',
                            height: '120px',
                            background: `radial-gradient(circle, ${['#f59e0b20', '#ec489920', '#8b5cf620'][i % 3]}, transparent)`,
                            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                            animation: `morph ${8 + i * 2}s ease-in-out infinite`,
                            animationDelay: `${i * 0.5}s`,
                        }}
                    />
                ))}
            </div>

            <div className="container-custom relative z-10">

                <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-white/70 backdrop-blur-xl border border-orange-200/50 shadow-lg">
                        <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-orange-700">
              Conoce al Equipo
            </span>
                        <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>

                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
                        <span className="text-slate-900">Nuestro</span>
                        <br />
                        <span className="relative inline-block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">
                Equipo Extraordinario
              </span>
              <svg className="absolute -bottom-3 left-0 w-full" height="8" viewBox="0 0 400 8">
                <path
                    d="M5,4 Q200,8 395,4"
                    stroke="url(#team-gradient)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="team-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="50%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
                    </h2>

                    <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                        Diversidad de talentos, compromiso con la inclusión y una pasión por la tecnología son los pilares de nuestro equipo.
                    </p>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {miembros.slice(0, 3).map((miembro, index) => (
                            <div
                                key={miembro.id}
                                onMouseEnter={() => setActiveCard(miembro.id)}
                                onMouseLeave={() => setActiveCard(null)}
                                className={`group relative transition-all duration-1000
                          ${isInView
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                                }`}
                                style={{ transitionDelay: `${300 + index * 150}ms` }}
                            >
                                <div className="relative h-full">
                                    <div
                                        className="absolute -inset-2 rounded-[2rem] opacity-0 group-hover:opacity-60 blur-2xl transition-all duration-500"
                                        style={{ background: `${miembro.color}40` }}
                                    />

                                    <div className="relative h-full rounded-[2rem] overflow-hidden bg-white/80 backdrop-blur-xl border-2 border-white/50 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">

                                        <div className="relative h-72 overflow-hidden">
                                            <img
                                                src={miembro.image}
                                                alt={miembro.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                                            <div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-overlay"
                                                style={{ background: `linear-gradient(135deg, ${miembro.color}, transparent)` }}
                                            />

                                            <div className="absolute top-6 left-6">
                                                <div
                                                    className="px-4 py-2 rounded-xl backdrop-blur-xl border-2 border-white/40 font-bold text-white shadow-xl"
                                                    style={{ background: `${miembro.color}80` }}
                                                >
                                                    0{miembro.id}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-8">
                                            <h3 className="text-2xl font-black text-slate-900 mb-3 leading-tight">
                                                {miembro.title}
                                            </h3>

                                            <p className="text-slate-600 leading-relaxed mb-6">
                                                {miembro.description}
                                            </p>

                                            <div className="flex items-center gap-2">
                                                <div
                                                    className="h-1.5 rounded-full transition-all duration-500"
                                                    style={{
                                                        width: activeCard === miembro.id ? '100%' : '40px',
                                                        background: miembro.color
                                                    }}
                                                />
                                                <div
                                                    className="w-2 h-2 rounded-full"
                                                    style={{ background: miembro.color }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {miembros.slice(3).map((miembro, index) => (
                            <div
                                key={miembro.id}
                                onMouseEnter={() => setActiveCard(miembro.id)}
                                onMouseLeave={() => setActiveCard(null)}
                                className={`group relative transition-all duration-1000
                          ${isInView
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                                }`}
                                style={{ transitionDelay: `${750 + index * 150}ms` }}
                            >
                                <div className="relative h-full">
                                    <div
                                        className="absolute -inset-2 rounded-[2rem] opacity-0 group-hover:opacity-60 blur-2xl transition-all duration-500"
                                        style={{ background: `${miembro.color}40` }}
                                    />

                                    <div className="relative h-full rounded-[2rem] overflow-hidden bg-white/80 backdrop-blur-xl border-2 border-white/50 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">

                                        <div className="relative h-72 overflow-hidden">
                                            <img
                                                src={miembro.image}
                                                alt={miembro.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                                            <div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-overlay"
                                                style={{ background: `linear-gradient(135deg, ${miembro.color}, transparent)` }}
                                            />

                                            <div className="absolute top-6 left-6">
                                                <div
                                                    className="px-4 py-2 rounded-xl backdrop-blur-xl border-2 border-white/40 font-bold text-white shadow-xl"
                                                    style={{ background: `${miembro.color}80` }}
                                                >
                                                    0{miembro.id}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-8">
                                            <h3 className="text-2xl font-black text-slate-900 mb-3 leading-tight">
                                                {miembro.title}
                                            </h3>

                                            <p className="text-slate-600 leading-relaxed mb-6">
                                                {miembro.description}
                                            </p>

                                            <div className="flex items-center gap-2">
                                                <div
                                                    className="h-1.5 rounded-full transition-all duration-500"
                                                    style={{
                                                        width: activeCard === miembro.id ? '100%' : '40px',
                                                        background: miembro.color
                                                    }}
                                                />
                                                <div
                                                    className="w-2 h-2 rounded-full"
                                                    style={{ background: miembro.color }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NuestroEquipo;