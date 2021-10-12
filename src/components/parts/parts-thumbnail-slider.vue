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
export default {
  props: {
    slider: Object,
  },
  methods: {
    aboutSlider() {
      this.$store.commit("aboutSlider");
    },
  },
  mounted() {
    this.aboutSlider();
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