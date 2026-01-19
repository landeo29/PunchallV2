import { useState, useRef, useEffect } from 'react';

const MissionVision = () => {
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
            description: 'Desarrollar soluciones tecnológicas de calidad, fiabilidad e innovación, promoviendo un entorno de inclusión y diversidad para marcar la diferencia en el mercado global.',
            values: [
                { label: 'Calidad', icon: 'check-circle' },
                { label: 'Innovación', icon: 'lightbulb' },
                { label: 'Inclusión', icon: 'users' }
            ],
            gradient: 'from-blue-500 to-cyan-500',
            cardBg: 'from-blue-50/80 to-cyan-50/80',
            iconBg: 'from-blue-500 to-cyan-600',
        },
        {
            id: 'vision',
            title: 'Visión',
            description: 'Convertirnos en un referente mundial en soluciones tecnológicas, impulsados por la diversidad y la innovación para transformar positivamente la vida de las personas.',
            values: [
                { label: 'Liderazgo', icon: 'trending-up' },
                { label: 'Diversidad', icon: 'globe' },
                { label: 'Impacto', icon: 'zap' }
            ],
            gradient: 'from-cyan-500 to-teal-500',
            cardBg: 'from-cyan-50/80 to-teal-50/80',
            iconBg: 'from-cyan-500 to-teal-600',
        }
    ];

    const Icon = ({ name, className = "w-6 h-6" }) => {
        const icons = {
            'check-circle': (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            'lightbulb': (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            'users': (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            'trending-up': (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            'globe': (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            'zap': (
                <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
              Propósito
            </span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-600" />
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 leading-tight mb-4">
                        Guiados por <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Valores
            </span>
                    </h2>

                    <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                        Los pilares que definen cada decisión y proyecto
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
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

                                <div className={`relative bg-gradient-to-br ${card.cardBg} backdrop-blur-md p-6 sm:p-8`}>

                                    <div
                                        className="absolute inset-0 opacity-[0.02]"
                                        style={{
                                            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)`,
                                            backgroundSize: '24px 24px',
                                        }}
                                    />

                                    <div className="relative">
                                        <div className="absolute top-0 right-0 flex gap-1.5">
                                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${card.gradient} transition-all duration-300
                                    ${hoveredCard === card.id ? 'opacity-100 scale-100' : 'opacity-40 scale-75'}`} />
                                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${card.gradient} transition-all duration-300 delay-75
                                    ${hoveredCard === card.id ? 'opacity-100 scale-100' : 'opacity-40 scale-75'}`} />
                                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${card.gradient} transition-all duration-300 delay-150
                                    ${hoveredCard === card.id ? 'opacity-100 scale-100' : 'opacity-40 scale-75'}`} />
                                        </div>

                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.iconBg} 
                                  flex items-center justify-center mb-4
                                  shadow-md group-hover:shadow-lg
                                  transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                            <Icon name={card.values[0].icon} className="w-6 h-6 text-white" />
                                        </div>

                                        <h3 className="text-3xl sm:text-4xl font-black text-neutral-900 mb-3 tracking-tight">
                                            {card.title}
                                        </h3>

                                        <div className="h-0.5 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm">
                                            <div className={`h-full bg-gradient-to-r ${card.gradient} rounded-full transition-all duration-700
                                    ${hoveredCard === card.id ? 'w-full' : 'w-16'}`} />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 sm:p-8 space-y-5 bg-white/50 backdrop-blur-md">

                                    <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                                        {card.description}
                                    </p>

                                    <div className="space-y-2.5">
                                        <p className="text-xs font-bold tracking-wider uppercase text-neutral-600">
                                            Pilares Fundamentales
                                        </p>

                                        <div className="space-y-2">
                                            {card.values.map((value, idx) => (
                                                <div
                                                    key={idx}
                                                    className="group/item flex items-center gap-2.5 p-2.5 rounded-lg
                                   bg-white/60 backdrop-blur-sm
                                   border border-white/80
                                   hover:bg-white/80 hover:shadow-sm
                                   transition-all duration-300 hover:translate-x-1"
                                                >
                                                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${card.iconBg}
                                        flex items-center justify-center flex-shrink-0
                                        shadow-sm group-hover/item:shadow-md
                                        transition-all duration-300`}>
                                                        <Icon name={value.icon} className="w-4 h-4 text-white" />
                                                    </div>

                                                    <span className="text-sm font-semibold text-neutral-800">
                            {value.label}
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
                                </div>

                                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${card.gradient}
                              transform origin-left transition-transform duration-700
                              ${hoveredCard === card.id ? 'scale-x-100' : 'scale-x-0'}`} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 delay-800
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-lg">

                        <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-b-full" />

                        <blockquote className="text-lg sm:text-xl text-neutral-800 font-light leading-relaxed italic">
                            "Cada línea de código que escribimos lleva consigo nuestro compromiso
                            con la inclusión y la excelencia tecnológica"
                        </blockquote>

                        <div className="flex items-center justify-center gap-3 mt-6">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500" />
                            <cite className="text-sm font-semibold text-neutral-600 not-italic uppercase tracking-wider">
                                Equipo PUNCHALL
                            </cite>
                            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;