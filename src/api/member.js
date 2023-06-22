import { memberInstance } from "./lib/index";

function memberInfo(memberinfo, success, fail){
    const api = memberInstance();
    api.put("/modify",JSON.stringify(memberinfo)).then(success).catch(fail);
}

function updateProfile(profileimg, success, fail) {
    const api = memberInstance();
    api.post("/images/update/profileImg",JSON.stringify(profileimg)).then(success).catch(fail);
}

function deleteProfile(profileimg, success, fail){
    const api = memberInstance();
    api.post("/images/delete/profileImg",JSON.stringify(profileimg)).then(success).catch(fail);
}

function memberEmail(memberemail, success, fail){
    const api = memberInstance();
    api.get(`/user/${memberemail}`).then(success).catch(fail);
}
function logOut(success, fail) {
    const api = memberInstance();
    api.get().then(success).catch(fail);
}
function memberLoginId(loginid, success, fail){
    const api = memberInstance();
    api.delete(`/user/${loginid}`).then(success).catch(fail);
}
export {memberInfo,updateProfile,deleteProfile,memberEmail,logOut,memberLoginId};