import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
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
          href: "https://t.me/browlawslizi",
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
  mutations: {
    signUpSectionAnim() {
      gsap.registerPlugin(ScrollTrigger);

      let signUpItems = document.querySelectorAll('.sign-up-wrap > *')

      signUpItems.forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            toggleActions: "restart pause play pause",
          },
          opacity: 0,
          y: 30,
          duration: .7,
        });
      })
    }
  }
};
