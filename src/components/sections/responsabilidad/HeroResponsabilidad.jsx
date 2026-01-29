import { useRef, useEffect, useState } from 'react';

const HeroResponsabilidad = () => {
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

    const stats = [
        {
            id: 1,
            numero: '100%',
            label: 'Reinversión',
            descripcion: 'Del éxito comercial',
            color: '#10b981',
        },
        {
            id: 2,
            numero: '3',
            label: 'Pilares',
            descripcion: 'Educación, Validación, Empleabilidad',
            color: '#3b82f6',
        },
        {
            id: 3,
            numero: '∞',
            label: 'Impacto',
            descripcion: 'Oportunidades creadas',
            color: '#8b5cf6',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative pt-32 pb-20 sm:pb-28 lg:pb-32 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"
                    style={{
                        animationDuration: '8s',
                        transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
                    }}
                />
                <div
                    className="absolute top-1/4 -right-40 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse"
                    style={{
                        animationDuration: '10s',
                        animationDelay: '2s',
                        transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`
                    }}
                />
                <div
                    className="absolute -bottom-40 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"
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
                        backgroundImage: `radial-gradient(circle, #10b981 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                    className="absolute inset-0"
                />
            </div>

            <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="rsLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="50%" stopColor="#14b8a6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                </defs>
                <line x1="10%" y1="20%" x2="90%" y2="20%" stroke="url(#rsLineGradient)" strokeWidth="1" />
                <line x1="10%" y1="80%" x2="90%" y2="80%" stroke="url(#rsLineGradient)" strokeWidth="1" />
            </svg>

            <div className="container-custom relative z-10">

                <div className={`text-center mb-16 max-w-5xl mx-auto transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full
                        bg-white/80 backdrop-blur-sm border border-emerald-200/50 shadow-lg">
                        <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-700">
              Nuestra Razón de Ser
            </span>
                        <div className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-6">
                        <span className="text-slate-900">Responsabilidad Social:</span>
                        <br />
                        <span className="relative inline-block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                Transformando el Talento en Oportunidad
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-emerald-400/30 blur-lg animate-pulse" />
            </span>
                    </h1>

                    <div className="max-w-4xl mx-auto space-y-6">
                        <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-medium">
                            En Punchay, nuestra responsabilidad{' '}
                            <span className="font-black text-emerald-700">no es un programa aparte; es nuestra razón de ser</span>.
                        </p>

                        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                            Reinvertimos el éxito de nuestra ingeniería en crear un{' '}
                            <span className="font-bold text-teal-700">ecosistema tecnológico inclusivo</span> que elimina
                            la brecha de oportunidades para las personas con discapacidad.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 backdrop-blur-sm border border-emerald-200/50">
                            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <span className="text-sm font-bold text-slate-700">Educación</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 backdrop-blur-sm border border-teal-200/50">
                            <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-sm font-bold text-slate-700">Validación</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 backdrop-blur-sm border border-cyan-200/50">
                            <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-sm font-bold text-slate-700">Empleabilidad</span>
                        </div>
                    </div>
                </div>

                <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-400
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.id}
                                className={`group relative transition-all duration-1000
                          ${isInView
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                                }`}
                                style={{ transitionDelay: `${600 + index * 150}ms` }}
                            >
                                <div
                                    className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"
                                    style={{ background: `${stat.color}60` }}
                                />

                                <div className="relative h-full p-8 rounded-2xl bg-white/85 backdrop-blur-xl border-2 border-white/60
                              shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">

                                    <div className="text-center">
                                        <div
                                            className="text-5xl sm:text-6xl font-black mb-3 transition-all duration-300"
                                            style={{ color: stat.color }}
                                        >
                                            {stat.numero}
                                        </div>

                                        <div className="text-xl font-black text-slate-900 mb-2">
                                            {stat.label}
                                        </div>

                                        <div className="text-sm text-slate-600">
                                            {stat.descripcion}
                                        </div>

                                        <div
                                            className="h-1 w-16 mx-auto mt-4 rounded-full transition-all duration-500"
                                            style={{
                                                background: stat.color,
                                                width: '100%',
                                                maxWidth: '64px'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`mt-16 text-center transition-all duration-1000 delay-1000
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="relative inline-block">
                        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl" />

                        <div className="relative px-8 py-6 rounded-xl bg-white/70 backdrop-blur-sm border border-emerald-200/50 shadow-lg">
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>

                                <div className="text-center sm:text-left">
                                    <div className="text-base font-bold text-slate-900 mb-1">
                                        El Ciclo de Valor Punchay
                                    </div>
                                    <div className="text-sm text-slate-600">
                                        Cada proyecto comercial financia directamente la formación e inserción laboral de talento diverso
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroResponsabilidad;