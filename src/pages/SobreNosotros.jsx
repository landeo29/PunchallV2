import HeroGrid from "../components/sections/sobre-nosotros/HeroGrid.jsx";
import Inclusion from "../components/sections/sobre-nosotros/Inclusion.jsx";
import MisionVisionEvolucionada from "../components/sections/sobre-nosotros/MisionVisionEvolucionada.jsx";
import ValoresCodificados from "../components/sections/sobre-nosotros/ValoresCultura.jsx";

const SobreNosotros = () => {
    return (
        <div>

            <HeroGrid />
            <MisionVisionEvolucionada />
            <ValoresCodificados/>
            <Inclusion/>
        </div>
    );
};

export default SobreNosotros;