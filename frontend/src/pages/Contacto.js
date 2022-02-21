import "../../src/styles/components/pages/Contacto.css";
import { Link } from "react-router-dom";

const Contacto = (props) => {
  return (
    <main className="holder">
      <div className="contacto">
        <div className="titulocontacto">
          Contactame<span>!</span>
        </div>
        <div className="lineadiv"></div>
        <div className="subtitulocontacto">
          completa los datos del formulario!
        </div>
      </div>

      <div className="contenidocontacto"></div>

      <div class="containercontacto">
        <form action="contactanos"></form>

        <input type="text" class="nombre" placeholder="Ingrese tu nombre" />

        <input type="text" class="nombre" placeholder="Ingrese tu apellido" />

        <input type="number" class="nombre" placeholder="Ingrese tu telefono" />

        <input type="text" class="nombre" placeholder="Ingrese tu Mail" />
      </div>
      <div class="botoncontacto">Contactame</div>
    </main>
  );
};

export default Contacto;
