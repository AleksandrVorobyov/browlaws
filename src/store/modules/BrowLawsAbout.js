import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
  state: {
    about: {
      title: "О нашем салоне",
      subtitle: "Наши инструменты",
      content: {
        textOne:
          "Brow&Laws – уютный салон красоты, в котором вы сможете создать оригинальный образ и подчеркнуть свой стиль. В нашу команду входят высокопрофессиональные мастера по наращиванию ресниц, ламинированию бровей и ресниц, а также по перманентному макияжу.",
        tools: [
          "«Brow&Laws» всего 3 года на рынке красоты - но мы постоянно обновляем ассортимент процедур, чтобы и наши постоянные, и новые клиенты не переставали удивляться и могли выбрать то, что по душе каждому.",
          "Наши гости знают, что у нас их ждет фирменный сервис: свежие журналы и фильмы, вкусный кофе с конфетами и печеньем, быстрый wi-fi, акции и скидки и многое другое. Все это - неотъемлемая часть вашего визита к нам в салон красоты «Brow&Laws»",
        ],
        about: [
          "В нашей студии гибкая ценовая политика, Вы всегда можете подобрать мастера, который отвечающего Вашим требованиям. Помимо этого, мы часто проводим акции и дарим Вам скидки на последующие процедуры, ведь наша цель — довольные клиенты. Вы можете полностью доверять нашим мастерам, высокий уровень квалификации которых подтвержден соответствующими сертификатами и дипломами. Каждый из них является профессионалом и имеет большой опыт работы. Если Вы не уверены в выбранной технике, не знаете, что Вам больше подойдет, как это будет смотреться на Вашем лице, Вы всегда можете получить бесплатную консультацию мастера.",
          "В «Brow&Laws» работают настоящие мастера своего дела, обладающие большим опытом и владеющие самыми актуальными техниками и технологиями, способными сделать вашу внешность прекрасной. Стремление к непрерывному совершенствованию всей творческой команды салона, регулярное обучение в лучших школах beauty-индустрии и индивидуальный подход к каждому клиенту помогают нам создавать образы, сочетающие в себе моду и красоту. Красивый и стильный интерьер, доброжелательную тёплую атмосферу и великолепный сервис успели оценить наши клиенты.",
        ],
      },
      carousel:
      {
        slide: [
          {
            src: "about/01.jpg",
          },
          {
            src: "about/02.jpg",
          },
          {
            src: "about/03.jpg",
          },
          {
            src: "about/04.jpg",
          },
          {
            src: "about/05.jpg",
          },
        ],
        class: "about-carousel",
        id: "about-carousel",
        options: {
          type: "fade",
          heightRatio: 0.5,
          pagination: true,
          arrows: true,
          cover: true,
          height: 500,
          rewind: true,
          breakpoints: {
            0: {
              height: 300,
            },
            480: {
              height: 400,
            },
            720: {
              height: 500,
            },
          },
        },
      },
    },
  },
  getters: {
    about(state) {
      return state.about;
    },
  },
  mutations: {
    aboutSectionAnim() {
      gsap.registerPlugin(ScrollTrigger);

      let aboutItems = document.querySelectorAll('.about-wrap > *')

      aboutItems.forEach((item) => {
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
