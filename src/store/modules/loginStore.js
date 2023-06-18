import { getKaKaoToken } from '@/api/auth';
import router from '@/router';

const loginStore = {
    namespaced: true,
    state: {
        login: false,
        tokens: null,
    },
    mutations: {
        SET_TOKENS(state, tokens) {
            state.tokens = tokens;
        },
        RESET_TOKENS(state) {
            state.tokens = null;
        }
    },
    actions: {
        getTokens:({commit},authCode)=>{
            let authToken = {
                authorizationCode : authCode
            }
            getKaKaoToken(authToken,({ data }) => {
                commit("SET_TOKENS", data);
                localStorage.setItem("accessToken", data.accessToken);
                router.push({ name: "main" });
            },
            (error) => {
                console.log(error);
            })
        },
        logout: ({ commit }) => {
            commit("RESET_TOKENS");
            localStorage.removeItem("accessToken");
        }
    }
};

export default loginStore;