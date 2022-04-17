<template lang="pug">
#permanentPage.permanent-page
  .container.relative
    brow-laws-product(:productItem="product.permanentbrow")
</template>

<script>
import { mapGetters } from "vuex";
import BrowLawsProduct from "../components/BrowLawsProduct.vue";
export default {
  name: "permanentPage",
  components: {
    BrowLawsProduct,
  },
  computed: {
    ...mapGetters(["product"]),
  },
};
</script>