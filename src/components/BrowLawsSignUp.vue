<template lang="pug">
section.sign-up
  .container
    .sign-up-wrap
      .sign-up__title
        parts-title(:text="signUp.title")
      .sign-up__subtitle
        h5.sign-up__subtitle-text Вы можете записаться через нашу онлайн форму или написать нам в один из мессенджеров!
      .sign-up__cards
        a.sign-up__card(
          v-for="item in signUp.social",
          :key="item",
          :href="item.href",
          :class="item.class",
          target="_blank"
        )
          span 
            img(:src="require('@/assets/img/' + item.src)")
</template>
<script>
import { mapGetters } from "vuex";
import partsTitle from "./parts/parts-title.vue";
export default {
  computed: {
    ...mapGetters(["signUp"]),
  },
  components: {
    partsTitle,
  },
};
</script>
<style scoped lang="scss">
.sign-up {
  position: relative;
  padding: 50px 0;
  overflow: hidden;
  z-index: 500;
  width: 100%;
  border-radius: 30px;
  background: var(--bgSection);

  @media (min-width: 1920px) {
    width: calc(100% - 400px);
  }
}

.sign-up-wrap {
  position: relative;
}

.sign-up__title,
.sign-up__subtitle {
  margin-bottom: 30px;
}

.sign-up__subtitle-text {
  margin-bottom: 0;
  text-align: center;
  letter-spacing: 1px;
  color: var(--mainPincClr);
}

.sign-up__subtitle {
  display: block;
}

.sign-up__cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  grid-template-rows: 150px 150px 150px;

  @media (min-width: 580px) {
    perspective: 1000px;
    perspective-origin: 50% 50%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 300px;
  }

  @media (min-width: 769px) {
    padding: 0 20px;
    gap: 40px;
  }

  @media (min-width: 970px) {
    padding: 0 80px;
  }
}

@media (min-width: 580px) {
  .sign-up__cards .sign-up__card:first-child {
    transform: rotateY(30deg);

    &:hover {
      transform: translateY(-10px) rotateY(30deg);
    }
  }

  .sign-up__cards .sign-up__card:last-child {
    transform: rotateY(-30deg);

    &:hover {
      transform: translateY(-10px) rotateY(-30deg);
    }
  }
}

.sign-up__card {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(#5a5a5a, #5a5a5a);
  z-index: 10;
  padding: 20px;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.4s linear, background 0.4s linear, filter 0.4s linear;
  box-shadow: 0px 0px 15px var(--mainPincClr);
  filter: grayscale(0.7);

  &:hover {
    transform: translateY(-10px);
    filter: grayscale(0);
    &::before,
    &::after {
      width: calc(100% - 20px);
    }

    span {
      height: 90px;
      width: 90px;
    }
  }

  &::before {
    position: absolute;
    top: 10px;
    left: 50%;
    content: "";
    transform: translate(-50%, 0);
    height: 2px;
    width: 0px;
    transition: width 0.4s linear;
    background: var(--mainPincClr);
  }

  &::after {
    position: absolute;
    bottom: 10px;
    left: 50%;
    content: "";
    transform: translate(-50%, 0);
    height: 2px;
    width: 0px;
    transition: width 0.4s linear;
    background: var(--mainPincClr);
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 70px;
    width: 70px;
    transform: translate(-50%, -50%);
    transition: width 0.4s linear, height 0.4s linear;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}

.sign-up__card--instagram {
  background: var(--socialLinearInst);
}

.sign-up__card--telegram {
  background: var(--socialLinearTele);
}

.sign-up__card--whatsapp {
  background: var(--socialLinearWhat);
}
</style>