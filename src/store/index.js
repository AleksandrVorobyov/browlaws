import { createStore } from "vuex";
import BrawLawsNavigation from "./modules/BrawLawsNavigation";
import BrawLawsPageBack from "./modules/BrawLawsPageBack";
import BrawLawsHeader from "./modules/BrawLawsHeader";
import BrawLawsAbout from "./modules/BrawLawsAbout";
import BrawLawsSignUp from "./modules/BrawLawsSignUp";
import BrawLawsFooter from "./modules/BrawLawsFooter";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    BrawLawsNavigation,
    BrawLawsPageBack,
    BrawLawsHeader,
    BrawLawsAbout,
    BrawLawsSignUp,
    BrawLawsFooter,
  },
});
