import {findLoginUserId} from "@/api/mypage.js";

const myPageStore = {
    namespaced:true,
    state : {
        loginUser : {}
    },
    getters: {
        myPageStatus: state => state.myPageStatus,
    },
    mutations: {
        SET_LOGIN_USER: (state, loginUser) => {
            state.loginUser = loginUser;
        }
    },
    actions: {
        findLoginUserId: ({commit}) => {
            console.log("findLoginUserId store 접속");
            
            findLoginUserId(
                ({data}) => {commit("SET_LOGIN_USER", data.response)}, 
                (error => {
                    console.log("Error:", error);
                })
            )
        },
    }
};
export default myPageStore;