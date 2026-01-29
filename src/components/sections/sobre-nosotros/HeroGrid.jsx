import { useRef, useEffect, useState } from 'react';
import heroS1 from "../../../assets/images/nosotros/HeroGrid/s1.webp";
import heroS2 from "../../../assets/images/nosotros/HeroGrid/s2.webp";
import heroS3 from "../../../assets/images/nosotros/HeroGrid/s3.webp";

const HeroGrid = () => {
    const [isInView, setIsInView] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 30,
                y: (e.clientY / window.innerHeight - 0.5) * 30,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const cards = [
        {
            type: 'text',
            icon: 'https://img.icons8.com/ios-filled/100/code.png',
            title: 'Experiencia Real',
            description: 'Fundada por ingenieros que entienden la discapacidad desde la experiencia y la excelencia técnica.',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            type: 'image',
            image: heroS1,
            alt: 'Equipo Punchay trabajando en soluciones de accesibilidad web',
        },
        {
            type: 'text',
            icon: 'https://img.icons8.com/ios-filled/100/accessibility2.png',
            title: 'Código como Equidad',
            description: 'Transformamos el código en una herramienta de equidad global, eliminando barreras digitales.',
            gradient: 'from-indigo-500 to-purple-500',
        },
        {
            type: 'image',
            image: heroS2,
            alt: 'Desarrollo de software inclusivo y accesible',
        },
        {
            type: 'text',
            icon: 'https://img.icons8.com/ios-filled/100/online-support.png',
            title: 'Impacto Medible',
            description: 'Una respuesta concreta a la brecha tecnológica y laboral, con resultados tangibles.',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            type: 'image',
            image: heroS3,
            alt: 'Capacitación técnica inclusiva en tecnología',
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
                        backgroundImage: `radial-gradient(circle, #1e40af 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                    className="absolute inset-0"
                />
            </div>

            <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                </defs>
                <line x1="10%" y1="20%" x2="90%" y2="20%" stroke="url(#lineGradient)" strokeWidth="1" />
                <line x1="10%" y1="80%" x2="90%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1" />
            </svg>

            <div className="container-custom relative z-10">

                <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full
                        bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg">
                        <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                        <span className="text-sm font-bold tracking-wider uppercase text-blue-700">
              El Origen
            </span>
                        <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 leading-tight mb-6">
                        Sobre Nosotros:{' '}
                        <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Ingeniería con ADN Inclusivo
              </span>
                            <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-400/30 via-indigo-400/30 to-purple-400/30
                            blur-lg animate-pulse" />
            </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-neutral-700 max-w-4xl mx-auto leading-relaxed">
                        Punchay no nació solo como una Software Factory, sino como una{' '}
                        <span className="font-bold text-blue-700">respuesta a la brecha tecnológica y laboral</span>.
                        Fundada por ingenieros que entienden la discapacidad desde la experiencia y la excelencia técnica,
                        nuestra misión es{' '}
                        <span className="font-bold text-indigo-700">transformar el código en una herramienta de equidad global</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`group relative transition-all duration-1000
                        ${isInView
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${400 + index * 100}ms` }}
                        >
                            {card.type === 'text' ? (
                                <div className="relative h-full">
                                    <div className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} rounded-2xl blur-xl 
                                opacity-0 group-hover:opacity-30 transition-all duration-500`} />

                                    <div className="relative h-full p-8 rounded-2xl bg-white/90 backdrop-blur-sm
                                border border-neutral-200/50 shadow-xl
                                hover:shadow-2xl hover:border-blue-300/50
                                transform transition-all duration-500 hover:-translate-y-3">

                                        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} 
                                  rounded-t-2xl transform origin-left scale-x-0 
                                  group-hover:scale-x-100 transition-transform duration-500`} />

                                        <div className="relative mb-6 mx-auto w-20 h-20">
                                            <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-xl blur-xl 
                                    opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />

                                            <div className={`relative w-full h-full rounded-xl bg-gradient-to-br ${card.gradient}
                                    flex items-center justify-center
                                    group-hover:scale-110 group-hover:rotate-6 
                                    transition-all duration-500 shadow-lg`}>
                                                <img
                                                    src={card.icon}
                                                    alt=""
                                                    className="w-12 h-12 brightness-0 invert opacity-90"
                                                />
                                            </div>

                                            <div className="absolute inset-0 rounded-xl border-2 border-white/50
                                    group-hover:scale-125 transition-transform duration-500" />
                                        </div>

                                        <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 text-center
                                 group-hover:text-blue-700 transition-colors duration-300">
                                            {card.title}
                                        </h3>

                                        <p className="text-neutral-600 text-center leading-relaxed">
                                            {card.description}
                                        </p>

                                        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-400
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-indigo-400
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                             style={{ transitionDelay: '0.1s' }} />
                                    </div>
                                </div>
                            ) : (
                                <div className="relative h-full group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600
                                rounded-2xl blur-xl opacity-0 group-hover:opacity-40
                                transition-all duration-500" />

                                    <div className="relative h-full rounded-2xl overflow-hidden
                                shadow-xl hover:shadow-2xl
                                transform transition-all duration-500 hover:-translate-y-3
                                border-2 border-white/50 hover:border-blue-300">

                                        <div className="relative h-80 overflow-hidden">
                                            <img
                                                src={card.image}
                                                alt={card.alt}
                                                className="w-full h-full object-cover transform transition-transform duration-700
                                 group-hover:scale-110"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent
                                    opacity-0 group-hover:opacity-100 transition-all duration-500" />

                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                                                 style={{
                                                     backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                                                     backgroundSize: '20px 20px',
                                                 }}
                                            />
                                        </div>

                                        <div className="absolute inset-0 rounded-2xl border border-white/20
                                  group-hover:border-white/40 transition-colors duration-500 pointer-events-none" />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className={`mt-16 text-center transition-all duration-1000 delay-1000
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-3 px-8 py-4 rounded-xl
                        bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-sm font-semibold text-neutral-700">
              Excelencia técnica + Experiencia real en discapacidad = Soluciones verdaderamente inclusivas
            </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroGrid;