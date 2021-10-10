export default {
  state: {
    signUp: {
      title:
        "Записаться на прием",
      social: [
        {
          src: "social/instagram.png",
          href: "",
          class: "sign-up__card--instagram",
        },
        {
          src: "social/telegram.png",
          href: "",
          class: "sign-up__card--telegram",
        },
        {
          src: "social/whatsapp.png",
          href: "",
          class: "sign-up__card--whatsapp",
        },
      ],
    },
  },
  getters: {
    signUp(state) {
      return state.signUp;
    },
  },
};
