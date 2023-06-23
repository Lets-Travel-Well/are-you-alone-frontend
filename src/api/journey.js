import { journeyInstance } from "./lib/index";

function shortestPath(pathList, success, fail){
    const api = journeyInstance();
    api.post("/path",JSON.stringify(pathList)).then(success).catch(fail);
}

async function createJourney(journey, success, fail){
    const api = journeyInstance();
    await api.post("/create",JSON.stringify(journey)).then(success).catch(fail);
}

// 동행 신청하기
function applyJourney(journeyId,success, fail) {
    const api = journeyInstance();
    api.post("/apply",JSON.stringify(journeyId)).then(success).catch(fail);
}
// 동행 승인
function agree(agreeApply,success, fail) {
    const api = journeyInstance();
    api.post("/agree",JSON.stringify(agreeApply)).then(success).catch(fail);
}
//동행 거부
function disagree(disagreeApply,success, fail) {
    const api = journeyInstance();
    api.post("/disagree",JSON.stringify(disagreeApply)).then(success).catch(fail);
}
// journey 전체 조회
function getJourneyList(success, fail) {
    const api = journeyInstance();
    api.get().then(success).catch(fail);
}
// journey 단건 조회
function getJourney(journeyId, success, fail){
    const api = journeyInstance();
    api.get(`/${journeyId}`).then(success).catch(fail);
}

export { getJourneyList, applyJourney, createJourney, shortestPath, getJourney, agree, disagree};