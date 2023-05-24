import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import InstagramView from "../views/InstagramView.vue";
import AttractionView from "../views/AttractionView.vue";
import RedirectView from "../views/RedirectView.vue";

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/user",
    name: "user",
    component: () => import(/* webpackChunkName: "user" */ "@/views/MemberView.vue"),
    children: [
      {
        path: "singin",
        name: "signIn",
        component: () => import(/* webpackChunkName: "user" */ "@/components/user/MemberLogin.vue"),
      },
      {
        path: "singup",
        name: "signUp",
        component: () =>
          import(/* webpackChunkName: "user" */ "@/components/user/MemberRegister.vue"),
      },
    ],
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
