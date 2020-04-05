import React from "react";
import "./../HelpPage.scss";
import CollapsibleQuestion from "../../collapsible-question/CollapsibleQuestion";

const HelpPageStudent = ({ children }) => {
  return (
    <div className="help-page-start fade-in-bck">
      <div className="help-page-start-title ">Ayuda al estudiante</div>
      <div className="help-page-start-content">
        <CollapsibleQuestion
          title="Pantalla de inicio"
          description={
            <div style={{ textAlign: "center" }}>
              <div>
                En la pantalla de inicio de la aplicación se destaca lo
                siguiente: <br />
                <br />
                1. Horario de las asignaturas del trimestre <br />
                2. Asignaturas del día <br />
                3. Información personal del estudiante <br />
                4. Tab de Mis Clases
              </div>
              <img
                width="100%"
                src={require("../../../assets/images/help/inicio.png")}
                alt="app"
              />
            </div>
          }
        />
        <CollapsibleQuestion
          title="Pantalla de Mis Clases"
          description={
            <div>
              <div style={{ textAlign: "center" }}>
                En esta pantalla podemos ver nuestras clases del trimestre y así
                vemos las ausencias y excusas que han tenido nuestros
                estudiantes. <br />
                <br />
                1. Horario de las asignaturas del trimestre <br />
                2. Asignaturas del día <br />
                3. Información personal del estudiante <br />
                4. Tab de Mis Clases
              </div>
              <img
                width="100%"
                src={require("../../../assets/images/help/clases.png")}
                alt="app"
              />
            </div>
          }
        />
        <CollapsibleQuestion
          title="Pantalla de Clase"
          description={
            <div style={{ textAlign: "center" }}>
              Cuando accedemos a la pantalla de Clase es que podremos realizar
              la mayoría de las funcionalidades que nos ofrece la aplicación.{" "}
              <img
                width="100%"
                src={require("../../../assets/images/help/clase.png")}
                alt="app"
              />
            </div>
          }
        />
        <CollapsibleQuestion
          title="¿Cómo veo mis avisos?"
          description={
            <div style={{ textAlign: "center" }}>
              <div style={{ width: "50%" }}>
                En esta parte de la pantalla de Clase vemos los avisos que hemos
                enviado.
              </div>
              <img
                width="100%"
                src={require("../../../assets/images/help/avisoestudiante.png")}
                alt="app"
              />
            </div>
          }
        />
        <CollapsibleQuestion
          title="¿Cómo creo una excusa?"
          description={
            <div style={{ textAlign: "center" }}>
              <div>
                Presionamos el botón crear excusa en la pantalla de clase como
                mostrado en imagen, ponemos los detalles y presionamos enviar.
              </div>
              <img
                width="100%"
                src={require("../../../assets/images/help/crearexcusa.png")}
                alt="app"
              />
            </div>
          }
        />
        <CollapsibleQuestion
          title="¿Cómo valido mi asistencia?"
          description={
            <div style={{ textAlign: "center" }}>
              Introducimos el código de asistencia en el campo de Asistencia y
              presionamos Enviar Código. Esta acción solo podemos realizarla
              cuando estamos en la clase, la fecha, hora y lugar.
              <img
                width="100%"
                src={require("../../../assets/images/help/enviarcodigo.png")}
                alt="app"
              />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default HelpPageStudent;
