const loginStore = {
    namespaced: true,


    state: {
        authorizationCode:null,
        tokens: null,
    },
    mutations: {
        SET_AUTH_TOKEN(state, code) {
            state.authorizationCode = code;
        }
    },
    actions: {
        setAuthorizationCode:({commit},code)=>{
            commit("SET_AUTH_TOKEN", code);
        }
    }
};

export default loginStore;