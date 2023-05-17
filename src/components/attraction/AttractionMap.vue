<template>
  <div id="map" class="mt-3 shadow" style="width: 100%; height: 600px"></div>
</template>

<script>
export default {
  name: "AttractionMap",
  components: {},
  data() {
    return {
      map: null,
    };
  },
  created() {},
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.loadMap();
    } else {
      this.loadScript();
    }
  },
  methods: {
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
    },
  },
};
</script>

<style scoped></style>
