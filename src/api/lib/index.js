import axios from "axios";

// local vue api axios instance
// function apiInstance() {
//   const instance = axios.create({
//     baseURL: process.env.VUE_APP_API_BASE_URL,
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//   });
//   return instance;
// }

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

export { authInstance, boardInstance, commentInstance, hotplaceInstance };
