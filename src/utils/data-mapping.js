
export function mapClassToRow(intecClass) {

    let dayList = intecClass.dayList;
    let schedule = ['', '', '', '', '', '', '', ''];
    dayList.forEach(day => {
        schedule[day.dayId] = day.schedule;
        schedule[7] ?
            schedule[7] = schedule[7] + ', ' + day.building : schedule[7] = day.building;
    });

    return schedule;
}