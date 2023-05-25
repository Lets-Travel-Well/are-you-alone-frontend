import {chatGPT} from "@/api/chatgpt.js";

const gptStore = {
    namespaced: true,
    state: {
        context: "",
    },
    mutations: {
        UPDATE_CONTEXT(state, context) {
            context = context.replaceAll("\n", "").replaceAll("\r","");
            state.context = context;
        }
    },
    actions: {
        sendQuest: ({ commit }, quest) => {
            console.log(quest.question);
            chatGPT(quest, ({data}) => {
                commit("UPDATE_CONTEXT", data.response)
            }, (error) => {
                console.log(error);
            })
        }
    }
};

export default gptStore;