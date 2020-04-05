import React from "react";
import "./../HelpPage.scss";
import CollapsibleQuestion from "../../collapsible-question/CollapsibleQuestion";

const HelpPageFunctionalities = ({ children }) => {
  return (
    <div className="help-page-start fade-in-bck">
      <div className="help-page-start-title">Ayuda básica</div>
      <div className="help-page-start-content">
        <CollapsibleQuestion
          title="¿Cómo ingresar a la aplicación?"
          description={
            <div>
              Para ingresar a la aplicación lo primero que debemos hacer es
              acceder al enlace de la aplicación que es el siguiente:
              <br></br>
              <a href={`${window.location.origin}/login`}>
                {`${window.location.origin}/login`}
              </a>
              <br />
              <br />
              En el caso de los dispositivos móviles podemos agregar el icono de
              la aplicación para acceder directamente como se puede observar en
              la imagen:
              <br></br>
              <img
                src={require("../../../assets/images/help/app.png")}
                alt="app"
              />
            </div>
          }
        />
        <CollapsibleQuestion
          title="¿Cómo inicio sesión?"
          description={
            <div>
              En la casilla de ID se debe colocar el ID que utiliza para acceder
              a las demás plataformas del INTEC, y también la misma contraseña
              dentro de la casilla de contraseña (al lado de icono de la llave)
              <img
              width="50%"
                src={require("../../../assets/images/help/login.png")}
                alt="app"
              />
            </div>
          }
        />
        <CollapsibleQuestion
          title="¿Por qué no puedo acceder a la aplicación?"
          description="Si la aplicación no te permite acceder puede deberse a varias razones. Lo primero de lo que debes asegurarte es que tus credenciales son correctas; revisa bien tu ID y verifica que estás introduciendo la contraseña correctamente. En caso de que tus credenciales sean correctas, asegúrate de que eres un estudiante activo, para esto debes comunicarte con el INTEC. Después de verificar todo esto, si aun no puedes acceder debes comunicarte con el equipo de soporte de INTEC para reportar tu caso."
        />
        <CollapsibleQuestion
          title="¿Por qué no aparecen mis materias en la tabla de horarios?"
          description="Beekeeper se sincroniza con la base de datos de INTEC al comienzo de cada trimestre. Si ya seleccionaste y no aparecen tus materias en la aplicación, quizá a que este proceso de sincronización no se ha realizado. Para asegurarte de esto, puedes consultar con algún compañero si ya su horario aparece en la aplicación, si este es el caso, debes comunicarte con el equipo de soporte de INTEC para reportar tu caso."
        />
        <CollapsibleQuestion
          title="¿Por que no aparecen las clases que debo tomar hoy?"
          description="Las clases que debes tomar el día de hoy te aparecen desde las 12 A.M, si no tienes nada, asegurate de que la(s) asignatura(s) que debes tomar no sean virtuales ya que las mismas no poseen horario. Si ya validaste todo lo anterior, debes comunicarte con el equipo de soporte de INTEC para reportar tu caso."
        />
        <CollapsibleQuestion
          title="¿Por qué si envío una excusa comoquiera tengo una ausencia?"
          description="Las ausencias se contabilizan cuando no envías un token creado por el profesor de la asignatura, o cuando envías el token pero falla uno de los procesos de validación del mismo. Para anular esta ausencia con una excusa, tu profesor debe aceptar la excusa como válida. Si ya tu profesor aceptó la excusa, debes comunicarte con el equipo de soporte de INTEC para reportar tu caso."
        />
        <CollapsibleQuestion
          title="¿Por qué tengo ausencias si no he faltado a clases?"
          description="Las ausencias se contabilizan cuando no envías un token creado por el profesor de la asignatura, o cuando envías el token pero falla uno de los procesos de validación del mismo. Confirma con tu profesor que has enviado todos los tokens de asistencia. Una vez validado esto, si entiendes que ha ocurrido un error, debes comunicarte con el equipo de soporte de INTEC para reportar tu caso."
        />
      </div>
    </div>
  );
};

export default HelpPageFunctionalities;
