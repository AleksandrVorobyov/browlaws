export default {
  state: {
    sidebar: {
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
            class: "sidebar__social-instagram",
          },
          {
            href: "",
            src: "social/telegram.png",
            title: "Наш telegram",
            class: "sidebar__social-telegram",
          },
          {
            href: "",
            src: "social/whatsapp.png",
            title: "Наш whatsapp",
            class: "sidebar__social-whatsapp",
          },
        ],
      },
      contact: {
        title: "Наши контакты",
        adress:
          "Адрес: Большой Кисельный переулок 14, стр 1, подъезд 2, кабинет 102",
        map: `<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A039f756cbd17e3b7ffbe99a14593a677002c1401411e5db4bc0897a39e0755b6&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>`,
      },
    },
  },
  getters: {
    sidebar(state) {
      return state.sidebar;
    },
  },
  mutations: {
    sidebarUnlock() {
      const sidebar = document.getElementById("sidebar");
      const sidebarBtn = document.getElementById("sidebarBtn");

      sidebar.classList.toggle("sidebar--active")
      sidebarBtn.classList.toggle("sidebar__btn--active")
    },
    fixedPage() {
      const body = document.querySelector("body");
      let scrollPosition = window.pageYOffset;

      if (!body.classList.contains('body--hidden')) {
        body.classList.toggle("body--hidden");
        body.style.top = '-' + scrollPosition + 'px';
        document.body.setAttribute('data-body-scroll-fix', scrollPosition);
      } else {
        scrollPosition = document.body.getAttribute('data-body-scroll-fix');
        document.body.removeAttribute('data-body-scroll-fix');
        body.classList.toggle("body--hidden");
        window.scroll(0, scrollPosition);
      }
    }
  }
};
