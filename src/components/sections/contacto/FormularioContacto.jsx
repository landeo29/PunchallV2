import { useRef, useEffect, useState, useMemo } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import imgForm from '../../../assets/images/contacto/form.webp';

const FormularioContacto = () => {
    const [isInView, setIsInView] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
    const formRef = useRef(null);
    const sectionRef = useRef(null);

    const particles = useMemo(() =>
            Array.from({ length: 12 }, (_, i) => ({
                id: i,
                left: 6 + (i * 8),
                top: 10 + (i % 3) * 30,
                color: ['#818cf820', '#6366f120', '#8b5cf620'][i % 3],
                duration: 12 + i * 1.5,
                delay: i * 0.4,
            }))
        , []);

    useEffect(() => {
        // Inicializar EmailJS
        emailjs.init("PBH08utFp5vqfUAvv");

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.user_name.value.trim();
        const email = e.target.user_email.value.trim();
        const message = e.target.message.value.trim();

        if (!name || !email || !message) {
            Swal.fire({
                icon: "warning",
                title: "Campos vacíos",
                text: "Por favor, completa todos los campos antes de enviar.",
                confirmButtonColor: "#6366f1",
            });
            return;
        }

        const params = {
            from_name: name,
            email_id: email,
            mensaje: message,
        };

        setIsSending(true);

        try {
            await emailjs.send("service_ias3bue", "template_tpnb3zl", params);

            Swal.fire({
                icon: "success",
                title: "¡Mensaje enviado!",
                text: "Tu mensaje ha sido enviado correctamente.",
                confirmButtonColor: "#10b981",
            });

            formRef.current.reset();
        } catch (error) {
            console.error("Error al enviar el correo:", error);

            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No se pudo enviar el mensaje. Inténtalo nuevamente.",
                confirmButtonColor: "#ef4444",
            });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section
            ref={sectionRef}
            className="relative pt-32 pb-20 sm:pb-24 overflow-hidden min-h-screen flex items-center"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50" />

            <div
                className="absolute inset-0 opacity-20 transition-opacity duration-700"
                style={{
                    background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, 
                      rgba(99, 102, 241, 0.15) 0%, 
                      rgba(139, 92, 246, 0.1) 30%, 
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
                            width: '120px',
                            height: '120px',
                            background: `radial-gradient(circle, ${particle.color}, transparent)`,
                            borderRadius: '45% 55% 50% 50% / 50% 45% 55% 50%',
                            animation: `morph ${particle.duration}s ease-in-out infinite`,
                            animationDelay: `${particle.delay}s`,
                        }}
                    />
                ))}
            </div>

            <div className="absolute inset-0 opacity-[0.015]">
                <svg className="w-full h-full">
                    <defs>
                        <pattern id="contact-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                            <circle cx="30" cy="30" r="1" fill="#6366f1" />
                            <path d="M0 30 L60 30 M30 0 L30 60" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.2" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#contact-grid)" />
                </svg>
            </div>

            <div className="container-custom relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

                    <div className={`transition-all duration-1000 delay-200
                         ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>

                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400/30 via-purple-400/30 to-pink-400/30 rounded-3xl blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700" />

                            <div className="relative rounded-3xl overflow-hidden border-4 border-white/70 shadow-2xl aspect-[4/5]">
                                <img
                                    src={imgForm}
                                    alt="Contacto Punchay"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />

                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20">
                                            <div className="w-12 h-12 rounded-lg bg-indigo-500/80 flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="text-xs text-neutral-300">Email</div>
                                                <div className="text-sm font-bold text-white">info@punchay.dev</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20">
                                            <div className="w-12 h-12 rounded-lg bg-purple-500/80 flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="text-xs text-neutral-300">Teléfono</div>
                                                <div className="text-sm font-bold text-white">+51 934 082 901</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`transition-all duration-1000 delay-400
                         ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>

                        <div className="mb-8">
                            <div className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-indigo-200/50 shadow-lg">
                                <span className="text-lg">📬</span>
                                <span className="text-xs font-bold tracking-[0.3em] uppercase text-indigo-700">
                  Envíanos un Mensaje
                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-4">
                                Contáctanos
                            </h1>

                            <p className="text-base text-slate-700 leading-relaxed">
                                Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo pronto.
                            </p>
                        </div>

                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >
                            <div>
                                <label htmlFor="user_name" className="block text-sm font-bold text-slate-900 mb-2">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="user_name"
                                    name="user_name"
                                    placeholder="Ingresa tu nombre"
                                    className="w-full px-4 py-3 rounded-xl bg-white/90 backdrop-blur-xl border-2 border-slate-200 focus:border-indigo-500 focus:outline-none transition-colors duration-300 text-slate-900"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="user_email" className="block text-sm font-bold text-slate-900 mb-2">
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    id="user_email"
                                    name="user_email"
                                    placeholder="Ingresa tu correo"
                                    className="w-full px-4 py-3 rounded-xl bg-white/90 backdrop-blur-xl border-2 border-slate-200 focus:border-indigo-500 focus:outline-none transition-colors duration-300 text-slate-900"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-2">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Escribe tu mensaje"
                                    className="w-full px-4 py-3 rounded-xl bg-white/90 backdrop-blur-xl border-2 border-slate-200 focus:border-indigo-500 focus:outline-none transition-colors duration-300 resize-none text-slate-900"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSending}
                                className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                            >
                                {isSending ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span>Enviando...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>ENVIAR MENSAJE</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormularioContacto;