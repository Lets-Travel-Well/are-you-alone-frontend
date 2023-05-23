import { commentInstance } from "./lib/index";

const api = commentInstance();

function writeComment(comment, success, fail) {
api.post(`/create`, JSON.stringify(comment)).then(success).catch(fail);
}

function modifyComment(comment, success, fail) {
api.post(`/${comment.id}/update`, JSON.stringify(comment)).then(success).catch(fail);
}

function removeComment(commentId, success, fail) {
api.get(`/${commentId}/delete`).then(success).catch(fail);
}

function findAllComment(postId, success, fail) {
  api.get(`post/${postId}`).then(success).catch(fail);
}

export { writeComment, modifyComment, removeComment, findAllComment};