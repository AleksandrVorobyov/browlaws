export default {
  state: {
    signUp: {
      title:
        "Записаться на прием",
      social: [
        {
          src: "social/instagram.png",
          href: "https://www.instagram.com/Brow&Laws/?utm_medium=copy_link",
          class: "sign-up__card--instagram",
        },
        {
          src: "social/telegram.png",
          href: "",
          class: "sign-up__card--telegram",
        },
        {
          src: "social/whatsapp.png",
          href: "https://api.whatsapp.com/send/?phone=89256645463",
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
