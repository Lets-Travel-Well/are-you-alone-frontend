<template>
    <div>
        <section>
            <b-img :src="journeyDeatil.journeyPlaceResponseList[0].firstImage"></b-img>
        </section>

        <div style="display: flex;">
            <div style="background-color: red;">
                <div>
                    {{ journeyDeatil.subject }}
                </div>
                <div>
                    {{ journeyDeatil.content }}
                </div>
            </div>

            <div style="background-color: black;">
                <div>
                    {{ journeyDeatil.leader }}
                </div>
                <div>
                    {{ journeyDeatil.fuddy }}
                </div>
            </div>
        </div>


        <div style="background-color: green;">
            <attraction-list title="journeyDetail" type="journeyDetail"></attraction-list>
            <!-- {{ journeyDeatil.journeyPlaceResponseList }} -->
        </div>
    </div>

</template>

<script>
import AttractionList from "@/components/attraction/AttractionList.vue";
import { mapActions, mapState } from 'vuex';
const journeyStore = "journeyStore";
export default {
    name: "JourenyDetail",
    components: { AttractionList },
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