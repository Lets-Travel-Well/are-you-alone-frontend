import { commentInstance } from "./lib/index";


function writeComment(comment, success, fail) {
const api = commentInstance();

api.post(`/create`, JSON.stringify(comment)).then(success).catch(fail);
}

function modifyComment(comment, success, fail) {
const api = commentInstance();

api.post(`/${comment.id}/update`, JSON.stringify(comment)).then(success).catch(fail);
}

function removeComment(commentId, success, fail) {
const api = commentInstance();

api.get(`/${commentId}/delete`).then(success).catch(fail);
}

function findAllComment(postId, success, fail) {
const api = commentInstance();

  api.get(`post/${postId}`).then(success).catch(fail);
}

export { writeComment, modifyComment, removeComment, findAllComment};