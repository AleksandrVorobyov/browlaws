<template lang="pug">
section.product
  .container
    .product-wrap
      div(v-for="item in productItem", :key="item", :class="item.class")
        .product__img(v-if="item.img", v-for="itemImg in item.img")
          img(:src="require('@/assets/img/' + itemImg)")
        .product__info-title(v-if="item.title")
          parts-title(:text="item.title")
        .product__info-text(v-if="item.text")
          p(v-for="text in item.text") {{ text }}
</template>
<script>
import partsTitle from "./parts/parts-title.vue";
export default {

  props: {
    productItem: Array
  },
  components: {
    partsTitle,
  },
};
</script>
<style scoped lang="scss">
.product {
  position: relative;
  padding: 50px 0;
  margin: 20px 0 20px;
  overflow: hidden;
  z-index: 500;
  width: 100%;
  border-radius: 30px;
  background: var(--bgSection);

  @media (min-width: 1920px) {
    width: calc(100% - 400px);
  }
}

.product-wrap {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  align-items: center;

  @media (min-width: 480px) {
    padding: 0 30px;
  }

  @media (min-width: 768px) {
    padding: 0 50px;
    gap: 30px 70px;
    grid-template-columns: 1fr 1fr;
  }
}

.product__img-block:first-child {
  position: relative;
  width: calc(100% - 60px);
  margin: 0 auto;
  height: 400px;
  align-items: center;

  @media (min-width: 480px) {
    margin: 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    height: 500px;
  }

  .product__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 350px;

    @media (min-width: 768px) {
      height: 450px;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      pointer-events: none;
    }
  }

  .product__img:nth-child(odd) {
    height: 200px;
    top: 50%;
    transform: translateY(-50%) skewX(-20deg);

    @media (min-width: 768px) {
      height: 300px;
    }
  }

  .product__img:nth-child(even) {
    border: 10px solid #fff;
    width: 40%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) skewX(-20deg);
  }
}

.product__img-block {
  position: relative;
  width: 100%;
  height: 400px;

  &::before {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 20px;
    content: "";
    border: 3px solid var(--mainPincClr);
  }
}

.product__img {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
}

.product__info-title {
  margin-bottom: 40px;
}

.product__info-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.product__info-text p {
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 1px;
  font-weight: 400;

  @media (min-width: 480px) {
    line-height: 1.3;
    font-size: 18px;
  }
}
</style>