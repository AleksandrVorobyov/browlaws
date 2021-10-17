import { createStore } from "vuex";
import BrowLawsSidebar from "./modules/BrowLawsSidebar";
import BrowLawsPageBack from "./modules/BrowLawsPageBack";
import BrowLawsHeader from "./modules/BrowLawsHeader";
import BrowLawsAbout from "./modules/BrowLawsAbout";
import BrowLawsSignUp from "./modules/BrowLawsSignUp";
import BrowLawsContact from "./modules/BrowLawsContact";
import BrowLawsProduct from "./modules/BrowLawsProduct";
import BrowLawsFooter from "./modules/BrowLawsFooter";

export default createStore({
  state: {},
  getters: {},
  mutations: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
