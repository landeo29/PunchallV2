import { useRef, useEffect, useState, useMemo } from 'react';
import img1 from '../../../assets/images/responsabilidad/colaboracion/rs (1).webp';
import img2 from '../../../assets/images/responsabilidad/colaboracion/rs (2).webp';
import img3 from '../../../assets/images/responsabilidad/colaboracion/rs (3).webp';
import img4 from '../../../assets/images/responsabilidad/colaboracion/rs (4).webp';
import img5 from '../../../assets/images/responsabilidad/colaboracion/rs (5).webp';

const Colaboraciones = () => {
    const [isInView, setIsInView] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
    const sectionRef = useRef(null);

    const waves = useMemo(() =>
            Array.from({ length: 6 }, (_, i) => ({
                id: i,
                duration: 12 + i * 1.5,
                delay: i * 0.6,
                opacity: 0.03 + (i * 0.015),
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

    const colaboraciones = [
        {
            id: 1,
            title: 'Organizaciones de Inclusión',
            subtitle: 'Desarrollando Proyectos Conjuntos',
            description: 'Trabajamos con organizaciones dedicadas a la inclusión, desarrollando proyectos que abordan barreras tecnológicas y crean soluciones innovadoras.',
            image: img1,
            color: '#a78bfa',
        },
        {
            id: 2,
            title: 'Instituciones Educativas',
            subtitle: 'Empoderando la Próxima Generación',
            description: 'Colaboramos con instituciones educativas ofreciendo programas de capacitación y mentoría a estudiantes con habilidades diversas.',
            image: img2,
            color: '#60a5fa',
        },
        {
            id: 3,
            title: 'Empresas Tecnológicas',
            subtitle: 'Productos Avanzados e Inclusivos',
            description: 'Nos asociamos con empresas líderes desarrollando proyectos que integran accesibilidad desde el diseño inicial.',
            image: img3,
            color: '#22d3ee',
        },
        {
            id: 4,
            title: 'Redes de Innovación',
            subtitle: 'Compartiendo Conocimientos',
            description: 'Formamos parte de redes dedicadas a la innovación inclusiva, compartiendo conocimientos y experiencias.',
            image: img4,
            color: '#34d399',
        },
        {
            id: 5,
            title: 'Gobiernos Locales',
            subtitle: 'Servicios Públicos Accesibles',
            description: 'Colaboramos con gobiernos mejorando infraestructura tecnológica para servicios públicos más accesibles.',
            image: img5,
            color: '#fb923c',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-20 sm:py-24 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50" />

            <div className="absolute inset-0">
                {waves.map((wave) => (
                    <div
                        key={wave.id}
                        className="absolute inset-0"
                        style={{
                            background: `radial-gradient(circle at ${50 + wave.id * 10}% ${50 - wave.id * 5}%, rgba(167, 139, 250, ${wave.opacity}), transparent 60%)`,
                            animation: `pulse ${wave.duration}s ease-in-out infinite`,
                            animationDelay: `${wave.delay}s`,
                        }}
                    />
                ))}
            </div>

            <div
                className="absolute inset-0 opacity-15 transition-all duration-700"
                style={{
                    background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, 
                      rgba(167, 139, 250, 0.2) 0%, 
                      rgba(96, 165, 250, 0.1) 30%, 
                      transparent 60%)`,
                }}
            />

            <div className="absolute inset-0 opacity-[0.015]">
                <svg className="w-full h-full">
                    <defs>
                        <pattern id="collab-mesh" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M0 30 L60 30 M30 0 L30 60" stroke="#a78bfa" strokeWidth="0.5" />
                            <circle cx="30" cy="30" r="1.5" fill="#a78bfa" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#collab-mesh)" />
                </svg>
            </div>

            <div className="container-custom relative z-10">

                <div className={`text-center mb-16 transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-white/70 backdrop-blur-xl border border-purple-200/50 shadow-lg">
                        <div className="flex gap-2">
                            {[0, 1, 2].map((i) => (
                                <div
                                    key={i}
                                    className="w-1.5 h-1.5 rounded-full"
                                    style={{
                                        background: ['#a78bfa', '#60a5fa', '#22d3ee'][i],
                                        animation: 'pulse 2s infinite',
                                        animationDelay: `${i * 0.2}s`
                                    }}
                                />
                            ))}
                        </div>
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-purple-700">
              Alianzas Estratégicas
            </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-4">
                        Colaboraciones que
                        <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
              Transforman
            </span>
                    </h2>

                    <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
                        El poder de las alianzas estratégicas amplía nuestro impacto y promueve la inclusión tecnológica
                    </p>
                </div>

                <div className="max-w-6xl mx-auto space-y-10">
                    {colaboraciones.map((colab, index) => (
                        <div
                            key={colab.id}
                            onMouseEnter={() => setActiveIndex(index)}
                            className={`group relative transition-all duration-1000
                        ${isInView
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 translate-x-10'
                            }`}
                            style={{ transitionDelay: `${300 + index * 120}ms` }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <div className="relative">
                                        <div
                                            className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-500"
                                            style={{ background: `${colab.color}60` }}
                                        />

                                        <div className="relative rounded-3xl overflow-hidden border-3 border-white/60 shadow-xl">
                                            <img
                                                src={colab.image}
                                                alt={colab.title}
                                                className="w-full h-auto transition-all duration-700 group-hover:scale-105"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />

                                            <div className="absolute bottom-4 left-4">
                                                <div
                                                    className="px-4 py-2 rounded-xl backdrop-blur-xl border border-white/40 font-bold text-white shadow-xl"
                                                    style={{ background: `${colab.color}90` }}
                                                >
                                                    {String(colab.id).padStart(2, '0')}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <div className="space-y-4">
                                        <div
                                            className="inline-block w-16 h-1 rounded-full transition-all duration-500"
                                            style={{
                                                background: colab.color,
                                                width: activeIndex === index ? '80px' : '64px'
                                            }}
                                        />

                                        <div>
                                            <h3 className="text-3xl font-black text-slate-900 leading-tight mb-1">
                                                {colab.title}
                                            </h3>
                                            <p className="text-base font-semibold text-slate-500">
                                                {colab.subtitle}
                                            </p>
                                        </div>

                                        <p className="text-base text-slate-700 leading-relaxed">
                                            {colab.description}
                                        </p>

                                        <div className="flex items-center gap-3 pt-2">
                                            <div
                                                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500"
                                                style={{
                                                    background: `${colab.color}20`,
                                                    transform: activeIndex === index ? 'scale(1.1) rotate(8deg)' : 'scale(1)'
                                                }}
                                            >
                                                <svg className="w-5 h-5" style={{ color: colab.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </div>
                                            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Colaboración Activa
                      </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Colaboraciones;