<template lang="pug">
#permanentPage.permanent-page
  braw-laws-page-back
  header
    .container.relative
      braw-laws-product
    braw-laws-sidebar
  main 
    .container.relative
      braw-laws-sign-up
      braw-laws-contact
  footer
    .container.relative
      braw-laws-footer
</template>

<script>
import BrawLawsProduct from "../components/BrawLawsProduct.vue";
import BrawLawsPageBack from "../components/BrawLawsPageBack.vue";
import BrawLawsSidebar from "../components/BrawLawsSidebar.vue";
import BrawLawsSignUp from "../components/BrawLawsSignUp.vue";
import BrawLawsContact from "../components/BrawLawsContact.vue";
import BrawLawsFooter from "../components/BrawLawsFooter.vue";
export default {
  name: "Home",
  components: {
    BrawLawsProduct,
    BrawLawsPageBack,
    BrawLawsSidebar,
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