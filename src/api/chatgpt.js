import { chatGptInstance } from './lib/index';

function chatGPT(question, success, fail) {
    const api = chatGptInstance();
    api.post("/review",JSON.stringify(question)).then(success).catch(fail);
}
export {chatGPT};
