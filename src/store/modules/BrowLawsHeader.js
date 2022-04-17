import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
  state: {
    header: {
      info: {
        title: "Студия красоты Brow&Laws на Кузнецком мосту",
        text: [
          "Что такое привлекательность? В студии красоты Brow&Laws мы верим, что это прежде всего радость и легкость! К сожалению, для многих взрослых людей, чьи мысли заняты карьерой и тысячей важных мелочей, уход за собой стал утомительной работой, которая не приносит никакой радости, но которую они вынуждены делать, потому что этого требуют обстоятельства.",
          "Позвольте мастерам Студии красоты Brow&Laws позаботиться о вашем внешнем виде — и вам обязательно понравится как их работа, так и ее результат!",
        ],
        bg: "header/pergament.png"
      },
      avatar: {
        main: {
          src: "header/main-01.jpg"
        },
        list: [
          {
            href: "/permanent",
            title: "Перманент",
            src: "header/permanent.jpg",
            class: "header__avatar-perm",
          },
          {
            href: "/brow",
            title: "Ламинирование бровей",
            src: "header/brow-lam.jpg",
            class: "header__avatar-brow",
          },
          {
            href: "/eyelashes",
            title: "Ламинирование ресниц",
            src: "header/eye-lam.jpg",
            class: "header__avatar-eyelashes",
          },
          {
            href: "/eyelEextensions",
            title: "Наращивание ресниц",
            src: "product/eyel-extensions/03.jpg",
            class: "header__avatar-nails",
          },
        ],
      },
    },
  },
  getters: {
    header(state) {
      return state.header;
    },
  },
  mutations: {
    headerSectionAnim() {
      gsap.registerPlugin(ScrollTrigger);

      let headerItems = document.querySelectorAll('.header-wrap > *')

      headerItems.forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            toggleActions: "restart pause play pause",
          },
          opacity: 0,
          y: 60,
          duration: 1.5,
        });
      })
    }
  }
};
