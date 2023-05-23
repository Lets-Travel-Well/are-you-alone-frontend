import { hotplaceInstance } from "./lib/index";


function getHotplace(success, fail) {
const api = hotplaceInstance();

api.get().then(success).catch(fail);
}



export { getHotplace};