<template>
    <div>
        {{ member }}
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
        };
    },
    created() {},
    methods: {},
};
</script>

<style scoped></style>