import { createStore } from "vuex";
import BrawLawsNavigation from "./modules/BrawLawsNavigation";
import BrawLawsPageBack from "./modules/BrawLawsPageBack";
import BrawLawsHeader from "./modules/BrawLawsHeader";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    BrawLawsNavigation,
    BrawLawsPageBack,
    BrawLawsHeader,
  },
});
