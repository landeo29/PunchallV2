import { useRef, useEffect, useState } from 'react';

const FAQ = () => {
    const [isInView, setIsInView] = useState(false);
    const [openId, setOpenId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const toggleFAQ = (id) => {
        setOpenId(openId === id ? null : id);
    };

    const categorias = [
        {
            id: 'tecnologia',
            titulo: 'Tecnología y Estándares',
            color: '#3b82f6',
            gradient: 'from-blue-500 to-cyan-500',
            icon: '💻',
            preguntas: [
                {
                    id: 'tech-1',
                    pregunta: '¿Bajo qué estándares de accesibilidad trabajan?',
                    respuesta: 'Aplicamos estrictamente las pautas WCAG 2.1 y 2.2 (niveles A, AA y AAA), además de cumplir con normativas internacionales como la ADA (EE.UU.) y la EN 301 549 (Europa). Nuestro equipo está certificado y actualizado en las últimas especificaciones del W3C.',
                },
                {
                    id: 'tech-2',
                    pregunta: '¿Pueden trabajar con mi equipo de desarrollo actual?',
                    respuesta: 'Sí. A través de nuestras Células de Outsourcing, nos integramos a sus flujos de trabajo (Scrum/Agile) para aportar nuestra especialización en accesibilidad y desarrollo robusto. Trabajamos de forma colaborativa con su equipo, respetando sus procesos y metodologías establecidas.',
                },
                {
                    id: 'tech-3',
                    pregunta: '¿Qué tecnologías utilizan para el desarrollo?',
                    respuesta: 'Trabajamos con stacks modernos: React, Angular, Vue.js para frontend; Node.js, .NET, Java/Spring para backend; y bases de datos SQL y NoSQL. Todas nuestras implementaciones priorizan la accesibilidad desde el código.',
                },
                {
                    id: 'tech-4',
                    pregunta: '¿Realizan auditorías de accesibilidad sobre código existente?',
                    respuesta: 'Sí. Ofrecemos servicios de auditoría completa bajo estándares WCAG 2.1/2.2, identificando barreras críticas y entregando una hoja de ruta técnica detallada para la certificación y remediación.',
                },
            ],
        },
        {
            id: 'alianzas',
            titulo: 'Alianzas y Colaboración',
            color: '#8b5cf6',
            gradient: 'from-indigo-500 to-purple-500',
            icon: '🤝',
            preguntas: [
                {
                    id: 'ali-1',
                    pregunta: '¿Cómo puedo formar una alianza estratégica con Punchay?',
                    respuesta: 'Ofrecemos varias modalidades: Socio de Ingeniería (B2B), Socio de Empleabilidad (integrando talento diverso), Intercambio de Conocimiento (mentoría técnica), e Inversión de Impacto Social. Contacte a hola@punchay.dev para explorar la mejor opción.',
                },
                {
                    id: 'ali-2',
                    pregunta: '¿Qué tipo de empresas pueden contratar sus servicios?',
                    respuesta: 'Trabajamos con empresas de todos los tamaños: desde startups hasta corporaciones multinacionales. Nuestros clientes típicos incluyen empresas tecnológicas, instituciones financieras, entidades públicas y organizaciones que priorizan criterios ESG.',
                },
                {
                    id: 'ali-3',
                    pregunta: '¿Ofrecen servicios de mentoría para mi equipo técnico?',
                    respuesta: 'Sí. A través de nuestro programa de Intercambio de Conocimiento, conectamos expertos de su organización con nuestra comunidad, y también ofrecemos capacitación técnica en accesibilidad digital para sus equipos de desarrollo.',
                },
            ],
        },
        {
            id: 'impacto',
            titulo: 'Impacto y Beneficios',
            color: '#10b981',
            gradient: 'from-emerald-500 to-teal-500',
            icon: '📊',
            preguntas: [
                {
                    id: 'imp-1',
                    pregunta: '¿Qué beneficios tributarios ofrece contratar a Punchay?',
                    respuesta: 'En Perú, nuestras facturas por servicios de accesibilidad permiten aplicar una deducción adicional del 146% en el Impuesto a la Renta (Ley 29973). A nivel global, ayudamos a mejorar sus indicadores de ESG (Environmental, Social & Governance) para reportes de sostenibilidad.',
                },
                {
                    id: 'imp-2',
                    pregunta: '¿Cómo garantizan que el software sea realmente inclusivo?',
                    respuesta: 'No solo usamos herramientas automáticas; nuestro equipo de ingenieros con discapacidad realiza pruebas de usuario reales con lectores de pantalla (JAWS, NVDA, VoiceOver) y tecnologías asistivas. Esta validación con experiencia real garantiza inclusión auténtica.',
                },
                {
                    id: 'imp-3',
                    pregunta: '¿Cómo puedo medir el impacto social de trabajar con Punchay?',
                    respuesta: 'Entregamos reportes trimestrales de impacto social que detallan: horas de formación financiadas, número de personas capacitadas, colocaciones laborales logradas, y métricas alineadas con ODS 4, 8 y 10. Todo es medible y verificable.',
                },
                {
                    id: 'imp-4',
                    pregunta: '¿Ayudan a cumplir la cuota laboral de personas con discapacidad?',
                    respuesta: 'Sí. A través de nuestro programa de Empleabilidad, facilitamos la integración de nuestros graduados certificados en equipos de IT, ayudando a su empresa a cumplir con la Ley 29973 con talento técnico altamente calificado.',
                },
            ],
        },
    ];

    const filteredCategorias = categorias.map(categoria => ({
        ...categoria,
        preguntas: categoria.preguntas.filter(
            p => p.pregunta.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.respuesta.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(categoria => categoria.preguntas.length > 0);

    return (
        <section
            ref={sectionRef}
            className="relative pt-32 pb-20 sm:pb-32 overflow-hidden bg-white"
        >
            {/* Fondo minimalista */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl"
                    style={{
                        transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl"
                    style={{
                        transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)`
                    }}
                />
            </div>

            <div className="container-custom relative z-10">

                {/* HERO - Más compacto */}
                <div className={`text-center mb-20 max-w-3xl mx-auto transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <span className="inline-block mb-4 text-sm font-bold tracking-[0.2em] uppercase text-blue-600">
            Centro de Ayuda
          </span>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-[1.1]">
                        Preguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Frecuentes</span>
                    </h1>

                    <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                        Respuestas rápidas sobre servicios, tecnología y modelo de impacto social
                    </p>

                    {/* BUSCADOR - Más limpio */}
                    <div className="max-w-xl mx-auto">
                        <div className="relative">
                            <label htmlFor="search-faq" className="sr-only">
                                Buscar en preguntas frecuentes
                            </label>
                            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                id="search-faq"
                                name="search-faq"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Buscar pregunta..."
                                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-all duration-300 text-slate-900 placeholder-slate-400 bg-white shadow-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* CATEGORÍAS - Layout limpio */}
                <div className="max-w-4xl mx-auto space-y-16">
                    {filteredCategorias.length > 0 ? (
                        filteredCategorias.map((categoria, catIndex) => (
                            <div
                                key={categoria.id}
                                className={`transition-all duration-1000
                          ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${400 + catIndex * 150}ms` }}
                            >
                                {/* HEADER CATEGORÍA - Más prominente */}
                                <div className="mb-8">
                                    <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-white border-2 border-slate-200 shadow-sm">
                                        <span className="text-3xl" aria-hidden="true">{categoria.icon}</span>
                                        <h2 className="text-2xl font-black text-slate-900">
                                            {categoria.titulo}
                                        </h2>
                                    </div>
                                </div>

                                {/* PREGUNTAS - Cards limpias */}
                                <div className="space-y-3">
                                    {categoria.preguntas.map((faq) => (
                                        <div
                                            key={faq.id}
                                            className={`group rounded-2xl bg-white border-2 transition-all duration-300 ${
                                                openId === faq.id
                                                    ? 'border-slate-300 shadow-lg'
                                                    : 'border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
                                            }`}
                                        >
                                            <button
                                                onClick={() => toggleFAQ(faq.id)}
                                                className="w-full text-left p-6 flex items-start justify-between gap-6"
                                                aria-expanded={openId === faq.id}
                                                aria-controls={`answer-${faq.id}`}
                                            >
                                                <h3 className="text-base font-bold text-slate-900 leading-relaxed flex-1">
                                                    {faq.pregunta}
                                                </h3>

                                                <div
                                                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                                        openId === faq.id
                                                            ? `bg-gradient-to-r ${categoria.gradient} shadow-lg`
                                                            : 'bg-slate-100 group-hover:bg-slate-200'
                                                    }`}
                                                >
                                                    <svg
                                                        className={`w-5 h-5 transition-all duration-300 ${
                                                            openId === faq.id
                                                                ? 'text-white rotate-180'
                                                                : 'text-slate-600'
                                                        }`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>
                                            </button>

                                            {/* RESPUESTA */}
                                            <div
                                                id={`answer-${faq.id}`}
                                                role="region"
                                                aria-labelledby={`question-${faq.id}`}
                                                className={`overflow-hidden transition-all duration-500 ${
                                                    openId === faq.id ? 'max-h-96' : 'max-h-0'
                                                }`}
                                            >
                                                <div className="px-6 pb-6">
                                                    <div className={`pt-2 pb-4 border-t-2 border-dashed mb-4`} style={{ borderColor: `${categoria.color}30` }} />
                                                    <p className="text-slate-700 leading-relaxed">
                                                        {faq.respuesta}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-slate-100 flex items-center justify-center">
                                <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="text-xl font-bold text-slate-900 mb-2">
                                No se encontraron resultados
                            </p>
                            <p className="text-slate-600">
                                Intenta con otros términos de búsqueda para "{searchTerm}"
                            </p>
                        </div>
                    )}
                </div>

                {/* CTA FINAL - Más espacioso */}
                <div className={`mt-24 max-w-3xl mx-auto transition-all duration-1000 delay-1000
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="relative p-12 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-2xl overflow-hidden">

                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                                backgroundSize: '32px 32px',
                            }} />
                        </div>

                        <div className="relative text-center">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <h2 className="text-3xl font-black text-white mb-4">
                                ¿No encontraste tu respuesta?
                            </h2>
                            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
                                Estamos disponibles para resolver cualquier duda específica sobre nuestros servicios
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                                <a
                                href="mailto:info@punchay.dev"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-blue-600 font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>Enviar Email</span>
                            </a>


                            <a
                            href="https://wa.me/51934082901"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white font-bold hover:bg-white/20 transition-all duration-300"
                            >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
</div>
</section>
);
};

export default FAQ;