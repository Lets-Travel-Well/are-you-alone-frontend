<template>
  <div class="attraction-wrapper">
    <b-card
      title="여행지 이름"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text> 여행지 설명을 작성할거임 </b-card-text>
      <b-button href="#" variant="primary">상세 버튼</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "AttractionListItem",
  props: {},
  filters: {},
  data() {
    return {
      title: "여행지 이름",
      discription: "여행지 설명",
      img: "@/assets/happyhouse.png",
    };
  },
};
</script>

<style>
.attraction-wrapper {
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px rgb(191, 191, 191);
}
</style>
