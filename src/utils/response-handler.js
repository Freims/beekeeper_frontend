import { mapUser } from './data-mapping'
import { invalidCredentials, connectionError } from './notifications'


export function handleLoginResponse(response, setCurrentUser, loginSuccess, setInvalidCredentials, setLoading) {
    if (response) {
        if (response.success) {
            let user = mapUser(response.resultData)
            localStorage.setItem('currentUser', JSON.stringify(user))
            setCurrentUser(user)
            loginSuccess()
        } else {
            setInvalidCredentials('error')
            invalidCredentials()
            setLoading(false)
        }
    } else {
        connectionError()
    }

}

export async function fetchUserSession(setCurrentUser) {
    let user = localStorage.getItem('currentUser');
    user = JSON.parse(user);
    if (user != null) {
        setCurrentUser({
            id: user.id,
            dbId: user.dbId,
            name: user.name,
            program: user.program,
            role: user.role,
            img: user.img
        })
    }
}

export function logoutUser(removeCurrentUser) {
    removeCurrentUser()
    localStorage.removeItem("currentUser")
    localStorage.removeItem("schedule")
    localStorage.removeItem("todaySummary")
}

export async function fetchSchedule(dbId, setSchedule) {

    let scheduleInStorage = await JSON.parse(localStorage.getItem("schedule"));

    if (scheduleInStorage) {
        setSchedule(scheduleInStorage)
    }
    else {
        fetch(`https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackendservice.azurewebsites.net/GetStudentSchedule/${dbId}`)
            .then(res => res.json())
            .then(response => {
                console.log(response)
                if (response.resultData) {
                    console.log(response.resultData.courseList)
                    setSchedule(response.resultData.courseList)
                    localStorage.setItem("schedule", JSON.stringify(response.resultData.courseList))
                } else {
                    connectionError()
                    throw new Error('Connection error')
                }
            })
            .catch(error => { console.log(error); setSchedule({}) })
    }
}

export async function fetchTodaySummary(dbId, setTodaySummaryList) {

    let todaySummaryInStorage = await JSON.parse(localStorage.getItem("todaySummary"));

    if (todaySummaryInStorage) {
        setTodaySummaryList(todaySummaryInStorage)
    }
    else {
        fetch(`https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackendservice.azurewebsites.net/GetTodayStudentSchedule/${dbId}`)
            .then(res => res.json())
            .then(response => {
                if (response.resultData) {
                    console.log(response.resultData.todaySchedulesCourse)
                    setTodaySummaryList(response.resultData.todaySchedulesCourse)
                    localStorage.setItem("todaySummary", JSON.stringify(response.resultData.todaySchedulesCourse))
                } else {
                    connectionError()
                    throw new Error('Connection error')
                }
            })
            .catch(error => { console.log(error); setTodaySummaryList({}) })
    }
}