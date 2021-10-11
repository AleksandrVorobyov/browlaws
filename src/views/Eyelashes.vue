<template lang="pug">
#permanentPage.permanent-page
  braw-laws-page-back
  header
    braw-laws-header
    braw-laws-sidebar
  main 
    .container.relative
</template>

<script>
import BrawLawsPageBack from "../components/BrawLawsPageBack.vue";
import BrawLawsHeader from "../components/BrawLawsHeader.vue";
import BrawLawsSidebar from "../components/BrawLawsSidebar.vue";
export default {
  name: "Home",
  components: {
    BrawLawsPageBack,
    BrawLawsHeader,
    BrawLawsSidebar,
  },
};
</script>