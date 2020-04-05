import React from "react";
import "./../HelpPage.scss";
import CollapsibleQuestion from "../../collapsible-question/CollapsibleQuestion";

const HelpPageProfessor = ({ children }) => {
  return (
    <div className="help-page-start fade-in-bck">
      <div className="help-page-start-title ">Ayuda al docente</div>
      <div className="help-page-start-content">
        <CollapsibleQuestion
          title="Pantalla de inicio"
          description={
            <div style={{ textAlign: "center" }}>
              En la pantalla de inicio de la aplicación se destaca lo siguiente:{" "}
              <br />
              <br />
              1. Horario de las asignaturas del trimestre <br />
              2. Asignaturas del día <br />
              3. Información personal del estudiante <br />
              4. Tab de Mis Clases
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
            <div style={{ textAlign: "center" }}>
              En esta pantalla podemos ver nuestras clases del trimestre y así
              vemos las ausencias y excusas que han tenido nuestros estudiantes.{" "}
              <br />
              <br />
              1. Horario de las asignaturas del trimestre <br />
              2. Asignaturas del día <br />
              3. Información personal del estudiante <br />
              4. Tab de Mis Clases
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
                enviado, y tenemos la oportunidad de crear otro aviso.
              </div>
              <img
                width="100%"
                src={require("../../../assets/images/help/aviso.png")}
                alt="app"
              />
            </div>
          }
        />
        <CollapsibleQuestion
          title="¿Cómo creo un aviso?"
          description={
            <div style={{ textAlign: "center" }}>
              Presionamos el botón crear aviso en la pantalla de clase como
              mostrado en imagen, ponemos los detalles y presionamos enviar.
              <img
                width="100%"
                src={require("../../../assets/images/help/crearaviso.png")}
                alt="app"
              />
            </div>
          }
        />
        <CollapsibleQuestion
          title="¿Cómo notifico una ausencia?"
          description={
            <div style={{ textAlign: "center" }}>
              Presionamos el botón notificar ausencia la pantalla de Clase. Lo
              interesante de esto que lo diferencia con el aviso es que se
              genera un mensaje automáticamente que expresa que no se podrá
              impartir la clase en el día seleccionado.
              <img
                width="100%"
                src={require("../../../assets/images/help/ausencia.png")}
                alt="app"
              />
            </div>
          }
        />
        <CollapsibleQuestion
          title="¿Cómo veo la lista de mis estudiantes?"
          description={
            <div style={{ textAlign: "center" }}>
              Presionamos el botón ver registro la pantalla de Clase y se
              despliega lo siguiente:
              <img
                width="100%"
                src={require("../../../assets/images/help/registro.png")}
                alt="app"
              />
            </div>
          }
        />
        <CollapsibleQuestion
          title="¿Cómo valido un estudiante manualmente?"
          description={
            <div style={{ textAlign: "center" }}>
              Presionamos el botón Validar ID y procedemos a introducir el ID
              del estudiante en cuestión.
              <img
                width="100%"
                src={require("../../../assets/images/help/manual.png")}
                alt="app"
              />
            </div>
          }
        />
        <CollapsibleQuestion
          title="¿Cómo genero el código de asistencia?"
          description={
            <div style={{ textAlign: "center" }}>
              Presionamos el botón Generar Código y especificamos la duración
              del código, esta acción solo podemos realizarla cuando estamos en
              la clase, la fecha, hora y lugar adecuado.
              <img
                width="100%"
                src={require("../../../assets/images/help/codigo.png")}
                alt="app"
              />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default HelpPageProfessor;
