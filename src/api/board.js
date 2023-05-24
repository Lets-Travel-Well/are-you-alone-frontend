import { boardInstance } from "./lib/index";


function listBoard(page, size, success, fail) {
const api = boardInstance();
  api.get(`/post?page=${page}&size=${size}`).then(success).catch(fail);
}

function writeBoard(board, success, fail) {
const api = boardInstance();

  api.post(`/post/create`, JSON.stringify(board)).then(success).catch(fail);
}

function getBoard(boardId, success, fail) {
const api = boardInstance();

  api.get(`/post/${boardId}`).then(success).catch(fail);
}

function modifyBoard(board, success, fail) {
const api = boardInstance();
  api.post(`/post/${board.id}/update`, JSON.stringify(board)).then(success).catch(fail);
}

function removeBoard(boardId, success, fail) {
const api = boardInstance();

  api.get(`/post/${boardId}/delete`).then(success).catch(fail);
}

function updateLike(boardId, success, fail) {
const api = boardInstance();

  api.get(`post/${boardId}/like`).then(success).catch(fail);
}

export { listBoard, writeBoard, getBoard, modifyBoard, removeBoard, updateLike };
