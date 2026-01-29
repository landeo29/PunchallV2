import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServiciosDestacados = () => {
    const [isInView, setIsInView] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);
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

    const servicios = [
        {
            id: 'diagnostico',
            numero: '01',
            title: 'Diagnóstico y Certificación WCAG',
            subtitle: 'Sello de Accesibilidad Punchay',
            description: 'Identificación de barreras digitales y entrega del Sello de Accesibilidad Punchay. Auditoría completa de su plataforma digital con reporte técnico detallado y plan de remediación.',
            beneficios: [
                'Reporte técnico con evidencias',
                'Identificación de incumplimientos',
                'Plan de acción priorizado',
                'Certificación oficial WCAG 2.1'
            ],
            icon: 'clipboard-check',
            gradient: 'from-blue-500 to-indigo-500',
            badgeColor: 'bg-blue-500',
            link: '/contacto',
            linkText: 'Solicitar Diagnóstico',
        },
        {
            id: 'remediacion',
            numero: '02',
            title: 'Remediación de Código',
            subtitle: 'Corrección de Errores Críticos',
            description: 'Corrección de errores críticos en ARIA, semántica HTML y nombres accesibles detectados en reportes técnicos. Garantizamos cumplimiento con estándares INDECOPI.',
            beneficios: [
                'Corrección ARIA completa',
                'Semántica HTML validada',
                'Testing con tecnologías asistivas',
                'Documentación técnica entregada'
            ],
            icon: 'code',
            gradient: 'from-indigo-500 to-purple-500',
            badgeColor: 'bg-indigo-500',
            link: '/contacto',
            linkText: 'Solicitar Remediación',
        },
        {
            id: 'desarrollo',
            numero: '03',
            title: 'Desarrollo de Apps e Interfaces',
            subtitle: 'Accesibilidad desde el Código',
            description: 'Creación de productos digitales que superan los estándares de INDECOPI desde la primera línea de código. Desarrollo web y móvil con accesibilidad nativa integrada.',
            beneficios: [
                'Accesibilidad desde diseño inicial',
                'Testing continuo WCAG 2.1',
                'Desarrollo web y móvil',
                'Garantía de cumplimiento legal'
            ],
            icon: 'device-mobile',
            gradient: 'from-purple-500 to-pink-500',
            badgeColor: 'bg-purple-500',
            link: '/contacto',
            linkText: 'Iniciar Proyecto',
        }
    ];

    const Icon = ({ name, className = "w-6 h-6" }) => {
        const icons = {
            'clipboard-check': (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            ),
            'code': (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            'device-mobile': (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            'check': (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
            ),
        };
        return icons[name] || null;
    };

    return (
        <section
            ref={sectionRef}
            className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-neutral-900"
        >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-neutral-900 to-neutral-900" />

            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"
                     style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
                     style={{ animationDuration: '10s', animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse"
                     style={{ animationDuration: '12s', animationDelay: '4s' }} />
            </div>

            <div className="absolute inset-0 opacity-[0.015]"
                 style={{
                     backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                       linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                     backgroundSize: '50px 50px',
                 }}
            />

            <div className="container-custom relative z-10">

                <div className={`text-center mb-16 transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
                        <span className="text-sm font-bold tracking-[0.3em] uppercase text-blue-400">
              Servicios Especializados
            </span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500" />
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                        Evite Multas, <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Gane Competitividad
            </span>
                    </h2>

                    <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
                        Soluciones certificadas que garantizan el cumplimiento de la Ley 29973 y estándares WCAG 2.1,
                        protegiendo su empresa de sanciones INDECOPI.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
                    {servicios.map((servicio, index) => (
                        <div
                            key={servicio.id}
                            onMouseEnter={() => setHoveredCard(servicio.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className={`group relative transition-all duration-1000
                        ${isInView
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${400 + index * 150}ms` }}
                        >
                            <div className={`absolute -inset-1 bg-gradient-to-r ${servicio.gradient} rounded-3xl blur-xl 
                            opacity-0 group-hover:opacity-30 transition-all duration-700`} />

                            <div className="relative h-full rounded-2xl overflow-hidden
                            bg-neutral-800/50 backdrop-blur-xl
                            border border-neutral-700/50
                            shadow-xl hover:shadow-2xl
                            transform transition-all duration-500 hover:-translate-y-2">

                                <div className={`relative bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 backdrop-blur-md p-6 border-b border-neutral-700/30`}>

                                    <div className="relative">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${servicio.gradient} 
                                          flex items-center justify-center
                                          shadow-lg group-hover:shadow-xl
                                          transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                                <Icon name={servicio.icon} className="w-7 h-7 text-white" />
                                            </div>

                                            <div className={`px-3 py-1.5 rounded-lg ${servicio.badgeColor} text-white font-black text-sm shadow-lg`}>
                                                {servicio.numero}
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-black text-white mb-1 tracking-tight">
                                            {servicio.title}
                                        </h3>

                                        <p className="text-sm font-semibold text-blue-400 mb-3">
                                            {servicio.subtitle}
                                        </p>

                                        <div className="h-0.5 bg-neutral-700/50 rounded-full overflow-hidden">
                                            <div className={`h-full bg-gradient-to-r ${servicio.gradient} rounded-full transition-all duration-700
                                    ${hoveredCard === servicio.id ? 'w-full' : 'w-16'}`} />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 space-y-5 bg-neutral-900/50 backdrop-blur-md">

                                    <p className="text-sm text-neutral-300 leading-relaxed">
                                        {servicio.description}
                                    </p>

                                    <div className="space-y-2">
                                        <p className="text-xs font-bold tracking-wider uppercase text-neutral-500">
                                            Incluye:
                                        </p>

                                        <div className="space-y-2">
                                            {servicio.beneficios.map((beneficio, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-start gap-2.5"
                                                >
                                                    <div className={`w-5 h-5 rounded flex-shrink-0 bg-gradient-to-br ${servicio.gradient}
                                        flex items-center justify-center mt-0.5`}>
                                                        <Icon name="check" className="w-3 h-3 text-white" />
                                                    </div>

                                                    <span className="text-sm text-neutral-300 leading-relaxed">
                            {beneficio}
                          </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <Link
                                        to={servicio.link}
                                        className={`group/btn relative inline-flex items-center justify-center gap-2 w-full
                                px-6 py-3 rounded-xl
                                bg-gradient-to-r ${servicio.gradient}
                                text-white font-bold text-sm
                                shadow-lg hover:shadow-xl
                                transform transition-all duration-300 hover:scale-105
                                focus:outline-none focus:ring-2 focus:ring-white/50`}
                                    >
                                        <span>{servicio.linkText}</span>
                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </Link>
                                </div>

                                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${servicio.gradient}
                              transform origin-left transition-transform duration-700
                              ${hoveredCard === servicio.id ? 'scale-x-100' : 'scale-x-0'}`} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-800
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="relative p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 backdrop-blur-xl border border-neutral-700/50 shadow-2xl">

                        <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-b-full" />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                            <div className="text-center">
                                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-2">
                                    100%
                                </div>
                                <div className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">
                                    Cumplimiento Legal
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
                                    WCAG
                                </div>
                                <div className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">
                                    Nivel AAA Certificado
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                                    0
                                </div>
                                <div className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">
                                    Multas INDECOPI
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                                <span className="font-bold text-white">Garantía de Cumplimiento:</span> Todos nuestros servicios
                                incluyen documentación técnica completa y certificación oficial WCAG 2.1 para presentar ante
                                auditorías de INDECOPI.
                            </p>

                            <Link
                                to="/soluciones"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl
                                bg-white/5 backdrop-blur-xl border-2 border-white/20
                                text-white font-bold text-base
                                hover:bg-white/10 hover:border-white/30
                                transition-all duration-300
                                focus:outline-none focus:ring-2 focus:ring-white/50"
                            >
                                <span>Ver Todos los Servicios</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiciosDestacados;