import { useState, useRef, useEffect } from 'react';

const PropuestaValor = () => {
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

    const pilares = [
        {
            id: 'excelencia',
            numero: '01',
            title: 'Excelencia Técnica',
            subtitle: 'Auditorías Certificadas',
            description: 'Auditorías y remediación de código validadas por ingenieros certificados con experiencia real en discapacidad. Garantizamos el cumplimiento de WCAG 2.1 nivel AAA.',
            beneficios: [
                { label: 'Ingenieros Certificados', icon: 'badge-check' },
                { label: 'Experiencia Real', icon: 'users' },
                { label: 'WCAG 2.1 AAA', icon: 'shield-check' }
            ],
            gradient: 'from-blue-500 to-cyan-500',
            cardBg: 'from-blue-50/80 to-cyan-50/80',
            iconBg: 'from-blue-500 to-cyan-600',
        },
        {
            id: 'formacion',
            numero: '02',
            title: 'Formación de Talento',
            subtitle: 'Impacto Social Medible',
            description: 'Cada proyecto contratado financia la capacitación técnica de personas en situación de vulnerabilidad, creando una nueva generación de desarrolladores inclusivos.',
            beneficios: [
                { label: 'Capacitación Continua', icon: 'academic-cap' },
                { label: 'Talento Diverso', icon: 'user-group' },
                { label: 'Nueva Generación', icon: 'trending-up' }
            ],
            gradient: 'from-cyan-500 to-teal-500',
            cardBg: 'from-cyan-50/80 to-teal-50/80',
            iconBg: 'from-cyan-500 to-teal-600',
        },
        {
            id: 'empleabilidad',
            numero: '03',
            title: 'Empleabilidad',
            subtitle: 'Cuota Laboral Garantizada',
            description: 'Facilitamos la inserción laboral de nuestros graduados en empresas aliadas, ayudándolas a cubrir su cuota laboral de ley (Ley 29973) con talento calificado.',
            beneficios: [
                { label: 'Inserción Laboral', icon: 'briefcase' },
                { label: 'Cumplimiento Legal', icon: 'scale' },
                { label: 'Talento Calificado', icon: 'star' }
            ],
            gradient: 'from-teal-500 to-emerald-500',
            cardBg: 'from-teal-50/80 to-emerald-50/80',
            iconBg: 'from-teal-500 to-emerald-600',
        }
    ];

    const Icon = ({ name, className = "w-6 h-6" }) => {
        const icons = {
            'badge-check': (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
            'users': (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            'shield-check': (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            'academic-cap': (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
            ),
            'user-group': (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            'trending-up': (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            'briefcase': (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            'scale': (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
            ),
            'star': (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
            ),
        };
        return icons[name] || null;
    };

    return (
        <section
            ref={sectionRef}
            className="relative py-20 sm:py-24 lg:py-28 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-teal-50/50" />

            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-cyan-200/20 rounded-full blur-3xl animate-pulse"
                     style={{ animationDuration: '10s' }} />
                <div className="absolute bottom-20 -right-40 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl animate-pulse"
                     style={{ animationDuration: '12s', animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-teal-200/15 rounded-full blur-3xl animate-pulse"
                     style={{ animationDuration: '14s', animationDelay: '4s' }} />
            </div>

            <div className="container-custom relative z-10">

                <div className={`text-center mb-16 transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-600" />
                        <span className="text-sm font-bold tracking-[0.3em] uppercase text-cyan-700">
              El Círculo de Impacto de Punchay
            </span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-600" />
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 leading-tight mb-4">
                        Tecnología con <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Propósito Social
            </span>
                    </h2>

                    <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                        Nuestro modelo ESG combina excelencia técnica con impacto social medible.
                        Cada proyecto genera valor empresarial y oportunidades para el talento diverso.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
                    {pilares.map((pilar, index) => (
                        <div
                            key={pilar.id}
                            onMouseEnter={() => setHoveredCard(pilar.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className={`group relative transition-all duration-1000
                        ${isInView
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${400 + index * 150}ms` }}
                        >
                            <div className={`absolute -inset-1 bg-gradient-to-r ${pilar.gradient} rounded-3xl blur-xl 
                            opacity-0 group-hover:opacity-20 transition-all duration-700`} />

                            <div className="relative h-full rounded-2xl overflow-hidden
                            backdrop-blur-sm bg-white/70
                            border border-white/60
                            shadow-lg hover:shadow-xl
                            transform transition-all duration-500 hover:-translate-y-2">

                                <div className={`relative bg-gradient-to-br ${pilar.cardBg} backdrop-blur-md p-6`}>

                                    <div
                                        className="absolute inset-0 opacity-[0.02]"
                                        style={{
                                            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)`,
                                            backgroundSize: '24px 24px',
                                        }}
                                    />

                                    <div className="relative">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pilar.iconBg} 
                                          flex items-center justify-center
                                          shadow-md group-hover:shadow-lg
                                          transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                                <Icon name={pilar.beneficios[0].icon} className="w-7 h-7 text-white" />
                                            </div>

                                            <div className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${pilar.gradient} text-white font-black text-sm`}>
                                                {pilar.numero}
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-black text-neutral-900 mb-1 tracking-tight">
                                            {pilar.title}
                                        </h3>

                                        <p className="text-sm font-semibold text-neutral-600 mb-3">
                                            {pilar.subtitle}
                                        </p>

                                        <div className="h-0.5 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm">
                                            <div className={`h-full bg-gradient-to-r ${pilar.gradient} rounded-full transition-all duration-700
                                    ${hoveredCard === pilar.id ? 'w-full' : 'w-16'}`} />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 space-y-4 bg-white/50 backdrop-blur-md">

                                    <p className="text-sm text-neutral-700 leading-relaxed">
                                        {pilar.description}
                                    </p>

                                    <div className="space-y-2">
                                        {pilar.beneficios.map((beneficio, idx) => (
                                            <div
                                                key={idx}
                                                className="group/item flex items-center gap-2.5 p-2.5 rounded-lg
                                   bg-white/60 backdrop-blur-sm
                                   border border-white/80
                                   hover:bg-white/80 hover:shadow-sm
                                   transition-all duration-300 hover:translate-x-1"
                                            >
                                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${pilar.iconBg}
                                        flex items-center justify-center flex-shrink-0
                                        shadow-sm group-hover/item:shadow-md
                                        transition-all duration-300`}>
                                                    <Icon name={beneficio.icon} className="w-4 h-4 text-white" />
                                                </div>

                                                <span className="text-sm font-semibold text-neutral-800">
                            {beneficio.label}
                          </span>

                                                <svg className="w-3.5 h-3.5 text-neutral-400 ml-auto opacity-0 group-hover/item:opacity-100
                                        transition-all duration-300 group-hover/item:translate-x-1"
                                                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${pilar.gradient}
                              transform origin-left transition-transform duration-700
                              ${hoveredCard === pilar.id ? 'scale-x-100' : 'scale-x-0'}`} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-800
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-lg">

                        <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-b-full" />

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                            <div className="flex-1 text-left">
                                <h4 className="text-2xl font-black text-neutral-900 mb-3">
                                    Tu Ventaja Competitiva ESG
                                </h4>
                                <p className="text-base text-neutral-700 leading-relaxed">
                                    Al elegir Punchay, tu empresa no solo obtiene soluciones tecnológicas de primer nivel
                                    que cumplen con la legislación vigente, sino que también contribuye directamente a la
                                    formación e inserción laboral de talento diverso certificado.
                                </p>
                            </div>

                            <div className="flex-shrink-0">
                                <div className="flex gap-4">
                                    <div className="text-center">
                                        <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">
                                            100%
                                        </div>
                                        <div className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                                            WCAG 2.1
                                        </div>
                                    </div>
                                    <div className="w-px bg-neutral-200" />
                                    <div className="text-center">
                                        <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                                            ESG
                                        </div>
                                        <div className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                                            Impacto
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PropuestaValor;