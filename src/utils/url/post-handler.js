import { getUrl, urlTypes } from "./url-resolver";
import { success, error } from "../notifications/notifications";

export async function createExcuse(studentId, sectionId, excuse) {
  let date = new Date();
  let data = {
    StudentId: parseInt(studentId),
    SectionId: parseInt(sectionId),
    CreatedDate: date,
    ExcuseDate: excuse.date,
    Description: excuse.description,
    Title: excuse.title
  };
  data = await JSON.stringify(data);
  console.log(data);
  return fetch(getUrl(urlTypes.createExcuse), {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },

    body: data
  })
    .then(res => res.json())
    .then(response => {
      if (response) {
        console.log("CREATE", response);
        if (response.success) {
          return true;
        } else {
          return false;
        }
      }
    });
}

export async function sendAssistanceCode(sectionId, studentId, token) {
  let url =
    getUrl(urlTypes.validateToken) + studentId + "/" + sectionId + "/" + token;
  console.log(url);
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => {
      if (response) {
        console.log("TOKEN RESPONSE", response);
        if (response.success) {
          success(response.message);
          return true;
        } else {
          error(response.message);
          return false;
        }
      }
    });
}

export async function generateToken(sectionId, timespan) {
  let url = getUrl(urlTypes.generateToken) + sectionId + "/" + timespan;
  console.log(url);
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => {
      if (response) {
        console.log("GENERATE TOKEN RESPONSE", response);
        if (response.success) {
          return response.resultData.tokenKey;
        } else {
          error(response.message);
          return "";
        }
      }
    });
}

export async function createNotice(studentId, sectionId, title, description) {
  let date = new Date();
  let data = {
    ProfessorId: parseInt(studentId),
    SectionId: parseInt(sectionId),
    CreatedDate: date,
    Title: title,
    Description: description
  };
  data = await JSON.stringify(data);
  console.log(data);
  return fetch(getUrl(urlTypes.createNotice), {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },

    body: data
  })
    .then(res => res.json())
    .then(response => {
      if (response) {
        console.log("CREATE", response);
        if (response.success) {
          return response.message;
        } else {
          return false;
        }
      }
    });
}

export async function manualAssistance(sectionId, studentId) {
  let url = getUrl(urlTypes.manualAssistance) + sectionId + "/" + studentId;
  console.log(url);
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => {
      if (response) {
        console.log("MANUAL ASSISTANCE", response);
        if (response.success) {
          success(response.message)
          return true;
        } else {
          error(response.message);
          return false;
        }
      }
    });
}