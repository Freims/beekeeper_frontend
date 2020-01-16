import { getUrl, urlTypes } from "./url-resolver";
import { success, error } from "../notifications/notifications";

export async function createExcuse(studentId, sectionId, excuse) {
  let todayDate = new Date().toISOString().substr(0, 10);
  
  let data = {
    StudentId: parseInt(studentId),
    SectionId: parseInt(sectionId),
    CreatedDate: todayDate,
    ExcuseDate: excuse.date,
    Description: excuse.body,
    Title: excuse.title
  };
  console.log(data);
  data = await JSON.stringify(data)
  return fetch(getUrl(urlTypes.createExcuse), {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },

    body: data
  }).then(res => res.json())
    .then(response => {
      if (response) {
        console.log("CREATE", response);
        if (response.success) {
          return response;
        } else {
          return response;
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

export async function acceptExcuse(excuse) {
  let data = {
    NoticeSectionId: parseInt(excuse.noticeSectionId),
    StudentId: parseInt(excuse.studentId),
    sectionId: parseInt(excuse.sectionId),
    ExcuseDate: excuse.excuseDate.split("T")[0],
    Description: excuse.description,
    Title: excuse.title
    };

  console.log(data);
  data = await JSON.stringify(data)
  return fetch(getUrl(urlTypes.acceptExcuse), {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },

    body: data
  }).then(res => res.json())
    .then(response => {
      if (response) {
        console.log("ACCEPT", response);
        if (response.success) {
          success(response.message)
          return response;
        } else {
          error(response.message)
          return response;
        }
      }
    });
}
export async function declineExcuse(excuse) {
  let data = {
    NoticeSectionId: parseInt(excuse.noticeSectionId),
    StudentId: parseInt(excuse.studentId),
    sectionId: parseInt(excuse.sectionId),
    ExcuseDate: excuse.excuseDate.split("T")[0],
    Description: excuse.description,
    Title: excuse.title
    };

  console.log(data);
  data = await JSON.stringify(data)
  return fetch(getUrl(urlTypes.declineExcuse), {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },

    body: data
  }).then(res => res.json())
    .then(response => {
      if (response) {
        console.log("DECLINE", response);
        if (response.success) {
          success(response.message)
          return response;
        } else {
          error(response.message)
          return response;
        }
      }
    });
}