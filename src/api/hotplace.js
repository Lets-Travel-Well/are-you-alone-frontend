import { hotplaceInstance } from "./lib/index";


function getHotplace(success, fail) {
    const api = hotplaceInstance();

    api.get().then(success).catch(fail);
}

async function updateLike(contentTypeId, success, fail){
    const api = hotplaceInstance();
    await api.get(`/${contentTypeId}/like`).then(success).catch(fail);
}
function myplace(success, fail) {
    const api = hotplaceInstance();
    api.get(`/my-place`).then(success).catch(fail);
}

export { getHotplace, updateLike, myplace};