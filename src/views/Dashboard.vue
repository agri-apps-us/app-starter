<template>
  <div class="app-page dashboard">
    <div v-if="daily" class="blockquotes">
      <h3>Quote of the day</h3>
      <blockquote :cite="author || 'Unknown'">{{ daily }}</blockquote>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  computed: {
    results() {
      return this.$store.getters["results"] || { calculated: false };
    },
    ...mapFields(["daily", "author"])
  }
};
</script>

<style></style>
