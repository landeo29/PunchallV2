import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BeneficiosLegales = () => {
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

    const beneficios = [
        {
            id: 'peru',
            title: 'Perú',
            subtitle: 'Deducción Adicional del 146%',
            description: 'Maximice su presupuesto aplicando la deducción adicional del 146% en servicios de accesibilidad según la Ley 29973. Cada sol invertido en accesibilidad le permite deducir 1.46 soles de su base imponible.',
            items: [
                'Deducción fiscal del 146% sobre gastos en accesibilidad',
                'Cumplimiento obligatorio para entidades públicas',
                'Certificación oficial CONADIS reconocida',
                'Documentación técnica para SUNAT incluida'
            ],
            color: '#dc2626',
            icon: '🇵🇪',
            badge: 'Ley 29973',
        },
        {
            id: 'global',
            title: 'Internacional',
            subtitle: 'Protección Legal y ESG',
            description: 'Evite riesgos legales por falta de cumplimiento (ADA/European Accessibility Act) y mejore su posición en los índices de sostenibilidad (ESG). La accesibilidad ya no es opcional en mercados desarrollados.',
            items: [
                'Cumplimiento ADA (Estados Unidos)',
                'European Accessibility Act (UE 2025)',
                'Mejora en ratings ESG corporativos',
                'Acceso a mercados con regulación estricta'
            ],
            color: '#2563eb',
            icon: '🌍',
            badge: 'ADA / EAA',
        },
    ];

    const riesgos = [
        {
            id: 1,
            titulo: 'Multas INDECOPI',
            monto: 'Hasta 450 UIT',
            descripcion: 'Por incumplimiento de Ley 29973',
            severidad: 'high',
        },
        {
            id: 2,
            titulo: 'Demandas ADA',
            monto: '$75,000 - $150,000',
            descripcion: 'Promedio en Estados Unidos',
            severidad: 'high',
        },
        {
            id: 3,
            titulo: 'Pérdida de Contratos',
            monto: 'Variable',
            descripcion: 'Licitaciones públicas requieren certificación',
            severidad: 'medium',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900"
        >
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/30 to-indigo-500/30 rounded-full blur-[120px] animate-pulse"
                     style={{ animationDuration: '12s' }} />
                <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-gradient-to-br from-red-500/30 to-pink-500/30 rounded-full blur-[120px] animate-pulse"
                     style={{ animationDuration: '15s', animationDelay: '3s' }} />
            </div>

            <div className="absolute inset-0 opacity-[0.02]">
                <svg className="w-full h-full">
                    <defs>
                        <pattern id="legal-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                            <circle cx="30" cy="30" r="1" fill="#3b82f6" />
                            <path d="M0 30 L60 30 M30 0 L30 60" stroke="#6366f1" strokeWidth="0.5" opacity="0.3" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#legal-grid)" />
                </svg>
            </div>

            <div className="container-custom relative z-10">

                <div className={`text-center mb-16 transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-400">
              Valor Agregado
            </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                        Beneficios <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Legales y Fiscales
            </span>
                    </h2>

                    <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
                        Invierta en accesibilidad y transforme el cumplimiento normativo en una ventaja financiera y competitiva.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                    {beneficios.map((beneficio, index) => (
                        <div
                            key={beneficio.id}
                            onMouseEnter={() => setHoveredCard(beneficio.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className={`group relative transition-all duration-1000
                        ${isInView
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${400 + index * 200}ms` }}
                        >
                            <div
                                className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700"
                                style={{ background: `${beneficio.color}60` }}
                            />

                            <div className="relative h-full rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10
                            group-hover:border-white/20 transition-all duration-500">

                                <div className="relative p-8 border-b border-white/10">

                                    <div className="flex items-start justify-between mb-4">
                                        <div
                                            className="w-16 h-16 rounded-xl flex items-center justify-center text-4xl backdrop-blur-xl border border-white/20 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                                            style={{ background: `${beneficio.color}20` }}
                                            aria-hidden="true"
                                        >
                                            {beneficio.icon}
                                        </div>

                                        <div
                                            className="px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-lg"
                                            style={{ background: beneficio.color }}
                                        >
                                            {beneficio.badge}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-black text-white mb-1">
                                        {beneficio.title}
                                    </h3>
                                    <p
                                        className="text-base font-bold mb-3"
                                        style={{ color: hoveredCard === beneficio.id ? beneficio.color : '#9ca3af' }}
                                    >
                                        {beneficio.subtitle}
                                    </p>

                                    <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
                                        <div
                                            className="h-full rounded-full transition-all duration-700"
                                            style={{
                                                width: hoveredCard === beneficio.id ? '100%' : '40%',
                                                background: beneficio.color
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="p-8 space-y-6">

                                    <p className="text-neutral-300 leading-relaxed">
                                        {beneficio.description}
                                    </p>

                                    <div className="space-y-3">
                                        <p className="text-xs font-bold tracking-wider uppercase text-neutral-500 flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full" style={{ background: beneficio.color }} />
                                            Incluye
                                        </p>

                                        <div className="space-y-2">
                                            {beneficio.items.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5
                                   hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                                                >
                                                    <div
                                                        className="w-5 h-5 rounded flex-shrink-0 flex items-center justify-center mt-0.5"
                                                        style={{ background: `${beneficio.color}30` }}
                                                    >
                                                        <svg className="w-3 h-3" style={{ color: beneficio.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>

                                                    <span className="text-sm text-neutral-300 leading-relaxed">
                            {item}
                          </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`mb-16 transition-all duration-1000 delay-800
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="relative max-w-5xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-red-950/50 to-orange-950/50 backdrop-blur-xl border border-red-500/20">

                        <div className="absolute -top-4 left-8">
                            <div className="px-4 py-2 rounded-lg bg-red-600 text-white font-bold text-sm shadow-xl flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <span>Riesgos de No Cumplimiento</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            {riesgos.map((riesgo, idx) => (
                                <div
                                    key={riesgo.id}
                                    className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/30 transition-all duration-300"
                                >
                                    <div className="text-3xl font-black text-red-400 mb-2">
                                        {riesgo.monto}
                                    </div>
                                    <div className="text-base font-bold text-white mb-2">
                                        {riesgo.titulo}
                                    </div>
                                    <div className="text-sm text-neutral-400">
                                        {riesgo.descripcion}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-center text-neutral-300 mt-6 text-sm">
                            <span className="font-bold text-red-400">Importante:</span> Las sanciones se multiplican por cada activo digital no conforme.
                            Una plataforma con 10 páginas no accesibles puede generar multas acumuladas.
                        </p>
                    </div>
                </div>

                <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-1000
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">

                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex-1">
                                <h3 className="text-2xl font-black text-white mb-3">
                                    ¿Listo para Proteger su Inversión?
                                </h3>
                                <p className="text-neutral-300 leading-relaxed">
                                    Solicite una auditoría sin costo y descubra cómo convertir el cumplimiento
                                    normativo en un activo estratégico para su organización.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <Link
                                    to="/contacto"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl
                                bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold
                                shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                    aria-label="Solicitar auditoría gratuita de accesibilidad"
                                >
                                    <span>Auditoría Gratuita</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>

                                <div className="text-center text-xs text-neutral-400">
                                    Sin compromiso • Reporte en 48 horas
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeneficiosLegales;