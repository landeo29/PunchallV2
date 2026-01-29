import { useRef, useEffect, useState } from 'react';

const CompromisODS = () => {
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

    const ods = [
        {
            id: 4,
            numero: '04',
            title: 'Educación de Calidad',
            subtitle: 'ODS 4',
            description: 'Garantizamos una educación inclusiva, equitativa y de calidad, promoviendo oportunidades de aprendizaje durante toda la vida para todos. Nuestros programas de formación tecnológica intensiva están diseñados con los más altos estándares educativos.',
            objetivos: [
                'Formación técnica de nivel internacional',
                'Acceso sin barreras para personas con discapacidad',
                'Certificaciones profesionales reconocidas',
                'Aprendizaje continuo y actualizado'
            ],
            color: '#C5192D',
            icon: '🎓',
            gradient: 'from-red-600 to-red-700',
        },
        {
            id: 8,
            numero: '08',
            title: 'Trabajo Decente y Crecimiento Económico',
            subtitle: 'ODS 8',
            description: 'Promovemos el crecimiento económico sostenido, inclusivo y sostenible, el empleo pleno y productivo y el trabajo decente para todos. Facilitamos la inserción laboral de talento diverso en condiciones dignas y productivas.',
            objetivos: [
                'Empleos dignos y bien remunerados',
                'Igualdad de oportunidades laborales',
                'Desarrollo profesional continuo',
                'Cumplimiento de estándares laborales'
            ],
            color: '#A21942',
            icon: '💼',
            gradient: 'from-pink-800 to-red-900',
        },
        {
            id: 10,
            numero: '10',
            title: 'Reducción de las Desigualdades',
            subtitle: 'ODS 10',
            description: 'Reducimos la desigualdad en y entre los países, eliminando barreras que limitan las oportunidades de las personas con discapacidad. Nuestro modelo crea equidad real en el acceso a oportunidades tecnológicas y laborales.',
            objetivos: [
                'Eliminación de barreras digitales',
                'Equidad en oportunidades tecnológicas',
                'Inclusión laboral efectiva',
                'Empoderamiento económico del talento diverso'
            ],
            color: '#DD1367',
            icon: '⚖️',
            gradient: 'from-pink-600 to-pink-700',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900"
        >
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-gradient-to-br from-red-500/30 to-pink-500/30 rounded-full blur-[120px] animate-pulse"
                     style={{ animationDuration: '12s' }} />
                <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full blur-[120px] animate-pulse"
                     style={{ animationDuration: '15s', animationDelay: '3s' }} />
            </div>

            <div className="absolute inset-0 opacity-[0.02]">
                <svg className="w-full h-full">
                    <defs>
                        <pattern id="ods-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                            <circle cx="30" cy="30" r="1" fill="#ec4899" />
                            <path d="M0 30 L60 30 M30 0 L30 60" stroke="#a855f7" strokeWidth="0.5" opacity="0.3" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#ods-grid)" />
                </svg>
            </div>

            <div className="container-custom relative z-10">

                <div className={`text-center mb-16 transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
                        <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-pink-400">
              Alineación Global
            </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                        Compromiso con los <span className="bg-gradient-to-r from-pink-400 via-red-400 to-purple-400 bg-clip-text text-transparent">
              ODS
            </span>
                    </h2>

                    <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
                        Nuestras acciones están alineadas con los{' '}
                        <span className="font-bold text-white">Objetivos de Desarrollo Sostenible de las Naciones Unidas</span>,
                        generando impacto medible en educación, empleo y reducción de desigualdades.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
                    {ods.map((objetivo, index) => (
                        <div
                            key={objetivo.id}
                            onMouseEnter={() => setHoveredId(objetivo.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className={`group relative transition-all duration-1000
                        ${isInView
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${400 + index * 150}ms` }}
                        >
                            <div
                                className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-700"
                                style={{ background: `${objetivo.color}80` }}
                            />

                            <div className="relative h-full rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10
                            group-hover:border-white/20 transition-all duration-500">

                                <div className={`relative p-6 border-b border-white/10 bg-gradient-to-br ${objetivo.gradient}`}>

                                    <div className="flex items-start justify-between mb-4">
                                        <div
                                            className="w-16 h-16 rounded-xl backdrop-blur-xl border-2 border-white/40 flex items-center justify-center text-4xl shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                                            style={{ background: `${objetivo.color}30` }}
                                            aria-hidden="true"
                                        >
                                            {objetivo.icon}
                                        </div>

                                        <div className="text-right">
                                            <div className="text-7xl font-black text-white/10 leading-none">
                                                {objetivo.numero}
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold tracking-wider uppercase text-white/80 mb-1">
                                            {objetivo.subtitle}
                                        </p>
                                        <h3 className="text-2xl font-black text-white leading-tight">
                                            {objetivo.title}
                                        </h3>
                                    </div>

                                    <div className="h-0.5 bg-white/20 rounded-full overflow-hidden mt-4">
                                        <div
                                            className="h-full bg-white rounded-full transition-all duration-700"
                                            style={{
                                                width: hoveredId === objetivo.id ? '100%' : '40%',
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="p-6 space-y-5">

                                    <p className="text-neutral-300 leading-relaxed text-sm">
                                        {objetivo.description}
                                    </p>

                                    <div className="space-y-3">
                                        <p className="text-xs font-bold tracking-wider uppercase text-neutral-500 flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full bg-white/50" />
                                            Nuestras Acciones
                                        </p>

                                        <div className="space-y-2">
                                            {objetivo.objetivos.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-start gap-3 p-2.5 rounded-lg bg-white/5 border border-white/5
                                   hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                                                >
                                                    <div
                                                        className="w-5 h-5 rounded flex-shrink-0 flex items-center justify-center mt-0.5"
                                                        style={{ background: `${objetivo.color}40` }}
                                                    >
                                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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

                <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-1000
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">

                        <div className="flex flex-col md:flex-row items-center gap-8">

                            <div className="flex-shrink-0">
                                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-2xl">
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex-1">
                                <h3 className="text-2xl font-black text-white mb-3">
                                    Impacto Estratégico para Crowdfunding Internacional
                                </h3>
                                <p className="text-neutral-300 leading-relaxed mb-4">
                                    Esta alineación con los ODS es clave para acceder a financiamiento internacional,
                                    inversión de impacto y alianzas con grandes corporaciones que priorizan criterios ESG
                                    (Environmental, Social & Governance) en sus decisiones de inversión y compra.
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20">
                                        <span className="text-2xl" aria-hidden="true">🌍</span>
                                        <span className="text-sm font-bold text-white">17 ODS</span>
                                    </div>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20">
                                        <span className="text-2xl" aria-hidden="true">🎯</span>
                                        <span className="text-sm font-bold text-white">3 Prioritarios</span>
                                    </div>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20">
                                        <span className="text-2xl" aria-hidden="true">📊</span>
                                        <span className="text-sm font-bold text-white">Impacto Medible</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`mt-12 text-center transition-all duration-1000 delay-1200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                        <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-sm font-semibold text-neutral-300">
              Transformando vidas • Generando impacto • Construyendo futuro
            </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompromisODS;