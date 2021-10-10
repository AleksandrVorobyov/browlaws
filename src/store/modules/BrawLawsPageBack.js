export default {
  state: {
    pageBack: [
      {
        class: "page-back-top",
        src: "page-back/shape-top-1.png",
      },
      {
        class: "page-back-top",
        src: "page-back/shape-top-1.png",
      },
      {
        class: "page-back-bottom",
        src: "page-back/shape-top-1.png",
      },
      {
        class: "page-back-bottom",
        src: "page-back/shape-top-1.png",
      },
      {
        class: "page-back__circle",
        src: "page-back/shape-circle-1.png",
      },
      {
        class: "page-back__circle-two",
        src: "page-back/shape-circle-2.png",
      },
      {
        class: "page-back__ring-one",
        src: "page-back/shape-ring.png",
      },
      {
        class: "page-back__ring-two",
        src: "page-back/shape-ring.png",
      },
      {
        class: "page-back__mouse",
        src: "page-back/scroll-mouse.png",
      },
    ],
  },
  getters: {
    pageBack(state) {
      return state.pageBack;
    },
  },
  mutations: {
    parallaxPageBack() {
      var scrolled = window.pageYOffset;
      var coords = scrolled * 0.4 + "px";
      const PageBackTop = document.querySelectorAll(".page-back-top");
      PageBackTop.forEach((item) => {
        item.style.transform = "translateY(" + "-" + coords + ")";
      });
      const PageBackBottom = document.querySelectorAll(".page-back-bottom");
      PageBackBottom.forEach((item) => {
        item.style.transform = "translateY(" + coords + ") rotateX(180deg)";
      });
    },
    iconMouseHidden() {
      const iconMouse = document.querySelector(".page-back__mouse");

      if (window.pageYOffset > 100) {
        iconMouse.classList.add("page-back__mouse--hidden");
      } else {
        iconMouse.classList.remove("page-back__mouse--hidden");
      }
    },
  },
  actions: {
    createPageBg() {
      const pageBack = document.getElementById("pageBack");

      setInterval(() => {
        const pageBackSpan = document.querySelectorAll(".page-back span");
        if (pageBackSpan.length <= 10) {
          let newEl = document.createElement("span");
          let elClass = Math.floor(Math.random() * 2);
          if (elClass == 0) {
            newEl.classList.add("page-back-circle");
          } else {
            newEl.classList.add("page-back-circle-white");
          }
          let t = Math.floor(Math.random() * window.innerHeight);
          let l = Math.floor(Math.random() * window.innerWidth);
          newEl.style.top = `${t}px`;
          newEl.style.left = `${l}px`;
          pageBack.appendChild(newEl);

          setTimeout(() => {
            newEl.remove();
          }, 25000);
        }
      }, 1000);
    },
  },
};
