<template>
    <div >
        <div class="d-lg-flex position-relative">

          <div class="board-list d-flex flex-column align-items-center mx-auto w-lg-50 h-100 px-3 px-lg-5">
            <div class="card-lifted overflow-hidden rounded-3 "><img src="../assets/메인로고.png"></div>
        
            <h1>로그인</h1>
            <div class="w-100 mt-auto" style="max-width: 526px;">
              
             
               
                <div class="col">
                  <!-- dev 환경 -->
                  <a class="btn btn-lg w-100" href="https://kauth.kakao.com/oauth/authorize?client_id=75704a9f2561ed081d5538850a2ad394&redirect_uri=https://rualone.site/oauth2/redirect&response_type=code">
                <!-- local 환경 -->
                <!-- <a class="btn btn-lg w-100" href="https://kauth.kakao.com/oauth/authorize?client_id=75704a9f2561ed081d5538850a2ad394&redirect_uri=http://localhost:8081/oauth2/redirect&response_type=code">
<img class="btn-img" src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"/> -->
                </a>
              </div>
                <br>
                <div class="col"><a class="btn btn-lg w-100" href="http://localhost:8080/oauth2/authorize/kakao?redirect_uri=http://localhost:3001/oauth2/redirect"><img class="btn-img" src="@/assets/google_login.png" /></a></div>
                <br>
                <div class="col"><a class="btn btn-lg w-100" href="http://localhost:8080/oauth2/authorize/naver?redirect_uri=http://localhost:3001/oauth2/redirect"><img class="btn-img" src="@/assets/naver_login.png" /></a></div>
        
           
            </div>
      
            <p class="w-100 fs-sm pt-5 mt-auto mb-5" style="max-width: 526px;"><span class="text-muted">&copy; Made by</span><a class="nav-link d-inline-block p-0 ms-1" href="https://github.com/Lets-Travel-Well" target="_blank" rel="noopener">TEAM RUALONE</a></p>
          </div>
          
        </div>
     
       
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
  <style scoped>
  .board-list {
      border: solid black;
      border-radius: 20px;
      margin: 5px;
      
    }
  img {
      position: relative;
      z-index: -1;
  }
  .btn-img{
    width: 100%;
    height: 100px;
  }
  </style>
