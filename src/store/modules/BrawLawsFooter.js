export default {
  state: {
    footer: {
      copy: "© BrowLaws 2018 - 2021. Все права защищены.",
    },
  },
  getters: {
    footer(state) {
      return state.footer;
    },
  },
};
