export default {
  state: {
    signUp: {
      title:
        "Записаться на прием",
      social: [
        {
          src: "social/instagram.png",
          href: "https://www.instagram.com/browlaws/",
          class: "sign-up__card--instagram",
        },
        {
          src: "social/telegram.png",
          href: "https://telegram.im/@liziliska",
          class: "sign-up__card--telegram",
        },
        {
          src: "social/whatsapp.png",
          href: "https://wa.me/79256645463",
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
