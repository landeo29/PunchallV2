import { useState, useEffect } from 'react';

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
            badge: 'Innovación',
            title: ['Innovación', 'Tecnológica'],
            highlight: 'Tecnológica',
            description: 'Tu apoyo puede marcar la diferencia. Con tu donación, ayudamos a construir espacios inclusivos y accesibles para trabajadores con discapacidad.',
            ctaText: 'Sé parte del cambio',
            ctaLink: '/colaboracion',
            accentColor: 'from-blue-500 to-cyan-500',
        },
        {
            id: 2,
            image: slider2,
            badge: 'Soluciones',
            title: ['Experiencia', 'Digital'],
            highlight: 'Digital',
            description: 'El futuro es ahora. Transforma tu empresa con nuestras soluciones tecnológicas personalizadas. ¡Contrata nuestros servicios y marca la diferencia hoy mismo!',
            ctaText: 'Contáctanos Ahora',
            ctaLink: '/contacto',
            accentColor: 'from-indigo-500 to-purple-500',
        },
        {
            id: 3,
            image: slider3,
            badge: 'Futuro',
            title: ['El Futuro', 'es Ahora'],
            highlight: 'es Ahora',
            description: 'Explora nuestro sitio y descubre cómo transformamos la tecnología, creando un entorno inclusivo y accesible para todos. Únete a nuestra misión de marcar la diferencia.',
            ctaText: 'Conoce más',
            ctaLink: '/sobre-nosotros',
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
            aria-label="Slider principal"
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
                                alt={slide.title.join(' ')}
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
                                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full
                                bg-white/10 backdrop-blur-md border border-white/20
                                transition-all duration-1000 delay-100
                                ${index === currentSlide
                                                ? 'opacity-100 translate-y-0'
                                                : 'opacity-0 translate-y-10'}`}
                                        >
                                            <span className="text-2xl">{slide.badge.split(' ')[0]}</span>
                                            <span className="text-white font-semibold text-sm tracking-wide">
                        {slide.badge.split(' ')[1]}
                      </span>
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${slide.accentColor} animate-pulse`} />
                                        </div>

                                        <div className="space-y-2">
                                            {slide.title.map((line, lineIndex) => (
                                                <h1
                                                    key={lineIndex}
                                                    className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl 
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
                                        </div>

                                        <div
                                            className={`flex items-center gap-3 transition-all duration-1000 delay-500
                                ${index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                                        >
                                            <div className={`h-1 bg-gradient-to-r ${slide.accentColor} rounded-full w-16 shadow-lg shadow-blue-500/50`} />
                                            <div className="h-px bg-white/20 w-16" />
                                        </div>

                                        <p
                                            className={`text-xl sm:text-2xl text-white/90 leading-relaxed max-w-2xl
                                font-light tracking-wide
                                transition-all duration-1000 delay-700
                                ${index === currentSlide
                                                ? 'opacity-100 translate-x-0'
                                                : 'opacity-0 -translate-x-10'}`}
                                        >
                                            {slide.description}
                                        </p>

                                        <div
                                            className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4
                                transition-all duration-1000 delay-900
                                ${index === currentSlide
                                                ? 'opacity-100 translate-x-0'
                                                : 'opacity-0 -translate-x-10'}`}
                                        >

                                            <a
                                                href={slide.ctaLink}
                                                className="group relative inline-flex items-center gap-3 overflow-hidden"
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

                                                <span className="relative z-10">{slide.ctaText}</span>

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
                                        </a>

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
                                                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-white font-bold text-lg">Calidad Garantizada</p>
                                                        <p className="text-white/60 text-sm">Soluciones profesionales</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm
                                        transform transition-transform duration-500 hover:scale-105"
                                                     style={{ transitionDelay: '100ms' }}>
                                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${slide.accentColor} 
                                          flex items-center justify-center shadow-lg`}>
                                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-white font-bold text-lg">Inclusión Real</p>
                                                        <p className="text-white/60 text-sm">Diversidad en acción</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm
                                        transform transition-transform duration-500 hover:scale-105"
                                                     style={{ transitionDelay: '200ms' }}>
                                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${slide.accentColor} 
                                          flex items-center justify-center shadow-lg`}>
                                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                                  d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-white font-bold text-lg">Innovación Constante</p>
                                                        <p className="text-white/60 text-sm">Tecnología de punta</p>
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

                        <div className="order-2 sm:order-1 flex gap-3" role="tablist" aria-label="Controles del slider">
                            {slides.map((slide, index) => (
                                <button
                                    key={slide.id}
                                    onClick={() => goToSlide(index)}
                                    className="group relative"
                                    aria-label={`Ir a slide ${index + 1}`}
                                    aria-selected={index === currentSlide}
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
                                aria-label="Slide anterior"
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
                                aria-label="Siguiente slide"
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
                                aria-label={isAutoPlaying ? 'Pausar' : 'Reproducir'}
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