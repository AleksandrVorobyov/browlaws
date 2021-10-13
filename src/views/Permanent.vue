<template lang="pug">
#permanentPage.permanent-page
  .container.relative
    braw-laws-product(:productItem="product.permanent")
</template>

<script>
import { mapGetters } from "vuex";
import BrawLawsProduct from "../components/BrawLawsProduct.vue";
export default {
  name: "permanentPage",
  components: {
    BrawLawsProduct,
  },
  computed: {
    ...mapGetters(["product"]),
  },
};
</script>