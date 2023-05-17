<template>
  <b-container class="bv-example-row mt-3 text-center">
    <h3 class="underline-green"><b-icon icon="instagram"></b-icon> 인스타 연동</h3>
    <b-row>
      <b-col></b-col>
      <b-col cols="10">
        <b-jumbotron bg-variant="muted" text-variant="dark" border-variant="dark">
          <template #header>인스타</template>

          <template #lead> 인스타</template>

          <hr class="my-4" />

          <p>문구</p>
        </b-jumbotron>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "InstagramView",
};
</script>

<style scoped>
.underline-green {
  display: inline-block;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, rgba(56, 233, 40, 0.3) 30%);
}
</style>
