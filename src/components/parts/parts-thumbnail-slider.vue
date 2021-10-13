<template lang="pug">
.parts-thumbnail-slider
  div(
    v-for="(item, idx) in slider",
    :key="item + idx",
    :class="item.class",
    :id="item.id"
  )
    .splide__track
      ul.splide__list
        li.splide__slide(v-for="slide in item.slide", :key="slide")
          img(:src="require('@/assets/img/' + slide.src)")
</template>
<script>
import Splide from "@splidejs/splide";
export default {
  props: {
    slider: Object,
    mainSlider: String,
    paginationSlider: String,
  },
  mounted() {
    const firstSlide = `.${this.mainSlider}`;
    const secondSlide = `.${this.paginationSlider}`;

    document.addEventListener("DOMContentLoaded", function () {
      let main = new Splide(firstSlide, {
        type: "fade",
        heightRatio: 0.5,
        pagination: false,
        arrows: true,
        cover: true,
        height: 500,
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
      });

      let thumbnails = new Splide(secondSlide, {
        rewind: true,
        fixedWidth: 104,
        fixedHeight: 58,
        isNavigation: true,
        arrows: false,
        gap: 10,
        focus: "center",
        pagination: false,
        cover: true,
        dragMinThreshold: {
          mouse: 4,
          touch: 10,
        },
        breakpoints: {
          600: {
            fixedWidth: 60,
            fixedHeight: 44,
          },
        },
      });

      main.sync(thumbnails);
      main.mount();
      thumbnails.mount();
    });
  },
};
</script>
<style lang="scss">
.about-carousel,
.about-carousel__thumb {
  position: relative;
}

.splide__arrows .splide__arrow {
  overflow: hidden;
  height: 33px;
}

#thumbnail-slider {
  margin-top: 10px;
}

.parts-thumbnail-slider .splide__arrow svg {
  fill: var(--mainPincClr);
}

.parts-thumbnail-slider
  .splide--nav
  > .splide__track
  > .splide__list
  > .splide__slide.is-active {
  border: 3px solid var(--mainPincClr);
}
</style>