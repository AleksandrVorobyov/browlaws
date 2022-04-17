import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
  state: {
    footer: {
      copy: "© Brow&Laws 2018 - 2022. Все права защищены.",
    },
  },
  getters: {
    footer(state) {
      return state.footer;
    },
  },
  mutations: {
    footerSectionAnim() {
      gsap.registerPlugin(ScrollTrigger);

      let aboutItems = document.querySelectorAll('.footer-wrap > *')

      aboutItems.forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            toggleActions: "play pause play pause",
          },
          opacity: 0,
          y: 30,
          duration: .7,
        });
      })
    }
  }
};
