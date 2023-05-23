import { authInstance } from "./lib/index";

  
function getKaKaoToken(code, success, fail) {
const api = authInstance();

    api.post(`/kakao`, JSON.stringify(code)).then(success).catch(fail);
}

export {getKaKaoToken}