<template lang="pug">
#homePage.home-page
  braw-laws-page-back
  header
    braw-laws-header
    braw-laws-navigation
  main 
    .container.relative
      BrawLawsAbout
      BrawLawsSignUp
  footer
    .container.relative
      BrawLawsFooter
</template>

<script>
import BrawLawsPageBack from "../components/BrawLawsPageBack.vue";
import BrawLawsHeader from "../components/BrawLawsHeader.vue";
import BrawLawsNavigation from "../components/BrawLawsNavigation.vue";
import BrawLawsAbout from "../components/BrawLawsAbout.vue";
import BrawLawsSignUp from "../components/BrawLawsSignUp.vue";
import BrawLawsFooter from "../components/BrawLawsFooter.vue";
export default {
  name: "Home",
  components: {
    BrawLawsPageBack,
    BrawLawsHeader,
    BrawLawsNavigation,
    BrawLawsAbout,
    BrawLawsSignUp,
    BrawLawsFooter,
  },
};
</script>

<style scoped lang="scss">
main div > * + * {
  margin-top: 20px;
}

main + footer {
  margin-top: 20px;
}
</style>