import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../../utils/constants.js';

import logo from '../../assets/images/logo/nav.webp';

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const winScroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScrollProgress(scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const isActiveRoute = (path) => {
        return location.pathname === path;
    };



    return (
        <>
            <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 z-[60]">
                <div
                    className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-300 ease-out
                     shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            <nav
                className="fixed top-6 left-3 right-3 lg:left-6 lg:right-6 z-50"
                aria-label="Navegación principal"
            >
                <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20
                       rounded-[1.75rem] blur-xl opacity-60" />

                <div className="relative rounded-[1.75rem] overflow-hidden
                       shadow-[0_20px_70px_-15px_rgba(0,0,0,0.5)]">

                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/90 via-neutral-700/90 to-neutral-800/90
                         backdrop-blur-3xl" />

                    <div className="absolute inset-0 opacity-[0.02]"
                         style={{
                             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                         }}
                    />

                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                    <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                    <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                    <div className="relative px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-[4.5rem]">

                            <Link
                                to="/"
                                className="flex items-center group relative z-10"
                                aria-label="Punchay - Ir al inicio"
                            >
                                <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0
                              rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                                <div className="relative">
                                    <div className="relative transform transition-all duration-500
                                group-hover:scale-110 group-hover:rotate-2">
                                        <img
                                            src={logo}
                                            alt="Punchay"
                                            className="h-11 w-auto sm:h-12 drop-shadow-2xl"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        <div className="hidden items-center gap-2">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600
                                                          flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                                                          d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <span className="text-xl font-black text-white">Punchay</span>
                                        </div>
                                    </div>

                                    <div className="absolute -bottom-2 left-0 right-0 h-8 bg-gradient-to-b from-blue-500/20 to-transparent
                                blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </Link>

                            <div className="hidden lg:flex items-center gap-1.5">
                                <div className="flex items-center gap-1 px-2 py-2 rounded-2xl bg-white/[0.03]">
                                    {NAVIGATION_ITEMS.filter(item => item.id !== 'contacto').map((item) => (
                                        <Link
                                            key={item.id}
                                            to={item.path}
                                            className="group relative px-5 py-2.5 rounded-xl font-medium text-[13px] tracking-wide
                                transition-all duration-300"
                                        >
                                            <div className={`absolute inset-0 rounded-xl transition-all duration-300
                                    ${isActiveRoute(item.path)
                                                ? 'bg-gradient-to-br from-blue-500/20 to-indigo-500/20 shadow-lg shadow-blue-500/10'
                                                : 'bg-transparent group-hover:bg-white/[0.06]'
                                            }`}
                                            />

                                            {isActiveRoute(item.path) && (
                                                <div className="absolute inset-0 rounded-xl border border-blue-400/30" />
                                            )}

                                            <span className={`relative z-10 transition-all duration-300
                                      ${isActiveRoute(item.path)
                                                ? 'text-white font-semibold'
                                                : 'text-neutral-300 group-hover:text-white'
                                            }`}>
                        {item.label}
                      </span>

                                            {isActiveRoute(item.path) && (
                                                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1
                                       bg-blue-400 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]
                                       animate-pulse" />
                                            )}
                                        </Link>
                                    ))}
                                </div>

                                <div className="h-8 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent mx-2" />

                                <Link
                                    to="/contacto"
                                    className="group relative"
                                >
                                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600
                                rounded-2xl blur-2xl opacity-40 group-hover:opacity-70
                                transition-all duration-500 animate-pulse" />

                                    <div className="relative overflow-hidden rounded-xl">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600
                                  bg-[length:200%_100%] animate-gradient" />

                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                                  -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                        <div className="absolute inset-0 rounded-xl border border-white/20
                                  group-hover:border-white/40 transition-colors duration-300" />

                                        <div className="relative flex items-center gap-2.5 px-7 py-3">
                      <span className="font-semibold text-[13px] text-white tracking-wide">
                        Contáctanos
                      </span>

                                            <div className="relative">
                                                <svg
                                                    className="w-[18px] h-[18px] text-white transition-all duration-300
                                   group-hover:translate-x-1 group-hover:scale-110"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2.5}
                                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                                    />
                                                </svg>

                                                <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full
                                       shadow-[0_0_10px_rgba(74,222,128,0.8)] animate-pulse" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden relative w-12 h-12 rounded-xl flex items-center justify-center
                          bg-white/[0.04] hover:bg-white/[0.08] border border-white/10
                          transition-all duration-300 group
                          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
                                aria-label={isMobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
                                aria-expanded={isMobileMenuOpen}
                                aria-controls="mobile-menu"
                            >
                                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10
                              rounded-xl blur-xl transition-all duration-300" />

                                <div className="relative w-5 h-4 flex flex-col justify-between">
                  <span className={`w-full h-0.5 rounded-full bg-white shadow-lg transition-all duration-300
                                  ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                                    <span className={`w-full h-0.5 rounded-full bg-white shadow-lg transition-all duration-300
                                  ${isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
                                    <span className={`w-full h-0.5 rounded-full bg-white shadow-lg transition-all duration-300
                                  ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>
            </nav>

            <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500
                     ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>

                <div className={`absolute inset-0 transition-all duration-500
                       ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" />

                    <div className="absolute inset-0 backdrop-blur-3xl bg-black/60" />

                    <div className="absolute inset-0 opacity-10"
                         style={{
                             backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                                 radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)`,
                         }}
                    />
                </div>

                <div className={`relative h-full overflow-y-auto transition-all duration-700
                       ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                     onClick={() => setIsMobileMenuOpen(false)}>

                    <div className="min-h-full flex flex-col justify-center px-6 py-20"
                         onClick={(e) => e.stopPropagation()}>

                        <div className="space-y-3 mb-12">
                            {NAVIGATION_ITEMS.map((item, index) => (
                                <Link
                                    key={item.id}
                                    to={item.path}
                                    className={`group block relative overflow-hidden rounded-xl
                            transition-all duration-300 transform hover:scale-[1.02]
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-900
                            ${isActiveRoute(item.path) ? 'shadow-2xl shadow-blue-500/20' : ''}`}
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                    aria-current={isActiveRoute(item.path) ? 'page' : undefined}
                                >
                                    <div className={`absolute inset-0 transition-all duration-300
                                ${isActiveRoute(item.path)
                                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600'
                                        : 'bg-white/[0.08] group-hover:bg-white/[0.15]'
                                    }`}
                                    />

                                    {isActiveRoute(item.path) && (
                                        <div className="absolute inset-0 rounded-xl border-2 border-white/40" />
                                    )}

                                    <div className="relative px-6 py-5 flex items-center justify-between">
                    <span className={`font-semibold text-lg transition-colors duration-300
                                    ${isActiveRoute(item.path) ? 'text-white' : 'text-neutral-50'}`}>
                      {item.label}
                    </span>

                                        {isActiveRoute(item.path) ? (
                                            <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)] animate-pulse"
                                                 aria-hidden="true" />
                                        ) : (
                                            <svg className="w-5 h-5 text-neutral-200 opacity-60 group-hover:opacity-100
                                    transition-all duration-300 group-hover:translate-x-1"
                                                 fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                 aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                                                      d="M9 5l7 7-7 7" />
                                            </svg>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-white/20">
                            <h2 className="text-center text-neutral-50 text-base font-semibold mb-6">Síguenos en redes sociales</h2>
                            <div className="flex justify-center gap-4" role="list">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                                   className="relative group w-14 h-14 rounded-xl bg-white/[0.10] hover:bg-white/[0.18]
                             border-2 border-white/30 flex items-center justify-center
                             transition-all duration-300 transform hover:scale-110 hover:-translate-y-1
                             focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
                                   aria-label="Facebook">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-indigo-500/0
                                  rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                    <span className="relative text-2xl">📘</span>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                                   className="relative group w-14 h-14 rounded-xl bg-white/[0.10] hover:bg-white/[0.18]
                             border-2 border-white/30 flex items-center justify-center
                             transition-all duration-300 transform hover:scale-110 hover:-translate-y-1
                             focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
                                   aria-label="Twitter">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-indigo-500/0
                                  rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                    <span className="relative text-2xl">🐦</span>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                                   className="relative group w-14 h-14 rounded-xl bg-white/[0.10] hover:bg-white/[0.18]
                             border-2 border-white/30 flex items-center justify-center
                             transition-all duration-300 transform hover:scale-110 hover:-translate-y-1
                             focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
                                   aria-label="Instagram">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-indigo-500/0
                                  rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                    <span className="relative text-2xl">📷</span>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                                   className="relative group w-14 h-14 rounded-xl bg-white/[0.10] hover:bg-white/[0.18]
                             border-2 border-white/30 flex items-center justify-center
                             transition-all duration-300 transform hover:scale-110 hover:-translate-y-1
                             focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
                                   aria-label="LinkedIn">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-indigo-500/0
                                  rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                    <span className="relative text-2xl">💼</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navigation;