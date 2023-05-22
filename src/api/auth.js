import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:80/api/auth",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
});
  
function getKaKaoToken(code, success, fail) {
    api.post(`/kakao`, JSON.stringify(code)).then(success).catch(fail);
}

export {getKaKaoToken}