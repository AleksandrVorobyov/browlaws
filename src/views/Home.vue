<template lang="pug">
#homePage.home-page
  header
    brow-laws-page-back
    brow-laws-sidebar
    brow-laws-header
  main
    .container.relative
      brow-laws-about
      brow-laws-sign-up
      brow-laws-contact
  footer
    .container.relative
      brow-laws-footer
</template>

<script>
import BrowLawsHeader from "../components/BrowLawsHeader.vue";
import BrowLawsAbout from "../components/BrowLawsAbout.vue";
import BrowLawsPageBack from "../components/BrowLawsPageBack.vue";
import BrowLawsSidebar from "../components/BrowLawsSidebar.vue";
import BrowLawsSignUp from "../components/BrowLawsSignUp.vue";
import BrowLawsContact from "../components/BrowLawsContact.vue";
import BrowLawsFooter from "../components/BrowLawsFooter.vue";

export default {
  name: "homePage",
  components: {
    BrowLawsHeader,
    BrowLawsAbout,
    BrowLawsPageBack,
    BrowLawsSidebar,
    BrowLawsSignUp,
    BrowLawsContact,
    BrowLawsFooter,
  },
};
</script>