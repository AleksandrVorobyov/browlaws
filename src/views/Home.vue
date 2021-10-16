<template lang="pug">
#homePage.home-page
  brow-laws-header
  .container.relative
    brow-laws-about
</template>

<script>
import BrowLawsHeader from "../components/BrowLawsHeader.vue";
import BrowLawsAbout from "../components/BrowLawsAbout.vue";
export default {
  name: "homePage",
  components: {
    BrowLawsHeader,
    BrowLawsAbout,
  },
};
</script>