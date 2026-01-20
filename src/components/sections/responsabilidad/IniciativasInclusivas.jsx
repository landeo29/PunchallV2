import { useRef, useEffect, useState, useMemo } from 'react';
import img1 from '../../../assets/images/responsabilidad/iniciativas/RS (8).webp';
import img2 from '../../../assets/images/responsabilidad/iniciativas/RS (6).webp';
import img3 from '../../../assets/images/responsabilidad/iniciativas/RS (7).webp';
import img4 from '../../../assets/images/responsabilidad/iniciativas/RS (9).webp';

const IniciativasInclusivas = () => {
    const [isInView, setIsInView] = useState(false);
    const [hoveredId, setHoveredId] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
    const sectionRef = useRef(null);

    const particles = useMemo(() =>
            Array.from({ length: 12 }, (_, i) => ({
                id: i,
                left: 8 + (i * 8),
                top: 10 + (i % 3) * 30,
                color: ['#0ea5e920', '#2563eb20', '#6366f120'][i % 3],
                duration: 10 + i * 1.5,
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

    const iniciativas = [
        {
            id: 1,
            title: 'Formación Tecnológica',
            subtitle: 'Para Personas con Habilidades Diversas',
            description: 'Programa de formación en desarrollo de software, diseño web y aplicaciones móviles, brindando herramientas para impulsar carreras tecnológicas.',
            image: img1,
            color: '#0ea5e9',
        },
        {
            id: 2,
            title: 'Tecnología para Todos',
            subtitle: 'Campaña de Sensibilización',
            description: 'Promovemos la accesibilidad y diversidad en la tecnología a través de charlas, eventos y redes sociales.',
            image: img2,
            color: '#2563eb',
        },
        {
            id: 3,
            title: 'Mentorías Inclusivas',
            subtitle: 'Para Jóvenes Talentosos',
            description: 'Nuestros ingenieros apoyan a jóvenes con habilidades diversas, brindando orientación técnica y laboral.',
            image: img3,
            color: '#6366f1',
        },
        {
            id: 4,
            title: 'Alianzas Estratégicas',
            subtitle: 'Con Organizaciones de Inclusión',
            description: 'Trabajamos en proyectos que promuevan el acceso a la tecnología y la creación de aplicaciones inclusivas.',
            image: img4,
            color: '#8b5cf6',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative pt-32 pb-20 sm:pb-24 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50" />

            <div
                className="absolute inset-0 opacity-30 transition-opacity duration-700"
                style={{
                    background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, 
                      rgba(14, 165, 233, 0.15) 0%, 
                      rgba(37, 99, 235, 0.1) 40%, 
                      transparent 70%)`,
                }}
            />

            <div className="absolute inset-0 opacity-[0.015]">
                <svg className="w-full h-full">
                    <defs>
                        <pattern id="init-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                            <circle cx="40" cy="40" r="1.5" fill="#0ea5e9" />
                            <path d="M0 40 L80 40 M40 0 L40 80" stroke="#2563eb" strokeWidth="0.5" opacity="0.2" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#init-pattern)" />
                </svg>
            </div>

            <div className="absolute inset-0 pointer-events-none">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="absolute"
                        style={{
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                            width: '120px',
                            height: '120px',
                            background: `radial-gradient(circle, ${particle.color}, transparent)`,
                            borderRadius: '45% 55% 60% 40% / 50% 45% 55% 50%',
                            animation: `morph ${particle.duration}s ease-in-out infinite`,
                            animationDelay: `${particle.delay}s`,
                        }}
                    />
                ))}
            </div>

            <div className="container-custom relative z-10">

                <div className={`text-center mb-16 max-w-3xl mx-auto transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-xl border border-cyan-200/50 shadow-lg">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-cyan-700">
              Iniciativas Inclusivas
            </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-4">
                        Impulsando el
                        <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
              Cambio Social
            </span>
                    </h1>

                    <p className="text-lg text-slate-700 leading-relaxed">
                        Nos dedicamos a impulsar un cambio positivo en la sociedad promoviendo la equidad,
                        accesibilidad y empoderamiento de personas con habilidades diversas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {iniciativas.map((iniciativa, index) => (
                        <div
                            key={iniciativa.id}
                            onMouseEnter={() => setHoveredId(iniciativa.id)}
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
                                style={{ background: `${iniciativa.color}50` }}
                            />

                            <div className="relative h-full rounded-2xl overflow-hidden bg-white/90 backdrop-blur-xl border-2 border-white/60 shadow-lg group-hover:shadow-2xl transition-all duration-500">

                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={iniciativa.image}
                                        alt={iniciativa.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay"
                                        style={{ background: `linear-gradient(135deg, ${iniciativa.color}, transparent)` }}
                                    />

                                    <div className="absolute top-4 right-4">
                                        <div
                                            className="w-10 h-10 rounded-lg backdrop-blur-xl border border-white/40 flex items-center justify-center font-bold text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                                            style={{ background: `${iniciativa.color}90` }}
                                        >
                                            {String(iniciativa.id).padStart(2, '0')}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="mb-3">
                                        <h3 className="text-xl font-black text-slate-900 leading-tight">
                                            {iniciativa.title}
                                        </h3>
                                        <p className="text-sm font-semibold text-slate-500">
                                            {iniciativa.subtitle}
                                        </p>
                                    </div>

                                    <p className="text-slate-600 leading-relaxed text-sm mb-4">
                                        {iniciativa.description}
                                    </p>

                                    <div className="flex items-center gap-2">
                                        <div
                                            className="h-1 rounded-full transition-all duration-500"
                                            style={{
                                                width: hoveredId === iniciativa.id ? '100%' : '40px',
                                                background: iniciativa.color
                                            }}
                                        />
                                        <div
                                            className="w-2 h-2 rounded-full transition-all duration-300"
                                            style={{
                                                background: iniciativa.color,
                                                transform: hoveredId === iniciativa.id ? 'scale(1.5)' : 'scale(1)'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IniciativasInclusivas;