import { useRef, useEffect, useState, useMemo } from 'react';
import img1 from '../../../assets/images/responsabilidad/iniciativas/RS (8).webp';
import img2 from '../../../assets/images/responsabilidad/iniciativas/RS (6).webp';
import img3 from '../../../assets/images/responsabilidad/iniciativas/RS (7).webp';

const ModeloImpacto = () => {
    const [isInView, setIsInView] = useState(false);
    const [hoveredId, setHoveredId] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
    const sectionRef = useRef(null);

    const particles = useMemo(() =>
            Array.from({ length: 12 }, (_, i) => ({
                id: i,
                left: 8 + (i * 8),
                top: 10 + (i % 3) * 30,
                color: ['#10b98120', '#14b8a620', '#06b6d420'][i % 3],
                duration: 10 + i * 1.5,
                delay: i * 0.4,
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

    const pilares = [
        {
            id: 1,
            numero: '01',
            title: 'Educación Tecnológica Sin Barreras',
            subtitle: 'Formación Intensiva de Alto Nivel',
            description: 'Financiamos programas de formación intensiva en desarrollo de software, accesibilidad digital y QA para personas con discapacidad en situación de vulnerabilidad.',
            beneficios: [
                'Bootcamps intensivos de 6 meses',
                'Desarrollo web, móvil y accesibilidad',
                'Control de calidad (QA) especializado',
                'Certificaciones profesionales incluidas'
            ],
            image: img1,
            color: '#10b981',
            icon: '📚',
        },
        {
            id: 2,
            numero: '02',
            title: 'Validación de Experiencia Real',
            subtitle: 'Práctica en Proyectos Comerciales',
            description: 'Nuestros estudiantes no solo aprenden; practican en proyectos reales de Punchay, garantizando que su formación cumpla con los estándares de calidad que el mercado exige.',
            beneficios: [
                'Trabajo en proyectos reales de clientes',
                'Mentoría de ingenieros senior',
                'Metodologías ágiles (Scrum)',
                'Portfolio profesional verificable'
            ],
            image: img2,
            color: '#14b8a6',
            icon: '✅',
        },
        {
            id: 3,
            numero: '03',
            title: 'Puente de Empleabilidad',
            subtitle: 'Conexión Estratégica con Empresas',
            description: 'Actuamos como un conector estratégico. Colocamos a nuestros graduados en empresas aliadas, ayudando al sector corporativo a cubrir su cuota laboral con talento altamente productivo.',
            beneficios: [
                'Red de empresas aliadas activas',
                'Cumplimiento de cuota laboral Ley 29973',
                'Talento certificado y validado',
                'Seguimiento post-contratación'
            ],
            image: img3,
            color: '#06b6d4',
            icon: '🚀',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-20 sm:py-24 lg:py-28 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" />

            <div
                className="absolute inset-0 opacity-30 transition-opacity duration-700"
                style={{
                    background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, 
                      rgba(16, 185, 129, 0.15) 0%, 
                      rgba(20, 184, 166, 0.1) 40%, 
                      transparent 70%)`,
                }}
            />

            <div className="absolute inset-0 opacity-[0.015]">
                <svg className="w-full h-full">
                    <defs>
                        <pattern id="modelo-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                            <circle cx="40" cy="40" r="1.5" fill="#10b981" />
                            <path d="M0 40 L80 40 M40 0 L40 80" stroke="#14b8a6" strokeWidth="0.5" opacity="0.2" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#modelo-pattern)" />
                </svg>
            </div>

            <div className="absolute inset-0 pointer-events-none">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="absolute"
                        style={{
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                            width: '120px',
                            height: '120px',
                            background: `radial-gradient(circle, ${particle.color}, transparent)`,
                            borderRadius: '45% 55% 60% 40% / 50% 45% 55% 50%',
                            animation: `morph ${particle.duration}s ease-in-out infinite`,
                            animationDelay: `${particle.delay}s`,
                        }}
                    />
                ))}
            </div>

            <div className="container-custom relative z-10">

                <div className={`text-center mb-16 max-w-4xl mx-auto transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-xl border border-emerald-200/50 shadow-lg">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-700">
              El Ciclo de Valor
            </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-4">
                        Nuestro Modelo de
                        <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              Impacto Social
            </span>
                    </h2>

                    <p className="text-lg text-slate-700 leading-relaxed">
                        Un ciclo virtuoso que transforma la inversión tecnológica en oportunidades reales
                        de desarrollo profesional y empleabilidad para talento diverso.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto space-y-12">
                    {pilares.map((pilar, index) => (
                        <div
                            key={pilar.id}
                            onMouseEnter={() => setHoveredId(pilar.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className={`group relative transition-all duration-1000
                        ${isInView
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${300 + index * 150}ms` }}
                        >
                            <div
                                className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700"
                                style={{ background: `${pilar.color}60` }}
                            />

                            <div className={`relative grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-12' : 'lg:grid-cols-12'} gap-6 
                            rounded-2xl overflow-hidden bg-white/90 backdrop-blur-xl border-2 border-white/60 
                            shadow-lg group-hover:shadow-2xl transition-all duration-500`}>

                                <div className={`relative ${index % 2 === 0 ? 'lg:col-span-5' : 'lg:col-span-5 lg:order-2'} h-full min-h-[300px]`}>
                                    <img
                                        src={pilar.image}
                                        alt={`${pilar.title} - Estudiantes con discapacidad en programa de formación tecnológica`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />

                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay"
                                        style={{ background: `linear-gradient(135deg, ${pilar.color}, transparent)` }}
                                    />

                                    <div className="absolute bottom-6 left-6">
                                        <div
                                            className="w-16 h-16 rounded-xl backdrop-blur-xl border-2 border-white/40 flex items-center justify-center text-3xl shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                                            style={{ background: `${pilar.color}40` }}
                                            aria-hidden="true"
                                        >
                                            {pilar.icon}
                                        </div>
                                    </div>

                                    <div className="absolute top-6 right-6">
                                        <div
                                            className="px-4 py-2 rounded-lg backdrop-blur-xl border border-white/40 font-black text-white text-lg shadow-xl"
                                            style={{ background: `${pilar.color}90` }}
                                        >
                                            {pilar.numero}
                                        </div>
                                    </div>
                                </div>

                                <div className={`${index % 2 === 0 ? 'lg:col-span-7' : 'lg:col-span-7 lg:order-1'} p-8 flex flex-col justify-center`}>

                                    <div className="mb-6">
                                        <h3 className="text-3xl font-black text-slate-900 mb-2 leading-tight">
                                            {pilar.title}
                                        </h3>
                                        <p
                                            className="text-base font-bold"
                                            style={{ color: pilar.color }}
                                        >
                                            {pilar.subtitle}
                                        </p>
                                    </div>

                                    <p className="text-slate-700 leading-relaxed mb-6 text-base">
                                        {pilar.description}
                                    </p>

                                    <div className="space-y-3">
                                        <p className="text-xs font-bold tracking-wider uppercase text-slate-600 flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full" style={{ background: pilar.color }} />
                                            Incluye
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {pilar.beneficios.map((beneficio, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-start gap-3 p-3 rounded-lg bg-white/60 border border-slate-200/50
                                   hover:bg-white hover:shadow-sm transition-all duration-300"
                                                >
                                                    <div
                                                        className="w-5 h-5 rounded flex-shrink-0 flex items-center justify-center mt-0.5"
                                                        style={{ background: `${pilar.color}30` }}
                                                    >
                                                        <svg className="w-3 h-3" style={{ color: pilar.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>

                                                    <span className="text-sm font-semibold text-slate-700 leading-relaxed">
                            {beneficio}
                          </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <div
                                            className="h-1 rounded-full transition-all duration-700"
                                            style={{
                                                width: hoveredId === pilar.id ? '100%' : '80px',
                                                background: pilar.color
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`mt-16 max-w-4xl mx-auto transition-all duration-1000 delay-1000
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl border-2 border-emerald-200/50 shadow-xl">

                        <div className="absolute -top-4 left-8">
                            <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-sm shadow-xl flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                <span>El Ciclo Virtuoso</span>
                            </div>
                        </div>

                        <div className="mt-4 text-center">
                            <h3 className="text-2xl font-black text-slate-900 mb-4">
                                De la Formación al Empleo: Un Camino Completo
                            </h3>

                            <p className="text-slate-700 leading-relaxed mb-6">
                                Cada proyecto que desarrollamos genera ingresos que reinvertimos directamente en estos tres pilares.
                                Los estudiantes formados trabajan en proyectos reales, se validan profesionalmente, y son colocados
                                en empresas que valoran el talento diverso. <span className="font-bold text-emerald-700">
                                Es un modelo autosostenible que escala el impacto social con cada cliente que nos elige.
                            </span>
                            </p>

                            <div className="flex flex-wrap items-center justify-center gap-3">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-50 border border-emerald-200">
                                    <span className="text-2xl" aria-hidden="true">📚</span>
                                    <span className="text-sm font-bold text-slate-700">Educación</span>
                                </div>
                                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-50 border border-teal-200">
                                    <span className="text-2xl" aria-hidden="true">✅</span>
                                    <span className="text-sm font-bold text-slate-700">Validación</span>
                                </div>
                                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-50 border border-cyan-200">
                                    <span className="text-2xl" aria-hidden="true">🚀</span>
                                    <span className="text-sm font-bold text-slate-700">Empleabilidad</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ModeloImpacto;