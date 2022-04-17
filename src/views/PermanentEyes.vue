<template lang="pug">
#nailsPage.nails-page
  .container.relative
    brow-laws-product(:productItem="product.permanenteyes")
</template>

<script>
import { mapGetters } from "vuex";
import BrowLawsProduct from "../components/BrowLawsProduct.vue";
export default {
  name: "nailsPage",
  components: {
    BrowLawsProduct,
  },
  computed: {
    ...mapGetters(["product"]),
  },
};
</script>