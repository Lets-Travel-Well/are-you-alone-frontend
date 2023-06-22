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
      this.cleanOvList();
      this.loadMarker();
    },

    loadScript() {
      const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=d2c3523350abff43ba78fc582f9eb625&libraries=services,clusterer,drawing";
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
      ovList = [];
      for (let k = 0; k < this.attractions.length; k++) {
        let marker = new window.kakao.maps.Marker({
          map: map,
          position: new window.kakao.maps.LatLng(
            this.attractions[k].latitude,
            this.attractions[k].longitude
          ),
          content: this.attractions[k].title,
        });

        // 인포 윈도우 띄우기
        let contentWrapper = document.createElement("div");
        contentWrapper.style.cssText =
          "position: absolute;left: 0;bottom: 40px;width: 288px;height: 132px;margin-left: -144px;text-align: left;overflow: hidden;font-size: 12px;font-family: 'Malgun Gothic', dotum, '돋움', sans-serif;line-height: 1.5;";
        let infoWrapper = document.createElement("div");
        infoWrapper.style.cssText =
          "width: 286px;height: 120px;border-radius: 5px;border-bottom: 2px solid #ccc;border-right: 1px solid #ccc;overflow: hidden;background: #fff;";
        let titleWrapper = document.createElement("div");
        titleWrapper.style.cssText =
          "overflow: hidden; border: 0;box-shadow: 0px 1px 2px #888;padding: 5px 0 0 10px;height: 30px;background: #eee;border-bottom: 1px solid #ddd;font-size: 18px;font-weight: bold;";
        titleWrapper.innerHTML = this.attractions[k].title;

        let bodyWrapper = document.createElement("div");
        bodyWrapper.style.cssText = "position: relative;overflow: hidden;";

        let imgWrapper = document.createElement("div");
        imgWrapper.style.cssText =
          "position: absolute;top: 6px;left: 5px;width: 73px;height: 71px;border: 1px solid #ddd;color: #888;overflow: hidden;";
        let descWrapper = document.createElement("div");
        descWrapper.style.cssText = "position: relative;margin: 13px 0 0 90px;height: 75px;";

        let addr = document.createElement("div");
        addr.innerHTML = this.attractions[k].addr1;
        addr.style.cssText = "overflow: hidden;text-overflow: ellipsis;white-space: nowrap;";

        let likeCnt = document.createElement("div");
        likeCnt.innerHTML = "좋아요 : " + this.attractions[k].likeCnt;

        let image = document.createElement("img");
        image.src = this.attractions[k].firstImage;
        image.style.cssText = "width:73px; height:70px";

        let overlay = new window.kakao.maps.CustomOverlay({
          content: contentWrapper,
          position: marker.getPosition(),
        });

        var closeBtn = document.createElement("div");
        closeBtn.setAttribute("title", "닫기");
        closeBtn.style.cssText =
          "position: absolute;top: 10px;right: 10px;color: #888;width: 17px;height: 17px;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png');";
        closeBtn.onclick = function () {
          overlay.setMap(null);
        };

        contentWrapper.appendChild(infoWrapper);
        infoWrapper.appendChild(titleWrapper);
        titleWrapper.appendChild(closeBtn);
        infoWrapper.appendChild(bodyWrapper);
        bodyWrapper.appendChild(imgWrapper);
        imgWrapper.appendChild(image);
        bodyWrapper.appendChild(descWrapper);
        descWrapper.appendChild(addr);
        descWrapper.appendChild(likeCnt);

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
    cleanOvList() {
      for (let k = 0; k < ovList.length; k++) {
        ovList[k].setMap(null);
      }
    },
  },
};
</script>

<style></style>
