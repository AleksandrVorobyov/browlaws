<template lang="pug">
#page.page
  header
    brow-laws-page-back
    brow-laws-sidebar
  main
    <router-view/>
    .container.relative
      brow-laws-sign-up
      brow-laws-contact
  footer
    .container.relative
      brow-laws-footer
</template>

<script>
import BrowLawsPageBack from "./components/BrowLawsPageBack.vue";
import BrowLawsSidebar from "./components/BrowLawsSidebar.vue";
import BrowLawsSignUp from "./components/BrowLawsSignUp.vue";
import BrowLawsContact from "./components/BrowLawsContact.vue";
import BrowLawsFooter from "./components/BrowLawsFooter.vue";
export default {
  name: "Home",
  components: {
    BrowLawsPageBack,
    BrowLawsSidebar,
    BrowLawsSignUp,
    BrowLawsContact,
    BrowLawsFooter,
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://w606855.yclients.com/widgetJS"
    );
    document.head.appendChild(recaptchaScript);
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
  --socialLinearVk: linear-gradient(
    90deg,
    rgb(164, 188, 214) 0%,
    rgb(89, 125, 163) 100%
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

  #sidebar,
  #pageBack {
    margin-top: 0;
  }
}

.body--hidden {
  position: fixed;
  overflow: hidden;
  left: 0;
  width: 100%;
}

.yButtonBackground {
  background: var(--mainPincClr) !important;
}

.yButtonWave {
  color: var(--mainPincClr) !important;
}

.yButton.bottom.right {
  left: 50px !important;
  bottom: 50px !important;
  display: flex;
  align-items: center;
  width: 70px !important;
  height: 70px !important;

  @media (min-width: 480px) {
    width: 100px !important;
    height: 100px !important;
    display: block;
  }

  .yButtonText {
    color: #fff !important;
  }

  .yButtonBackground {
    width: 70px !important;
    height: 70px !important;
    z-index: -1;
    @media (min-width: 480px) {
      width: 100px !important;
      height: 100px !important;
    }
  }

  .yButtonText {
    position: relative !important;
    font-size: 12px !important;
    line-height: 1 !important;
    width: auto !important;
    height: auto !important;
    letter-spacing: 0.5px !important;
    z-index: 5;
    top: 0px !important;
    left: 0px !important;
    right: 0px !important;
    @media (min-width: 480px) {
      width: 90px !important;
      height: 50px !important;
      font-size: 15px !important;
      line-height: 25px !important;
      letter-spacing: 1.5px !important;
      top: 25px !important;
      left: 5px !important;
      right: 5px !important;
    }
  }
}
</style>

