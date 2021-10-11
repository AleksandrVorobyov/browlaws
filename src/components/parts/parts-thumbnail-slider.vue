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
  },
  components: {
    Splide,
  },
  beforeMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var main = new Splide(".about-carousel", {
        type: "fade",
        cover: true,
        rewind: true,
        pagination: false,
        heightRatio: 0.5,
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

      var thumbnails = new Splide("#thumbnail-slider", {
        fixedWidth: 100,
        fixedHeight: 60,
        arrows: false,
        gap: 10,
        rewind: true,
        pagination: false,
        cover: true,
        isNavigation: true,
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
.about-carousel {
  position: relative;
}

#thumbnail-slider {
  margin-top: 10px;
}

.parts-thumbnail-slider .splide__arrow svg {
  fill: var(--mainPincClr);
}

.parts-thumbnail-slider .splide--nav > .splide__track > .splide__list > .splide__slide.is-active {
  border: 3px solid var(--mainPincClr);
}
</style>