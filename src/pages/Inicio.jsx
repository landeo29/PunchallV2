import Hero from '../components/sections/inicio/Hero';
import WaveSlider from "../components/sections/inicio/WaveSlider.jsx";
import MissionVision from "../components/sections/inicio/MissionVision.jsx";
import Testimonial from "../components/sections/inicio/Testimonial.jsx";
import TechStack from "../components/sections/inicio/TechStack.jsx";
import CTASection from "../components/sections/inicio/CTASection.jsx";
import PropuestaValor from "../components/sections/inicio/PropuestaValor.jsx";
import ServiciosDestacados from "../components/sections/inicio/ServiciosDestacados.jsx";

const Inicio = () => {
    return (
        <div>
            <Hero />
            <WaveSlider />
            <PropuestaValor />
            <ServiciosDestacados />
            <MissionVision />
            <Testimonial />
            <TechStack />
            <CTASection/>
        </div>
    );
};

export default Inicio;