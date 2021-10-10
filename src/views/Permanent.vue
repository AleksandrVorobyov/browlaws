<template lang="pug">
#permanentPage.permanent-page
  braw-laws-page-back
  header
    braw-laws-header
    braw-laws-navigation
  main 

</template>

<script>
import BrawLawsPageBack from "../components/BrawLawsPageBack.vue";
import BrawLawsHeader from "../components/BrawLawsHeader.vue";
import BrawLawsNavigation from "../components/BrawLawsNavigation.vue";

export default {
  name: "Home",
  components: {
    BrawLawsPageBack,
    BrawLawsHeader,
    BrawLawsNavigation,

  },
};
</script>