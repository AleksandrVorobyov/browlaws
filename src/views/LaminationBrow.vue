<template lang="pug">
#laminationBrowPage.laminationBrow-page
  header
    brow-laws-page-back
    brow-laws-sidebar
  main
    .container.relative
      brow-laws-product(:productItem="product.laminationbrow")
      brow-laws-sign-up
      brow-laws-contact
  footer
    .container.relative
      brow-laws-footer
</template>

<script>
import { mapGetters } from "vuex";
import BrowLawsProduct from "../components/BrowLawsProduct.vue";
import BrowLawsPageBack from "../components/BrowLawsPageBack.vue";
import BrowLawsSidebar from "../components/BrowLawsSidebar.vue";
import BrowLawsSignUp from "../components/BrowLawsSignUp.vue";
import BrowLawsContact from "../components/BrowLawsContact.vue";
import BrowLawsFooter from "../components/BrowLawsFooter.vue";

export default {
  name: "browPage",
  components: {
    BrowLawsProduct,
    BrowLawsPageBack,
    BrowLawsSidebar,
    BrowLawsSignUp,
    BrowLawsContact,
    BrowLawsFooter,
  },
  computed: {
    ...mapGetters(["product"]),
  },
};
</script>