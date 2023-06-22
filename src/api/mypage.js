import {followInstance} from "./lib/index";
function findLoginUserId(success, fail) {
    const api = followInstance();
    api.get(`/findloginuserid`).then(success).catch(fail);
}
export {findLoginUserId};