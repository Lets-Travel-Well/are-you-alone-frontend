import { attractionInstance } from './lib';

function listSido(success, fail) {
  let api = attractionInstance();
    api.get(`/sido`).then(success).catch(fail);
}
function listGugun(sidoCode, success, fail) {
  let api = attractionInstance();

    api.get(`/gugun/${sidoCode}`).then(success).catch(fail)
}
async function listAttraction(sidoCode, gugunCode, contentTypeId, success, fail) {
  let api = attractionInstance();

    await api.get(`/attraction?sidoCode=${sidoCode}&gugunCode=${gugunCode}&contentTypeId=${contentTypeId}`).then(success).catch(fail)
}
export { listSido, listGugun, listAttraction };