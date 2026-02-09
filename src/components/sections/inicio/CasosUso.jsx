import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CasosUso = () => {
    const [isInView, setIsInView] = useState(false);
    const [hoveredId, setHoveredId] = useState(null);
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

    const casos = [
        {
            id: 'normativo',
            perfil: 'Empresas que operan en EE. UU., Europa o sector público',
            titulo: 'Cumplimiento Normativo',
            subtitulo: 'B2B',
            solucion: 'Auditoría y remediación técnica para cumplir con la Ley ADA y estándares WCAG 2.1. Evite riesgos legales y abra su mercado al 15% de la población mundial con discapacidad.',
            beneficios: [
                'Cumplimiento ADA y WCAG 2.1/2.2',
                'Protección contra demandas legales',
                'Acceso a 15% del mercado global',
                'Documentación técnica completa'
            ],
            icon: '⚖️',
            color: '#3b82f6',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            id: 'esg',
            perfil: 'Organizaciones que buscan reportar valor social',
            titulo: 'Inversión de Impacto',
            subtitulo: 'ESG',
            solucion: 'Programas de responsabilidad social a través de becas tecnológicas. Su inversión financia la formación de talentos diversos que luego pueden integrarse a su propia planilla.',
            beneficios: [
                'Reportes ESG medibles y verificables',
                'Financiamiento de becas tecnológicas',
                'Talento certificado para su empresa',
                'Alineación con ODS 4, 8 y 10'
            ],
            icon: '📊',
            color: '#10b981',
            gradient: 'from-emerald-500 to-teal-500',
        },
        {
            id: 'startups',
            perfil: 'Empresas tecnológicas en fase de crecimiento',
            titulo: 'Escalabilidad Inclusiva',
            subtitulo: 'Startups',
            solucion: 'Consultoría en arquitectura de software "Inclusion by Design". Aseguramos que su producto sea accesible desde el código base, evitando costosas reestructuraciones futuras.',
            beneficios: [
                'Accesibilidad desde el código base',
                'Evita reestructuraciones costosas',
                'Ventaja competitiva temprana',
                'Cumplimiento normativo desde MVP'
            ],
            icon: '🚀',
            color: '#8b5cf6',
            gradient: 'from-indigo-500 to-purple-500',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-white"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />

            <div className="absolute inset-0 opacity-[0.02]">
                <div
                    style={{
                        backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                    className="absolute inset-0"
                />
            </div>

            <div className="container-custom relative z-10">

                <div className={`text-center mb-16 max-w-3xl mx-auto transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-blue-50 border border-blue-100">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-sm font-bold text-blue-700 tracking-wide">
              Casos de Uso
            </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
                        ¿Cómo transformamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              su organización?
            </span>
                    </h2>

                    <p className="text-lg text-slate-600 leading-relaxed">
                        Identificamos su perfil organizacional y diseñamos soluciones que generan
                        impacto medible en cumplimiento, sostenibilidad y escalabilidad.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {casos.map((caso, index) => (
                        <div
                            key={caso.id}
                            onMouseEnter={() => setHoveredId(caso.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className={`group relative transition-all duration-1000
                        ${isInView
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${400 + index * 150}ms` }}
                        >
                            <div
                                className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"
                                style={{ background: `${caso.color}` }}
                            />

                            <div className="relative h-full rounded-2xl bg-white border-2 border-slate-200
                            group-hover:border-slate-300 shadow-lg group-hover:shadow-xl
                            transition-all duration-500 overflow-hidden">

                                <div className={`relative p-6 border-b border-slate-200 bg-gradient-to-br ${caso.gradient}`}>

                                    <div className="flex items-start justify-between mb-4">
                                        <div
                                            className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-xl border-2 border-white/40
                                            flex items-center justify-center text-3xl shadow-lg
                                            transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                                            aria-hidden="true"
                                        >
                                            {caso.icon}
                                        </div>

                                        <div className="text-right">
                                            <div className="text-6xl font-black text-white/10 leading-none">
                                                {String(index + 1).padStart(2, '0')}
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold tracking-wider uppercase text-white/90 mb-1">
                                            {caso.subtitulo}
                                        </p>
                                        <h3 className="text-2xl font-black text-white leading-tight">
                                            {caso.titulo}
                                        </h3>
                                    </div>

                                    <div className="h-0.5 bg-white/30 rounded-full overflow-hidden mt-4">
                                        <div
                                            className="h-full bg-white rounded-full transition-all duration-700"
                                            style={{
                                                width: hoveredId === caso.id ? '100%' : '40%',
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="p-6 space-y-5">

                                    <div>
                                        <p className="text-xs font-bold tracking-wider uppercase text-slate-500 mb-2 flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full" style={{ background: caso.color }} />
                                            Perfil
                                        </p>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            {caso.perfil}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold tracking-wider uppercase text-slate-500 mb-2 flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full" style={{ background: caso.color }} />
                                            Solución
                                        </p>
                                        <p className="text-sm text-slate-700 leading-relaxed">
                                            {caso.solucion}
                                        </p>
                                    </div>

                                    <div className="space-y-2 pt-2">
                                        <p className="text-xs font-bold tracking-wider uppercase text-slate-500 flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full" style={{ background: caso.color }} />
                                            Beneficios Clave
                                        </p>

                                        <div className="space-y-2">
                                            {caso.beneficios.map((beneficio, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-start gap-2"
                                                >
                                                    <div
                                                        className="w-4 h-4 rounded flex-shrink-0 flex items-center justify-center mt-0.5"
                                                        style={{ background: `${caso.color}20` }}
                                                    >
                                                        <svg className="w-2.5 h-2.5" style={{ color: caso.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>

                                                    <span className="text-xs text-slate-600 leading-relaxed">
                            {beneficio}
                          </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <Link
                                        to="/contacto"
                                        className={`group/btn w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl
                                bg-gradient-to-r ${caso.gradient} text-white font-bold text-sm
                                shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105
                                mt-4`}
                                        aria-label={`Solicitar consulta sobre ${caso.titulo}`}
                                    >
                                        <span>Solicitar Consulta</span>
                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`mt-16 text-center transition-all duration-1000 delay-1000
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-bold text-slate-900">
                                    ¿No encuentra su caso?
                                </p>
                                <p className="text-xs text-slate-600">
                                    Diseñamos soluciones personalizadas
                                </p>
                            </div>
                        </div>

                        <Link
                            to="/contacto"
                            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm
                            shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300
                            inline-flex items-center gap-2"
                            aria-label="Contactar para solución personalizada"
                        >
                            <span>Contactar Ahora</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CasosUso;