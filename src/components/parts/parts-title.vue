<template lang="pug">
h3.parts-title {{ text }}
</template>
<script>
export default {
  props: {
    text: String,
  },
};
</script>
<style scoped lang="scss">
.parts-title {
  display: table;
  position: relative;
  margin: 0 auto;
  font-size: 24px;
  line-height: 1.3;
  letter-spacing: 1px;
  font-family: var(--linkFont);
  color: var(--mainPincClr);
  text-align: center;

  @media (min-width: 480px) {
    letter-spacing: 2px;
    font-size: 28px;
  }

  &::before {
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    content: "";
    background: var(--mainPincClr);
  }
}
</style>