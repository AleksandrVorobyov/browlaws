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
  width: calc(100% - 400px);
  overflow: hidden;
  z-index: 500;
  background: #fff;
  border-radius: 30px;
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
  font-size: 18px;
  letter-spacing: 1px;
}

.about__body-img {
  position: relative;
  margin-bottom: 20px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  height: 500px;

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    object-position: center;
    border-radius: 6px;
    overflow: hidden;
  }
}

.about__body-text-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.about-carousel-wrap {
  margin: 20px 0;
}
</style>