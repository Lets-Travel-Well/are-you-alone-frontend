import axios from "axios";
// import { apiInstance } from "./index.js";

// const api = apiInstance();
const api = axios.create({
      baseURL: "http://localhost:80/api/board-management",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });

function listBoard(success, fail) {
  api.get(`/post`).then(success).catch(fail);
}

function writeBoard(board, success, fail) {
  api.post(`/post/create`, JSON.stringify(board)).then(success).catch(fail);
}

function getBoard(boardId, success, fail) {
  api.get(`/post/${boardId}`).then(success).catch(fail);
}

function modifyBoard(article, success, fail) {
  api.put(`/post`, JSON.stringify(article)).then(success).catch(fail);
}

function deleteBoard(boardId, success, fail) {
  api.get(`/post/${boardId}/delete`).then(success).catch(fail);
}

export { listBoard, writeBoard, getBoard, modifyBoard, deleteBoard };
