import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import InstagramView from "../views/InstagramView.vue";
import AttractionView from "../views/AttractionView.vue";
import RedirectView from "../views/RedirectView.vue";
import MypageView from "@/views/userpage/MypageView.vue";
import MainHomeView from "@/views/MainHomeView.vue";
// import store from '@/store'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: "main",
    component:MainHomeView
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/user",
    name: "user",
    component: () => import(/* webpackChunkName: "user" */ "@/views/MemberView.vue"),
  },
  {
    path: "/board",
    name: "board",
    component: () => import(/* webpackChunkName: "board" */ "@/views/BoardView.vue"),
    redirect: "/board",
    children: [
      {
        path: "",
        name: "boardList",
        component: () => import(/* webpackChunkName: "board" */ "@/components/board/BoardList.vue"),
      },
      {
        path: "write",
        name: "boardRegister",
        component: () =>
          import(/* webpackChunkName: "board" */ "@/components/board/BoardRegister.vue"),
      },
      {
        path: ":boardId",
        name: "boardDetail",
        component: () =>
          import(/* webpackChunkName: "board" */ "@/components/board/BoardDetail.vue"),
      },
      {
        path: "modify/:boardid",
        name: "boardModify",
        component: () =>
          import(/* webpackChunkName: "board" */ "@/components/board/BoardModify.vue"),
      },
      {
        path: "delete/:boardid",
        name: "boardDelete",
        component: () =>
          import(/* webpackChunkName: "board" */ "@/components/board/BoardDelete.vue"),
      },
    ],
  },
  {
    path: "/journey",
    name: "journey",
    component: () => import(/* webpackChunkName: "board" */ "@/views/JourneyView.vue"),
    redirect: "/journey",
    children: [
      {
        path: "",
        name: "journeyList",
        component: () => import(/* webpackChunkName: "board" */ "@/components/journey/JourneyList.vue"),
      },
      {
        path: "/write",
        name: "writeJourney",
        component: () => import(/* webpackChunkName: "board" */ "@/components/journey/JourneyRegister.vue"),
      },
      {
        path: ":journeyId",
        name: "journeyDetail",
        component: () => import(/* webpackChunkName: "board" */ "@/components/journey/JourneyDetail.vue"),
      },
    ],
  },
  {
    path: "/instagram",
    name: "instagram",
    component: InstagramView,
  },
  {
    path: "/trip",
    name: "trip",
    component: AttractionView,
  },
  {
    path: '/oauth2/redirect',
    component:RedirectView
  },
  {
    path: '/mypage',
    component:MypageView
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router
//전역가드 위 스토어도 주석임
// router.beforeEach((to, from, next) => {
//   const isLoggedIn =  store.state.loginStore.Login;
//   const authPage = ['MainHomeView']
//   const isAuth = !authPage.includes(to.name)
//   // 로그인이 필요한 페이지에 접근하려고 할 때
//   if (isAuth && !isLoggedIn) {
//     alert('로그인하세요')
//     next({ name: 'MainHomeView' }); // MainHomeView로 리디렉션합니다.
    
//   } else {
//     next(); //
//   }
// });

