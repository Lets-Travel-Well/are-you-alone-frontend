import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:80/api/attraction-management",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

// function getAttraction(sidoCode, gugunCode, contentTypeId, success, fail){
//     api.get(`/attraction?sidoCode=${sidoCode}&gugunCode=${gugunCode}&contentTypeId=${contentTypeId}`).then(success).catch(fail);
// }

function listSido(success, fail) {
    api.get(`/sido`).then(success).catch(fail);
}
function listGugun(sidoCode, success, fail) {
    api.get(`/gugun/${sidoCode}`).then(success).catch(fail)
}
function listAttraction(sidoCode, gugunCode, contentTypeId, success, fail) {
    api.get(`/attraction?sidoCode=${sidoCode}&gugunCode=${gugunCode}&contentTypeId=${contentTypeId}`).then(success).catch(fail)
}
export { listSido, listGugun, listAttraction };