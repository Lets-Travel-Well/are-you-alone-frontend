import { getKaKaoToken } from '@/api/auth';
import router from '@/router';

const loginStore = {
    namespaced: true,
    state: {
        tokens: null,
    },
    mutations: {
        SET_TOKENS(state, tokens) {
            state.tokens = tokens;
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
                router.push({ name: "home" });
            },
            (error) => {
              console.log(error);
            })
        }
    }
};

export default loginStore;