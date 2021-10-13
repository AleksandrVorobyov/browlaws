<template lang="pug">
#browPage.brow-page
  .container.relative
    braw-laws-product(:productItem="product.brow")
</template>

<script>
import { mapGetters } from "vuex";
import BrawLawsProduct from "../components/BrawLawsProduct.vue";

export default {
  name: "browPage",
  components: {
    BrawLawsProduct,
  },
  computed: {
    ...mapGetters(["product"]),
  },
};
</script>