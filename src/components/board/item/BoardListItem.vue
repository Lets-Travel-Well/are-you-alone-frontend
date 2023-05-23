<template>
  <b-tr>
    <b-td>{{ board.id }}</b-td>
    <b-th class="text-left">
      <router-link :to="{ name: 'boardDetail', params: { boardId: board.id } }">{{
        board.subject
      }}</router-link>
    </b-th>
    <b-td>{{ board.authorName }}</b-td>
    <b-td>{{ board.hit }}</b-td>
  </b-tr>
</template>

<script>
import moment from "moment";

export default {
  name: "BoardListItem",
  props: {
    board: Object,
  },
  filters: {
    dateFormat(regtime) {
      return moment(new Date(regtime)).format("YY.MM.DD");
    },
  },
};
</script>

<style></style>
