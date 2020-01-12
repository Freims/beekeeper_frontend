
export function mapClassToRow(intecClass) {

    let dayList = intecClass.dayList;
    let schedule = ['', '', '', '', '', '', ''];
    dayList.forEach(day => {
        schedule[day.dayId] = day.schedule;
        schedule[6] ?
            schedule[6] = schedule[6] + ', ' + day.building : schedule[6] = day.building;
    });

    return schedule;
}

export function mapUser(user) {
    let currentUser = {
        id: user.intecUserId,
        dbId: user.userId,
        name: user.firstName + " " + user.lastName,
        program: user.careerName,
        img: user.userUrlPhoto,
        role: user.rol
    }
    return currentUser
}

export function formatDate(date) {
    let formattedDate = new Date(date);
    formattedDate = formattedDate.getDate() + ' / ' + (formattedDate.getMonth() + 1) + ' / ' + formattedDate.getFullYear();

    return formattedDate;
}