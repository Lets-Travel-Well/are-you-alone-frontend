<template>
  <div>{{ journey.id }}</div>
</template>

<script>
export default {
  name: "JourneyListItem",
  props:{
    journey: Object,
  },
  components: {
  },
  data() {
    return {
      message: "",
    };
  },
  created() {
    console.log("hellO");
  },
  methods: {},
};
</script>

<style scoped></style>
