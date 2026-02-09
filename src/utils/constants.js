
// Navegación con rutas de React Router
export const NAVIGATION_ITEMS = [
    { id: 'inicio', label: 'Inicio', path: '/' },
    { id: 'nosotros', label: 'Sobre Nosotros', path: '/sobre-nosotros' },
    { id: 'soluciones', label: 'Soluciones', path: '/soluciones' },
    { id: 'responsabilidad', label: 'Responsabilidad Social', path: '/responsabilidad-social' },
    { id: 'colaboracion', label: 'Oportunidad de Colaboración', path: '/colaboracion' },
    { id: 'contacto', label: 'Contáctanos', path: '/contacto' },
];

// Información de la empresa
export const COMPANY_INFO = {
    name: 'Punchay',
    email: 'info@punchay.dev',
    phone: '+51 934 082 901',
    address: 'Lima, Perú',
    tagline: 'Innovación Inclusiva',
};

// Redes sociales
export const SOCIAL_LINKS = {
    facebook: 'https://www.facebook.com/profile.php?id=61572802040926',
    twitter: 'https://x.com/PUNCHAY2025',
    linkedin: 'https://www.linkedin.com/in/punchay-s-a-c-b49723349/',
    instagram: 'https://www.instagram.com/punchaygroup/',
    tiktok: 'https://tiktok.com/@punchay3',
    whatsapp: 'https://wa.me/51934082901',
    github: 'https://github.com/Punchay',
};

// Enlaces del footer
export const FOOTER_QUICK_LINKS = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
    { name: 'Soluciones', path: '/soluciones' },
    { name: 'Responsabilidad Social', path: '/responsabilidad-social' },
    { name: 'FAQ', path: '/faq' },
];

export const FOOTER_SUPPORT_LINKS = [
    { name: 'Oportunidad de Colaboración', path: '/colaboracion' },
    { name: 'Donaciones Únicas', path: 'https://www.paypal.com/donate?hosted_button_id=4XLEY7KZ55W9N', external: true },
    { name: 'Donaciones Recurrentes', path: 'https://www.paypal.com/donate?hosted_button_id=4XLEY7KZ55W9N', external: true },
    { name: 'Contáctanos', path: '/contacto' },
    { name: 'Campañas Activas', path: 'https://fundrazr.com/52Vzw0', external: true },
];