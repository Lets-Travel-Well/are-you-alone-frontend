<template>
  <b-row class="mt-4 mb-4 text-center">

    <b-col class="sm-3">
      <b-form-select v-model="sidoCode" :options="sidos" @change="gugunList"></b-form-select>
    </b-col>
    <b-col class="sm-3">
      <b-form-select v-model="gugunCode" :options="guguns"></b-form-select>
    </b-col>
    <b-col class="sm-3">
      <b-form-select v-model="contentTypeId" :options="contents"></b-form-select>
    </b-col>
    <b-col class="sm-2">
      <b-button @click="searchAttraction">Search</b-button>
    </b-col>
    <div id="map" class="mt-3 shadow" style="width: 100%; height: 600px"></div>
  </b-row>
</template>

<script>
import { mapState, mapActions } from "vuex";
const attractionStore = "attractionStore";
var makerList = [];
var ovList= [];
export default {
  name: "AttractionSearchBar",
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
    // ...mapMutations(attractionStore, ["CLEAR_SIDO_LIST", "CLEAR_GUGUN_LIST"]),
    gugunList() {
      // this.CLEAR_GUGUN_LIST();
      this.gugunCode = null;
      if (this.sidoCode) this.getGugun(this.sidoCode);
    },
    async searchAttraction() {
      await this.getAttractionList({ sidoCode: this.sidoCode, gugunCode: this.gugunCode, contentTypeId: this.contentTypeId });
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
      this.map = new window.kakao.maps.Map(container, options);
      // this.loadMarker();
    },
    // 마커 찍기
    loadMarker() {
      
      makerList = [];
      for (let k = 0; k < this.attractions.length; k++){
        let marker = new window.kakao.maps.Marker({
          map: this.map,
          position: new window.kakao.maps.LatLng(
            this.attractions[k].latitude,
            this.attractions[k].longitude
          ),
          content: this.attractions[k].title
        })
        // 인포 윈도우 띄우기
        let content= '<div class="wrap">' + 
    '    <div class="info  shadow ">' + 
    '        <div class="bg-primary ">' +
    '        		<div class="text-light font-weight-bold p-1 d-flex justify-content-between">' + 
                  this.attractions[k].title +
    '         		<div class="far fa-times-circle fa-lg" onclick="closeOverlay('+k+')" title="닫기"></div>' + 
    '        		</div>'+
    '		   </div>' + 
    '        <div class="body">' + 
    '            <div class="img">' +
    '                <img src="'+ this.attractions[k].firstImage+'" width="73" height="70">' +
    '           </div>' + 
    '            <div class="desc">' + 
    '                <div class="ellipsis">'+ this.attractions[k].addr1+'</div>' + 
    '                <div class="jibun ellipsis">(우)'+ this.attractions[k].zipcode+'</div>' +
    '                <div class="d-flex justify-content-end">';
    
    // if(user != "" && positions[i].like == false) {
    // 	content += '<button id="btn-scrap" class="btn btn-outline-warning d-flex justify-content-center p-1 m-2" type="button" onclick="like('+i+')"> like </button>';
    // } else if(user != "" && positions[i].like == true) {
    // 	marker.setImage(markerImage);
    // 	content += '<button id="btn-scrap" class="btn btn-outline-danger d-flex justify-content-center p-1 m-2" type="button" onclick="like('+i+')"> dislike </button>';
    // }
      
      content +=     
        '                </div>' + 
        '            </div>' + 
        '        </div>' + 
        '    </div>' +    
        '</div>';
        // console.log(content);

        let overlay = new window.kakao.maps.CustomOverlay({
          content: content,
          position: marker.getPosition()       
        });

        window.kakao.maps.event.addListener(marker, 'click', function () {
          console.log("click");
            overlay.setMap(this.map);
        });
        ovList[k] = overlay;

        makerList[k] = marker;
        if (k == 0) {
          this.map.panTo(new window.kakao.maps.LatLng(this.attractions[k].latitude, this.attractions[k].longitude));
        }
        
      }
    },
    cleanMaker() {
      for (let k = 0; k < makerList.length; k++){
        makerList[k].setMap(null);
      }
    }
  },
};
</script>

<style></style>
