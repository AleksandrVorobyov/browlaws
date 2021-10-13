import { createStore } from "vuex";
import BrawLawsSidebar from "./modules/BrawLawsSidebar";
import BrawLawsPageBack from "./modules/BrawLawsPageBack";
import BrawLawsHeader from "./modules/BrawLawsHeader";
import BrawLawsAbout from "./modules/BrawLawsAbout";
import BrawLawsSignUp from "./modules/BrawLawsSignUp";
import BrawLawsContact from "./modules/BrawLawsContact";
import BrawLawsProduct from "./modules/BrawLawsProduct";
import BrawLawsFooter from "./modules/BrawLawsFooter";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    BrawLawsSidebar,
    BrawLawsPageBack,
    BrawLawsHeader,
    BrawLawsAbout,
    BrawLawsSignUp,
    BrawLawsContact,
    BrawLawsProduct,
    BrawLawsFooter,
  },
});
