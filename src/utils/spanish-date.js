

const currentDay = date => {
    let day = date.getDay();
    let spanishDay;

    switch (day) {
        case 0:
            spanishDay = "domingo"
            break;
        case 1:
            spanishDay = "lunes"
            break;
        case 2:
            spanishDay = "martes"
            break;
        case 3:
            spanishDay = "miércoles"
            break;
        case 4:
            spanishDay = "jueves"
            break;
        case 5:
            spanishDay = "viernes"
            break;
        case 6:
            spanishDay = "sábado"
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
            spanishMonth = "enero"
            break;
        case 1:
            spanishMonth = "febrero"
            break;
        case 2:
            spanishMonth = "marzo"
            break;
        case 3:
            spanishMonth = "abril"
            break;
        case 4:
            spanishMonth = "mayo"
            break;
        case 5:
            spanishMonth = "junio"
            break;
        case 6:
            spanishMonth = "julio"
            break;
        case 7:
            spanishMonth = "agosto"
            break;
        case 8:
            spanishMonth = "septiembre"
            break;
        case 9:
            spanishMonth = "octubre"
            break;
        case 10:
            spanishMonth = "noviembre"
            break;
        case 11:
            spanishMonth = "diciembre"
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