<template lang="pug">
#eyelashesPage.eyelashes-page
  braw-laws-page-back
  header
    .container.relative
      braw-laws-product(:productItem="product.eyel")
  main 
    .container.relative
      braw-laws-sign-up
      braw-laws-contact
  footer
    .container.relative
      braw-laws-footer
</template>

<script>
import { mapGetters } from "vuex";
import BrawLawsPageBack from "../components/BrawLawsPageBack.vue";
import BrawLawsProduct from "../components/BrawLawsProduct.vue";
import BrawLawsSignUp from "../components/BrawLawsSignUp.vue";
import BrawLawsContact from "../components/BrawLawsContact.vue";
import BrawLawsFooter from "../components/BrawLawsFooter.vue";
export default {
  name: "eyelashesPage",
  components: {
    BrawLawsPageBack,
    BrawLawsProduct,
    BrawLawsSignUp,
    BrawLawsContact,
    BrawLawsFooter,
  },
  computed: {
    ...mapGetters(["product"]),
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