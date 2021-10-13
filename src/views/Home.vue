<template lang="pug">
#homePage.home-page
  braw-laws-header
  .container.relative
    braw-laws-about
</template>

<script>
import BrawLawsHeader from "../components/BrawLawsHeader.vue";
import BrawLawsAbout from "../components/BrawLawsAbout.vue";
export default {
  name: "homePage",
  components: {
    BrawLawsHeader,
    BrawLawsAbout,
  },
};
</script>