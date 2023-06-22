import axios from "axios";
// const networktarget = "https://api.rualone.site";
const networktarget = "http://localhost:8080";

function getAccessToken() {
    return localStorage.getItem("accessToken");
}

function authInstance() {
    let accessToken = getAccessToken();
    const instance = axios.create({
        baseURL: networktarget + "/api/auth",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": `Bearer ${accessToken}`,
        },
    });
    return instance;
}

function memberInstance() {
    let accessToken = getAccessToken();
    const instance = axios.create({
        baseURL: networktarget + "/api/user-management",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": `Bearer ${accessToken}`,
        },
    });
    return instance;
}

function boardInstance() {
    let accessToken = getAccessToken();
    const instance = axios.create({
        baseURL: networktarget + "/api/board-management",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": `Bearer ${accessToken}`,
        },
    });
    return instance;
}

function attractionInstance() {
    let accessToken = getAccessToken();
    const instance = axios.create({
        baseURL: networktarget + "/api/attraction-management",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": `Bearer ${accessToken}`,
        },
    });
    return instance;
}

function commentInstance() {
    let accessToken = getAccessToken();
    const instance = axios.create({
        baseURL: networktarget + "/api/comment-management/comment",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": `Bearer ${accessToken}`,
        },
    });
    return instance;
}

function hotplaceInstance() {
    let accessToken = getAccessToken();
    const instance = axios.create({
        baseURL: networktarget + "/api/hotplace-management/hotplace",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": `Bearer ${accessToken}`,
        },
    });
    return instance;
}

function journeyInstance() {
    let accessToken = getAccessToken();
    const instance = axios.create({
        baseURL: networktarget + "/api/journey-management/journey",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": `Bearer ${accessToken}`,
        },
    });
    return instance;
}

function chatGptInstance() {
    let accessToken = getAccessToken();
    const instance = axios.create({
        baseURL: networktarget + "/api/gpt-management",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": `Bearer ${accessToken}`,
        },
    });
    return instance;
}
function followInstance() {
    let accessToken = getAccessToken();
    const instance = axios.create({
        // baseURL: "https://api.rualone.site/api/follow-management",
        // baseURL: "http://localhost:80/api/follow-management",
    
        baseURL: networktarget + "/api/follow-management",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": `Bearer ${accessToken}`,
        },
    });
    return instance;
}

function memberInstance() {
    let accessToken = getAccessToken();
    const instance = axios.create({
        baseURL: networktarget + "/api/user-management",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": `Bearer ${accessToken}`,
        },
    });
    return instance;
}

export { authInstance, boardInstance,attractionInstance, commentInstance, hotplaceInstance, journeyInstance, chatGptInstance, followInstance,memberInstance};
