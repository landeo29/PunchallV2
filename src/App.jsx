import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';

import Inicio from './pages/Inicio';
import SobreNosotros from './pages/SobreNosotros';
import Soluciones from "./pages/Soluciones.jsx";
import ResponsabilidadSocial from "./pages/ResponsabilidadSocial.jsx";
import Colaboracion from "./pages/Colaboracion.jsx";
function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Navigation />
                <main className="flex-1"> {/* SIN pt-24 */}
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                        <Route path="/soluciones" element={<Soluciones />} />
                        <Route path="/responsabilidad-social" element={<ResponsabilidadSocial />} />
                        <Route path="/colaboracion" element={<Colaboracion />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;