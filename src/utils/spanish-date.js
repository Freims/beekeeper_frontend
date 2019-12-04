

const currentDay = date => {
    let day = date.getDay();
    let spanishDay;

    switch (day) {
        case 0:
            spanishDay = "Domingo"
            break;
        case 1:
            spanishDay = "Lunes"
            break;
        case 2:
            spanishDay = "Martes"
            break;
        case 3:
            spanishDay = "Miércoles"
            break;
        case 4:
            spanishDay = "Jueves"
            break;
        case 5:
            spanishDay = "Viernes"
            break;
        case 6:
            spanishDay = "Sábado"
            break;
        default: spanishDay = "error"
            break;
    }
    return spanishDay;
}

const currentMonth = date => {

    let month = date.getMonth();
    let spanishMonth;

    switch (month) {
        case 0:
            spanishMonth = "Enero"
            break;
        case 1:
            spanishMonth = "Febrero"
            break;
        case 2:
            spanishMonth = "Marzo"
            break;
        case 3:
            spanishMonth = "Abril"
            break;
        case 4:
            spanishMonth = "Mayo"
            break;
        case 5:
            spanishMonth = "Junio"
            break;
        case 6:
            spanishMonth = "Julio"
            break;
        case 7:
            spanishMonth = "Agosto"
            break;
        case 8:
            spanishMonth = "Septiembre"
            break;
        case 9:
            spanishMonth = "Octubre"
            break;
        case 10:
            spanishMonth = "Noviembre"
            break;
        case 11:
            spanishMonth = "Diciembre"
            break;
        default: spanishMonth = "error"
            break;
    }
    return spanishMonth;

}


const getToday = () => {
    let date = new Date();
    return `Hoy es ${currentDay(date)} ${date.getDate()} de ${currentMonth(date)} del ${date.getFullYear()}`;

}

export default getToday;