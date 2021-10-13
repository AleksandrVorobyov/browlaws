<template lang="pug">
#page.page
  header
    braw-laws-page-back
    braw-laws-sidebar
  main
    <router-view/>
    .container.relative
      braw-laws-sign-up
      braw-laws-contact
  footer
    .container.relative
      braw-laws-footer
</template>

<script>
import BrawLawsPageBack from "./components/BrawLawsPageBack.vue";
import BrawLawsSidebar from "./components/BrawLawsSidebar.vue";
import BrawLawsSignUp from "./components/BrawLawsSignUp.vue";
import BrawLawsContact from "./components/BrawLawsContact.vue";
import BrawLawsFooter from "./components/BrawLawsFooter.vue";
export default {
  name: "Home",
  components: {
    BrawLawsPageBack,
    BrawLawsSidebar,
    BrawLawsSignUp,
    BrawLawsContact,
    BrawLawsFooter,
  },
};
</script>

<style lang="scss">
:root {
  --bgPage: radial-gradient(
      circle,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url("~@/assets/img/page-back/pattern.jpg") top left / cover no-repeat;
  --bgsidebar: #fff;
  --bgSection: #fff;
  --mainPincClr: #d71a75;
  --linkFont: "TT-Italic";
  --socialLinearInst: linear-gradient(
    90deg,
    rgba(233, 229, 148, 1) 0%,
    rgba(238, 174, 202, 1) 100%
  );
  --socialLinearTele: linear-gradient(
    90deg,
    rgba(148, 227, 233, 1) 0%,
    rgba(61, 17, 255, 1) 100%
  );
  --socialLinearWhat: linear-gradient(
    90deg,
    rgb(136, 247, 103) 0%,
    rgb(14, 175, 54) 100%
  );
}

.container {
  width: 100%;
  height: 100%;
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 15px;

  @media (min-width: 1920px) {
    max-width: 1440px;
  }
}

.container--max {
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 15px;
}

::-webkit-scrollbar-button {
  width: 6px;
  height: 0px;
}

::-webkit-scrollbar-track {
  background-color: #32312e;
  box-shadow: 0px 0px 3px #000 inset;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  background-color: #ffcb17;
  box-shadow: 0px 1px 1px #fff inset;
}

::-webkit-resizer {
  width: 7px;
  height: 0px;
}

::-webkit-scrollbar {
  width: 11px;
}

.relative {
  position: relative;
}

.page {
  section {
    margin-top: 20px;
  }

  #sidebar {
    margin-top: 0;
  }
}

.body--hidden {
  position: fixed;
  overflow: hidden;
  left: 0;
  width: 100%;
}
</style>

