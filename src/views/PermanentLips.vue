<template lang="pug">
#eyelashesPage.eyelashes-page
  .container.relative
    brow-laws-product(:productItem="product.permanentlips")
</template>

<script>
import { mapGetters } from "vuex";
import BrowLawsProduct from "../components/BrowLawsProduct.vue";
export default {
  name: "eyelashesPage",
  components: {
    BrowLawsProduct,
  },
  computed: {
    ...mapGetters(["product"]),
  },
};
</script>