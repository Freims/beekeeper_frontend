import { store } from '../../redux/store'


const studentUrls = {
    classes: "https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackend.azurewebsites.net/GetStudentAbsencesNoticesPerCourse/",
    schedule: "https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackend.azurewebsites.net/GetStudentSchedule/",
    todaySummary: "https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackend.azurewebsites.net/GetTodayStudentSchedule/",
    classDetail: "https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackend.azurewebsites.net/GetNoticesBySection/",
    createExcuse: "https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackend.azurewebsites.net/CreateExcuse",
    validateToken: "https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackend.azurewebsites.net/ValidateToken/"
}

const professorUrls = {
    classes: "https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackend.azurewebsites.net/GetProfessorAbsencesNoticesPerCourse/",
    schedule: "https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackend.azurewebsites.net/GetProfessorSchedule/",
    todaySummary: "https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackend.azurewebsites.net/GetTodayProfessorSchedule/",
    classDetail: "https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackend.azurewebsites.net/GetNoticesBySection/"
}

export const urlTypes = {
    classes: "classes",
    schedule: "schedule",
    todaySummary: "todaySummary",
    classDetail: "classDetail",
    createExcuse: "createExcuse",
    validateToken: "validateToken"
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
            case urlTypes.createExcuse:
                return studentUrls.createExcuse
            case urlTypes.validateToken:
                return studentUrls.validateToken
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