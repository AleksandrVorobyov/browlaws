<template lang="pug">
#eyelashesPage.eyelashes-page
  .container.relative
    braw-laws-product(:productItem="product.eyel")
</template>

<script>
import { mapGetters } from "vuex";
import BrawLawsProduct from "../components/BrawLawsProduct.vue";
export default {
  name: "eyelashesPage",
  components: {
    BrawLawsProduct,
  },
  computed: {
    ...mapGetters(["product"]),
  },
};
</script>