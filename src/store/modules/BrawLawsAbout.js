export default {
  state: {
    about: {
      title: "О нашем салоне",
      subtitle: "Наши инструменты",
      content: {
        textOne:
          "BrawLaws – уютный салон красоты, в котором вы сможете создать оригинальный образ и подчеркнуть свой стиль. В нашу команду входят высокопрофессиональные стилисты, визажисты, косметологи и мастера ногтевого сервиса.",
        tools: [
          "«BrawLaws» всего 3 года на рынке красоты - но мы постоянно обновляем ассортимент процедур, чтобы и наши постоянные, и новые клиенты не переставали удивляться и могли выбрать то, что по душе каждому.",
          "В салоне красоты «BrawLaws» вы найдёте профессиональные средства для ухода за волосами, кожей лица и тела, а наши специалисты с радостью проконсультируют вас и подберут нужные средства и продукты именно для вас.",
          "Наши гости знают, что у нас их ждет фирменный сервис: свежие журналы и фильмы, вкусный кофе с конфетами и печеньем, быстрый wi-fi, акции и скидки и многое другое. Все это - неотъемлемая часть вашего визита к нам в салон красоты «BrawLaws»",
        ],
        about: [
          "Наша цель — используя арсенал передовых достижений науки, техники, медицины, косметологии и эстетики, уникальные профессиональные возможности и человеческие качества наших специалистов, через совершенствование тела и облика дать возможность нашим гостям обрести гармонию внутреннего и внешнего — души и тела с окружающим миром.",
          "В «BrawLaws» работают настоящие мастера своего дела, обладающие большим опытом и владеющие самыми актуальными техниками и технологиями, способными сделать вашу внешность прекрасной. Стремление к непрерывному совершенствованию всей творческой команды салона, регулярное обучение в лучших школах beauty-индустрии и индивидуальный подход к каждому клиенту помогают нам создавать образы, сочетающие в себе моду и красоту.",
          "Красивый и стильный интерьер, доброжелательную тёплую атмосферу и великолепный сервис успели оценить наши клиенты.",
        ],
      },
      carousel: [
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
        },
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
          class: "about-carousel__thumb",
          id: "thumbnail-slider",
        },
      ],
      mainSlider: "about-carousel",
      paginationSlider: "about-carousel__thumb",
    },
    componentKey: 0
  },
  getters: {
    about(state) {
      return state.about;
    },
    componentKey(state) {
      return state.componentKey;
    },
  },
  mutations: {
    componentKeyChange(state) {
      state.componentKey++;
      console.log(state.componentKey);
    },
  }
};
