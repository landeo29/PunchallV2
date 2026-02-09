import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroColaboracion = () => {
    const [isInView, setIsInView] = useState(false);
    const [hoveredId, setHoveredId] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const sectionRef = useRef(null);

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
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const modalidades = [
        {
            id: 1,
            title: 'Socio de Ingeniería',
            subtitle: 'B2B',
            description: 'Contrate nuestros servicios de desarrollo y auditoría bajo estándares WCAG 2.1/2.2, ADA y EN 301 549. Su inversión garantiza productos digitales legales y escalables, mientras financia directamente la formación de nuevos talentos.',
            beneficios: [
                'Auditorías WCAG 2.1/2.2 certificadas',
                'Cumplimiento ADA y EN 301 549',
                'Productos digitales legales',
                'ROI social trazable'
            ],
            icon: '🏢',
            color: '#3b82f6',
            gradient: 'from-blue-500 to-cyan-500',
            ctaText: 'Solicitar Consultoría',
            ctaLink: '/contacto',
        },
        {
            id: 2,
            title: 'Socio de Empleabilidad',
            subtitle: 'Talent Pipeline',
            description: 'Integre a nuestro personal en sus equipos de IT. Ofrecemos talento diverso altamente capacitado en stacks modernos, listo para aportar valor en entornos de alto rendimiento.',
            beneficios: [
                'Talento diverso certificado',
                'Stacks modernos (React, Node, .NET)',
                'Experiencia en proyectos reales',
                'Cumplimiento Ley 29973'
            ],
            icon: '👥',
            color: '#8b5cf6',
            gradient: 'from-indigo-500 to-purple-500',
            ctaText: 'Conocer el Pool de Talento',
            ctaLink: '/contacto',
        },
        {
            id: 3,
            title: 'Intercambio de Conocimiento',
            subtitle: 'Mentorship',
            description: 'Conecte a sus expertos con nuestra comunidad. El intercambio de experiencias técnicas eleva el estándar de nuestra formación y fortalece el ecosistema tecnológico inclusivo.',
            beneficios: [
                'Sesiones técnicas especializadas',
                'Code reviews con expertos',
                'Networking profesional',
                'Impacto directo medible'
            ],
            icon: '🎓',
            color: '#10b981',
            gradient: 'from-emerald-500 to-teal-500',
            ctaText: 'Postular como Mentor',
            ctaLink: '/contacto',
        },
        {
            id: 4,
            title: 'Inversión de Impacto Social',
            subtitle: 'Donación Directa',
            description: 'Apoye la escalabilidad de nuestro centro de formación. Cada contribución está alineada con los Objetivos de Desarrollo Sostenible (ODS 4, 8 y 10), generando un valor social medible y reportable.',
            beneficios: [
                'Alineado con ODS 4, 8 y 10',
                'Reportes de impacto trimestrales',
                'Valor social medible',
                'Certificado de contribución ESG'
            ],
            icon: '💰',
            color: '#f59e0b',
            gradient: 'from-amber-500 to-orange-500',
            ctaText: 'Aportar vía PayPal',
            ctaAriaLabel: 'Realizar donación a Punchay vía PayPal - Se abre en nueva ventana',
            ctaLink: 'https://www.paypal.com/paypalme/Punchay',
            external: true,
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative pt-32 pb-20 sm:pb-28 lg:pb-32 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"
                    style={{
                        animationDuration: '8s',
                        transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
                    }}
                />
                <div
                    className="absolute top-1/4 -right-40 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse"
                    style={{
                        animationDuration: '10s',
                        animationDelay: '2s',
                        transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`
                    }}
                />
                <div
                    className="absolute -bottom-40 left-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse"
                    style={{
                        animationDuration: '12s',
                        animationDelay: '4s',
                        transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`
                    }}
                />
            </div>

            <div className="absolute inset-0 opacity-[0.03]">
                <div
                    style={{
                        backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                    className="absolute inset-0"
                />
            </div>

            <div className="container-custom relative z-10">

                <div className={`text-center mb-16 max-w-5xl mx-auto transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg">
                        <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-700">
              Alianzas Estratégicas
            </span>
                        <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-6">
                        <span className="text-slate-900">Construyendo un</span>
                        <br />
                        <span className="relative inline-block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Ecosistema de Tecnología Inclusiva
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-blue-400/30 blur-lg animate-pulse" />
            </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-6 max-w-4xl mx-auto">
                        En Punchay, integramos{' '}
                        <span className="font-bold text-blue-700">ingeniería de software de élite</span> con un{' '}
                        <span className="font-bold text-indigo-700">modelo de impacto social trazable</span>.
                        Invitamos a organizaciones audaces a transformar la accesibilidad digital en una{' '}
                        <span className="font-bold text-purple-700">ventaja competitiva y un motor de cambio</span>.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 backdrop-blur-sm border border-blue-200/50">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sustainable_Development_Goal_04.png/220px-Sustainable_Development_Goal_04.png"
                                alt="ODS 4 Educación de Calidad"
                                className="w-8 h-8"
                            />
                            <span className="text-sm font-bold text-slate-700">ODS 4</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 backdrop-blur-sm border border-indigo-200/50">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sustainable_Development_Goal_08.png/220px-Sustainable_Development_Goal_08.png"
                                alt="ODS 8 Trabajo Decente"
                                className="w-8 h-8"
                            />
                            <span className="text-sm font-bold text-slate-700">ODS 8</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 backdrop-blur-sm border border-purple-200/50">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Sustainable_Development_Goal_10.png/220px-Sustainable_Development_Goal_10.png"
                                alt="ODS 10 Reducción de Desigualdades"
                                className="w-8 h-8"
                            />
                            <span className="text-sm font-bold text-slate-700">ODS 10</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 backdrop-blur-sm border border-green-200/50">
                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span className="text-sm font-bold text-slate-700">WCAG 2.1</span>
                        </div>
                    </div>
                </div>

                <div className={`mb-12 transition-all duration-1000 delay-400
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center mb-8">
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2">
                            Modalidades de Alianza
                        </h2>
                        <p className="text-slate-600">
                            Elija la forma de colaboración que mejor se alinee con sus objetivos organizacionales
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {modalidades.map((modalidad, index) => (
                        <div
                            key={modalidad.id}
                            onMouseEnter={() => setHoveredId(modalidad.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className={`group relative transition-all duration-1000
                        ${isInView
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${600 + index * 100}ms` }}
                        >
                            <div
                                className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"
                                style={{ background: `${modalidad.color}60` }}
                            />

                            <div className="relative h-full rounded-2xl overflow-hidden bg-white/90 backdrop-blur-xl border-2 border-white/60 shadow-lg group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                                <div className={`relative p-6 border-b border-slate-200/50 bg-gradient-to-br ${modalidad.gradient}`}>

                                    <div className="flex items-start justify-between mb-4">
                                        <div
                                            className="w-14 h-14 rounded-xl backdrop-blur-xl border-2 border-white/40 flex items-center justify-center text-3xl shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                                            style={{ background: `${modalidad.color}20` }}
                                            aria-hidden="true"
                                        >
                                            {modalidad.icon}
                                        </div>

                                        <div className="text-right">
                                            <div className="text-6xl font-black text-white/10 leading-none">
                                                {String(modalidad.id).padStart(2, '0')}
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold tracking-wider uppercase text-white/90 mb-1">
                                            {modalidad.subtitle}
                                        </p>
                                        <h3 className="text-xl font-black text-white leading-tight">
                                            {modalidad.title}
                                        </h3>
                                    </div>

                                    <div className="h-0.5 bg-white/30 rounded-full overflow-hidden mt-4">
                                        <div
                                            className="h-full bg-white rounded-full transition-all duration-700"
                                            style={{
                                                width: hoveredId === modalidad.id ? '100%' : '40%',
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="p-6 space-y-4">

                                    <p className="text-sm text-slate-700 leading-relaxed">
                                        {modalidad.description}
                                    </p>

                                    <div className="space-y-2">
                                        <p className="text-xs font-bold tracking-wider uppercase text-slate-600">
                                            Incluye:
                                        </p>

                                        <div className="space-y-1.5">
                                            {modalidad.beneficios.map((beneficio, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-start gap-2"
                                                >
                                                    <div
                                                        className="w-4 h-4 rounded flex-shrink-0 flex items-center justify-center mt-0.5"
                                                        style={{ background: `${modalidad.color}30` }}
                                                    >
                                                        <svg className="w-2.5 h-2.5" style={{ color: modalidad.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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

                                    {modalidad.external ? (

                                        <a
                                        href={modalidad.ctaLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group/btn w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl
                                bg-gradient-to-r ${modalidad.gradient} text-white font-bold text-sm
                                shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                                        aria-label={modalidad.ctaAriaLabel || modalidad.ctaText}

                                        >
                                        <span>{modalidad.ctaText}</span>
                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                        ) : (
                        <Link
                        to={modalidad.ctaLink}
                     className={`group/btn w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl
                                bg-gradient-to-r ${modalidad.gradient} text-white font-bold text-sm
                                shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                     aria-label={modalidad.ctaText}
                >
                    <span>{modalidad.ctaText}</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </Link>
                )}
            </div>
        </div>
</div>
))}
</div>
</div>
</section>
);
};

export default HeroColaboracion;