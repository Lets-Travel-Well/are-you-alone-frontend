import { createJourney } from '@/api/journey';

const journeyStore = {
    namespaced: true,
    state: {
        journey:{
            subject: "",
            content: "",
            visibility:"",
            travelerCnt: "",
            deadLine: null,
            startDay: null,
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
                deadLine: null,
                startDay: null,
                journeyPlaceCreateRequests:[],
            }
        },
        CLEAR_JOURNEY_LIST(state) {
            state.myJourneyList = [];
        },
        ADD_JOURNEY(state, attraction) {
            attraction.content= "";
            state.myJourneyList.push(attraction);
        },
        REMOVE_JOURNEY(state, attraction) {
            state.myJourneyList.forEach((item, index)=> {
                if(item === attraction) {
                    state.myJourneyList.splice(index, 1);
                }
            });
        },
        SET_JOURNEY_CREATE_REQUEST(state) {
            state.myJourneyList.forEach((j) => {
                let jou = {
                    contentId : j.contentId,
                    content : j.content,
                }
                state.journey.journeyPlaceCreateRequests.push(jou);
            })
        },
        UPDATE_CONTENT(state, place) {
            state.myJourneyList.forEach((journey) => {
                if (journey.contentId == place.contentId) {
                    journey.content = place.content;
                }
            })
        }
        // UPDATE_JOURNEY(state, JOURNEY) {
        //     state.myJourneyList = JOURNEY;
        // }
    },
    actions: {
        saveJourney: ({ commit }, journey) => {
            commit("SET_JOURNEY_CREATE_REQUEST");
            console.log("ss");
            createJourney(journey, () => {
                commit("CLEAR_JOURNEY");
                commit("CLEAR_JOURNEY_LIST");
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
        // updateJourney: ({ commit }) => {
        //     commit("UPDATE_JOURNEY");
        // }
        updateContent: ({ commit }, place) => {
            console.log(place.content);
            commit("UPDATE_CONTENT", place);
        }
    }
}

export default journeyStore;