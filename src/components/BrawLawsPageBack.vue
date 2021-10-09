<template lang="pug">
section#pageBack.page-back
  div(v-for="item in pageBack", :class="item.class", :data-speed="item.speed")
    img(:src="require('@/assets/img/' + item.src)")
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["pageBack"]),
  },
  methods: {
    createPageBg() {
      this.$store.dispatch("createPageBg");
    },
    parallaxPageBack() {
      this.$store.commit("parallaxPageBack");
    },
  },
  mounted() {
    this.createPageBg();
    window.addEventListener("scroll", throttle(this.parallaxPageBack, 14));

    function throttle(fn, wait) {
      var time = Date.now();
      return function () {
        if (time + wait - Date.now() < 0) {
          fn();
          time = Date.now();
        }
      };
    }
  },
};
</script>
<style lang="scss">
.page-back {
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 400px);
  height: 100%;
  z-index: 100;
  background: var(--bgPage);
}

.page-back-top {
  height: 300px;
}

.page-back .page-back-top:nth-child(1),
.page-back .page-back-top:nth-child(2) {
  position: absolute;
  left: 0;
  width: 100%;
  pointer-events: none;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.page-back .page-back-top:nth-child(1) {
  top: -130px;
  z-index: 5;
}

.page-back .page-back-top:nth-child(2) {
  top: -80px;
  z-index: 0;
}

.page-back-bottom {
  height: 300px;
}

.page-back-bottom:nth-child(4),
.page-back-bottom:nth-child(3) {
  position: absolute;
  left: 0;
  width: 100%;
  pointer-events: none;
  transform: rotateX(180deg);

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.page-back .page-back-bottom:nth-child(3) {
  bottom: -130px;
  z-index: 5;
}

.page-back .page-back-bottom:nth-child(4) {
  bottom: -80px;
  z-index: 0;
}

.page-back-circle {
  position: fixed;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--mainPincClr);
  opacity: 0.5;
  animation: circlePageBg 5s linear 0s infinite alternate;
}

.page-back-circle-white {
  position: fixed;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.7);
  opacity: 0.5;
  animation: circlePageBg 5s linear 0s infinite alternate;
}

.page-back__circle {
  position: absolute;
  top: -100px;
  left: -50px;
  width: 300px;
  height: 300px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.page-back__circle-two {
  position: absolute;
  bottom: -100px;
  left: -50px;
  width: 250px;
  height: 250px;
  z-index: -2;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.page-back__ring-one,
.page-back__ring-two {
  position: absolute;
  width: 100px;
  height: 100px;
  z-index: -2;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.page-back__ring-one {
  top: 50%;
  right: 20%;
}

.page-back__ring-two {
  top: 10%;
  right: 50%;
}

.page-back__mouse {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  z-index: 1;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

@keyframes circlePageBg {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  30% {
    opacity: 0.5;
    transform: scale(1);
  }
  60% {
    opacity: 0.5;
    transform: scale(0.5);
  }
  70% {
    opacity: 0.5;
    transform: scale(0.8);
  }
  80% {
    opacity: 0.5;
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
</style>