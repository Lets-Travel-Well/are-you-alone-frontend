import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

//module import
import boardStore from './modules/boardStore';
import attractionStore from './modules/attractionStore';
import loginStore from './modules/loginStore';
import hotPlaceStore from './modules/hotPlaceStore';
import journeyStore from './modules/journeyStore';
import gptStore from './modules/gptStore';
import followStore from './modules/followStore';
import myPageStore from "./modules/myPageStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {boardStore, attractionStore, loginStore, hotPlaceStore, journeyStore, gptStore, followStore, myPageStore},
  plugins: [
    createPersistedState({
      // 브라우저 종료시 제거하기 위해 localStorage가 아닌 sessionStorage로 변경. (default: localStorage)
      storage: sessionStorage,
    }),
  ],
});
