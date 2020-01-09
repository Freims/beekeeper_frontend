import { getUrl, urlTypes } from "./url-resolver";
import { success, error } from "../notifications/notifications";

export async function createExcuse(studentId, sectionId, title, description) {
  let date = new Date();
  let data = {
    StudentId: parseInt(studentId),
    SectionId: parseInt(sectionId),
    CreatedDate: date,
    ExcuseDate: date,
    Description: description,
    Title: title
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
