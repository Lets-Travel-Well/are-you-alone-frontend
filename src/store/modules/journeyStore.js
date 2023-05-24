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
        }
    }
}

export default journeyStore;