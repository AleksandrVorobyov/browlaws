<template lang="pug">
#browPage.brow-page
  .container.relative
    brow-laws-product(:productItem="product.brow")
</template>

<script>
import { mapGetters } from "vuex";
import BrowLawsProduct from "../components/BrowLawsProduct.vue";

export default {
  name: "browPage",
  components: {
    BrowLawsProduct,
  },
  computed: {
    ...mapGetters(["product"]),
  },
};
</script>