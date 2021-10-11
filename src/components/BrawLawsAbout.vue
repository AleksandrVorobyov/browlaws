<template lang="pug">
section.about
  .about-wrap
    .about__title
      parts-title(:text="about.title")
    .about__body
      p.about__body-text {{ about.content.textOne }}
      .about-carousel-wrap
        partsThumbnailSlider(:slider="about.carousel")
      .about__body-text-block
        p.about__body-text(v-for="item in about.content.about") {{ item }}
    .about__title
      parts-title(:text="about.subtitle")
    .about__body-text-block
      p.about__body-text(v-for="item in about.content.tools") {{ item }}
    .about__body-img
      img(src="@/assets/img/about/06.jpg")
      img(src="@/assets/img/about/07.jpg")
</template>
<script>
import { mapGetters } from "vuex";
import partsTitle from "./parts/parts-title.vue";
import partsThumbnailSlider from "./parts/parts-thumbnail-slider.vue";
export default {
  computed: {
    ...mapGetters(["about"]),
  },
  components: {
    partsTitle,
    partsThumbnailSlider,
  },
};
</script>
<style scoped lang="scss">
.about {
  position: relative;
  padding: 50px 20px;
  width: 100%;
  overflow: hidden;
  z-index: 500;
  background: var(--bgSection);
  border-radius: 30px;

  @media (min-width: 1920px) {
    width: calc(100% - 400px);
  }
}

.about-wrap {
  position: relative;
  width: 100%;

  & > * + * {
    margin-top: 20px;
  }
}

.about__title {
  margin-bottom: 40px;
}

.about__body-text {
  margin: 0;
  font-size: 16px;
  letter-spacing: 1px;

  @media (min-width: 480px) {
    font-size: 18px;
  }
}

.about__body-img {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 580px) {
    height: 500px;
    grid-template-columns: 1fr 1fr;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
    border-radius: 6px;
    overflow: hidden;
    pointer-events: none;

    @media (min-width: 580px) {
      height: 100%;
    }
  }
}

.about__body-text-block {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 580px) {
    grid-template-columns: 1fr 1fr;
  }
}

.about-carousel-wrap {
  margin: 20px 0;
}
</style>