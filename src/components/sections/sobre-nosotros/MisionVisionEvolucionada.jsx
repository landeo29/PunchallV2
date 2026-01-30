import { useState, useRef, useEffect } from 'react';

const MisionVisionEvolucionada = () => {
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

    const cards = [
        {
            id: 'mision',
            title: 'Misión',
            subtitle: 'Nuestro Compromiso Diario',
            description: 'Eliminar las barreras digitales mediante ingeniería de software accesible, utilizando nuestro éxito comercial para financiar la capacitación y empleabilidad de personas con discapacidad en situación de vulnerabilidad.',
            objetivos: [
                'Desarrollo de software con accesibilidad nativa',
                'Financiamiento de programas de capacitación técnica',
                'Inserción laboral de talento diverso certificado',
                'Cumplimiento garantizado de WCAG 2.1'
            ],
            icon: 'target',
            gradient: 'from-blue-500 to-cyan-500',
            cardBg: 'from-blue-50/80 to-cyan-50/80',
            iconBg: 'from-blue-500 to-cyan-600',
        },
        {
            id: 'vision',
            title: 'Visión',
            subtitle: 'Hacia Dónde Vamos',
            description: 'Liderar la transformación hacia un ecosistema tecnológico global donde la discapacidad sea una ventaja competitiva, estableciendo un modelo de empresa social escalable y sostenible.',
            objetivos: [
                'Referente global en accesibilidad tecnológica',
                'Discapacidad como ventaja competitiva reconocida',
                'Modelo de empresa social escalable',
                'Ecosistema tecnológico verdaderamente inclusivo'
            ],
            icon: 'eye',
            gradient: 'from-cyan-500 to-teal-500',
            cardBg: 'from-cyan-50/80 to-teal-50/80',
            iconBg: 'from-cyan-500 to-teal-600',
        }
    ];

    const Icon = ({ name, className = "w-6 h-6" }) => {
        const icons = {
            'target': (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
            'eye': (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
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

            <div className="absolute inset-0 opacity-[0.015]">
                <svg className="w-full h-full">
                    <defs>
                        <pattern id="brujula-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                            <circle cx="30" cy="30" r="1" fill="#0891b2" />
                            <path d="M0 30 L60 30 M30 0 L30 60" stroke="#06b6d4" strokeWidth="0.5" opacity="0.2" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#brujula-grid)" />
                </svg>
            </div>

            <div className="container-custom relative z-10">

                <div className={`text-center mb-16 transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-600" />
                        <span className="text-sm font-bold tracking-[0.3em] uppercase text-cyan-700">
              Nuestro Norte
            </span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-600" />
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 leading-tight mb-4">
                        Nuestra <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Brújula
            </span>
                    </h2>

                    <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                        Los principios fundamentales que guían cada decisión, cada línea de código
                        y cada relación con nuestros clientes y colaboradores.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            onMouseEnter={() => setHoveredCard(card.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className={`group relative transition-all duration-1000
                        ${isInView
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${400 + index * 200}ms` }}
                        >
                            <div className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} rounded-3xl blur-xl 
                            opacity-0 group-hover:opacity-20 transition-all duration-700`} />

                            <div className="relative h-full rounded-2xl overflow-hidden
                            backdrop-blur-sm bg-white/70
                            border border-white/60
                            shadow-lg hover:shadow-xl
                            transform transition-all duration-500 hover:-translate-y-2">

                                <div className={`relative bg-gradient-to-br ${card.cardBg} backdrop-blur-md p-8 border-b border-white/30`}>

                                    <div
                                        className="absolute inset-0 opacity-[0.02]"
                                        style={{
                                            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)`,
                                            backgroundSize: '24px 24px',
                                        }}
                                    />

                                    <div className="relative">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.iconBg} 
                                          flex items-center justify-center
                                          shadow-md group-hover:shadow-lg
                                          transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                                <Icon name={card.icon} className="w-7 h-7 text-white" />
                                            </div>

                                            <div className="flex-1">
                                                <h3 className="text-3xl font-black text-neutral-900 tracking-tight">
                                                    {card.title}
                                                </h3>
                                                <p className="text-sm font-semibold text-neutral-600">
                                                    {card.subtitle}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="h-0.5 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm">
                                            <div className={`h-full bg-gradient-to-r ${card.gradient} rounded-full transition-all duration-700
                                    ${hoveredCard === card.id ? 'w-full' : 'w-16'}`} />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 space-y-6 bg-white/50 backdrop-blur-md">

                                    <p className="text-base text-neutral-700 leading-relaxed font-medium">
                                        {card.description}
                                    </p>

                                    <div className="space-y-3">
                                        <p className="text-xs font-bold tracking-wider uppercase text-neutral-600 flex items-center gap-2">
                                            <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${card.gradient}`} />
                                            Enfoque Estratégico
                                        </p>

                                        <div className="space-y-2.5">
                                            {card.objetivos.map((objetivo, idx) => (
                                                <div
                                                    key={idx}
                                                    className="group/item flex items-start gap-3 p-3 rounded-lg
                                   bg-white/60 backdrop-blur-sm
                                   border border-white/80
                                   hover:bg-white/80 hover:shadow-sm
                                   transition-all duration-300 hover:translate-x-1"
                                                >
                                                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${card.iconBg}
                                        flex items-center justify-center flex-shrink-0 mt-0.5
                                        shadow-sm group-hover/item:shadow-md
                                        transition-all duration-300`}>
                                                        <Icon name="check" className="w-3.5 h-3.5 text-white" />
                                                    </div>

                                                    <span className="text-sm font-semibold text-neutral-800 leading-relaxed">
                            {objetivo}
                          </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${card.gradient}
                              transform origin-left transition-transform duration-700
                              ${hoveredCard === card.id ? 'scale-x-100' : 'scale-x-0'}`} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-800
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-lg">

                        <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-b-full" />

                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center shadow-lg">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black text-neutral-900">
                                Modelo de Impacto Dual
                            </h3>
                        </div>

                        <p className="text-base text-neutral-700 leading-relaxed mb-6">
                            Nuestro modelo de negocio único combina{' '}
                            <span className="font-bold text-cyan-700">excelencia comercial</span> con{' '}
                            <span className="font-bold text-teal-700">impacto social medible</span>.
                            Cada proyecto que desarrollamos genera valor económico para nuestros clientes
                            mientras financia directamente la formación e inserción laboral de talento diverso.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200/50">
                                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-1">
                                    100%
                                </div>
                                <div className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                                    Ingresos Reinvertidos
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50">
                                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-1">
                                    ESG
                                </div>
                                <div className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                                    Modelo Escalable
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200/50">
                                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-1">
                                    Global
                                </div>
                                <div className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                                    Visión Mundial
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MisionVisionEvolucionada;