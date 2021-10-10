<template lang="pug">
section.footer
  .container
    .footer-wrap
      p {{ footer.copy }}
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["footer"]),
  },
};
</script>
<style scoped lang="scss">
.footer {
  position: relative;
  padding: 30px 0;
  overflow: hidden;
  z-index: 500;
  background: white;
  width: calc(100% - 400px);
  border-radius: 30px;
}
.footer-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  P {
    font-size: 18px;
    letter-spacing: 1px;
    font-family: var(--linkFont);
    margin: 0;
  }
}
</style>