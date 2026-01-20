import { useRef, useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom'
import imgHero from '../../../assets/images/colaboraciones/herodonaciones/oc (1).webp';
import img1 from '../../../assets/images/colaboraciones/herodonaciones/oc (2).webp';
import img2 from '../../../assets/images/colaboraciones/herodonaciones/oc (3).webp';
import img3 from '../../../assets/images/colaboraciones/herodonaciones/oc (4).webp';


const HeroDonaciones = () => {
    const [isInView, setIsInView] = useState(false);
    const [hoveredId, setHoveredId] = useState(null);
    const sectionRef = useRef(null);

    const particles = useMemo(() =>
            Array.from({ length: 10 }, (_, i) => ({
                id: i,
                left: 8 + (i * 9),
                top: 15 + (i % 2) * 35,
                color: ['#fbbf2420', '#fcd34d20'][i % 2],
                duration: 10 + i * 1.2,
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

    const donaciones = [
        {
            id: 1,
            title: 'Donaciones Únicas',
            description: 'Contribuye puntualmente y apoya proyectos inclusivos.',
            image: img1,
            icon: '💛',
            color: '#eab308',
            link: 'https://www.paypal.com/donate?hosted_button_id=4XLEY7KZ55W9N',
            buttonText: 'Donar',
        },
        {
            id: 2,
            title: 'Donaciones Recurrentes',
            description: 'Apoya mensualmente nuestros proyectos.',
            image: img2,
            icon: '🔄',
            color: '#f59e0b',
            link: 'https://www.paypal.com/donate?hosted_button_id=4XLEY7KZ55W9N',
            buttonText: 'Suscríbete',
        },
        {
            id: 3,
            title: 'Donaciones en Especie',
            description: 'Contribuye con equipos o servicios.',
            image: img3,
            icon: '🎁',
            color: '#f97316',
            link: '/contacto',
            buttonText: 'Contáctanos',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative pt-32 pb-20 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50" />

            <div className="absolute inset-0 pointer-events-none">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="absolute"
                        style={{
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                            width: '100px',
                            height: '100px',
                            background: `radial-gradient(circle, ${particle.color}, transparent)`,
                            borderRadius: '48% 52% 55% 45% / 52% 48% 52% 48%',
                            animation: `morph ${particle.duration}s ease-in-out infinite`,
                            animationDelay: `${particle.delay}s`,
                        }}
                    />
                ))}
            </div>

            <div className="absolute inset-0 opacity-[0.015]">
                <svg className="w-full h-full">
                    <defs>
                        <pattern id="don-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                            <circle cx="30" cy="30" r="1" fill="#eab308" />
                            <path d="M0 30 L60 30 M30 0 L30 60" stroke="#f59e0b" strokeWidth="0.5" opacity="0.2" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#don-grid)" />
                </svg>
            </div>

            <div className="container-custom relative z-10">

                <div className={`text-center mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-yellow-200/50 shadow-lg">
                        <span className="text-lg">💝</span>
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-yellow-700">
              Apoya Nuestra Misión
            </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-4">
                        Donaciones y
                        <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600">
              Apoyo
            </span>
                    </h1>

                    <p className="text-base text-slate-700 leading-relaxed">
                        En <span className="font-bold text-yellow-700">Punchay</span>, cada donación impulsa nuestra misión de crear un mundo tecnológico inclusivo.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto mb-12">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center transition-all duration-1000 delay-400
                         ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>

                        <div className="relative group">
                            <div className="absolute -inset-3 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

                            <div className="relative rounded-2xl overflow-hidden border-3 border-white/70 shadow-xl aspect-[4/3]">
                                <img
                                    src={imgHero}
                                    alt="Impacto de Donaciones"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />

                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20">
                                        <span className="text-3xl">🌟</span>
                                        <div>
                                            <div className="text-sm font-bold text-white">¡Sé parte del cambio!</div>
                                            <div className="text-xs text-neutral-200">Tu apoyo transforma vidas</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {donaciones.map((donacion, index) => (
                                <div
                                    key={donacion.id}
                                    onMouseEnter={() => setHoveredId(donacion.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    className={`group relative transition-all duration-700
                            ${isInView
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 translate-x-10'
                                    }`}
                                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                                >
                                    <div
                                        className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
                                        style={{ background: `${donacion.color}50` }}
                                    />

                                    <div className="relative rounded-xl overflow-hidden bg-white/90 backdrop-blur-xl border-2 border-white/60 shadow-lg group-hover:shadow-xl transition-all duration-500">

                                        <div className="grid grid-cols-12 gap-4 items-center p-4">

                                            <div className="col-span-3 relative">
                                                <div className="relative aspect-square rounded-lg overflow-hidden">
                                                    <img
                                                        src={donacion.image}
                                                        alt={donacion.title}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

                                                    <div
                                                        className="absolute top-1 right-1 w-8 h-8 rounded-lg backdrop-blur-xl border border-white/40 flex items-center justify-center text-lg shadow-lg transition-all duration-500"
                                                        style={{
                                                            background: `${donacion.color}90`,
                                                            transform: hoveredId === donacion.id ? 'scale(1.1) rotate(12deg)' : 'scale(1)'
                                                        }}
                                                    >
                                                        {donacion.icon}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-span-6">
                                                <h3 className="text-base font-black text-slate-900 mb-1 leading-tight">
                                                    {donacion.title}
                                                </h3>
                                                <p className="text-xs text-slate-600 leading-relaxed">
                                                    {donacion.description}
                                                </p>
                                            </div>

                                            <div className="col-span-3">
                                                {donacion.link.startsWith('http') ? (

                                                    <a
                                                        href={donacion.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 w-full text-xs"
                                                    style={{ background: `linear-gradient(135deg, ${donacion.color}, ${donacion.color}CC)` }}
                                                    >
                                                    <span>{donacion.buttonText}</span>
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                    ) : (
                                    <Link
                                        to={donacion.link}
                                        className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 w-full text-xs"
                                        style={{ background: `linear-gradient(135deg, ${donacion.color}, ${donacion.color}CC)` }}
                                    >
                                        <span>{donacion.buttonText}</span>
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                    )}
                                </div>
                                </div>

                                <div
                                className="h-1 transition-all duration-500"
                                style={{
                                width: hoveredId === donacion.id ? '100%' : '0%',
                                background: `linear-gradient(90deg, ${donacion.color}, ${donacion.color}80)`
                            }}
                        />
                    </div>
                </div>
                ))}
            </div>
        </div>
</div>

    <div className={`text-center transition-all duration-1000 delay-1000
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center gap-3 p-5 rounded-xl bg-white/70 backdrop-blur-xl border border-yellow-200/50 shadow-lg">
            <span className="text-3xl">🙏</span>
            <div className="text-left">
                <div className="text-lg font-black text-slate-900">Gracias por tu Apoyo</div>
                <div className="text-sm text-slate-700">Cada contribución marca la diferencia</div>
            </div>
        </div>
    </div>
</div>
</section>
);
};

export default HeroDonaciones;