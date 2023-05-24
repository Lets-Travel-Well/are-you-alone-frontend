import { createJourney } from '@/api/journey';


const journeyStore = {
    namespaced: true,
    state: {
        journey:{
            subject: "",
            content: "",
            visibility:"",
            travelerCnt: "",
            deadLine: "",
            startDay: "",
            journeyPlaceCreateRequests:[],
        },  
        myJourneyList: []
    },
    mutations: {
        CLEAR_JOURNEY(state) {
            state.journey={
                subject: "",
                content: "",
                visibility:"",
                travelerCnt: "",
                deadLine: "",
                startDay: "",
                journeyPlaceCreateRequests:[],
            }
        },
        ADD_JOURNEY(state, attraction) {
            state.myJourneyList.push(attraction);
        },
        REMOVE_JOURNEY(state, attraction) {
            state.myJourneyList.forEach((item, index)=> {
                if(item === attraction) {
                    state.myJourneyList.splice(index, 1);
                }
            });
        }
    },
    actions: {
        saveJourney: ({ commit }, journey) => {
            createJourney(journey, () => { 
                commit("CLEAR_JOURNEY");
            },
            (error) => {
                console.log(error);
            })
        },
        addAttraction: ({ commit }, attraction) => {
            commit("ADD_JOURNEY", attraction);
        },
        deleteAttraction: ({ commit }, attraction) => {
            commit("REMOVE_JOURNEY", attraction);
        }
    }
}

export default journeyStore;