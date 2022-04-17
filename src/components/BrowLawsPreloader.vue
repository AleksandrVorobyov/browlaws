<template lang="pug">
section.preloader
  .preloader-wrap
    .preloader-yellow
    .preloader-red
    .preloader-blue
    .preloader-violet
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["header"]),
  },
  created() {
    window.onload = function () {
      setTimeout(() => {
        document.querySelector(".preloader").classList.add("preloader-remove");
      }, 3000);
    };
  },
};
</script>
<style scoped lang="scss">
.preloader {
  position: fixed;
  margin: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50000;
  background: linear-gradient(45deg, rgb(46, 2, 26), rgb(28, 2, 46));
  overflow: hidden;
  opacity: 1;
  transition: opacity 0.5s linear;
}

.preloader-remove {
  opacity: 0;
  pointer-events: none;
}

.preloader-wrap {
  display: flex;
  gap: 20px;

  @media (min-width: 480px) {
    gap: 30px;
  }
}

.preloader-wrap > div {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  animation: bounce 1.5s 0.5s linear infinite;

  @media (min-width: 480px) {
    width: 60px;
    height: 60px;
  }
}

.preloader-yellow {
  background: url("~@/assets/img/preloader/shape-circle-1.png") center / contain
    no-repeat;
}

.preloader-red {
  background: url("~@/assets/img/preloader/shape-circle-2.png") center / contain
    no-repeat;
  animation-delay: 0.1s;
}

.preloader-blue {
  background: url("~@/assets/img/preloader/shape-circle-1.png") center / contain
    no-repeat;
  animation-delay: 0.2s;
}

.preloader-violet {
  background: url("~@/assets/img/preloader/shape-circle-2.png") center / contain
    no-repeat;
  animation-delay: 0.3s;
}

@keyframes bounce {
  0%,
  50%,
  100% {
    transform: scale(1) rotate(0deg);
    filter: blur(0px);
  }
  25% {
    transform: scale(0.6) rotate(90deg);
    filter: blur(3px);
  }
  75% {
    filter: blur(3px);
    transform: scale(1.4) rotate(270deg);
  }
}
</style>