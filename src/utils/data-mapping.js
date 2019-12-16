
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
        id: user.intecStudentId,
        dbId: user.studentId,
        name: user.firstName + " " + user.lastName,
        program: user.career.name,
        img: user.studentPhotoUrl,
        role: "student"
    }
    return currentUser
}