import { createJourney, getJourneyList, getJourney } from '@/api/journey';


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
        journeys: [],
        journeyDeatil : {}
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
        },
        SET_JOURNEY_DETAIL(state, journey) {
            state.journeyDeatil = journey;
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
        },
        getJourneyDetail: ({commit}, journeyId) => {
            getJourney(journeyId, ({data}) => {
                commit("SET_JOURNEY_DETAIL", data.response);
            },
            (error) => {
                console.log(error);
            })
        }
    }
}

export default journeyStore;