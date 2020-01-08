import { getUrl, urlTypes } from "./url-resolver";

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
  return fetch(
    getUrl(urlTypes.createExcuse),
    {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },

      body: data
    }
  )
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

  let url = getUrl(urlTypes.validateToken) + sectionId + "/" + studentId + "/" + token;

  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }
  )
    .then(res => res.json())
    .then(response => {
      if (response) {
        console.log("TOKEN VALIDATED", response);
        if (response.success) {
          return true;
        } else {
          return false;
        }
      }
    });
}