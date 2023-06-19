<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col></b-col>
      <b-col cols="7">
        <h3 class="underline-steelblue">
          <b-icon icon="person-lines-fill"></b-icon> 마이페이지
        </h3>
      </b-col>

      <b-col></b-col>
    </b-row>
  <div>
  <div class="container py-5 mt-4 mt-lg-5 mb-lg-4 my-xl-5">
    <div class="row pt-sm-2 pt-lg-0">
      <!-- 프로필 바 사진은 992px)-->
      <aside class="col-lg-3 pe-lg-4 pe-xl-5 mt-n3">
        <div class="position-lg-sticky top-0">
          <div class="d-none d-lg-block" style="padding-top: 105px;"></div>
          <div class="offcanvas-lg offcanvas-start" id="sidebarAccount">
            <button class="btn-close position-absolute top-0 end-0 mt-3 me-3 d-lg-none" type="button" data-bs-dismiss="offcanvas" data-bs-target="#sidebarAccount"></button>
            <div class="offcanvas-body">
              <div class="pb-2 pb-lg-0 mb-4 mb-lg-5"><img class="d-block rounded-circle mb-2" src="@/assets/동행고양이.png" width="150" height="150">
                <h3 class="h5 mb-1">닉네임</h3>
                <!-- 팔로잉 텍스트 클릭 시 UserFollower 표시 -->
                <p class="fs-sm text-muted mb-0" @click="showUserFollower = !showUserFollower">팔로잉 {{followeeid}} / 팔로워</p>
                <br>
                <span type="button" v-if="!follow" @click="follow" class="fs-sm btn btn-outline-primary py-2 px-0 " style="width: 50%;">
                  팔로우
                </span>
                <span v-else @click="follow" class="fs-sm btn btn-outline-danger py-2 px-0 " style="width: 50%;">
                  언팔로우


                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>

  

  <!-- UserFollower 컴포넌트 -->
  <UserFollower v-if="showUserFollower"></UserFollower>

      <!-- 관심여행 목록 -->

      <div class="col-lg-9 pt-4 pb-2 pb-sm-4">
        <div class="d-flex align-items-center mb-4">
          <h1 class="h2 mb-0">관심있는 여행지<span class='fs-base fw-normal text-muted'></span></h1>
        </div>
        <div class="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
          <div class="card-body pb-4">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            </div>
          </div>
        </div>

        <div class="d-flex align-items-center mb-4">
          <h1 class="h2 mb-0">관심있는 여행계획<span class='fs-base fw-normal text-muted'></span></h1>
        </div>
        <div class="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
          <div class="card-body pb-4">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>
    <router-view></router-view>
  </b-container>
</template>

<script>
// import axios from 'axios'
const followStore = "followStore"
import { mapActions } from "vuex";
import UserFollower from '@/components/user/item/UserFollower.vue';


export default {
name: "MypageView",
components: {
  UserFollower
},
data() {
  return {
    showUserFollower: false,
  }
},
methods: {
  ...mapActions(followStore, ["followCh"]),
  follow() {
      if (this.$store.state.username == this.user.username) return

      if (this.$store.state.likeUsers.includes(this.user.id)) {
        this.follower_count -= 1
      } else {
        this.follower_count += 1
      }

      this.$store.dispatch('follow', this.user.id)
    }
},
 created(){
  this.followCh(2);
 }
};


</script>

<style scoped>
.underline-steelblue {
  display: inline-block;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, rgba(72, 190, 233, 0.3) 30%);
  margin-bottom: 40px;
}
</style>
