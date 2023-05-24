<template>
  <div>
    <jouney-list-item></jouney-list-item>
  </div>
</template>

<script>
import JouneyListItem from "./item/JouneyListItem.vue";

export default {
  name: "JourneyList",
  components: { JouneyListItem },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
};
</script>

<style scope>
.tdClass {
  width: 50px;
  text-align: center;
}
.tdSubject {
  width: 300px;
  text-align: left;
}
</style>
