import { mapUser } from "./data-mapping";
import { invalidCredentials, connectionError } from "./notifications";

export function handleLoginResponse(
  response,
  setCurrentUser,
  loginSuccess,
  setInvalidCredentials,
  setLoading
) {
  if (response) {
    if (response.success) {
      let user = mapUser(response.resultData);
      sessionStorage.setItem("currentUser", JSON.stringify(user));
      setCurrentUser(user);
      loginSuccess();
    } else {
      setInvalidCredentials("error");
      invalidCredentials();
      setLoading(false);
    }
  } else {
    connectionError();
  }
}

export async function fetchUserSession(setCurrentUser) {
  let user = sessionStorage.getItem("currentUser");
  user = JSON.parse(user);
  if (user != null) {
    setCurrentUser({
      id: user.id,
      dbId: user.dbId,
      name: user.name,
      program: user.program,
      role: user.role,
      img: user.img
    });
  }
}

export async function fetchClasses(userDbId, setCurrentClasses) {
  let classesInStorage = await JSON.parse(
    sessionStorage.getItem("currentClasses")
  );

  if (classesInStorage) {
    return;
  } else {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackendservice.azurewebsites.net/GetStudentAbsencesNoticesPerCourse/${userDbId}`
    )
      .then(res => res.json())
      .then(response => {
        console.log(response);
        if (response.success) {
          console.log("Classes", response.resultData);
          setCurrentClasses(response.resultData);
          sessionStorage.setItem(
            "currentClasses",
            JSON.stringify(response.resultData)
          );
        } else {
          connectionError();
          throw new Error("Connection error");
        }
      })
      .catch(error => {
        console.log(error);
        setCurrentClasses({});
      });
  }
}

export function logoutUser(removeCurrentUser, removeCurrentClasses) {
  removeCurrentUser();
  removeCurrentClasses();
  sessionStorage.removeItem("currentUser");
  sessionStorage.removeItem("schedule");
  sessionStorage.removeItem("todaySummary");
  sessionStorage.removeItem("currentClasses");
}

export async function fetchSchedule(dbId, setSchedule, role) {
  let scheduleInStorage = await JSON.parse(sessionStorage.getItem("schedule"));

  if (scheduleInStorage) {
    setSchedule(scheduleInStorage);
  } else {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackendservice.azurewebsites.net/Get${role}Schedule/${dbId}`
    )
      .then(res => res.json())
      .then(response => {
        console.log(response);
        if (response.resultData) {
          console.log(response.resultData.courseList);
          setSchedule(response.resultData.courseList);
          sessionStorage.setItem(
            "schedule",
            JSON.stringify(response.resultData.courseList)
          );
        } else {
          connectionError();
          throw new Error("Connection error");
        }
      })
      .catch(error => {
        console.log(error);
        setSchedule({});
      });
  }
}

export async function fetchTodaySummary(dbId, setTodaySummaryList) {
  let todaySummaryInStorage = await JSON.parse(
    sessionStorage.getItem("todaySummary")
  );

  if (todaySummaryInStorage) {
    setTodaySummaryList(todaySummaryInStorage);
  } else {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackendservice.azurewebsites.net/GetTodayStudentSchedule/${dbId}`
    )
      .then(res => res.json())
      .then(response => {
        if (response.success) {
          if (response.resultData) {
            setTodaySummaryList(response.resultData.todaySchedulesCourse);
            sessionStorage.setItem(
              "todaySummary",
              JSON.stringify(response.resultData.todaySchedulesCourse)
            );
          } else {
            setTodaySummaryList([]);
            sessionStorage.setItem("todaySummary", JSON.stringify([]));
          }
        } else {
          connectionError();
          throw new Error("Connection error");
        }
      })
      .catch(error => {
        console.log(error);
        setTodaySummaryList({});
      });
  }
}

export async function fetchClassDetails(setCurrentClass, courseId) {
  fetch(
    `https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackendservice.azurewebsites.net/GetNoticesBySection/${courseId}`
  )
    .then(res => res.json())
    .then(response => {
      if (response.success) {
        if (response.resultData) {
          setCurrentClass(response.resultData);
        }
      } else {
        connectionError();
        throw new Error("Connection error");
      }
    })
    .catch(error => {
      console.log(error);
      setCurrentClass({});
    });
}
