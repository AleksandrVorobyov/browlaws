<template lang="pug">
#nailsPage.nails-page
  braw-laws-page-back
  main 
    .container.relative
      braw-laws-sign-up
      braw-laws-contact
  footer
    .container.relative
      braw-laws-footer
</template>

<script>
import BrawLawsPageBack from "../components/BrawLawsPageBack.vue";
import BrawLawsSignUp from "../components/BrawLawsSignUp.vue";
import BrawLawsContact from "../components/BrawLawsContact.vue";
import BrawLawsFooter from "../components/BrawLawsFooter.vue";
export default {
  name: "Home",
  components: {
    BrawLawsPageBack,
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