import IniciativasInclusivas from '../components/sections/responsabilidad/IniciativasInclusivas';
import Colaboraciones from "../components/sections/responsabilidad/Colaboraciones.jsx";
import HeroResponsabilidad from "../components/sections/responsabilidad/HeroResponsabilidad.jsx";
import ModeloImpacto from "../components/sections/responsabilidad/ModeloImpacto.jsx";
import CompromisODS from "../components/sections/responsabilidad/CompromisODS.jsx";
import AlianzasTransforman from "../components/sections/responsabilidad/AlianzasTransforman.jsx";

const ResponsabilidadSocial = () => {
    return (
        <div>
            <HeroResponsabilidad />
            <ModeloImpacto />
            <CompromisODS />
            <AlianzasTransforman/>
            <IniciativasInclusivas />
            <Colaboraciones/>
        </div>
    );
};

export default ResponsabilidadSocial;