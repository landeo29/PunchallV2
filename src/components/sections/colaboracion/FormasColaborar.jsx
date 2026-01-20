import { useRef, useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const FormasColaborar = () => {
    const [isInView, setIsInView] = useState(false);
    const [hoveredId, setHoveredId] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
    const sectionRef = useRef(null);

    const particles = useMemo(() =>
            Array.from({ length: 10 }, (_, i) => ({
                id: i,
                left: 5 + (i * 10),
                top: 10 + (i % 3) * 30,
                color: ['#10b98120', '#14b8a620', '#06b6d420'][i % 3],
                duration: 11 + i * 1.3,
                delay: i * 0.35,
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

    const formas = [
        {
            id: 1,
            title: 'Contratación de Soluciones',
            description: 'Obtén soluciones tecnológicas de alta calidad y apoya nuestro modelo inclusivo.',
            items: ['Desarrollo de Software', 'Creación de Páginas Web', 'Consultoría'],
            color: '#10b981',
            icon: '💻',
            link: '/contacto',
            buttonText: 'Haz Realidad tu Proyecto',
        },
        {
            id: 2,
            title: 'Patrocinios',
            description: 'Apoya proyectos específicos que alineen con tus valores y objetivos.',
            items: ['Reconocimiento en nuestra web', 'Co-branding', 'Informes de impacto'],
            color: '#14b8a6',
            icon: '🌟',
            link: 'https://www.paypal.com/donate?hosted_button_id=4XLEY7KZ55W9N',
            buttonText: 'Sé Parte del Cambio',
        },
        {
            id: 3,
            title: 'Voluntariado',
            description: 'Ofrece tu tiempo y habilidades en proyectos clave.',
            items: ['Formación en tecnologías accesibles', 'Participación en eventos', 'Apoyo en proyectos'],
            color: '#06b6d4',
            icon: '🙋',
            link: '/contacto',
            buttonText: 'Aporta tu Talento',
        },
        {
            id: 4,
            title: 'Alianzas Estratégicas',
            description: 'Trabaja con nosotros en soluciones sostenibles e inclusivas.',
            items: ['Software inclusivo', 'Formación y empleabilidad', 'Investigación en accesibilidad'],
            color: '#0891b2',
            icon: '🤝',
            link: '/contacto',
            buttonText: 'Hagamos Equipos',
        },
        {
            id: 5,
            title: 'Donaciones',
            description: 'Contribuye a un entorno accesible y diverso.',
            items: ['Donar a través del sitio web', 'Explorar otras opciones'],
            color: '#0e7490',
            icon: '💝',
            link: 'https://www.paypal.com/donate?hosted_button_id=4XLEY7KZ55W9N',
            buttonText: 'Dona y Transforma Vidas',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-20 sm:py-24 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" />

            <div
                className="absolute inset-0 opacity-20 transition-opacity duration-700"
                style={{
                    background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, 
                      rgba(16, 185, 129, 0.15) 0%, 
                      rgba(20, 184, 166, 0.1) 30%, 
                      transparent 60%)`,
                }}
            />

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
                            borderRadius: '50% 50% 45% 55% / 55% 45% 55% 45%',
                            animation: `morph ${particle.duration}s ease-in-out infinite`,
                            animationDelay: `${particle.delay}s`,
                        }}
                    />
                ))}
            </div>

            <div className="absolute inset-0 opacity-[0.015]">
                <svg className="w-full h-full">
                    <defs>
                        <pattern id="colab-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                            <circle cx="30" cy="30" r="1" fill="#10b981" />
                            <path d="M0 30 L60 30 M30 0 L30 60" stroke="#14b8a6" strokeWidth="0.5" opacity="0.2" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#colab-pattern)" />
                </svg>
            </div>

            <div className="container-custom relative z-10">

                <div className={`text-center mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-emerald-200/50 shadow-lg">
                        <span className="text-lg">🚀</span>
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-700">
              Únete a Nosotros
            </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-4">
                        Cómo Colaborar con
                        <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              Punchay
            </span>
                    </h2>

                    <p className="text-base text-slate-700 leading-relaxed">
                        En Punchay, creemos en la fuerza del trabajo colaborativo para construir un futuro más inclusivo y accesible.
                        Tu colaboración puede marcar una diferencia significativa en nuestra misión.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {formas.slice(0, 3).map((forma, index) => (
                        <div
                            key={forma.id}
                            onMouseEnter={() => setHoveredId(forma.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className={`group relative transition-all duration-1000
                        ${isInView
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${400 + index * 100}ms` }}
                        >
                            <div
                                className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-500"
                                style={{ background: `${forma.color}60` }}
                            />

                            <div className="relative h-full rounded-2xl overflow-hidden bg-white/90 backdrop-blur-xl border-2 border-white/60 shadow-lg group-hover:shadow-2xl transition-all duration-500">

                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div
                                            className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                                            style={{ background: `${forma.color}20` }}
                                        >
                                            {forma.icon}
                                        </div>

                                        <div
                                            className="px-3 py-1 rounded-lg text-xs font-bold text-white"
                                            style={{ background: forma.color }}
                                        >
                                            {String(forma.id).padStart(2, '0')}
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-black text-slate-900 mb-2 leading-tight">
                                        {forma.title}
                                    </h3>

                                    <p className="text-slate-700 leading-relaxed text-sm mb-4">
                                        {forma.description}
                                    </p>

                                    <ul className="space-y-2 mb-6">
                                        {forma.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: forma.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {forma.link.startsWith('http') ? (

                                           <a
                                            href={forma.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 w-full text-sm"
                                        style={{ background: `linear-gradient(135deg, ${forma.color}, ${forma.color}CC)` }}
                                        >
                                        <span>{forma.buttonText}</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                        ) : (
                        <Link
                        to={forma.link}
                     className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 w-full text-sm"
                     style={{ background: `linear-gradient(135deg, ${forma.color}, ${forma.color}CC)` }}
                >
                    <span>{forma.buttonText}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </Link>
                )}
            </div>

            <div
                className="h-1 transition-all duration-500"
                style={{
                    width: hoveredId === forma.id ? '100%' : '0%',
                    background: forma.color
                }}
            />
        </div>
</div>
))}
</div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-6">
        {formas.slice(3).map((forma, index) => (
            <div
                key={forma.id}
                onMouseEnter={() => setHoveredId(forma.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative transition-all duration-1000
                        ${isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
            >
                <div
                    className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-500"
                    style={{ background: `${forma.color}60` }}
                />

                <div className="relative h-full rounded-2xl overflow-hidden bg-white/90 backdrop-blur-xl border-2 border-white/60 shadow-lg group-hover:shadow-2xl transition-all duration-500">

                    <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                            <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                                style={{ background: `${forma.color}20` }}
                            >
                                {forma.icon}
                            </div>

                            <div
                                className="px-3 py-1 rounded-lg text-xs font-bold text-white"
                                style={{ background: forma.color }}
                            >
                                {String(forma.id).padStart(2, '0')}
                            </div>
                        </div>

                        <h3 className="text-lg font-black text-slate-900 mb-2 leading-tight">
                            {forma.title}
                        </h3>

                        <p className="text-slate-700 leading-relaxed text-sm mb-4">
                            {forma.description}
                        </p>

                        <ul className="space-y-2 mb-6">
                            {forma.items.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: forma.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        {forma.link.startsWith('http') ? (

                            <a
                            href={forma.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 w-full text-sm"
                            style={{ background: `linear-gradient(135deg, ${forma.color}, ${forma.color}CC)` }}
                            >
                            <span>{forma.buttonText}</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </a>
            ) : (
            <Link
            to={forma.link}
         className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 w-full text-sm"
         style={{ background: `linear-gradient(135deg, ${forma.color}, ${forma.color}CC)` }}
    >
        <span>{forma.buttonText}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
    </Link>
)}
</div>

    <div
        className="h-1 transition-all duration-500"
        style={{
            width: hoveredId === forma.id ? '100%' : '0%',
            background: forma.color
        }}
    />
</div>
</div>
))}
</div>
</div>
</section>
);
};

export default FormasColaborar;