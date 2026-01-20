import { useRef, useEffect, useState } from 'react';
import imgSoftware from '../../../assets/images/soluciones/HeroSoluciones/porsicaso_11zon.webp';
import imgApps from '../../../assets/images/soluciones/HeroSoluciones/Desarrollo de apps_11zon.webp';
import imgWeb from '../../../assets/images/soluciones/HeroSoluciones/Diseño Webs .webp';
import imgConsultoria from '../../../assets/images/soluciones/HeroSoluciones/consultoria-en-administracion-de-pagina_11zon_11zon (1).webp';
import imgAccesibilidad from '../../../assets/images/soluciones/HeroSoluciones/consultoria-en-acesibilidad_11zon_11zon.webp';
import imgSoporte from '../../../assets/images/soluciones/HeroSoluciones/services (3).webp';
import imgInnovacion from '../../../assets/images/soluciones/HeroSoluciones/innovación-y-desarrollo-tecnologico (1).webp';

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

    const soluciones = [
        {
            id: 1,
            title: 'Desarrollo de Software Avanzado',
            description: 'Creamos soluciones de software a medida que se adaptan a las necesidades específicas de tu negocio, garantizando una experiencia de usuario excepcional.',
            image: imgSoftware,
            color: '#3b82f6',
        },
        {
            id: 2,
            title: 'Desarrollo de Aplicaciones Móviles',
            description: 'Diseñamos aplicaciones móviles para iOS y Android que ofrecen una experiencia de usuario fluida y moderna, asegurando los más altos estándares de calidad.',
            image: imgApps,
            color: '#8b5cf6',
        },
        {
            id: 3,
            title: 'Creación de Páginas Web',
            description: 'Desarrollamos sitios web atractivos, funcionales y fáciles de usar, optimizados para un rendimiento eficiente y una navegación sin complicaciones.',
            image: imgWeb,
            color: '#06b6d4',
        },
        {
            id: 4,
            title: 'Consultoría en Administración de Páginas Web',
            description: 'Ofrecemos consultoría para la administración de tus páginas web, incluyendo actualización de certificados SSL, correos electrónicos corporativos, y medidas de seguridad.',
            image: imgConsultoria,
            color: '#10b981',
        },
        {
            id: 5,
            title: 'Consultoría en Accesibilidad',
            description: 'Te ayudamos a mejorar la accesibilidad de tus plataformas digitales para que sean inclusivas y cumplan con las normativas vigentes.',
            image: imgAccesibilidad,
            color: '#f59e0b',
        },
        {
            id: 6,
            title: 'Soporte y Mantenimiento',
            description: 'Ofrecemos soporte técnico continuo y mantenimiento para asegurar que tus soluciones tecnológicas funcionen sin problemas.',
            image: imgSoporte,
            color: '#ec4899',
        },
        {
            id: 7,
            title: 'Innovación y Desarrollo Tecnológico',
            description: 'Implementamos tecnologías emergentes, como inteligencia artificial y machine learning, para mantener tus soluciones a la vanguardia.',
            image: imgInnovacion,
            color: '#6366f1',
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

                <div className={`text-center mb-16 max-w-4xl mx-auto transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-white/70 backdrop-blur-xl border border-violet-200/50 shadow-lg">
                        <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-violet-700">
              Nuestras Soluciones
            </span>
                        <div className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] mb-6">
                        <span className="text-slate-900">Soluciones</span>
                        <br />
                        <span className="relative inline-block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600">
                Tecnológicas
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-violet-400/30 blur-lg" />
            </span>
                    </h1>

                    <p className="text-xl text-slate-700 leading-relaxed">
                        En Punchay, ofrecemos una amplia gama de soluciones tecnológicas diseñadas para satisfacer las necesidades de tu negocio.
                        Desde el desarrollo de software hasta la gestión integral de tus plataformas digitales, estamos aquí para ayudarte a alcanzar
                        tus objetivos con soluciones innovadoras y de alta calidad.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        {soluciones.slice(0, 2).map((solucion, index) => (
                            <div
                                key={solucion.id}
                                onMouseEnter={() => setHoveredId(solucion.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className={`group relative transition-all duration-1000
                          ${isInView
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                                }`}
                                style={{ transitionDelay: `${300 + index * 100}ms` }}
                            >
                                <div
                                    className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500"
                                    style={{ background: `${solucion.color}40` }}
                                />

                                <div className="relative h-full rounded-3xl overflow-hidden bg-white/85 backdrop-blur-xl border-2 border-white/60 shadow-lg group-hover:shadow-2xl transition-all duration-500">

                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={solucion.image}
                                            alt={solucion.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-500 mix-blend-overlay"
                                            style={{ background: `linear-gradient(135deg, ${solucion.color}, transparent)` }}
                                        />

                                        <div className="absolute top-6 left-6">
                                            <div
                                                className="px-4 py-2 rounded-xl backdrop-blur-xl border-2 border-white/40 font-bold text-white shadow-xl"
                                                style={{ background: `${solucion.color}90` }}
                                            >
                                                {String(solucion.id).padStart(2, '0')}
                                            </div>
                                        </div>

                                        <div className="absolute top-6 right-6">
                                            <div
                                                className="w-12 h-12 rounded-xl backdrop-blur-xl border border-white/30 flex items-center justify-center transition-transform duration-500 group-hover:rotate-90"
                                                style={{ background: `${solucion.color}15` }}
                                            >
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <h3 className="text-2xl font-black text-slate-900 mb-3 leading-tight">
                                            {solucion.title}
                                        </h3>

                                        <p className="text-slate-600 leading-relaxed mb-6">
                                            {solucion.description}
                                        </p>

                                        <div className="flex items-center gap-2">
                                            <div
                                                className="h-1.5 rounded-full transition-all duration-500"
                                                style={{
                                                    width: hoveredId === solucion.id ? '100%' : '50px',
                                                    background: solucion.color
                                                }}
                                            />
                                            <div
                                                className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                                                style={{
                                                    background: solucion.color,
                                                    transform: hoveredId === solucion.id ? 'scale(1.5)' : 'scale(1)'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {soluciones.slice(2).map((solucion, index) => (
                            <div
                                key={solucion.id}
                                onMouseEnter={() => setHoveredId(solucion.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className={`group relative transition-all duration-1000
                          ${isInView
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                                }`}
                                style={{ transitionDelay: `${500 + index * 100}ms` }}
                            >
                                <div
                                    className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500"
                                    style={{ background: `${solucion.color}40` }}
                                />

                                <div className="relative h-full rounded-2xl overflow-hidden bg-white/85 backdrop-blur-xl border-2 border-white/60 shadow-lg group-hover:shadow-2xl transition-all duration-500">

                                    <div className="relative h-52 overflow-hidden">
                                        <img
                                            src={solucion.image}
                                            alt={solucion.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-500 mix-blend-overlay"
                                            style={{ background: `linear-gradient(135deg, ${solucion.color}, transparent)` }}
                                        />

                                        <div className="absolute top-4 left-4">
                                            <div
                                                className="px-3 py-1.5 rounded-lg backdrop-blur-xl border border-white/40 font-bold text-white text-sm shadow-xl"
                                                style={{ background: `${solucion.color}90` }}
                                            >
                                                {String(solucion.id).padStart(2, '0')}
                                            </div>
                                        </div>

                                        <div className="absolute top-4 right-4">
                                            <div
                                                className="w-10 h-10 rounded-lg backdrop-blur-xl border border-white/30 flex items-center justify-center transition-transform duration-500 group-hover:rotate-90"
                                                style={{ background: `${solucion.color}15` }}
                                            >
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-black text-slate-900 mb-3 leading-tight">
                                            {solucion.title}
                                        </h3>

                                        <p className="text-slate-600 leading-relaxed text-sm mb-4">
                                            {solucion.description}
                                        </p>

                                        <div className="flex items-center gap-2">
                                            <div
                                                className="h-1 rounded-full transition-all duration-500"
                                                style={{
                                                    width: hoveredId === solucion.id ? '100%' : '40px',
                                                    background: solucion.color
                                                }}
                                            />
                                            <div
                                                className="w-2 h-2 rounded-full transition-all duration-300"
                                                style={{
                                                    background: solucion.color,
                                                    transform: hoveredId === solucion.id ? 'scale(1.5)' : 'scale(1)'
                                                }}
                                            />
                                        </div>
                                    </div>
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