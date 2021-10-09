export default {
  state: {
    navigation: {
      list: [
        {
          href: "/",
          text: "Главная страница",
        },
        {
          href: "/permanent",
          text: "Перманентый макияж",
        },
        {
          href: "/brow",
          text: "Ламинирование бровей",
        },
        {
          href: "/eyelashes",
          text: "Ламинирование ресниц",
        },
        {
          href: "/manik",
          text: "Маникюр",
        },
      ],
      logo: {
        src: "logo/logo.png",
        alt: "logo.png",
      },
      title: "Наше меню",
      social: {
        title: "Наши социальные сети",
        list: [
          {
            href: "",
            src: "social/instagram.png",
            title: "Наш instagram",
            class: "navigation__social-instagram",
          },
          {
            href: "",
            src: "social/telegram.png",
            title: "Наш telegram",
            class: "navigation__social-telegram",
          },
          {
            href: "",
            src: "social/whatsapp.png",
            title: "Наш whatsapp",
            class: "navigation__social-whatsapp",
          },
        ],
      },
      contact: {
        title: "Наши контакты",
        adress:
          "Адрес: Большой Кисельный переулок 14, стр 1, подъезд 2, кабинет 102",
        map: `<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A70b43a0bda2c54dafff991af013e8c64908eb5f9761cce37e130b6d36f668c1e&amp;source=constructor" width="100%" height="300" frameborder="0"></iframe>`,
      },
    },
  },
  getters: {
    navigation(state) {
      return state.navigation;
    },
  },
};
