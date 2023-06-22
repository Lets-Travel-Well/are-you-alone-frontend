<template>
  <b-container class="bv-example-row mt-3">
    <div>
      <div class="container pb-5 lg-5 mb-lg-4 my-xl-5">
        <div class="row pt-sm-2 pt-lg-0">
          <!-- 프로필 바 사진은 992px)-->
          <aside class="col-lg-3 pe-lg-4 pe-xl-5 mt-n3">
            <div class="position-lg-sticky top-0">
              <div class="d-none d-lg-block" style="padding-top: 105px"></div>
              <div class="offcanvas-lg offcanvas-start" id="sidebarAccount">
                <button
                  class="btn-close position-absolute top-0 end-0 mt-3 me-3 d-lg-none"
                  type="button"
                  data-bs-dismiss="offcanvas"
                  data-bs-target="#sidebarAccount"
                ></button>
                <div class="offcanvas-body">
                  <div class="pb-2 pb-lg-0 mb-lg-3">
                    <img
                      class="d-block rounded-circle mb-2"
                      src="@/assets/동행고양이.png"
                      width="150"
                      height="150"
                    />
                    <h3 class="h5">{{ myPageUser.nickName }}</h3>
                    <!-- 팔로잉 텍스트 클릭 시 UserFollower 표시 -->
                    <p class="fs-sm text-muted mb-0">
                      팔로잉 {{ followeeCount }}/ 팔로워 {{ followerCount }}
                    </p>
                  </div>
                  <div v-if="isCurrentUser" class="mb-3">
                      <span
                      type="button"
                      v-if="!follow"
                      class="fs-sm btn btn-outline-primary py-2 px-0 "
                      style="width: 50%"
                      >
                        팔로우
                      </span>
                      <span v-else class="fs-sm btn btn-outline-danger py-2 px-0" style="width: 50%">
                        언팔로우
                      </span>
                    </div>
                  <div class="mb-3">
                    <span
                      type="button"
                      @click="showChangeUser"
                      class="fs-sm btn btn-outline-warning py-2 px-0"
                      style="width: 50%"
                    >
                      회원정보수정
                    </span>
                  </div>
                  <div class="mb-3">
                    <span
                      type="button"
                      @click="showMyTravel"
                      class="fs-sm btn btn-outline-success py-2 px-0"
                      style="width: 50%"
                    >
                      내 여행
                    </span>
                  </div>
                </div>
                <span
                  type="button"
                  @click="showFavoriteTravel"
                  class="fs-sm btn btn-outline-info py-2 px-0"
                  style="width: 50%"
                >
                  관심있는여행
                </span>
              </div>
            </div>
          </aside>

          <!-- 컴포넌트목록  -->

          <ChangeUser v-if="currentComponent === 'ChangeUser'" />
          <MyTravel v-else-if="currentComponent === 'MyTravel'" />
          <FavoriteTravel v-else />
        </div>
      </div>
    </div>

    <router-view></router-view>
  </b-container>
</template>

<script>
// import axios from 'axios'
const followStore = "followStore";
const myPageStore = "myPageStore";
import { mapActions, mapState } from "vuex";
import FavoriteTravel from "@/components/user/item/FavoriteTravel.vue";
import MyTravel from "@/components/user/item/MyTravel.vue";
import ChangeUser from "@/components/user/item/ChangeUser.vue";

export default {
  name: "MypageView",
  props: ["userId"],
  components: {
    FavoriteTravel,
    MyTravel,
    ChangeUser,
  },
  data() {
    return {
      currentComponent: "FavoriteTravel",
    };
  },
  watch: {
    myPageUser() {
      this.getFollowerCount(this.myPageUser.id);
      this.getFolloweeCount(this.myPageUser.id);
    }
  },
  methods: {
    ...mapActions(followStore, ["follow","followCh","incrementFollowerCount","decrementFollowerCount","getFollowerCount","getFolloweeCount"
    ]),
    ...mapActions(myPageStore, ["getIsCurrentUser", "getMyPageUser"]),
    handleFollow() {
      if (this.$store.state.username == this.user.username) return;

      if (this.$store.state.likeUsers.includes(this.user.id)) {
        this.decrementFollowerCount(); // 팔로우 수 감소
      } else {
        this.incrementFollowerCount(); // 팔로우 수 증가
      }

      this.$store.dispatch("follow", this.user.id).then(() => {
        this.isMyPage();
        this.followCh(this.user.id);
      });
    },
    showMyTravel() {
      this.currentComponent = "MyTravel";
    },
    showFavoriteTravel() {
      this.currentComponent = "FavoriteTravel";
    },
    showChangeUser() {
      this.currentComponent = "ChangeUser";
    },
    
    

  },
  computed: {
    ...mapState(myPageStore, ["isCurrentUser", "myPageUser"]),
    ...mapState(followStore, ["followeeCount", "followerCount"]),
    //팔로워
    followerCount() {
      return this.$store.state.followStore.followerCount;
    },
    // 팔로잉
    followingCount() {
      return this.$store.state.followStore.followingCount;
    },
    //내페이지인지
    isMyPage() {
      return this.$store.state.loginUser.id === this.pageOwnerId;
    },
  },

  created() {
    // 현재 로그인 사용자 정보를 state에 저장, state에서 loginUser로 접근하여 사용
    this.getIsCurrentUser(this.userId);
    this.getMyPageUser(this.userId);
    // 보여줄 마이페이지 유저 id값이 0일 경우 현재 로그인한 유저를 의미
    // if (this.$route.params.userId === "0") {
    //   console.log("if문 접속 완료");
    //   // 마이페이지 유저, 로그인한 유저가 동일할 경우 mypageUser에 로그인 유저정보를 입력
    //   this.myPageUser = this.loginUser;
    //   console.log(this.myPageUser);
    // } else {
    //   console.log("에러방지");
    // }
  },
};
</script>

<style scoped>
.underline-steelblue {
  display: inline-block;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, rgba(72, 190, 233, 0.3) 30%);
  margin-bottom: 40px;
}
</style>
