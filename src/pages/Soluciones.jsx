import HeroSoluciones from '../components/sections/soluciones/HeroSoluciones';
import Caracteristicas from "../components/sections/soluciones/Caracteristicas.jsx";
import ProcesoTrabajo from "../components/sections/soluciones/ProcesoTrabajo.jsx";
import CTASoluciones from "../components/sections/soluciones/CTASoluciones.jsx";
const Soluciones = () => {
    return (
        <div>
            <HeroSoluciones />
            <Caracteristicas/>
            <ProcesoTrabajo/>
            <CTASoluciones/>

        </div>
    );
};

export default Soluciones;