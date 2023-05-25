<template>
  <div>
    <b-row class="mt-4 mb-4 text-center">
      <b-col></b-col>
      <b-col class="sm-3">
        <b-form-select v-model="sidoCode" :options="sidos" @change="gugunList"></b-form-select>
      </b-col>
      <b-col class="sm-3">
        <b-form-select v-model="gugunCode" :options="guguns"></b-form-select>
      </b-col>
      <b-col class="sm-3">
        <b-form-select v-model="contentTypeId" :options="contents"></b-form-select>
      </b-col>
      <b-col cols="3" class="sm-2">
        <b-button class="mr-2" @click="searchAttraction">검색</b-button>
        <b-button class="mr-2" v-b-toggle.attSearch>결과창 열기</b-button>
        <b-button v-if="type == 'journey'" v-b-toggle.myList>여행지 목록</b-button>
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col cols="10">
        <div id="map" class="mt-3 shadow" style="width: 100%; height: 600px"></div>
      </b-col>
      <b-col></b-col>
    </b-row>
    <br />
    <side-bar :type="type"></side-bar>
    <side-bar v-if="type == 'journey'" type="myList"></side-bar>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import SideBar from "../layout/SideBar.vue";

const attractionStore = "attractionStore";

var makerList = [];
var ovList = [];
var map = null;

export default {
  name: "AttractionSearchBar",
  components: {
    SideBar,
  },
  props: {
    type: String,
  },
  data() {
    return {
      sidoCode: null,
      gugunCode: null,
      contentTypeId: null,
      map: null,
    };
  },
  computed: {
    ...mapState(attractionStore, ["sidos", "guguns", "contents", "attractions"]),
  },
  created() {
    this.getSido();
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.loadMap();
    } else {
      this.loadScript();
    }
  },
  methods: {
    ...mapActions(attractionStore, ["getSido", "getGugun", "getAttractionList"]),
    gugunList() {
      // this.CLEAR_GUGUN_LIST();
      this.gugunCode = null;
      if (this.sidoCode) this.getGugun(this.sidoCode);
    },
    async searchAttraction() {
      await this.getAttractionList({
        sidoCode: this.sidoCode,
        gugunCode: this.gugunCode,
        contentTypeId: this.contentTypeId,
      });
      this.cleanMaker();
      this.loadMarker();
    },
    loadScript() {
      const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=65e66ed3a412cb73e32b300c2f3a1803&libraries=services,clusterer,drawing";
      script.onload = () => window.kakao.maps.load(this.loadMap);
      document.head.appendChild(script);
    },
    loadMap() {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(37.500613, 127.036431), // 지도의 중심좌표
        level: 5, // 지도의 확대 레벨
      };
      map = new window.kakao.maps.Map(container, options);
      // this.loadMarker();
    },
    // 마커 찍기
    loadMarker() {
      makerList = [];

      for (let k = 0; k < this.attractions.length; k++) {
        let marker = new window.kakao.maps.Marker({
          map: map,
          position: new window.kakao.maps.LatLng(
            this.attractions[k].latitude,
            this.attractions[k].longitude
          ),
          content: this.attractions[k].title,
        });

        let contentWrapper = document.createElement("div");
        contentWrapper.style.cssText = "background: white; border: 1px solid black";

        // 인포 윈도우 띄우기
        let title = document.createElement("div");
        title.innerHTML = this.attractions[k].title;

        let addr = document.createElement("div");
        addr.innerHTML = this.attractions[k].addr1;

        let image = document.createElement("img");
        image.src = this.attractions[k].firstImage;
        image.style.cssText = "width:200px";

        let overlay = new window.kakao.maps.CustomOverlay({
          content: contentWrapper,
          position: marker.getPosition(),
        });

        var closeBtn = document.createElement("button");
        closeBtn.innerHTML = "닫기";
        closeBtn.onclick = function () {
          overlay.setMap(null);
        };

        contentWrapper.appendChild(title);
        title.appendChild(closeBtn);
        contentWrapper.appendChild(image);
        contentWrapper.appendChild(addr);
        overlay.setContent(contentWrapper);

        window.kakao.maps.event.addListener(marker, "click", function () {
          overlay.setMap(map);
        });

        ovList[k] = overlay;

        makerList[k] = marker;

        if (k == 0) {
          map.panTo(
            new window.kakao.maps.LatLng(
              this.attractions[k].latitude,
              this.attractions[k].longitude
            )
          );
        }
      }
    },

    // closeOverlay(num) {
    //   ovList[num].setMap(null);
    // },
    cleanMaker() {
      for (let k = 0; k < makerList.length; k++) {
        makerList[k].setMap(null);
      }
    },
  },
};
</script>

<style></style>
