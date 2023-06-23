import { createJourney, getJourneyList, getJourney, applyJourney, agree, disagree } from '@/api/journey';

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
        myJourneyList: [],
        journeys: [],
        journeyDetail : {}
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
        CHANGE_APPLY_STATE(state) {
            state.journeyDetail.status = "APPLY";
        },
        REFRESH_FUDDY_LIST(state, member) {
            state.journeyDetail.fuddy.push(member);
        },
        REFRESH_APPLY_LIST(state, memberId) {
            let targetIndex = 0;
            for (let i = 0; i < state.journeyDetail.applyList.length; i++){
                if (state.journeyDetail.applyList[i].id == memberId) {
                    targetIndex = i;
                    break;
                }
            }
            state.journeyDetail.applyList.splice(targetIndex, 1);
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
        },
        SET_JOURNEY_LIST(state, journeys){
            state.journeys = journeys;
        },
        SET_JOURNEY_DETAIL(state, journey) {
            state.journeyDetail = journey;
        }
        // UPDATE_JOURNEY(state, JOURNEY) {
        //     state.myJourneyList = JOURNEY;
        // }
    },
    actions: {
        saveJourney: ({ commit }, journey) => {
            commit("SET_JOURNEY_CREATE_REQUEST");
            createJourney(journey, () => {
                commit("CLEAR_JOURNEY");
                commit("CLEAR_JOURNEY_LIST");
            },
            (error) => {
                console.log(error);
            })
        },

        applyJourney: ({ commit }, journeyId) => {
            applyJourney(journeyId,()=> {
                commit("CHANGE_APPLY_STATE");
            }),
            (error) => {
                console.log(error);
            }
        },
        agree: ({ commit }, agreeInfo) => {
            let info = {
                memberId : agreeInfo.member.id,
                journeyId : agreeInfo.journeyId
            };
            agree(info, () => {
                commit("REFRESH_APPLY_LIST",agreeInfo.member.id);
                
                commit("REFRESH_FUDDY_LIST",agreeInfo.member);
            }),
            (error) => {
                console.log(error);
            }
        },
        disagree: ({ commit }, disagreeInfo) => {
            disagree(disagreeInfo, () => {
                commit("REFRESH_APPLY_LIST",disagreeInfo.memberId);
            }),
            
            (error) => {
                console.log(error);
            }
        },
        addAttraction: ({ commit }, attraction) => {
            commit("ADD_JOURNEY", attraction);
        },
        deleteAttraction: ({ commit }, attraction) => {
            commit("REMOVE_JOURNEY", attraction);
        },
        getJourney: ({commit}) => {
            getJourneyList(({data}) => {
                commit("SET_JOURNEY_LIST", data.response);
            },
            (error) => {
                console.log(error);
            })
        },
        getJourneyDetail: ({ commit }, journeyId) => {
            console.log("here");
            console.log(journeyId);
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