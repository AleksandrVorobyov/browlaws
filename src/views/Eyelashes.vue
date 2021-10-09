<template lang="pug">
#permanentPage.permanent-page
  braw-laws-page-back
  header
    braw-laws-header
    braw-laws-navigation
  main 
    .container.relative
      BrawLawsAbout
</template>

<script>
import BrawLawsPageBack from "../components/BrawLawsPageBack.vue";
import BrawLawsHeader from "../components/BrawLawsHeader.vue";
import BrawLawsNavigation from "../components/BrawLawsNavigation.vue";
import BrawLawsAbout from "../components/BrawLawsAbout.vue";
export default {
  name: "Home",
  components: {
    BrawLawsPageBack,
    BrawLawsHeader,
    BrawLawsNavigation,
    BrawLawsAbout,
  },
};
</script>