<template>
    <div>{{ journeyDeatil }}</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
const journeyStore = "journeyStore";
export default {
    name: "JourenyDetail",
    components: {},
    computed: {
        ...mapState(journeyStore, ["journeyDeatil"]),
    },
    methods: {
        ...mapActions(journeyStore, ["getJourneyDetail"]),
    },
    data() {
        return {
            message: '',
        };
    },
    created() {
        let journeyId = this.$route.params.journeyId;
        console.log(journeyId);
        console.log("qqqqqqq");
        this.getJourneyDetail(journeyId);
    },

};
</script>

<style scoped></style>