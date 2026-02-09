import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import slider1 from '../../../assets/images/index/Hero/silder1.webp';
import slider2 from '../../../assets/images/index/Hero/slider2.webp';
import slider3 from '../../../assets/images/index/Hero/slider3.webp';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const slides = [
        {
            id: 1,
            image: slider1,
            badge: '🎯 Cumplimiento Legal',
            title: ['Ingeniería de Software', 'Inclusiva'],
            highlight: 'Inclusiva',
            subtitle: 'Elevamos su Estándar Tecnológico y Legal',
            description: 'En Punchay, desarrollamos software y aplicaciones móviles con accesibilidad nativa. Ayudamos a su empresa a cumplir con la Ley 29973 (WCAG 2.1) y a maximizar sus beneficios tributarios mediante soluciones digitales de alto impacto.',
            ctaPrimary: 'Solicitar Auditoría de Accesibilidad',
            ctaPrimaryLink: '/contacto',
            ctaSecondary: 'Ver Portafolio de Soluciones',
            ctaSecondaryLink: '/soluciones',
            accentColor: 'from-blue-500 to-cyan-500',
        },
        {
            id: 2,
            image: slider2,
            badge: '✅ Certificación WCAG',
            title: ['Diagnóstico y', 'Certificación'],
            highlight: 'Certificación',
            subtitle: 'Identifique Barreras Digitales',
            description: 'Identificación de barreras digitales y entrega del Sello de Accesibilidad Punchay. Auditorías validadas por ingenieros certificados con experiencia real en discapacidad.',
            ctaPrimary: 'Solicitar Diagnóstico',
            ctaPrimaryLink: '/contacto',
            ctaSecondary: 'Conocer Más',
            ctaSecondaryLink: '/soluciones',
            accentColor: 'from-indigo-500 to-purple-500',
        },
        {
            id: 3,
            image: slider3,
            badge: '⚡ Remediación',
            title: ['Corrección de', 'Código'],
            highlight: 'Código',
            subtitle: 'Supere Estándares INDECOPI',
            description: 'Corrección de errores críticos en ARIA, semántica HTML y nombres accesibles. Creación de productos digitales que superan los estándares de INDECOPI desde la primera línea de código.',
            ctaPrimary: 'Solicitar Remediación',
            ctaPrimaryLink: '/contacto',
            ctaSecondary: 'Ver Stack Tecnológico',
            ctaSecondaryLink: '#tech-stack',
            accentColor: 'from-purple-500 to-pink-500',
        }
    ];

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

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 7000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <section
            id="inicio"
            className="relative w-full h-screen overflow-hidden bg-neutral-900"
            aria-label="Slider principal de servicios de accesibilidad web"
        >
            <div className="relative h-full w-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
                      ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        aria-hidden={index !== currentSlide}
                    >
                        <div
                            className="absolute inset-0 transition-transform duration-500"
                            style={{
                                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) scale(1.1)`,
                            }}
                        >
                            <img
                                src={slide.image}
                                alt={`${slide.title.join(' ')} - Soluciones de accesibilidad web WCAG 2.1`}
                                className="w-full h-full object-cover object-center"
                                loading={index === 0 ? "eager" : "lazy"}
                            />

                            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/50" />

                            <div className={`absolute inset-0 bg-gradient-to-r ${slide.accentColor} opacity-10 mix-blend-overlay`} />
                        </div>

                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            {[...Array(15)].map((_, i) => (
                                <div
                                    key={`particle-${i}`}
                                    className={`absolute w-2 h-2 rounded-full bg-gradient-to-br ${slide.accentColor} opacity-30 blur-sm
                            ${index === currentSlide ? 'animate-float' : 'opacity-0'}`}
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                        animationDelay: `${Math.random() * 5}s`,
                                        animationDuration: `${8 + Math.random() * 7}s`,
                                    }}
                                />
                            ))}

                            <div
                                className={`absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br ${slide.accentColor} opacity-20 blur-3xl
                          ${index === currentSlide ? 'animate-pulse' : 'opacity-0'}`}
                                style={{ animationDuration: '4s' }}
                            />
                            <div
                                className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr ${slide.accentColor} opacity-15 blur-3xl
                          ${index === currentSlide ? 'animate-pulse' : 'opacity-0'}`}
                                style={{ animationDuration: '5s', animationDelay: '1s' }}
                            />
                        </div>

                        <div className="absolute inset-0 opacity-[0.02]"
                             style={{
                                 backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                                 backgroundSize: '50px 50px',
                             }}
                        />

                        <div className="relative z-20 h-full flex items-center">
                            <div className="container-custom w-full">
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                                    <div className="lg:col-span-7 space-y-6 sm:space-y-8">

                                        <div
                                            className={`inline-flex items-center gap-3 px-5 py-3 rounded-full
                                bg-white/10 backdrop-blur-md border border-white/20
                                transition-all duration-1000 delay-100
                                ${index === currentSlide
                                                ? 'opacity-100 translate-y-0'
                                                : 'opacity-0 translate-y-10'}`}
                                        >
                                            <span className="text-xl">{slide.badge.split(' ')[0]}</span>
                                            <span className="text-white font-bold text-sm tracking-wide">
                        {slide.badge.split(' ').slice(1).join(' ')}
                      </span>
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${slide.accentColor} animate-pulse`} />
                                        </div>

                                        <div className="space-y-3">
                                            {slide.title.map((line, lineIndex) => (
                                                <h1
                                                    key={lineIndex}
                                                    className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                                    font-display font-black leading-none
                                    transition-all duration-1000
                                    ${index === currentSlide
                                                        ? 'opacity-100 translate-x-0'
                                                        : 'opacity-0 -translate-x-10'}`}
                                                    style={{ transitionDelay: `${200 + lineIndex * 150}ms` }}
                                                >
                          <span className={line === slide.highlight
                              ? `bg-gradient-to-r ${slide.accentColor} bg-clip-text text-transparent`
                              : 'text-white'}>
                            {line}
                          </span>
                                                </h1>
                                            ))}

                                            <p
                                                className={`text-2xl sm:text-3xl text-white/80 font-semibold leading-tight
                                    transition-all duration-1000 delay-400
                                    ${index === currentSlide
                                                    ? 'opacity-100 translate-x-0'
                                                    : 'opacity-0 -translate-x-10'}`}
                                            >
                                                {slide.subtitle}
                                            </p>
                                        </div>

                                        <div
                                            className={`flex items-center gap-3 transition-all duration-1000 delay-500
                                ${index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                                        >
                                            <div className={`h-1 bg-gradient-to-r ${slide.accentColor} rounded-full w-16 shadow-lg shadow-blue-500/50`} />
                                            <div className="h-px bg-white/20 w-16" />
                                        </div>

                                        <p
                                            className={`text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl
                                font-light tracking-wide
                                transition-all duration-1000 delay-700
                                ${index === currentSlide
                                                ? 'opacity-100 translate-x-0'
                                                : 'opacity-0 -translate-x-10'}`}
                                        >
                                            {slide.description}
                                        </p>

                                        <div
                                            className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4
                                transition-all duration-1000 delay-900
                                ${index === currentSlide
                                                ? 'opacity-100 translate-x-0'
                                                : 'opacity-0 -translate-x-10'}`}
                                        >

                                            <Link
                                                to={slide.ctaPrimaryLink}
                                                className="group relative inline-flex items-center gap-3 overflow-hidden"
                                                aria-label={slide.ctaPrimary}
                                            >

                                                <div className={`absolute -inset-2 bg-gradient-to-r ${slide.accentColor} rounded-2xl blur-xl 
                                      opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse`} />

                                                <div className={`relative flex items-center gap-3 px-8 py-4 
                                      bg-gradient-to-r ${slide.accentColor}
                                      text-white font-bold text-base sm:text-lg rounded-xl
                                      shadow-2xl
                                      transform transition-all duration-300 
                                      group-hover:scale-105 group-active:scale-95
                                      focus:outline-none focus:ring-4 focus:ring-white/30`}>

                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                                        -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                                    <span className="relative z-10">{slide.ctaPrimary}</span>

                                                    <svg
                                                        className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                                                              d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                    </svg>
                                                </div>
                                            </Link>

                                            <Link
                                                to={slide.ctaSecondaryLink}
                                                className="group inline-flex items-center gap-3 px-8 py-4
                                    rounded-xl bg-white/10 backdrop-blur-xl border-2 border-white/30
                                    text-white font-bold text-base sm:text-lg
                                    hover:bg-white/20 hover:border-white/50
                                    transition-all duration-300
                                    focus:outline-none focus:ring-4 focus:ring-white/30"
                                                aria-label={slide.ctaSecondary}
                                            >
                                                <span>{slide.ctaSecondary}</span>
                                                <svg
                                                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                                                          d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="hidden lg:block lg:col-span-5">
                                        <div
                                            className={`relative transition-all duration-1000 delay-500
                                ${index === currentSlide
                                                ? 'opacity-100 translate-x-0 scale-100'
                                                : 'opacity-0 translate-x-10 scale-95'}`}
                                            style={{
                                                transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
                                            }}
                                        >
                                            <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10
                                    shadow-2xl">

                                                <div className="space-y-6">
                                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm
                                        transform transition-transform duration-500 hover:scale-105">
                                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${slide.accentColor} 
                                          flex items-center justify-center shadow-lg`}>
                                                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <p className="text-white font-bold text-lg">Ley 29973</p>
                                                            <p className="text-white/60 text-sm">Cumplimiento legal</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm
                                        transform transition-transform duration-500 hover:scale-105"
                                                         style={{ transitionDelay: '100ms' }}>
                                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${slide.accentColor} 
                                          flex items-center justify-center shadow-lg`}>
                                                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <p className="text-white font-bold text-lg">WCAG 2.1 AAA</p>
                                                            <p className="text-white/60 text-sm">Certificación oficial</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm
                                        transform transition-transform duration-500 hover:scale-105"
                                                         style={{ transitionDelay: '200ms' }}>
                                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${slide.accentColor} 
                                          flex items-center justify-center shadow-lg`}>
                                                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <p className="text-white font-bold text-lg">Beneficios Tributarios</p>
                                                            <p className="text-white/60 text-sm">Maximice su ROI</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 z-30">
                <div className="container-custom">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

                        <div className="order-2 sm:order-1 flex gap-3" role="tablist" aria-label="Controles del slider de servicios">
                            {slides.map((slide, index) => (
                                <button
                                    key={slide.id}
                                    onClick={() => goToSlide(index)}
                                    className="group relative"
                                    aria-label={`Ir a servicio ${index + 1}: ${slide.title.join(' ')}`}
                                    aria-current={index === currentSlide ? "true" : "false"}
                                    role="tab"
                                >
                                    <div className={`h-2 rounded-full transition-all duration-500 
                                bg-white/20 backdrop-blur-sm border border-white/30
                                group-hover:bg-white/30
                                ${index === currentSlide ? 'w-16' : 'w-10'}`}>
                                        {index === currentSlide && isAutoPlaying && (
                                            <div className={`h-full bg-gradient-to-r ${slides[currentSlide].accentColor} rounded-full
                                    shadow-lg transition-all`}
                                                 style={{
                                                     animation: 'slideProgress 7s linear',
                                                 }}
                                            />
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="order-1 sm:order-2 flex items-center gap-3">
                            <button
                                onClick={prevSlide}
                                className="w-14 h-14 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10
                         hover:bg-white/10 transition-all duration-300 group
                         flex items-center justify-center shadow-lg
                         focus:outline-none focus:ring-2 focus:ring-white/50"
                                aria-label="Ver servicio anterior en el carrusel"

                            >
                                <svg className="w-6 h-6 text-white transition-transform duration-300 group-hover:-translate-x-1"
                                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                onClick={nextSlide}
                                className="w-14 h-14 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10
                         hover:bg-white/10 transition-all duration-300 group
                         flex items-center justify-center shadow-lg
                         focus:outline-none focus:ring-2 focus:ring-white/50"
                                aria-label="Ver siguiente servicio en el carrusel"

                            >
                                <svg className="w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-1"
                                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            <button
                                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                                className="w-14 h-14 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10
                         hover:bg-white/10 transition-all duration-300
                         flex items-center justify-center shadow-lg
                         focus:outline-none focus:ring-2 focus:ring-white/50"
                                aria-label={isAutoPlaying ? 'Pausar rotación automática de servicios' : 'Reanudar rotación automática de servicios'}
                            >
                                {isAutoPlaying ? (
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;