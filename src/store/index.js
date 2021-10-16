import { createStore } from "vuex";
import BrowLawsSidebar from "./modules/BrowLawsSidebar";
import BrowLawsPageBack from "./modules/BrowLawsPageBack";
import BrowLawsHeader from "./modules/BrowLawsHeader";
import BrowLawsAbout from "./modules/BrowLawsAbout";
import BrowLawsSignUp from "./modules/BrowLawsSignUp";
import BrowLawsContact from "./modules/BrowLawsContact";
import BrowLawsProduct from "./modules/BrowLawsProduct";
import BrowLawsFooter from "./modules/BrowLawsFooter";
import Splide from "@splidejs/splide";

export default createStore({
  state: {},
  getters: {},
  mutations: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    thumbnailSlider() {
      document.addEventListener("DOMContentLoaded", function () {
        let main = new Splide(".about-carousel", {
          type: "fade",
          heightRatio: 0.5,
          pagination: false,
          arrows: true,
          cover: true,
          height: 500,
          breakpoints: {
            0: {
              height: 300,
            },
            480: {
              height: 400,
            },
            720: {
              height: 500,
            },
          },
        });

        let thumbnails = new Splide(".about-carousel__thumb", {
          rewind: true,
          fixedWidth: 104,
          fixedHeight: 58,
          isNavigation: true,
          arrows: false,
          gap: 10,
          focus: "center",
          pagination: false,
          cover: true,
          dragMinThreshold: {
            mouse: 4,
            touch: 10,
          },
          breakpoints: {
            600: {
              fixedWidth: 60,
              fixedHeight: 44,
            },
          },
        });

        main.sync(thumbnails);
        main.mount();
        thumbnails.mount();
      });
    },
  },
  actions: {},
  modules: {
    BrowLawsSidebar,
    BrowLawsPageBack,
    BrowLawsHeader,
    BrowLawsAbout,
    BrowLawsSignUp,
    BrowLawsContact,
    BrowLawsProduct,
    BrowLawsFooter,
  },
});
