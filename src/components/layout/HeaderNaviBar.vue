<template>
  <div class="fixed-top border-bottom header-wrapper">
  <b-row class="nav-content">
     <b-col cols="2"></b-col>
     <b-col cols="8">
       <b-navbar toggleable="lg" type="dark" variant="white" class="p-0" >
         <b-navbar-brand href="#">
           <router-link to="/">
             <img src="@/assets/텍스트로고.png" width="100px" height="100px" alt="ssafy" style="margin-top: 20px;"/>
           </router-link>
         </b-navbar-brand>

         <b-navbar-toggle
           target="nav-collapse"
           style="background-color: #38d0eb"
         ></b-navbar-toggle>

         <b-collapse id="nav-collapse" class="align-bottom mt-4" is-nav>
           <b-navbar-nav>
             <b-nav-item href="#"
               ><router-link :to="{ name: 'home' }" class="link"
                 ><b-icon icon="house" font-scale="1.5"></b-icon> 홈</router-link
               ></b-nav-item
             >
             <b-nav-item href="#"
               ><router-link :to="{ name: 'board' }" class="link"
                 ><b-icon icon="journal" font-scale="1.4"></b-icon> 자유 게시판</router-link
               ></b-nav-item
             >
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
                   <span v-b-modal.modal-1 @click="goLogin()">로그인/회원가입</span></b-dropdown-item
                 >
               </div>
               <div v-else>
                 <b-dropdown-item href="#"
                   ><router-link :to="{ name: 'mypage' }" class="link" style="color: #3aa4ca"
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
   goLogin(){
   
     this.$router.push({name: 'login'})
   
   }
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








#app {
 font-family: 'jua';
 /* style="--ar-gray-900: var(--ar-gray-900); color: var(--ar-gray-900);" */
 
}

nav {
 padding: 20px;
}

nav a {
 font-weight: bold;
 color: #2c3e50;
}

nav a.router-link-exact-active {
 color: black;
}

.hive {
 width: 130px;
 height: 90px;
}
h1 {
 font-family: 'jua';
}

h2 {
 font-family: 'jua';
}

h3 {
 font-family: 'jua';
}

.navcolor{
 color: var(--ar-teal)!important;
}

h4 {
 font-family: 'jua';
}

 input[type=password]::placeholder {
   font-family: "jua"; 
 }

#video-bg {
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 object-fit: cover;
 z-index: -1; /* Ensure the video is behind the content */
}
 #zoom {
   position: relative;
   border-radius: 3%;
 }

 #zoom:hover {
   transform: scale(2);
   transition: 0.5s;
   z-index: 1;
   border-radius: 3%;
 }
 
 .card-img {
   height: 100%;
   object-fit: cover;
 }

 .backgroundimg {
   border-radius: 5%;
   height: 100%
 }

 #zoom:hover > .backgroundimg {
   opacity: 0.3;
 }

 .mainimg {
   position: absolute;
   opacity: 0;
   display: none;
 }

 #movieInfo {
   position: absolute;
   opacity: 0;
   display: none;
 }

 #title {
   position: absolute;
   opacity: 0;
   display: none;
 }

 #zoom:hover > .mainimg {
   display: inline;
   opacity: 1;
   width: 40%;
   top: 15%;
   left: 10%
 }

 #zoom:hover > #movieInfo {
   display: inline;
   opacity: 1;
   top: 15%;
   left: 60%;
   font-size: 4px;
   color: #fff;
 }

 #zoom:hover > #title {
   display: inline;
   opacity: 1;
   top: 90%;
   text-align: center;
   width: 60%;
   font-size: 8px;
   left: 20%;
   color: #FFD963;
   font-weight: bold;
 }

 #liked {
   display: none;
   position: absolute;
   opacity: 0;
 }

 #zoom:hover > #liked {
   display: inline;
   opacity: 1;
   top: 70%;
   text-align: center;
   width: 60%;
   font-size: 8px;
   left: 20%;
 }
 .with-outline {
 text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
}
 #zoom:hover > #liked:active {
   transform: scale(1.2);
   transition: 0.3s;
 }

 #pointer {
   cursor: pointer;
 }

 footer {
   height: 3%;
 }

 .bg-navb {
   background: rgb(54, 54, 54) !important;
   opacity: 1 !important;
 }

 .dark-mode .bg-navb {
   background: white !important;
   opacity: 1 !important;
 }

 .dark-mode .navtext {
   color: white;
 }

 .personBox {
   position: relative;
 }

 .personBox:hover #personimg {
   opacity: 0.5;
   border: 2px solid;
   border-color:white;
   margin-bottom: 2px;
 }

 .personBox:hover #cardbox {
   opacity: 1;
 }

 #personP {
   display: none;
   color: white;
 }

 .personBox:hover #personP {
   position: absolute;
   left: 8%;
   top: 0%;
   display: inline;
 }

 #area {
 /* absolute는 부모가 relative일 때 부모를 따라간다. */
 width: 100%;
 padding-bottom: 56.25%; /* 16:9 비율 */
 position: absolute; 
 top:0%; 
 left: 0%; 
 z-index: -1;
 }

 #video {
   position: absolute;
   width: 100%; /* 부모에 맞게 꽉 채운다. */
   height: 100%;
   opacity: 0.5;
 }

 .selected {
   color: #FFD963;
   font-weight: bold;
 }
 .video-container {
 position: absolute;
 top: 18%;
 left: 50px; /* Adjust this value as needed */
 transform: translateY(-50%);
}
</style>
