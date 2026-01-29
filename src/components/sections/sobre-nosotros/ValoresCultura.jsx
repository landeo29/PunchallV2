import { useRef, useEffect, useState } from 'react';

const ValoresCodificados = () => {
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
            title: 'Accesibilidad Radical',
            subtitle: 'El Punto de Partida',
            description: 'No diseñamos para la mayoría; diseñamos para todos. La accesibilidad es el punto de partida, nunca un añadido. Cada línea de código nace con inclusión nativa.',
            principios: [
                'Diseño universal desde la primera iteración',
                'Testing con tecnologías asistivas reales',
                'Validación con usuarios con discapacidad',
                'WCAG 2.1 AAA como estándar mínimo'
            ],
            color: '#3b82f6',
            icon: '♿',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            id: 2,
            title: 'Transparencia en el Impacto',
            subtitle: 'Cada Contrato Cuenta',
            description: 'Cada contrato de servicios financia directamente horas de formación técnica para nuestra comunidad. Reportamos públicamente el impacto social medible de cada proyecto.',
            principios: [
                'Trazabilidad completa del impacto social',
                'Reportes públicos trimestrales',
                'Métricas de empleabilidad verificables',
                'Inversión directa en capacitación técnica'
            ],
            color: '#8b5cf6',
            icon: '📊',
            gradient: 'from-indigo-500 to-purple-500',
        },
        {
            id: 3,
            title: 'Excelencia Sin Excusas',
            subtitle: 'Estándares Globales',
            description: 'Competimos con los estándares globales de calidad, rendimiento y seguridad. Ser sociales nos exige ser los mejores. No aceptamos mediocridad disfrazada de buenas intenciones.',
            principios: [
                'Arquitecturas escalables y robustas',
                'Clean Code y mejores prácticas',
                'Testing automatizado exhaustivo',
                'Seguridad y rendimiento certificados'
            ],
            color: '#ec4899',
            icon: '⚡',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            id: 4,
            title: 'Empoderamiento Colectivo',
            subtitle: 'Barreras en Soluciones',
            description: 'Transformamos las barreras en soluciones creativas, demostrando que el talento no tiene discapacidad. Cada desafío de accesibilidad se convierte en innovación técnica.',
            principios: [
                'Mentoría técnica de alto nivel',
                'Comunidad de práctica activa',
                'Certificaciones profesionales pagadas',
                'Red de empleabilidad empresarial'
            ],
            color: '#10b981',
            icon: '🚀',
            gradient: 'from-emerald-500 to-teal-500',
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

            <div className="absolute inset-0 opacity-[0.02]">
                <svg className="w-full h-full">
                    <defs>
                        <pattern id="code-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M0 30 L60 30 M30 0 L30 60" stroke="#3b82f6" strokeWidth="0.5" />
                            <circle cx="30" cy="30" r="1" fill="#8b5cf6" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#code-grid)" />
                </svg>
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
                Columna de Confianza
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
                        Valores que
                        <br />
                        <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Codifican nuestro Trabajo
              </span>
              <svg className="absolute -bottom-4 left-0 w-full" height="12" viewBox="0 0 300 12">
                <path
                    d="M5,7 Q150,2 295,7"
                    stroke="url(#gradient-valores)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient-valores" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
                    </h2>

                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                        Estos cuatro principios fundamentales definen cómo desarrollamos software,
                        construimos equipos y generamos impacto social medible.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
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
                            style={{ transitionDelay: `${300 + index * 150}ms` }}
                        >
                            <div className="relative h-full">
                                <div
                                    className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500"
                                    style={{
                                        background: `linear-gradient(135deg, ${valor.color}60, ${valor.color}30)`
                                    }}
                                />

                                <div className="relative h-full rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10
                              group-hover:border-white/20 transition-all duration-500">

                                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative p-8">

                                        <div className="flex items-start justify-between mb-6">
                                            <div
                                                className="relative w-16 h-16 rounded-2xl flex items-center justify-center text-4xl backdrop-blur-xl border border-white/20
                                 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                                                style={{
                                                    background: `linear-gradient(135deg, ${valor.color}40, ${valor.color}20)`,
                                                    boxShadow: activeCard === valor.id ? `0 0 40px ${valor.color}80` : 'none'
                                                }}
                                            >
                                                {valor.icon}
                                            </div>

                                            <div className="text-right">
                                                <div className="text-7xl font-black text-white/[0.05] leading-none group-hover:text-white/[0.08] transition-colors duration-500">
                                                    0{valor.id}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <h3 className="text-3xl font-black text-white mb-2 leading-tight">
                                                {valor.title}
                                            </h3>
                                            <p
                                                className="text-base font-bold transition-colors duration-300"
                                                style={{
                                                    color: activeCard === valor.id ? valor.color : '#9ca3af'
                                                }}
                                            >
                                                {valor.subtitle}
                                            </p>
                                        </div>

                                        <p className="text-neutral-400 leading-relaxed mb-6 group-hover:text-neutral-300 transition-colors duration-300">
                                            {valor.description}
                                        </p>

                                        <div className="space-y-3">
                                            <p className="text-xs font-bold tracking-wider uppercase text-neutral-500 flex items-center gap-2">
                                                <div
                                                    className="w-1 h-1 rounded-full"
                                                    style={{ background: valor.color }}
                                                />
                                                En la Práctica
                                            </p>

                                            <div className="space-y-2">
                                                {valor.principios.map((principio, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5
                                   hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                                                    >
                                                        <div
                                                            className="w-5 h-5 rounded flex-shrink-0 flex items-center justify-center mt-0.5"
                                                            style={{ background: `${valor.color}30` }}
                                                        >
                                                            <svg className="w-3 h-3" style={{ color: valor.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        </div>

                                                        <span className="text-sm text-neutral-300 leading-relaxed">
                              {principio}
                            </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

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
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`mt-20 transition-all duration-1000 delay-1000
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-2xl" />

                        <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">

                            <div className="flex items-center justify-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-black text-white">
                                    Código con Propósito
                                </h3>
                            </div>

                            <p className="text-center text-neutral-300 leading-relaxed mb-6">
                                Estos valores no son declaraciones aspiracionales. Son compromisos verificables
                                integrados en cada sprint, cada pull request, y cada interacción con clientes y colaboradores.
                                <span className="font-bold text-white"> La accesibilidad radical y la excelencia sin excusas
                                no son contradictorias: son inseparables.</span>
                            </p>

                            <div className="flex flex-wrap items-center justify-center gap-3">
                                {valores.map((valor) => (
                                    <div
                                        key={valor.id}
                                        className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                                        style={{
                                            boxShadow: `0 0 20px ${valor.color}30`
                                        }}
                                    >
                                        <span className="text-sm font-semibold text-neutral-300">
                                            {valor.icon} {valor.title.split(' ')[0]} {valor.title.split(' ')[1]}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValoresCodificados;