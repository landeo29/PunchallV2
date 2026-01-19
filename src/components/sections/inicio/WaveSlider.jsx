import { useState, useEffect, useRef } from 'react';

import slid1 from '../../../assets/images/index/WaveSlider/slid1.webp';
import slid2 from '../../../assets/images/index/WaveSlider/slid2.webp';

const WaveSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    const slides = [
        {
            id: 1,
            image: slid1,
            number: '01',
            category: 'Nuestra Filosofía',
            title: 'Construyendo',
            titleAccent: 'Oportunidades',
            subtitle: 'Innovación y Accesibilidad',
            description: 'Estamos dedicados a construir un futuro donde la tecnología no solo sea innovadora, sino también accesible para todos. Somos un equipo apasionado que cree en el poder transformador de la inclusión.',
            color: 'from-blue-600 via-indigo-600 to-purple-600',
        },
        {
            id: 2,
            image: slid2,
            number: '02',
            category: 'Nuestro Compromiso',
            title: 'Inclusión',
            titleAccent: 'y Calidad',
            subtitle: 'Marcando la Diferencia',
            description: 'No solo desarrollamos tecnología; construimos oportunidades reales. Cada persona en nuestro equipo aporta habilidades únicas que enriquecen nuestro trabajo y superan los estándares de calidad.',
            color: 'from-purple-600 via-pink-600 to-rose-600',
        }
    ];

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
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section
            ref={sectionRef}
            className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-50" />

            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl opacity-10 transition-all duration-1000
                       ${isInView ? 'scale-100 opacity-10' : 'scale-50 opacity-0'}
                       bg-gradient-to-br ${slides[activeSlide].color}`} />
                <div className={`absolute bottom-20 right-20 w-72 h-72 rounded-full blur-3xl opacity-10 transition-all duration-1000 delay-300
                       ${isInView ? 'scale-100 opacity-10' : 'scale-50 opacity-0'}
                       bg-gradient-to-br ${slides[activeSlide].color}`} />
            </div>

            <div className="container-custom relative z-10">

                <div className={`text-center mb-16 transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-neutral-400" />
                        <span className="text-sm font-bold tracking-[0.3em] uppercase text-neutral-500">
              Esencia
            </span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-neutral-400" />
                    </div>
                </div>

                <div className="relative">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`transition-all duration-1000 ease-out
                        ${index === activeSlide
                                ? 'opacity-100 relative z-10'
                                : 'opacity-0 absolute inset-0 z-0 pointer-events-none'
                            }`}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-6xl mx-auto">

                                <div className={`space-y-8 order-2 lg:order-1
                              transition-all duration-1000 delay-300
                              ${index === activeSlide && isInView
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 -translate-x-10'
                                }`}>

                                    <div className="flex items-start gap-6">
                                        <div className="relative">
                      <span className={`text-7xl font-black bg-gradient-to-br ${slide.color} bg-clip-text text-transparent
                                     opacity-20 select-none`}>
                        {slide.number}
                      </span>
                                        </div>
                                        <div className="pt-2">
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${slide.color} animate-pulse`} />
                                                <span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-500">
                          {slide.category}
                        </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-neutral-900 leading-[0.95] tracking-tight">
                                            {slide.title}
                                        </h2>
                                        <h3 className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight
                                  bg-gradient-to-r ${slide.color} bg-clip-text text-transparent`}>
                                            {slide.titleAccent}
                                        </h3>

                                        <div className="flex items-center gap-4 pt-4">
                                            <div className={`h-1 rounded-full bg-gradient-to-r ${slide.color} w-16`} />
                                            <span className="text-lg sm:text-xl font-bold text-neutral-600">
                        {slide.subtitle}
                      </span>
                                        </div>
                                    </div>

                                    <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed">
                                        {slide.description}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-4 pt-4">

                                        <a
                                        href="/sobre-nosotros"
                                        className="group relative overflow-hidden"
                                        >
                                        <div className={`absolute -inset-2 bg-gradient-to-r ${slide.color} blur-xl opacity-30 
                                    group-hover:opacity-50 transition-opacity duration-500`} />

                                        <div className={`relative flex items-center gap-3 px-7 py-3.5 
                                    bg-gradient-to-r ${slide.color} text-white 
                                    font-bold text-base rounded-xl
                                    transform transition-all duration-300 
                                    group-hover:scale-105 group-active:scale-95
                                    shadow-lg group-hover:shadow-2xl`}>

                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                                      -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                            <span className="relative">Descubre más</span>
                                            <svg
                                                className="relative w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                                                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </a>


                                    <a
                                    href="/contacto"
                                    className="group flex items-center gap-2 px-6 py-3.5
                                    text-neutral-700 font-semibold text-base
                                    hover:text-neutral-900 transition-colors duration-300"
                                    >
                                    <span>Hablemos</span>
                                    <svg
                                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                                              d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className={`order-1 lg:order-2 relative
                              transition-all duration-1000 delay-500
                              ${index === activeSlide && isInView
                        ? 'opacity-100 translate-x-0 scale-100'
                        : 'opacity-0 translate-x-10 scale-95'
                    }`}>

                    <div className="relative group">

                        <div className={`absolute -inset-6 bg-gradient-to-br ${slide.color} opacity-10 rounded-[2.5rem] 
                                  blur-3xl group-hover:opacity-20 transition-all duration-700`} />

                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]
                                    shadow-2xl border-4 border-white/80">
                                <img
                                    src={slide.image}
                                    alt={`${slide.title} ${slide.titleAccent}`}
                                    className="w-full h-full object-cover
                                   transform transition-transform duration-700
                                   group-hover:scale-110"
                                    loading="lazy"
                                />

                                <div className={`absolute inset-0 bg-gradient-to-t ${slide.color} opacity-0 
                                      group-hover:opacity-10 transition-opacity duration-500`} />
                            </div>

                            <div className="absolute -bottom-6 -right-6 px-6 py-4 rounded-2xl bg-white shadow-2xl
                                    transform transition-all duration-500 group-hover:-rotate-3 group-hover:scale-105
                                    border-2 border-neutral-100">
                                <div className="flex items-center gap-3">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${slide.color} 
                                        flex items-center justify-center shadow-lg`}>
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                                                  d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className={`text-2xl font-black bg-gradient-to-r ${slide.color} bg-clip-text text-transparent`}>
                                            100%
                                        </p>
                                        <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wide">
                                            Inclusivo
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute top-3 left-3 w-16 h-16 border-t-2 border-l-2 border-white/60 rounded-tl-2xl" />
                            <div className="absolute bottom-3 right-3 w-16 h-16 border-b-2 border-r-2 border-white/60 rounded-br-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
))}
</div>

    <div className={`flex justify-center items-center gap-6 mt-16 transition-all duration-1000 delay-700
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        <div className="flex items-center gap-3">
            {slides.map((slide, index) => (
                <button
                    key={slide.id}
                    onClick={() => setActiveSlide(index)}
                    className="group relative focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-neutral-400 rounded-full"
                    aria-label={`Ver ${slide.title} ${slide.titleAccent}`}
                    aria-selected={index === activeSlide}
                >
                    <div className={`relative overflow-hidden rounded-full transition-all duration-500
                              ${index === activeSlide
                        ? 'w-20 h-3'
                        : 'w-12 h-3 opacity-40 hover:opacity-70'
                    }`}>

                        <div className="absolute inset-0 bg-neutral-300" />

                        <div className={`absolute inset-0 bg-gradient-to-r ${slide.color}
                                ${index === activeSlide ? 'animate-slide-progress' : 'w-0'}`} />

                        <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />
                    </div>
                    {index === activeSlide && (
                        <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap
                                 text-xs font-bold text-neutral-500 uppercase tracking-wider">
                    {slide.number}
                  </span>
                    )}
                </button>
            ))}
        </div>

        <div className="flex items-center gap-2">
            <button
                onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className={`w-12 h-12 rounded-full bg-white border-2 border-neutral-200
                       hover:border-neutral-300 hover:shadow-md
                       flex items-center justify-center group
                       transition-all duration-300 hover:scale-105
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400`}
                aria-label="Anterior slide"
            >
                <svg className="w-5 h-5 text-neutral-600 group-hover:text-neutral-900
                           transition-all duration-300 group-hover:-translate-x-0.5"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
                className={`w-12 h-12 rounded-full bg-gradient-to-r ${slides[activeSlide].color} 
                       hover:shadow-xl flex items-center justify-center group
                       transition-all duration-300 hover:scale-105
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400`}
                aria-label="Siguiente slide"
            >
                <svg className="w-5 h-5 text-white transition-all duration-300 group-hover:translate-x-0.5"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>
</div>
</section>
);
};

export default WaveSlider;