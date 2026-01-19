import { useRef, useEffect, useState } from 'react';

const HeroGrid = () => {
    const [isInView, setIsInView] = useState(false);
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

    const cards = [
        {
            type: 'text',
            icon: 'https://img.icons8.com/ios-filled/100/teamwork.png',
            title: 'Innovación en Equipo',
            description: 'Nuestro equipo trabaja en conjunto para crear soluciones tecnológicas de vanguardia.',
        },
        {
            type: 'image',
            image: '/assets/images/s1.webp', // Agrega esta imagen
        },
        {
            type: 'text',
            icon: 'https://img.icons8.com/ios-filled/100/robot-2.png',
            title: 'Tecnología de Futuro',
            description: 'Soluciones diseñadas para superar los retos del mañana.',
        },
        {
            type: 'image',
            image: '/assets/images/s2.webp', // Agrega esta imagen
        },
        {
            type: 'text',
            icon: 'https://img.icons8.com/ios-filled/100/light-on.png',
            title: 'Creatividad e Innovación',
            description: 'Transformamos ideas en proyectos exitosos con resultados visibles.',
        },
        {
            type: 'image',
            image: '/assets/images/s3.webp',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
        >
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
                <div
                    style={{
                        backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                    }}
                    className="absolute inset-0"
                />
            </div>

            <div className="container-custom relative z-10">

                <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 leading-tight mb-4">
                        Conoce a{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              PUNCHALL
            </span>
                    </h2>

                    <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
                        Innovación y tecnología para transformar el futuro digital.
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
                                <div className="h-full p-8 rounded-2xl bg-white border border-neutral-200
                              shadow-lg hover:shadow-2xl
                              transform transition-all duration-500 hover:-translate-y-2">

                                    <div className="w-20 h-20 mb-6 mx-auto rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50
                                flex items-center justify-center
                                group-hover:scale-110 transition-transform duration-500">
                                        <img
                                            src={card.icon}
                                            alt={card.title}
                                            className="w-12 h-12 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                        />
                                    </div>

                                    <h3 className="text-xl font-bold text-neutral-900 mb-3 text-center">
                                        {card.title}
                                    </h3>
                                    <p className="text-neutral-600 text-center leading-relaxed">
                                        {card.description}
                                    </p>

                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600
                                transform origin-left scale-x-0 group-hover:scale-x-100
                                transition-transform duration-500 rounded-b-2xl" />
                                </div>
                            ) : (
                                <div className="h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl
                              transform transition-all duration-500 hover:-translate-y-2">
                                    <div className="relative h-80 overflow-hidden">
                                        <img
                                            src={card.image}
                                            alt="PUNCHALL"
                                            className="w-full h-full object-cover transform transition-transform duration-700
                               group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroGrid;