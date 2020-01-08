import { store } from "../../redux/store";

export const url =
  "https://cors-anywhere.herokuapp.com/https://beekeeperrestapibackend.azurewebsites.net/";

const studentUrls = {
  classes: url + "GetStudentAbsencesNoticesPerCourse/",
  schedule: url + "GetStudentSchedule/",
  todaySummary: url + "GetTodayStudentSchedule/",
  classDetail: url + "GetNoticesBySection/",
  createExcuse: url + "CreateExcuse",
  validateToken: url + "ValidateToken/"
};

const professorUrls = {
  classes: url + "GetProfessorAbsencesNoticesPerCourse/",
  schedule: url + "GetProfessorSchedule/",
  todaySummary: url + "GetTodayProfessorSchedule/",
  classDetail: url + "GetNoticesBySection/",
  generateToken: url + "GenerateToken/",
  getStudents: url + "StudentListBySection/"
};

export const urlTypes = {
  classes: "classes",
  schedule: "schedule",
  todaySummary: "todaySummary",
  classDetail: "classDetail",
  createExcuse: "createExcuse",
  validateToken: "validateToken",
  generateToken: "generateToken",
  getStudents: "getStudents"
};

function getUserRole() {
  return store.getState().user.currentUser.role;
}

export function getUrl(type) {
  let role = getUserRole();

  if (role === "Student") {
    switch (type) {
      case urlTypes.classes:
        return studentUrls.classes;
      case urlTypes.schedule:
        return studentUrls.schedule;
      case urlTypes.todaySummary:
        return studentUrls.todaySummary;
      case urlTypes.classDetail:
        return studentUrls.classDetail;
      case urlTypes.createExcuse:
        return studentUrls.createExcuse;
      case urlTypes.validateToken:
        return studentUrls.validateToken;
      default:
        return null;
    }
  } else {
    switch (type) {
      case urlTypes.classes:
        return professorUrls.classes;
      case urlTypes.schedule:
        return professorUrls.schedule;
      case urlTypes.todaySummary:
        return professorUrls.todaySummary;
      case urlTypes.classDetail:
        return professorUrls.classDetail;
      case urlTypes.generateToken:
        return professorUrls.generateToken;
      case urlTypes.getStudents:
        return professorUrls.getStudents;
      default:
        return null;
    }
  }
}
