import { store } from '../redux/store'


const studentUrls = {
    classes: "https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackendservice.azurewebsites.net/GetStudentAbsencesNoticesPerCourse/",
    schedule: "https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackendservice.azurewebsites.net/GetStudentSchedule/",
    todaySummary: "https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackendservice.azurewebsites.net/GetTodayStudentSchedule/",
    classDetail: "https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackendservice.azurewebsites.net/GetNoticesBySection/"
}

const professorUrls = {
    classes: "https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackendservice.azurewebsites.net/GetProfessorAbsencesNoticesPerCourse/",
    schedule: "https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackendservice.azurewebsites.net/GetProfessorSchedule/",
    todaySummary: "https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackendservice.azurewebsites.net/GetTodayProfessorSchedule/",
    classDetail: "https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackendservice.azurewebsites.net/GetNoticesBySection/"
}

export const urlTypes = {
    classes: "classes",
    schedule: "schedule",
    todaySummary: "todaySummary",
    classDetail: "classDetail"
}

function getUserRole() {
    return store.getState().user.currentUser.role;
}

export function getUrl(type) {
    let role = getUserRole();

    if (role === "Student") {
        switch (type) {
            case urlTypes.classes:
                return studentUrls.classes
            case urlTypes.schedule:
                return studentUrls.schedule
            case urlTypes.todaySummary:
                return studentUrls.todaySummary
            case urlTypes.classDetail:
                return studentUrls.classDetail
            default:
                return null
        }
    }
    else {
        switch (type) {
            case urlTypes.classes:
                return professorUrls.classes
            case urlTypes.schedule:
                return professorUrls.schedule
            case urlTypes.todaySummary:
                return professorUrls.todaySummary
            case urlTypes.classDetail:
                return professorUrls.classDetail
            default:
                return null
        }
    }
}