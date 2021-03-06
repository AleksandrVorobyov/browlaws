export default {
  state: {
    sidebar: {
      list: [
        {
          href: "/",
          text: "Главная страница",
        },
        {
          href: "/permanentlips",
          text: "Перманент губ",
        },
        {
          href: "/permanentbrow",
          text: "Перманент бровей",
        },
        {
          href: "/permanenteyes",
          text: "Перманент межреснички",
        },
        {
          href: "/laminationbrow",
          text: "Ламинирование бровей",
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
            href: "https://www.instagram.com/browlaws/",
            src: "social/instagram.png",
            title: "Наш instagram",
            class: "sidebar__social-instagram",
          },
          {
            href: "https://telegram.im/@liziliska",
            src: "social/telegram.png",
            title: "Наш telegram",
            class: "sidebar__social-telegram",
          },
          {
            href: "https://wa.me/79256645463",
            src: "social/whatsapp.png",
            title: "Наш whatsapp",
            class: "sidebar__social-whatsapp",
          },
          {
            href: "https://vk.com/browlaws",
            src: "social/vk.png",
            title: "Наш vkontakte",
            class: "sidebar__social-vk",
          },
        ],
      },
      contact: {
        title: "Наши контакты",
        adress:
          "Адрес: Большой Кисельный переулок 14, стр 1, подъезд 2, кабинет 102",
        map: `<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Abe0e363c2de93bd3959e3c88d12b51f0ca3db7f36eb8c56a2995b00bdb3d80c3&amp;source=constructor" width="100%" height="390" frameborder="0"></iframe>`,
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
      sidebar.classList.toggle("sidebar--active");
      sidebarBtn.classList.toggle("sidebar__btn--active");
    },
    fixedPage() {
      if (window.innerWidth < 1920) {
        const body = document.querySelector("body");
        let scrollPosition = window.pageYOffset;

        if (!body.classList.contains("body--hidden")) {
          body.classList.add("body--hidden");
          body.style.top = "-" + scrollPosition + "px";
          document.body.setAttribute("data-body-scroll-fix", scrollPosition);
        } else {
          scrollPosition = document.body.getAttribute("data-body-scroll-fix");
          document.body.removeAttribute("data-body-scroll-fix");
          body.classList.remove("body--hidden");
          window.scroll(0, scrollPosition);
        }
      }
    },
  },
};
