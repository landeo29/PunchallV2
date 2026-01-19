import Hero from '../components/sections/inicio/Hero';
import WaveSlider from "../components/sections/inicio/WaveSlider.jsx";
import MissionVision from "../components/sections/inicio/MissionVision.jsx";
import Testimonial from "../components/sections/inicio/Testimonial.jsx";
import TechStack from "../components/sections/inicio/TechStack.jsx";
import CTASection from "../components/sections/inicio/CTASection.jsx";

const Inicio = () => {
    return (
        <div>
            <Hero />
            <WaveSlider />
            <MissionVision />
            <Testimonial />
            <TechStack />
            <CTASection/>
        </div>
    );
};

export default Inicio;