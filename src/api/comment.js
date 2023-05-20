import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:80/api/board-management/comment",
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

function deleteComment(commentId, success, fail) {
api.get(`/post/${commentId}/delete`).then(success).catch(fail);
}

export { writeComment, modifyComment, deleteComment};