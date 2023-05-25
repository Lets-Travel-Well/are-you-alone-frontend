<template>
  <div class="fixed-top border-bottom header-wrapper">
    <b-row class="nav-content">
      <b-col cols="2"></b-col>
      <b-col cols="8">
        <b-navbar toggleable="lg" type="dark" variant="white" class="p-0">
          <b-navbar-brand href="#">
            <router-link to="/">
              <img src="@/assets/rualone_logo.png" width="100px" alt="ssafy" />
            </router-link>
          </b-navbar-brand>

          <b-navbar-toggle
            target="nav-collapse"
            style="background-color: #38d0eb"
          ></b-navbar-toggle>

          <b-collapse id="nav-collapse" class="align-bottom mt-5" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#"
                ><router-link :to="{ name: 'home' }" class="link"
                  ><b-icon icon="house" font-scale="1.5"></b-icon> 홈</router-link
                ></b-nav-item
              >
              <b-nav-item href="#"
                ><router-link :to="{ name: 'board' }" class="link"
                  ><b-icon icon="journal" font-scale="1.5"></b-icon> 자유 게시판</router-link
                ></b-nav-item
              >
              <!-- <b-nav-item href="#"
              ><router-link :to="{ name: 'with' }" class="link"
                ><b-icon icon="people" font-scale="1.5"></b-icon> 동행 구하기</router-link
              ></b-nav-item
            > -->
              <b-nav-item href="#"
                ><router-link :to="{ name: 'trip' }" class="link"
                  ><b-icon icon="signpost" font-scale="1.5"></b-icon> 여행지 보기</router-link
                ></b-nav-item
              >
              <b-nav-item href="#"
                ><router-link :to="{ name: 'journey' }" class="link"
                  ><b-icon icon="signpost2" font-scale="1.5"></b-icon> 동행을 찾고
                  있어요</router-link
                ></b-nav-item
              >
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown right>
                <template #button-content>
                  <b-icon
                    icon="people-fill"
                    variant="black"
                    style="
                      width: 60px;
                      height: 35px;
                      color: #3aa4ca;
                      border: 1.5px solid #3aa4ca;
                      border-radius: 10px;
                      padding: 2px;
                    "
                    font-scale="2"
                  ></b-icon>
                </template>
                <div v-if="!this.tokens">
                  <b-dropdown-item href="#"
                    ><b-icon icon="person-circle"></b-icon>
                    <span v-b-modal.modal-1>로그인/회원가입</span></b-dropdown-item
                  >
                </div>
                <div v-else>
                  <b-dropdown-item href="#"
                    ><router-link :to="{ name: 'home' }" class="link" style="color: #3aa4ca"
                      ><b-icon icon="person-circle"></b-icon> 마이 페이지</router-link
                    ></b-dropdown-item
                  >

                  <b-dropdown-item href="#" @click="signOut" style="color: #3aa4ca"
                    ><b-icon icon="key"></b-icon> 로그아웃</b-dropdown-item
                  >
                </div>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-col>
      <b-col cols="2"></b-col>
    </b-row>

    <b-modal id="modal-1" title="로그인/회원가입" hide-footer>
      <a
        href="https://kauth.kakao.com/oauth/authorize
?client_id=75704a9f2561ed081d5538850a2ad394
&redirect_uri=http://localhost:8080/oauth2/redirect
&response_type=code"
      >
        <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="180" />
      </a>
      <a
        href="http://localhost:8080/oauth2/authorize/naver?redirect_uri=http://localhost:3001/oauth2/redirect"
      >
        <img class="bi me-2" width="140" height="40" src="@/assets/naver_login.png" />
      </a>
      <a
        href="http://localhost:8080/oauth2/authorize/kakao?redirect_uri=http://localhost:3001/oauth2/redirect"
      >
        <img class="bi me-2" width="140" height="40" src="@/assets/google_login.png" />
      </a>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
const loginStore = "loginStore";

export default {
  name: "HeaderNaviBar",
  data() {
    return {};
  },
  computed: {
    ...mapState(loginStore, ["tokens"]),
  },
  created() {},
  methods: {
    ...mapActions(loginStore, ["logout"]),
    signOut() {
      this.logout();
    },
  },
};
</script>

<style>
.nav-content {
  background-color: #fff;
}
.header-wrapper {
  font-family: "Nanum Gothic", sans-serif;
  font-size: 17px;
  font-weight: 700;
}
</style>
