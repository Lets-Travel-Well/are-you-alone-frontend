import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:80/api/comment-management/comment",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

function writeComment(comment, success, fail) {
api.post(`/create`, JSON.stringify(comment)).then(success).catch(fail);
}

function modifyComment(comment, success, fail) {
api.post(`/${comment.id}/update`, JSON.stringify(comment)).then(success).catch(fail);
}

function removeComment(commentId, success, fail) {
api.get(`/${commentId}/delete`).then(success).catch(fail);
}

export { writeComment, modifyComment, removeComment};