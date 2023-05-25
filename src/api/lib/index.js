import axios from "axios";


function getAccessToken() {
    return localStorage.getItem("accessToken");
}

function authInstance() {
    let accessToken = getAccessToken();
    const instance = axios.create({
        baseURL: "http://localhost:80/api/auth",
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
        baseURL: "http://localhost:80/api/board-management",
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
        baseURL: "http://localhost:80/api/attraction-management",
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
        baseURL: "http://localhost:80/api/comment-management/comment",
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
        baseURL: "http://localhost:80/api/hotplace-management/hotplace",
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
        baseURL: "http://localhost:80/api/journey-management/journey",
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
        baseURL: "http://localhost:80/api/v1",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": `Bearer ${accessToken}`,
        },
    });
    return instance;
}

export { authInstance, boardInstance,attractionInstance, commentInstance, hotplaceInstance, journeyInstance, chatGptInstance};
