import { useRef, useEffect, useState } from 'react';

const TransparenciaTecnica = () => {
    const [isInView, setIsInView] = useState(false);
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

    const metricas = [
        {
            id: 1,
            valor: '100',
            unidad: '/100',
            label: 'Accesibilidad',
            descripcion: 'Lighthouse Score',
            color: '#10b981',
            icon: (
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
        {
            id: 2,
            valor: 'AAA',
            unidad: '',
            label: 'WCAG 2.1',
            descripcion: 'Nivel Máximo',
            color: '#3b82f6',
            icon: (
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            id: 3,
            valor: '2',
            unidad: '',
            label: 'Lectores de Pantalla',
            descripcion: 'NVDA + VoiceOver',
            color: '#8b5cf6',
            icon: (
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
            ),
        },
    ];

    const herramientas = [
        { nombre: 'NVDA', tipo: 'Lector de Pantalla' },
        { nombre: 'VoiceOver', tipo: 'Lector de Pantalla' },
        { nombre: 'axe DevTools', tipo: 'Validación Automática' },
        { nombre: 'Lighthouse', tipo: 'Auditoría Google' },
        { nombre: 'WAVE', tipo: 'Evaluación Web' },
        { nombre: 'Color Contrast Analyzer', tipo: 'Contraste' },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900"
        >
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-full blur-[120px] animate-pulse"
                     style={{ animationDuration: '12s' }} />
                <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/30 to-indigo-500/30 rounded-full blur-[120px] animate-pulse"
                     style={{ animationDuration: '15s', animationDelay: '3s' }} />
            </div>

            <div className="absolute inset-0 opacity-[0.02]">
                <svg className="w-full h-full">
                    <defs>
                        <pattern id="trans-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                            <circle cx="30" cy="30" r="1" fill="#10b981" />
                            <path d="M0 30 L60 30 M30 0 L30 60" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#trans-grid)" />
                </svg>
            </div>

            <div className="container-custom relative z-10">

                <div className={`text-center mb-16 max-w-4xl mx-auto transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
                        <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-400">
              Caso Cero
            </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                        Transparencia <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
              Técnica
            </span>
                    </h2>

                    <p className="text-xl text-neutral-300 leading-relaxed mb-4">
                        Esta plataforma es nuestro <span className="font-bold text-white">primer caso de éxito</span>.
                    </p>

                    <p className="text-lg text-neutral-400 leading-relaxed">
                        Ha sido auditada manualmente por nuestro Lead Accessibility Engineer utilizando
                        lectores de pantalla NVDA y VoiceOver, además de herramientas de validación automática
                        y pruebas con usuarios reales.
                    </p>
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16 transition-all duration-1000 delay-400
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {metricas.map((metrica, index) => (
                        <div
                            key={metrica.id}
                            className="group relative"
                            style={{ transitionDelay: `${600 + index * 100}ms` }}
                        >
                            <div
                                className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"
                                style={{ background: `${metrica.color}80` }}
                            />

                            <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10
                            group-hover:border-white/20 transition-all duration-500">

                                <div className="flex items-start justify-between mb-6">
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                                        style={{ background: `${metrica.color}20` }}
                                    >
                                        <div className="w-7 h-7" style={{ color: metrica.color }}>
                                            {metrica.icon}
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <div className="flex items-baseline justify-end gap-1">
                                            <span className="text-5xl font-black" style={{ color: metrica.color }}>
                                                {metrica.valor}
                                            </span>
                                            {metrica.unidad && (
                                                <span className="text-2xl font-bold text-white/50">
                                                    {metrica.unidad}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-white mb-1">
                                    {metrica.label}
                                </h3>
                                <p className="text-sm text-neutral-400">
                                    {metrica.descripcion}
                                </p>

                                <div className="h-0.5 bg-white/10 rounded-full overflow-hidden mt-4">
                                    <div
                                        className="h-full rounded-full transition-all duration-700"
                                        style={{
                                            width: '100%',
                                            background: metrica.color
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`max-w-5xl mx-auto mb-16 transition-all duration-1000 delay-800
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">

                        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <span>Herramientas de Validación Utilizadas</span>
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {herramientas.map((herramienta, idx) => (
                                <div
                                    key={idx}
                                    className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0 mt-1.5" />
                                        <div>
                                            <p className="text-sm font-bold text-white">
                                                {herramienta.nombre}
                                            </p>
                                            <p className="text-xs text-neutral-400">
                                                {herramienta.tipo}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-1000
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="relative p-10 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 shadow-2xl overflow-hidden">

                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                                backgroundSize: '32px 32px',
                            }} />
                        </div>

                        <div className="relative flex flex-col md:flex-row items-center gap-8">

                            <div className="flex-shrink-0">
                                <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl font-black text-white mb-2">
                                    Reporte de Auditoría Interna
                                </h3>
                                <p className="text-white/90 mb-6">
                                    Documentación técnica completa con evidencias de las pruebas realizadas,
                                    correcciones implementadas y validaciones finales.
                                </p>


                                <a href="/auditoria-interna-punchay.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl
                                bg-white text-emerald-600 font-bold shadow-xl
                                hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                aria-label="Ver reporte de auditoría interna de accesibilidad - Se abre en nueva ventana"
                                >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span>Ver Reporte Completo</span>
                            </a>
                        </div>
                    </div>

                    <div className="relative mt-8 pt-6 border-t border-white/20">
                        <p className="text-sm text-white/80 text-center">
                            <span className="font-bold">Auditor:</span> Joseph (Leo) Landeo - Lead Accessibility Engineer certificado CONADIS
                        </p>
                    </div>
                </div>
            </div>
        </div>
</section>
);
};

export default TransparenciaTecnica;