import { useRef, useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../assets/images/responsabilidad/iniciativas/RS (8).webp';
import img2 from '../../../assets/images/responsabilidad/iniciativas/RS (8).webp';
import img3 from '../../../assets/images/responsabilidad/iniciativas/RS (8).webp';
import img4 from '../../../assets/images/responsabilidad/iniciativas/RS (8).webp';
import img5 from '../../../assets/images/responsabilidad/iniciativas/RS (8).webp';

const AlianzasTransforman = () => {
    const [isInView, setIsInView] = useState(false);
    const [hoveredId, setHoveredId] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
    const sectionRef = useRef(null);

    const particles = useMemo(() =>
            Array.from({ length: 15 }, (_, i) => ({
                id: i,
                left: 5 + (i * 6.5),
                top: 8 + (i % 3) * 30,
                delay: i * 0.3,
            }))
        , []);

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
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            setMousePos({
                x: ((e.clientX - rect.left) / rect.width) * 100,
                y: ((e.clientY - rect.top) / rect.height) * 100,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const alianzas = [
        {
            id: 1,
            title: 'Corporaciones Tecnológicas',
            subtitle: 'Proveedor de Excelencia',
            description: 'Al elegir a Punchay como su proveedor tecnológico, usted está financiando directamente la inclusión laboral del futuro. Cada proyecto comercial se convierte en un motor de transformación social.',
            beneficios: [
                'Desarrollo de software de élite',
                'Cumplimiento garantizado WCAG 2.1',
                'Impacto social medible y reportable',
                'Beneficios tributarios Ley 29973'
            ],
            image: img1,
            color: '#3b82f6',
            icon: '🏢',
        },
        {
            id: 2,
            title: 'Empresas con Cuota Laboral',
            subtitle: 'Talento Certificado',
            description: 'Ayudamos a su empresa a cubrir la cuota laboral obligatoria con talento diverso altamente productivo, formado y validado en proyectos reales bajo estándares de calidad internacional.',
            beneficios: [
                'Graduados certificados y validados',
                'Cumplimiento Ley 29973',
                'Talento técnico de alto nivel',
                'Seguimiento post-contratación'
            ],
            image: img2,
            color: '#8b5cf6',
            icon: '🤝',
        },
        {
            id: 3,
            title: 'Organizaciones de Inclusión',
            subtitle: 'Aliados Estratégicos',
            description: 'Trabajamos con organizaciones especializadas en discapacidad para identificar talento, co-diseñar programas de formación y crear rutas de empleabilidad sostenibles.',
            beneficios: [
                'Co-diseño de programas',
                'Identificación de talento',
                'Rutas de empleabilidad',
                'Impacto conjunto medible'
            ],
            image: img3,
            color: '#10b981',
            icon: '🌟',
        },
        {
            id: 4,
            title: 'Instituciones Educativas',
            subtitle: 'Formación Complementaria',
            description: 'Alianzas con universidades e institutos para ofrecer formación complementaria en tecnologías emergentes y accesibilidad digital a sus estudiantes con discapacidad.',
            beneficios: [
                'Certificaciones técnicas',
                'Prácticas en proyectos reales',
                'Mentoría profesional',
                'Bolsa de trabajo activa'
            ],
            image: img4,
            color: '#f59e0b',
            icon: '🎓',
        },
        {
            id: 5,
            title: 'Inversores de Impacto',
            subtitle: 'ESG y Sostenibilidad',
            description: 'Invitamos a fondos de inversión y corporaciones que priorizan criterios ESG a ser parte de este modelo de empresa social escalable y autosostenible.',
            beneficios: [
                'Modelo autosostenible',
                'ROI social + financiero',
                'Alineación ODS verificada',
                'Reportería de impacto ESG'
            ],
            image: img5,
            color: '#ec4899',
            icon: '💰',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-20 sm:py-24 lg:py-28 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50" />

            <div
                className="absolute inset-0 opacity-20 transition-opacity duration-700"
                style={{
                    background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, 
                      rgba(251, 146, 60, 0.3) 0%, 
                      rgba(245, 158, 11, 0.2) 40%, 
                      transparent 70%)`,
                }}
            />

            <div className="absolute inset-0 pointer-events-none">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="absolute w-32 h-32 rounded-full opacity-30"
                        style={{
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.15), transparent)',
                            animation: `morph ${12 + particle.id * 1.5}s ease-in-out infinite`,
                            animationDelay: `${particle.delay}s`,
                        }}
                    />
                ))}
            </div>

            <div className="absolute inset-0 opacity-[0.015]">
                <svg className="w-full h-full">
                    <defs>
                        <pattern id="alianzas-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                            <circle cx="40" cy="40" r="1.5" fill="#f59e0b" />
                            <path d="M0 40 L80 40 M40 0 L40 80" stroke="#fb923c" strokeWidth="0.5" opacity="0.2" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#alianzas-pattern)" />
                </svg>
            </div>

            <div className="container-custom relative z-10">

                <div className={`text-center mb-16 max-w-4xl mx-auto transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-white/70 backdrop-blur-xl border border-orange-200/50 shadow-lg">
                        <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-orange-700">
              Únase al Cambio
            </span>
                        <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
                        Alianzas que
                        <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
              Transforman
            </span>
                    </h2>

                    <p className="text-xl text-slate-700 leading-relaxed mb-6 font-medium">
                        Invitamos a corporaciones y organizaciones a ser parte de este cambio.{' '}
                        <span className="font-black text-orange-700">
              Al elegir a Punchay como su proveedor tecnológico, usted está financiando directamente
              la inclusión laboral del futuro.
            </span>
                    </p>

                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-100 to-amber-100 border-2 border-orange-300/50">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-sm font-bold text-slate-900">
              Cada proyecto comercial = Motor de transformación social
            </span>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto space-y-8 mb-16">
                    {alianzas.map((alianza, index) => (
                        <div
                            key={alianza.id}
                            onMouseEnter={() => setHoveredId(alianza.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className={`group relative transition-all duration-1000
                        ${isInView
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${300 + index * 100}ms` }}
                        >
                            <div
                                className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700"
                                style={{ background: `${alianza.color}60` }}
                            />

                            <div className={`relative grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-12' : 'lg:grid-cols-12'} gap-0 
                            rounded-2xl overflow-hidden bg-white/90 backdrop-blur-xl border-2 border-white/60 
                            shadow-lg group-hover:shadow-2xl transition-all duration-500`}>

                                <div className={`relative ${index % 2 === 0 ? 'lg:col-span-3' : 'lg:col-span-3 lg:order-2'} h-full min-h-[280px]`}>
                                    <img
                                        src={alianza.image}
                                        alt={`${alianza.title} - Alianza estratégica para inclusión laboral`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay"
                                        style={{ background: `linear-gradient(135deg, ${alianza.color}, transparent)` }}
                                    />

                                    <div className="absolute bottom-4 left-4">
                                        <div
                                            className="w-14 h-14 rounded-xl backdrop-blur-xl border-2 border-white/40 flex items-center justify-center text-3xl shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                                            style={{ background: `${alianza.color}40` }}
                                            aria-hidden="true"
                                        >
                                            {alianza.icon}
                                        </div>
                                    </div>

                                    <div className="absolute top-4 right-4">
                                        <div
                                            className="px-3 py-1.5 rounded-lg backdrop-blur-xl border border-white/40 font-bold text-white text-sm shadow-xl"
                                            style={{ background: `${alianza.color}90` }}
                                        >
                                            {String(alianza.id).padStart(2, '0')}
                                        </div>
                                    </div>
                                </div>

                                <div className={`${index % 2 === 0 ? 'lg:col-span-9' : 'lg:col-span-9 lg:order-1'} p-8 flex flex-col justify-center`}>

                                    <div className="mb-4">
                                        <h3 className="text-2xl font-black text-slate-900 mb-1 leading-tight">
                                            {alianza.title}
                                        </h3>
                                        <p
                                            className="text-sm font-bold"
                                            style={{ color: alianza.color }}
                                        >
                                            {alianza.subtitle}
                                        </p>
                                    </div>

                                    <p className="text-slate-700 leading-relaxed mb-5">
                                        {alianza.description}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {alianza.beneficios.map((beneficio, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-start gap-2.5 p-3 rounded-lg bg-white/60 border border-slate-200/50
                                   hover:bg-white hover:shadow-sm transition-all duration-300"
                                            >
                                                <div
                                                    className="w-5 h-5 rounded flex-shrink-0 flex items-center justify-center mt-0.5"
                                                    style={{ background: `${alianza.color}30` }}
                                                >
                                                    <svg className="w-3 h-3" style={{ color: alianza.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>

                                                <span className="text-sm font-semibold text-slate-700 leading-relaxed">
                          {beneficio}
                        </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-5">
                                        <div
                                            className="h-1 rounded-full transition-all duration-700"
                                            style={{
                                                width: hoveredId === alianza.id ? '100%' : '60px',
                                                background: alianza.color
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-1000
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="relative p-10 rounded-2xl bg-gradient-to-br from-orange-600 to-amber-600 shadow-2xl overflow-hidden">

                        <div className="absolute inset-0 opacity-10">
                            <svg className="w-full h-full">
                                <defs>
                                    <pattern id="cta-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <circle cx="20" cy="20" r="1" fill="white" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#cta-pattern)" />
                            </svg>
                        </div>

                        <div className="relative text-center">
                            <div className="inline-flex items-center gap-3 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                            </div>

                            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
                                ¿Listo para Ser Parte del Cambio?
                            </h3>

                            <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
                                Convierta su inversión tecnológica en un motor de transformación social.
                                Contacte con nosotros para explorar oportunidades de alianza estratégica.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    to="/contacto"
                                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl
                                bg-white text-orange-600 font-bold text-lg
                                shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                    aria-label="Contactar para alianza estratégica con Punchay"
                                >
                                    <span>Iniciar Conversación</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>

                                <Link
                                    to="/soluciones"
                                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl
                                bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white font-bold text-lg
                                hover:bg-white/20 transition-all duration-300"
                                    aria-label="Ver servicios tecnológicos de Punchay"
                                >
                                    <span>Ver Servicios</span>
                                </Link>
                            </div>

                            <div className="mt-6 text-white/80 text-sm">
                                📧 info@punchay.dev • 📞 +51 934 082 901
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AlianzasTransforman;