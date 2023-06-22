<template>
    <div class="col-lg-9 pt-4 pb-2 pb-sm-4">
       <div class="d-flex align-items-center mb-4">
         <h1 class="underline-steelblue h2 mb-0">내여행</h1>
       </div>
       <hr>
      
       <b-row>
      <b-col></b-col>
      <b-col cols="10">
       
      </b-col>
      <b-col></b-col>
    </b-row>
    <br />
    <br />
    <b-row>
      <b-col cols="9"></b-col>
    
    </b-row>
    <br />
    
      <div style="inline-block">
        <jouney-list-item
          v-for="journey in journeys"
          :key="journey.id"
          :journey="journey"
        ></jouney-list-item>
      </div>
   
     </div>
 </template>
 
 <script>
 import { mapActions, mapState } from "vuex";
import JouneyListItem from "@/components/journey/item/JouneyListItem.vue";
const journeyStore = "journeyStore";

export default {

  
  name: "MyTravel",
  components: { JouneyListItem },
  data() {
    return {};
  },
  computed: {
    ...mapState(journeyStore, ["journeys"]),
  },
  methods: {
    ...mapActions(journeyStore, ["getJourney"]),
    moveRegist() {
      this.$router.push({ name: "writeJourney" });
    },
  },
  mounted() {
    this.getJourney();
  },
};
 </script>
 
 
 <style scoped>

.underline-steelblue {
  display: inline-block;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, rgba(72, 190, 233, 0.3) 30%);
  margin-bottom: 40px;
}
</style>
 