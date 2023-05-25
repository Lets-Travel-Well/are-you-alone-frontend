<template>
    <div>
        <section>
            <b-img :src="journeyDetail.journeyPlaceResponseList[0].firstImage"></b-img>
        </section>

        <div style="display: flex;">
            <div style="background-color: red;">
                <div>
                    {{ journeyDetail.subject }}
                </div>
                <div>
                    {{ journeyDetail.content }}
                </div>
            </div>

            <div style="background-color: black;">
                <div>
                    <member-detail-item 
                        title="leader" 
                        type="leader"
                        :member="journeyDetail.leader"
                        ></member-detail-item>
                </div>
                <div>
                    {{ journeyDetail.fuddy }}
                </div>
            </div>
        </div>


        <div style="background-color: green;">
            <attraction-list title="journeyDetail" type="journeyDetail"></attraction-list>
            <!-- {{ journeyDetail.journeyPlaceResponseList }} -->
        </div>
    </div>

</template>

<script>
import AttractionList from "@/components/attraction/AttractionList.vue";
import MemberDetailItem from "@/components/user/item/MemberDetailItem.vue"
import { mapActions, mapState } from 'vuex';
const journeyStore = "journeyStore";
export default {
    name: "JourenyDetail",
    components: { AttractionList, MemberDetailItem },
    computed: {
        ...mapState(journeyStore, ["journeyDetail"]),
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
        this.getJourneyDetail(journeyId);
    },

};
</script>

<style scoped></style>