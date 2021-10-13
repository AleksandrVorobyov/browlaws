<template lang="pug">
#nailsPage.nails-page
  .container.relative
    braw-laws-product(:productItem="product.eyelEextensions")
</template>

<script>
import { mapGetters } from "vuex";
import BrawLawsProduct from "../components/BrawLawsProduct.vue";
export default {
  name: "nailsPage",
  components: {
    BrawLawsProduct,
  },
  computed: {
    ...mapGetters(["product"]),
  },
};
</script>