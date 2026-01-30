import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Inicio from './pages/Inicio';
import SobreNosotros from './pages/SobreNosotros';
import Soluciones from "./pages/Soluciones.jsx";
import ResponsabilidadSocial from "./pages/ResponsabilidadSocial.jsx";
import Colaboracion from "./pages/Colaboracion.jsx";
import Contacto from "./pages/Contacto.jsx";
import FAQ from "./pages/FAQ.jsx";
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col">
                <Navigation />
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                        <Route path="/soluciones" element={<Soluciones />} />
                        <Route path="/responsabilidad-social" element={<ResponsabilidadSocial />} />
                        <Route path="/colaboracion" element={<Colaboracion />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route path="/faq" element={<FAQ />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;