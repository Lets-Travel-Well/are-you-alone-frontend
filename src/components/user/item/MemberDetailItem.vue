<template>
    <div>
        <b-card :title="member.nickName">
            <b-progress :value="member.footage" :max="max" show-progress animated></b-progress>

        </b-card>
    </div>
</template>

<script>
export default {
    name: "MemberDetailItem",
    props: {
      member: Object,  
    },
    components: {},
    data() {
        return {
            message: '',
            max: 100,
        };
    },
    created() {},
    methods: {},
};
</script>

<style scoped></style>