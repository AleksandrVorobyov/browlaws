<template lang="pug">
#homePage.home-page
  braw-laws-page-back
  header
    braw-laws-header
  main 
    .container.relative
      braw-laws-about
      braw-laws-sign-up
      braw-laws-contact
  footer
    .container.relative
      braw-laws-footer
</template>

<script>
import BrawLawsPageBack from "../components/BrawLawsPageBack.vue";
import BrawLawsHeader from "../components/BrawLawsHeader.vue";
import BrawLawsAbout from "../components/BrawLawsAbout.vue";
import BrawLawsSignUp from "../components/BrawLawsSignUp.vue";
import BrawLawsContact from "../components/BrawLawsContact.vue";
import BrawLawsFooter from "../components/BrawLawsFooter.vue";
export default {
  name: "homePage",
  components: {
    BrawLawsPageBack,
    BrawLawsHeader,
    BrawLawsAbout,
    BrawLawsSignUp,
    BrawLawsContact,
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