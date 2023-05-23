import { boardInstance } from "./lib/index";

const api = boardInstance();

function listBoard(success, fail) {
  api.get(`/post`).then(success).catch(fail);
}

function writeBoard(board, success, fail) {
  api.post(`/post/create`, JSON.stringify(board)).then(success).catch(fail);
}

function getBoard(boardId, success, fail) {
  api.get(`/post/${boardId}`).then(success).catch(fail);
}

function modifyBoard(board, success, fail) {
  api.post(`/post/${board.id}/update`, JSON.stringify(board)).then(success).catch(fail);
}

function removeBoard(boardId, success, fail) {
  api.get(`/post/${boardId}/delete`).then(success).catch(fail);
}

function updateLike(boardId, success, fail) {
  api.get(`post/${boardId}/like`).then(success).catch(fail);
}

export { listBoard, writeBoard, getBoard, modifyBoard, removeBoard, updateLike };
