import { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

import imgForm from '../../../assets/images/contacto/form.webp';

const FormularioContacto = () => {
    const [isInView, setIsInView] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [formData, setFormData] = useState({
        nombre: '',
        empresa: '',
        email: '',
        pais: '',
        interes: '',
        mensaje: ''
    });
    const [errors, setErrors] = useState({});

    const sectionRef = useRef(null);
    const formRef = useRef(null);

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
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const paises = [
        'Perú', 'Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia', 'Ecuador',
        'Paraguay', 'Uruguay', 'Venezuela', 'México', 'Estados Unidos', 'Canadá',
        'España', 'Otro'
    ];

    const intereses = [
        'Auditoría de Accesibilidad',
        'Desarrollo de Software',
        'Outsourcing de Talento',
        'Inversión Social / Donación',
        'Alianza Estratégica',
        'Mentoría Técnica',
        'Otro'
    ];

    const canales = [
        {
            id: 1,
            tipo: 'Consultas Comerciales',
            email: 'ventas@punchay.dev',
            descripcion: 'Auditorías, desarrollo y servicios tecnológicos',
            icon: '💼',
            color: '#3b82f6',
        },
        {
            id: 2,
            tipo: 'Alianzas e Impacto',
            email: 'hola@punchay.dev',
            descripcion: 'Colaboraciones, inversión social y mentoría',
            icon: '🤝',
            color: '#10b981',
        },
        {
            id: 3,
            tipo: 'Atención Directa',
            link: 'https://wa.me/51934082901?text=Hola%20Punchay%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios',
            descripcion: 'WhatsApp: +51 934 082 901',
            icon: '💬',
            color: '#8b5cf6',
        },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.nombre.trim()) {
            newErrors.nombre = 'El nombre es obligatorio';
        }

        if (!formData.empresa.trim()) {
            newErrors.empresa = 'La empresa u organización es obligatoria';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'El correo electrónico es obligatorio';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'El correo electrónico no es válido';
        }

        if (!formData.pais) {
            newErrors.pais = 'Por favor seleccione un país';
        }

        if (!formData.interes) {
            newErrors.interes = 'Por favor seleccione su interés principal';
        }

        if (!formData.mensaje.trim()) {
            newErrors.mensaje = 'El mensaje es obligatorio';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            Swal.fire({
                icon: 'warning',
                title: 'Campos Incompletos',
                text: 'Por favor complete todos los campos requeridos',
                confirmButtonColor: '#3b82f6',
            });
            return;
        }

        setIsSending(true);

        try {
            const templateParams = {
                user_name: formData.nombre,
                user_empresa: formData.empresa,
                user_email: formData.email,
                user_pais: formData.pais,
                user_interes: formData.interes,
                message: formData.mensaje,
            };

            await emailjs.send(
                'service_ias3bue',
                'template_tpnb3zl',
                templateParams,
                'PBH08utFp5vqfUAvv'
            );

            Swal.fire({
                icon: 'success',
                title: '¡Mensaje Enviado!',
                text: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
                confirmButtonColor: '#10b981',
            });

            setFormData({
                nombre: '',
                empresa: '',
                email: '',
                pais: '',
                interes: '',
                mensaje: ''
            });
            setErrors({});

        } catch (error) {
            console.error('Error al enviar:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema al enviar el mensaje. Por favor intenta nuevamente.',
                confirmButtonColor: '#ef4444',
            });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section
            ref={sectionRef}
            className="relative pt-32 pb-20 sm:pb-28 lg:pb-32 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse"
                    style={{
                        animationDuration: '8s',
                        transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
                    }}
                />
                <div
                    className="absolute top-1/4 -right-40 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse"
                    style={{
                        animationDuration: '10s',
                        animationDelay: '2s',
                        transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`
                    }}
                />
            </div>

            <div className="absolute inset-0 opacity-[0.03]">
                <div
                    style={{
                        backgroundImage: `radial-gradient(circle, #6366f1 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                    className="absolute inset-0"
                />
            </div>

            <div className="container-custom relative z-10">

                <div className={`text-center mb-16 max-w-4xl mx-auto transition-all duration-1000 delay-200
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-200/50 shadow-lg">
                        <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-indigo-700">
              Hablemos
            </span>
                        <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-6">
                        <span className="text-slate-900">Construyamos el</span>
                        <br />
                        <span className="relative inline-block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                Futuro de la Inclusión
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-indigo-400/30 blur-lg animate-pulse" />
            </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
                        Ya sea que necesite una{' '}
                        <span className="font-bold text-indigo-700">auditoría técnica</span>,{' '}
                        <span className="font-bold text-purple-700">desarrollo de software a medida</span> o quiera{' '}
                        <span className="font-bold text-pink-700">formar parte de nuestro ecosistema de impacto</span>,
                        nuestro equipo está listo para asesorarlo.
                    </p>
                </div>

                <div className={`mb-16 transition-all duration-1000 delay-400
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center mb-8">
                        Canales Directos
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                        {canales.map((canal, index) => (
                            <div
                                key={canal.id}
                                className={`group relative transition-all duration-1000
                          ${isInView
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                                }`}
                                style={{ transitionDelay: `${600 + index * 100}ms` }}
                            >
                                <div
                                    className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"
                                    style={{ background: `${canal.color}60` }}
                                />

                                <div className="relative h-full p-6 rounded-2xl bg-white/90 backdrop-blur-xl border-2 border-white/60 shadow-lg group-hover:shadow-xl transition-all duration-500">

                                    <div className="text-center">
                                        <div
                                            className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center text-3xl shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                                            style={{ background: `${canal.color}20` }}
                                            aria-hidden="true"
                                        >
                                            {canal.icon}
                                        </div>

                                        <h3 className="text-lg font-black text-slate-900 mb-2">
                                            {canal.tipo}
                                        </h3>

                                        {canal.email ? (

                                            <a
                                            href={`mailto:${canal.email}`}
                                            className="text-base font-bold hover:underline transition-colors duration-300 block mb-2"
                                            style={{ color: canal.color }}
                                            >
                                        {canal.email}
                                            </a>
                                            ) : (
<a

                                                href={canal.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-base font-bold hover:underline transition-colors duration-300 inline-flex items-center gap-2 mb-2"
                                        style={{ color: canal.color }}
                                        >
                                        <span>WhatsApp</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                    )}

                                    <p className="text-sm text-slate-600">
                                        {canal.descripcion}
                                    </p>
                                </div>
                            </div>
                            </div>
                            ))}
                    </div>
                </div>

                <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-800
                       ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        <div className="lg:col-span-5">
                            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={imgForm}
                                    alt="Equipo Punchay listo para asesorarlo en proyectos de accesibilidad web"
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />

                                <div className="absolute bottom-8 left-8 right-8 space-y-4">
                                    <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-indigo-500 flex items-center justify-center flex-shrink-0">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-white/80">Email General</p>
                                                <p className="text-sm font-bold text-white">info@punchay.dev</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center flex-shrink-0">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-white/80">Teléfono</p>
                                                <p className="text-sm font-bold text-white">+51 934 082 901</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="p-8 rounded-2xl bg-white/90 backdrop-blur-xl border-2 border-white/60 shadow-xl">

                                <h2 className="text-2xl font-black text-slate-900 mb-6">
                                    Formulario de Contacto
                                </h2>

                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">

                                    <div>
                                        <label htmlFor="nombre" className="block text-sm font-bold text-slate-700 mb-2">
                                            Nombre Completo <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border-2 ${
                                                errors.nombre ? 'border-red-500' : 'border-slate-300'
                                            } focus:border-indigo-500 focus:outline-none transition-colors duration-300`}
                                            aria-required="true"
                                            aria-invalid={!!errors.nombre}
                                            aria-describedby={errors.nombre ? "nombre-error" : undefined}
                                        />
                                        {errors.nombre && (
                                            <p id="nombre-error" role="alert" aria-live="assertive" className="text-red-600 text-sm mt-1">
                                                {errors.nombre}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="empresa" className="block text-sm font-bold text-slate-700 mb-2">
                                            Empresa / Organización <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="empresa"
                                            name="empresa"
                                            value={formData.empresa}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border-2 ${
                                                errors.empresa ? 'border-red-500' : 'border-slate-300'
                                            } focus:border-indigo-500 focus:outline-none transition-colors duration-300`}
                                            aria-required="true"
                                            aria-invalid={!!errors.empresa}
                                            aria-describedby={errors.empresa ? "empresa-error" : undefined}
                                        />
                                        {errors.empresa && (
                                            <p id="empresa-error" role="alert" aria-live="assertive" className="text-red-600 text-sm mt-1">
                                                {errors.empresa}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                                            Correo Corporativo <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border-2 ${
                                                errors.email ? 'border-red-500' : 'border-slate-300'
                                            } focus:border-indigo-500 focus:outline-none transition-colors duration-300`}
                                            aria-required="true"
                                            aria-invalid={!!errors.email}
                                            aria-describedby={errors.email ? "email-error" : undefined}
                                        />
                                        {errors.email && (
                                            <p id="email-error" role="alert" aria-live="assertive" className="text-red-600 text-sm mt-1">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="pais" className="block text-sm font-bold text-slate-700 mb-2">
                                                País <span className="text-red-600">*</span>
                                            </label>
                                            <select
                                                id="pais"
                                                name="pais"
                                                value={formData.pais}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg border-2 ${
                                                    errors.pais ? 'border-red-500' : 'border-slate-300'
                                                } focus:border-indigo-500 focus:outline-none transition-colors duration-300`}
                                                aria-required="true"
                                                aria-invalid={!!errors.pais}
                                                aria-describedby={errors.pais ? "pais-error" : undefined}
                                            >
                                                <option value="">Seleccione un país</option>
                                                {paises.map((pais) => (
                                                    <option key={pais} value={pais}>{pais}</option>
                                                ))}
                                            </select>
                                            {errors.pais && (
                                                <p id="pais-error" role="alert" aria-live="assertive" className="text-red-600 text-sm mt-1">
                                                    {errors.pais}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label htmlFor="interes" className="block text-sm font-bold text-slate-700 mb-2">
                                                Interés Principal <span className="text-red-600">*</span>
                                            </label>
                                            <select
                                                id="interes"
                                                name="interes"
                                                value={formData.interes}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-lg border-2 ${
                                                    errors.interes ? 'border-red-500' : 'border-slate-300'
                                                } focus:border-indigo-500 focus:outline-none transition-colors duration-300`}
                                                aria-required="true"
                                                aria-invalid={!!errors.interes}
                                                aria-describedby={errors.interes ? "interes-error" : undefined}
                                            >
                                                <option value="">Seleccione una opción</option>
                                                {intereses.map((interes) => (
                                                    <option key={interes} value={interes}>{interes}</option>
                                                ))}
                                            </select>
                                            {errors.interes && (
                                                <p id="interes-error" role="alert" aria-live="assertive" className="text-red-600 text-sm mt-1">
                                                    {errors.interes}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="mensaje" className="block text-sm font-bold text-slate-700 mb-2">
                                            Mensaje <span className="text-red-600">*</span>
                                        </label>
                                        <textarea
                                            id="mensaje"
                                            name="mensaje"
                                            value={formData.mensaje}
                                            onChange={handleChange}
                                            rows="5"
                                            className="..."
                                            aria-label="Escriba su mensaje o consulta detallada"
                                            aria-required="true"
                                            aria-invalid={!!errors.mensaje}
                                            aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
                                        />
                                        {errors.mensaje && (
                                            <p id="mensaje-error" role="alert" aria-live="assertive" className="text-red-600 text-sm mt-1">
                                                {errors.mensaje}
                                            </p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSending}
                                        className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg
                                        shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed
                                        transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]
                                        flex items-center justify-center gap-3"
                                        aria-label={isSending ? 'Enviando mensaje...' : 'Enviar mensaje de contacto'}
                                    >
                                        {isSending ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                <span>Enviando...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>ENVIAR MENSAJE</span>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </>
                                        )}
                                    </button>

                                    <p className="text-xs text-slate-600 text-center leading-relaxed mt-4">
                                        Al contactarnos, usted acepta nuestra{' '}
                                        <a href="/privacidad" className="text-indigo-600 hover:underline font-semibold">
                                            Política de Privacidad
                                        </a>.
                                        Sus datos serán tratados con la máxima confidencialidad para fines de asesoría técnica y social.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormularioContacto;