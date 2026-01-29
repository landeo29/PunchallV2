import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Imágenes para los 6 nuevos servicios
import imgAuditoria from '../../../assets/images/soluciones/HeroSoluciones/consultoria-en-acesibilidad_11zon_11zon.webp';
import imgDesarrollo from '../../../assets/images/soluciones/HeroSoluciones/Desarrollo de apps_11zon.webp';
import imgRemediacion from '../../../assets/images/soluciones/HeroSoluciones/porsicaso_11zon.webp';
import imgOutsourcing from '../../../assets/images/soluciones/HeroSoluciones/Diseño Webs .webp';
import imgConsultoria from '../../../assets/images/soluciones/HeroSoluciones/consultoria-en-administracion-de-pagina_11zon_11zon (1).webp';
import imgCertificacion from '../../../assets/images/soluciones/HeroSoluciones/services (3).webp';

const HeroSoluciones = () => {
    const [isInView, setIsInView] = useState(false);
    const [hoveredId, setHoveredId] = useState(null);
    const [scrollY, setScrollY] = useState(0);
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
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const servicios = [
        {
            id: 1,
            title: 'Auditoría de Accesibilidad',
            description: 'Diagnóstico exhaustivo de activos digitales bajo estándares WCAG 2.1/2.2, ADA y EN 301 549. Identificamos barreras críticas y entregamos una hoja de ruta técnica para la certificación.',
            image: imgAuditoria,
            color: '#3b82f6',
            icon: '🔍',
        },
        {
            id: 2,
            title: 'Desarrollo de Software "Inclusion by Design"',
            description: 'Creación de aplicaciones móviles y plataformas web desde cero con accesibilidad nativa. Construimos arquitecturas robustas donde la inclusión es la base del diseño, no un añadido posterior.',
            image: imgDesarrollo,
            color: '#8b5cf6',
            icon: '💻',
        },
        {
            id: 3,
            title: 'Remediación de Código',
            description: 'Intervención técnica en sistemas existentes para corregir errores de semántica HTML, etiquetas ARIA y gestión de foco. Llevamos su tecnología actual a niveles óptimos de cumplimiento legal.',
            image: imgRemediacion,
            color: '#06b6d4',
            icon: '🔧',
        },
        {
            id: 4,
            title: 'Células de Outsourcing Inclusivo',
            description: 'Proporcionamos equipos de ingeniería (Frontend, Backend, QA) integrados por talento diverso altamente capacitado, trabajando bajo metodologías ágiles (Scrum) con enfoque en accesibilidad.',
            image: imgOutsourcing,
            color: '#10b981',
            icon: '👥',
        },
        {
            id: 5,
            title: 'Consultoría Estratégica RR.HH. / TI',
            description: 'Asesoría especializada para la creación de entornos de trabajo digitales accesibles y procesos de selección inclusivos. Ayudamos a integrar talento con discapacidad en equipos de alto rendimiento.',
            image: imgConsultoria,
            color: '#f59e0b',
            icon: '📊',
        },
        {
            id: 6,
            title: 'Certificación Anual de Accesibilidad',
            description: 'Programa de mantenimiento y vigilancia continua. Realizamos auditorías trimestrales para asegurar que las actualizaciones de su software mantengan los niveles de cumplimiento y renovamos su Sello de Accesibilidad Punchay.',
            image: imgCertificacion,
            color: '#ec4899',
            icon: '✅',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative pt-32 pb-20 sm:pb-28 lg:pb-32 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50" />

            <div
                className="absolute inset-0 opacity-50"
                style={{
                    transform: `translateY(${scrollY * 0.3}px)`,
                }}
            >
                <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-gradient-to-br from-violet-300/30 to-fuchsia-300/30 rounded-full blur-[120px] animate-pulse"
                     style={{ animationDuration: '12s' }} />
                <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-gradient-to-br from-pink-300/30 to-rose-300/30 rounded-full blur-[120px] animate-pulse"
                     style={{ animationDuration: '15s', animationDelay: '3s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-fuchsia-300/20 to-violet-300/20 rounded-full blur-[140px] animate-pulse"
                     style={{ animationDuration: '18s', animationDelay: '6s' }} />
            </div>

            <div className="absolute inset-0">
                <svg className="w-full h-full opacity-[0.03]">
                    <defs>
                        <pattern id="sol-pattern" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
                            <circle cx="75" cy="75" r="2" fill="#a855f7" />
                            <circle cx="0" cy="0" r="1" fill="#ec4899" />
                            <circle cx="150" cy="0" r="1" fill="#d946ef" />
                            <circle cx="0" cy="150" r="1" fill="#c026d3" />
                            <circle cx="150" cy="150" r="1" fill="#a855f7" />
                            <path d="M0 75 Q75 50, 150 75 T300 75" stroke="#d946ef" strokeWidth="0.5" fill="none" opacity="0.4" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#sol-pattern)" />
                </svg>
            </div>

            <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${5 + (i * 6.5)}%`,
                            top: `${8 + (i % 3) * 30}%`,
                            width: '140px',
                            height: '140px',
                            background: `radial-gradient(circle, ${['#a855f720', '#ec489920', '#d946ef20'][i % 3]}, transparent)`,
                            borderRadius: '43% 57% 48% 52% / 58% 39% 61% 42%',
                            animation: `morph ${12 + i * 1.5}s ease-in-out infinite`,
                            animationDelay: `${i * 0.4}s`,
                        }}
                    />
                ))}
            </div>

            <div className="container-custom relative z-10">

                <div className={`text-center mb-16 max-w-5xl mx-auto transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-white/70 backdrop-blur-xl border border-violet-200/50 shadow-lg">
                        <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-violet-700">
              El Portafolio de Servicios
            </span>
                        <div className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
                        <span className="text-slate-900">Soluciones Tecnológicas con</span>
                        <br />
                        <span className="relative inline-block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600">
                Estándares Globales de Inclusión
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-violet-400/30 blur-lg" />
            </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-6">
                        Transformamos la accesibilidad en una{' '}
                        <span className="font-bold text-violet-700">ventaja competitiva</span>.
                        Ofrecemos ingeniería de software de élite que garantiza el cumplimiento normativo{' '}
                        <span className="font-bold text-fuchsia-700">(WCAG 2.1 / Ley 29973)</span> y
                        maximiza el retorno de su inversión tecnológica.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 backdrop-blur-sm border border-violet-200/50">
                            <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span className="text-sm font-bold text-slate-700">WCAG 2.1/2.2</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 backdrop-blur-sm border border-fuchsia-200/50">
                            <svg className="w-5 h-5 text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                            </svg>
                            <span className="text-sm font-bold text-slate-700">Ley 29973</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 backdrop-blur-sm border border-pink-200/50">
                            <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            <span className="text-sm font-bold text-slate-700">ROI Máximo</span>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {servicios.map((servicio, index) => (
                            <div
                                key={servicio.id}
                                onMouseEnter={() => setHoveredId(servicio.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className={`group relative transition-all duration-1000
                          ${isInView
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                                }`}
                                style={{ transitionDelay: `${400 + index * 100}ms` }}
                            >
                                <div
                                    className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500"
                                    style={{ background: `${servicio.color}40` }}
                                />

                                <div className="relative h-full rounded-2xl overflow-hidden bg-white/85 backdrop-blur-xl border-2 border-white/60 shadow-lg group-hover:shadow-2xl transition-all duration-500">

                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={servicio.image}
                                            alt={`${servicio.title} - Servicio de accesibilidad web`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-500 mix-blend-overlay"
                                            style={{ background: `linear-gradient(135deg, ${servicio.color}, transparent)` }}
                                        />

                                        <div className="absolute top-4 left-4">
                                            <div
                                                className="px-3 py-1.5 rounded-lg backdrop-blur-xl border border-white/40 font-bold text-white text-sm shadow-xl"
                                                style={{ background: `${servicio.color}90` }}
                                            >
                                                {String(servicio.id).padStart(2, '0')}
                                            </div>
                                        </div>

                                        <div className="absolute top-4 right-4">
                                            <div
                                                className="w-10 h-10 rounded-lg backdrop-blur-xl border border-white/30 flex items-center justify-center text-xl transition-transform duration-500 group-hover:rotate-12"
                                                style={{ background: `${servicio.color}20` }}
                                                aria-hidden="true"
                                            >
                                                {servicio.icon}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-lg font-black text-slate-900 mb-3 leading-tight">
                                            {servicio.title}
                                        </h3>

                                        <p className="text-slate-600 leading-relaxed text-sm mb-4">
                                            {servicio.description}
                                        </p>

                                        <Link
                                            to="/contacto"
                                            className="inline-flex items-center gap-2 text-sm font-bold transition-colors duration-300"
                                            style={{ color: servicio.color }}
                                            aria-label={`Solicitar cotización para ${servicio.title}`}
                                        >
                                            <span>Solicitar Cotización</span>
                                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>

                                    <div
                                        className="h-1 transition-all duration-500"
                                        style={{
                                            width: hoveredId === servicio.id ? '100%' : '0%',
                                            background: servicio.color
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSoluciones;