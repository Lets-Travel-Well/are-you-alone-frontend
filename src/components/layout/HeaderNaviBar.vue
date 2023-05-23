<template>
  <b-container class="fixed-top">
    <div class="nav-content">
      <b-navbar toggleable="lg" type="dark" variant="white">
        <b-navbar-brand href="#">
          <router-link to="/">
            <img
              src="@/assets/rualone_logo.png"
              class="d-inline-block align-middle"
              width="100px"
              alt="ssafy"
            />
          </router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" style="background-color: #38d0eb"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#"
              ><router-link :to="{ name: 'home' }" class="link"
                ><b-icon icon="house" font-scale="1.5"></b-icon> 홈</router-link
              ></b-nav-item
            >
            <b-nav-item href="#"
              ><router-link :to="{ name: 'board' }" class="link"
                ><b-icon icon="journal" font-scale="1.5"></b-icon> 게시판</router-link
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
                ><b-icon icon="signpost2" font-scale="1.5"></b-icon> 동행을 찾고 있어요</router-link
              ></b-nav-item
            >
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <template #button-content>
                <b-icon
                  icon="people"
                  variant="black"
                  style="
                    width: 40px;
                    color: #242424;
                    border: 1.5px solid gray;
                    border-radius: 8px;
                    padding: 4px;
                  "
                  font-scale="2"
                ></b-icon>
              </template>
              <div v-if="!this.tokens">
                <b-dropdown-item href="#"
                  ><router-link :to="{ name: 'signUp' }" class="link"
                    ><b-icon icon="person-circle"></b-icon> 회원가입</router-link
                  ></b-dropdown-item
                >

                <b-dropdown-item href="#"
                  ><router-link :to="{ name: 'signIn' }" class="link"
                    ><b-icon icon="key"></b-icon> 로그인</router-link
                  ></b-dropdown-item
                >
              </div>
              <div v-else>
                <b-dropdown-item href="#"
                  ><router-link :to="{ name: 'home' }" class="link"
                    ><b-icon icon="person-circle"></b-icon> 마이 페이지</router-link
                  ></b-dropdown-item
                >

                <b-dropdown-item href="#" @click="signOut"
                  ><b-icon icon="key"></b-icon> 로그아웃</b-dropdown-item
                >
              </div>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </b-container>
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

<style></style>
