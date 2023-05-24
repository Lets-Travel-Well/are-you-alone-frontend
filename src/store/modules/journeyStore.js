import { createJourney, getJourneyList } from '@/api/journey';


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
        myJourneyList: [],
        journeys: []
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
        },
        SET_JOURNEY_LIST(state, journeys){
            state.journeys = journeys;
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
        },
        getJourney: ({commit}) => {
            console.log("getJourney");
            getJourneyList(({data}) => {
                commit("SET_JOURNEY_LIST", data.response);
            },
            (error) => {
                console.log(error);
            })
        }
    }
}

export default journeyStore;