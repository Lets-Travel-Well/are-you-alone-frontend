import { journeyInstance } from "./lib/index";


async function createJourney(journey, success, fail){
    const api = journeyInstance();
    await api.post("/create",JSON.stringify(journey)).then(success).catch(fail);
}

function getJourneyList(success, fail) {
    const api = journeyInstance();
    api.get().then(success).catch(fail);
}

function shortestPath(pathList, success, fail){
    const api = journeyInstance();
    api.post("/path",JSON.stringify(pathList)).then(success).catch(fail);
}

function getJourney(journeyId, success, fail){
    const api = journeyInstance();
    api.get().then(success).catch(fail);
}
export { getJourneyList, createJourney, shortestPath, getJourney};