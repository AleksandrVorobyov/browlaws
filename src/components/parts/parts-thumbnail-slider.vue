<template lang="pug">
.parts-thumbnail-slider
  Splide(
    :class="slider.class",
    :id="slider.id",
    :options="slider.options",
    ref="main"
  )
    SplideSlide(v-for="slide in slider.slide", :key="slide")
      img(:src="require('@/assets/img/' + slide.src)")
</template>
<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  props: {
    slider: Object,
  },
  components: {
    Splide,
    SplideSlide,
  },
});
</script>
<style lang="scss">
.splide.about-carousel {
  position: relative;
  padding: 0em;

  @media (min-width: 768px) {
    padding: 0 3em;
  }
}

.splide.about-carousel .splide__pagination__page.is-active {
  background: var(--mainPincClr);
}

.splide.about-carousel .splide__pagination__page:hover {
  background: #a10b54;
}

.splide.about-carousel .splide__arrows .splide__arrow svg {
  fill: var(--mainPincClr);
}

.splide.about-carousel .splide__arrows .splide__arrow:hover svg {
  fill: #a10b54;
}
</style>