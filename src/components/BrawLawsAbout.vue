<template lang="pug">
section.about
  .about-wrap
    #image-slider.splide
      .splide__track
        ul.splide__list
          li.splide__slide 
            img(src="@/assets/img/about/01.jpg")
          li.splide__slide
            img(src="@/assets/img/about/02.jpg")
          li.splide__slide
            img(src="@/assets/img/about/03.jpg")
          li.splide__slide
            img(src="@/assets/img/about/04.jpg")
          li.splide__slide
            img(src="@/assets/img/about/05.jpg")
</template>
<script>
import { mapGetters } from "vuex";
import Splide from "@splidejs/splide";
export default {
  computed: {
    ...mapGetters(["about"]),
  },
  components: {
    Splide,
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", function () {
      new Splide("#image-slider", {
        cover: true,
        heightRatio: 0.5,
      }).mount();
    });
  },
};
</script>
<style scoped lang="scss">
.about {
  position: relative;
  padding: 100px 0;
  width: calc(100% - 400px);
  overflow: hidden;
  z-index: 500;
  background: #fff;
  border-radius: 30px;
}

.about-wrap {
  position: relative;
  width: 100%;
  height: 500px;
}
</style>