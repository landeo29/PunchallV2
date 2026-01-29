import HeroDonaciones from '../components/sections/colaboracion/HeroDonaciones';
import ApoyoCorporativo from "../components/sections/colaboracion/ApoyoCorporativo.jsx";
import FormasColaborar from "../components/sections/colaboracion/FormasColaborar.jsx";
import HeroColaboracion from "../components/sections/colaboracion/HeroColaboracion.jsx";

const Colaboracion = () => {
    return (
        <div>
            <HeroColaboracion/>
            <HeroDonaciones />
            <ApoyoCorporativo/>
            <FormasColaborar/>
        </div>
    );
};

export default Colaboracion;