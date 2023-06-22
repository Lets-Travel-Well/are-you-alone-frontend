import {followInstance} from "./lib/index";
import { memberInstance } from "./lib/index";

function findLoginUserId(success, fail) {
    const api = followInstance();
    api.get(`/findloginuserid`).then(success).catch(fail);
}
async function getIsCurrentUser(userId, success, fail) {
    const api = followInstance();
    await api.get(`/getiscurrentuser?userId=${userId}`).then(success).catch(fail);
}
async function getMyPageUser(userId, success, fail) {
    console.log("getmypageUser api 접속전");
    const api = memberInstance();
    await api.get(`/mypageuser?userId=${userId}`).then(success).catch(fail);
}
export {findLoginUserId, getIsCurrentUser, getMyPageUser};
