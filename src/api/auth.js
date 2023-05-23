import { authInstance } from "./lib/index";

const api = authInstance();
  
function getKaKaoToken(code, success, fail) {
    api.post(`/kakao`, JSON.stringify(code)).then(success).catch(fail);
}

export {getKaKaoToken}