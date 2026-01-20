import { useRef, useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/colaboraciones/apoyo/oc (5).webp';
import img2 from '../../../assets/images/colaboraciones/apoyo/oc (6).webp';
import img3 from '../../../assets/images/colaboraciones/apoyo/oc (7).webp';

const ApoyoCorporativo = () => {
    const [isInView, setIsInView] = useState(false);
    const [hoveredId, setHoveredId] = useState(null);
    const [scrollY, setScrollY] = useState(0);
    const sectionRef = useRef(null);

    const floatingShapes = useMemo(() =>
            Array.from({ length: 8 }, (_, i) => ({
                id: i,
                left: 10 + (i * 12),
                top: 20 + (i % 2) * 40,
                color: ['#3b82f620', '#6366f120', '#8b5cf620'][i % 3],
                duration: 12 + i * 1.5,
                delay: i * 0.4,
            }))
        , []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.1 }
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

    const apoyos = [
        {
            id: 1,
            title: 'Patrocinios Directos',
            description: 'Financia un proyecto o evento alineado con los objetivos de tu empresa.',
            image: img1,
            color: '#3b82f6',
            icon: '🎯',
        },
        {
            id: 2,
            title: 'Alianzas Estratégicas',
            description: 'Desarrolla con nosotros programas de largo plazo.',
            image: img2,
            color: '#6366f1',
            icon: '🤝',
        },
        {
            id: 3,
            title: 'Responsabilidad Social Empresarial',
            description: 'Integra a Punchay en tu estrategia de RSE.',
            image: img3,
            color: '#8b5cf6',
            icon: '🌱',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-20 sm:py-24 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />

            <div
                className="absolute inset-0 opacity-40"
                style={{
                    transform: `translateY(${scrollY * 0.2}px)`,
                }}
            >
                <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-[100px] animate-pulse"
                     style={{ animationDuration: '10s' }} />
                <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-gradient-to-br from-purple-200/30 to-indigo-200/30 rounded-full blur-[100px] animate-pulse"
                     style={{ animationDuration: '12s', animationDelay: '2s' }} />
            </div>

            <div className="absolute inset-0 pointer-events-none">
                {floatingShapes.map((shape) => (
                    <div
                        key={shape.id}
                        className="absolute"
                        style={{
                            left: `${shape.left}%`,
                            top: `${shape.top}%`,
                            width: '110px',
                            height: '110px',
                            background: `radial-gradient(circle, ${shape.color}, transparent)`,
                            borderRadius: '42% 58% 48% 52% / 52% 48% 52% 48%',
                            animation: `morph ${shape.duration}s ease-in-out infinite`,
                            animationDelay: `${shape.delay}s`,
                        }}
                    />
                ))}
            </div>

            <div className="absolute inset-0 opacity-[0.015]">
                <svg className="w-full h-full">
                    <defs>
                        <pattern id="corp-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                            <circle cx="30" cy="30" r="1" fill="#3b82f6" />
                            <path d="M0 30 L60 30 M30 0 L30 60" stroke="#6366f1" strokeWidth="0.5" opacity="0.2" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#corp-pattern)" />
                </svg>
            </div>

            <div className="container-custom relative z-10">

                <div className={`text-center mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-blue-200/50 shadow-lg">
                        <span className="text-lg">🏢</span>
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-700">
              Empresas y Organizaciones
            </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-4">
                        Apoyo
                        <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Corporativo
            </span>
                    </h2>

                    <p className="text-base text-slate-700 leading-relaxed">
                        Empresas y organizaciones pueden colaborar con <span className="font-bold text-indigo-700">Punchay</span> patrocinando proyectos específicos que promuevan la inclusión en el ámbito tecnológico.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                    {apoyos.map((apoyo, index) => (
                        <div
                            key={apoyo.id}
                            onMouseEnter={() => setHoveredId(apoyo.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className={`group relative transition-all duration-1000
                        ${isInView
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${400 + index * 120}ms` }}
                        >
                            <div
                                className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-500"
                                style={{ background: `${apoyo.color}60` }}
                            />

                            <div className="relative h-full rounded-2xl overflow-hidden bg-white/90 backdrop-blur-xl border-2 border-white/60 shadow-lg group-hover:shadow-2xl transition-all duration-500">

                                <div className="relative h-44 overflow-hidden">
                                    <img
                                        src={apoyo.image}
                                        alt={apoyo.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />

                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay"
                                        style={{ background: `linear-gradient(135deg, ${apoyo.color}, transparent)` }}
                                    />

                                    <div className="absolute top-4 left-4">
                                        <div
                                            className="w-12 h-12 rounded-xl backdrop-blur-xl border-2 border-white/40 flex items-center justify-center text-2xl shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                                            style={{ background: `${apoyo.color}90` }}
                                        >
                                            {apoyo.icon}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-lg font-black text-slate-900 mb-2 leading-tight">
                                        {apoyo.title}
                                    </h3>

                                    <p className="text-slate-700 leading-relaxed text-sm">
                                        {apoyo.description}
                                    </p>
                                </div>

                                <div
                                    className="h-1 transition-all duration-500"
                                    style={{
                                        width: hoveredId === apoyo.id ? '100%' : '0%',
                                        background: apoyo.color
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`text-center transition-all duration-1000 delay-900
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <Link
                        to="/sobre-nosotros"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                        <span>Conoce Más sobre Punchay</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ApoyoCorporativo;