<template lang="pug">
section.contact
  .container
    .contact-wrap
      .contact__map
        .contact__map-nav
          button.contact__map-nav-btn(
            v-for="(item, idx) in contact.map.nav",
            :key="item",
            :id="item.id",
            :class="item.class",
            @click="contactMapNav($event)"
          ) {{ item.text }}
        .contact__map-content(v-html="contact.map.contentActive")
      .contact__title
        parts-title(:text="contact.title")
      .contact__block-info(v-for="item in contact.blockInfo", :key="item")
        h5.contact__block-info-title {{ item.title }}
        p.contact__block-info-text {{ item.text }}
</template>
<script>
import { mapGetters } from "vuex";
import partsTitle from "./parts/parts-title.vue";
export default {
  computed: {
    ...mapGetters(["contact"]),
  },
  components: {
    partsTitle,
  },
  methods: {
    contactMapNav(event) {
      this.$store.commit("contactMapNav", event.target);
    },
    contactSectionAnim() {
      this.$store.commit("contactSectionAnim");
    },
  },
  mounted() {
    if (window.innerWidth > 768) {
      this.contactSectionAnim();
    }
  },
};
</script>
<style scoped lang="scss">
.contact {
  position: relative;
  padding: 50px 0;
  overflow: hidden;
  z-index: 500;
  width: 100%;
  border-radius: 30px;
  background: var(--bgSection);

  @media (min-width: 1920px) {
    width: calc(100% - 400px);
  }
}

.contact-wrap {
  position: relative;
}

.contact__map {
  margin-bottom: 30px;
}

.contact__map-nav {
  display: flex;
  gap: 2px;
  overflow-x: scroll;
  padding: 0;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    background: transparent;
    padding: 0;
  }

  @media (min-width: 768px) {
    justify-content: center;
    overflow-x: unset;
  }
}

.contact__map-nav-btn {
  padding: 5px 10px;
  background: var(--mainPincClr);
  border: none;
  outline: none;
  border-radius: 6px 6px 0px 0px;
  font-size: 14px;
  letter-spacing: 1px;
  color: #fff;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.contact__map-nav-btn--active {
  box-shadow: inset 0px 0px 10px #000000b3;
}

.contact__map-content {
  border: 5px solid var(--mainPincClr);
  height: 400px;
}

.contact__title {
  margin-bottom: 30px;
}

.contact__block-info-title {
  font-size: 18px;
  font-weight: 700;
  color: #000;
  letter-spacing: 1px;
}

.contact__block-info-text {
  font-size: 16px;
  font-weight: 400;
  color: #000;
  letter-spacing: 1px;
}
</style>